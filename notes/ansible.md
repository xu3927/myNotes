[TOC]

# ansible
参考资料
官方文档 https://ansible-tran.readthedocs.io/en/latest/docs/intro.html
官方文档 https://docs.ansible.com/ansible/latest/index.html
教程
1. ansible批量执行命令 https://blog.51cto.com/395469372/2133486
2. Ansible学习笔记——基础与配置 https://juejin.im/post/5c809b406fb9a049ff4ee72c#heading-2


## 配置主机组

默认路径 /etc/ansible/hosts

```
[testgroup]
192.168.56.40
192.168.56.41
192.168.56.42

[test41]
192.168.56.41

[test42]
192.168.56.42
```

可以为主机配置别名以及变量
```
[group1]
host1 ansible_ssh_host=192.168.1.1
host2 ansible_ssh_host=192.168.1.2
host3 ansible_ssh_host=192.168.1.3

[group1:vars]
ansible_ssh_port=22000
ansible_ssh_user=haha
```

## 配置ssh免密码登录

```
ssh-keygen -t rsa #一直按回车即可
ssh-copy-id -i .ssh/id_rsa.pub <user>@<ip> -p <port> #上传公钥到服务器
```

## 权限提升 become 参数

https://docs.ansible.com/ansible/latest/user_guide/become.html#authorize-and-auth-pass

sudo 密码配置有2种方式
1. 可以在 inventory 中配置文件中配置 sudo 密码

```
# hosts 配置
[myhost]
56haha ansible_ssh_host=127.0.0.56
206haha ansible_ssh_host=127.0.0.206

[myhost:vars]
ansible_ssh_user=haha
ansible_ssh_port=22
ansible_become_password=12345678
```
2. 命令行中配置

使用 --ask-become-pass 参数, 则在命令行中输入密码


```
# 以 root 执行命令
ansible myhost -m shell -a 'whoami' --become
# 切换某个用户执行命令
ansible myhost -m shell -a 'whoami' --become --become-user=xixi
```

命令行参数

```
--ask-become-pass, -K
 	ask for privilege escalation password; does not imply become will be used. Note that this password will be used for all hosts.
--become, -b	run operations with become (no password implied)
--become-method=BECOME_METHOD
 	privilege escalation method to use (default=sudo), valid choices: [ sudo | su | pbrun | pfexec | doas | dzdo | ksu | runas | machinectl ]
--become-user=BECOME_USER
 	run operations as this user (default=root), does not imply –become/-b
```

## ansible模块

1. ansible语法

```
ansible 主机组或者主机 -m 模块 -a 命令
```
2. ansible语法测试
```
ansible testgroup -m ping
ansible testgroup -m command -a "pwd"
```

3. ansible模块command(不支持管道，不建议使用)
```
ansible testgroup -m command -a "pwd"
ansible testgroup -m command -a "echo testa|grep a" #这个不能正常使用
ansible testgroup -m command -a "echo bb >>/tmp/testansible" #重定向也无法正常使用
```
6: ansible模块shell(支持管道)
```
ansible testgroup -m shell -a "echo testa|grep a" #支持管道
ansible testgroup -m shell -a "echo bb >>/tmp/testansible" #支持重定向
ansible testgroup -m shell -a "cat /etc/passwd|awk -F':' '{print \$1}'" #遇到特殊符号需要加入\转义，这样子ansible才能正常运行
```
7: ansible模块raw(如果运行命令，一般使用shell模块)

说明为什么会有raw，由于ansible依赖python环境，例如需要有python-simplejson之类的包，如果没安装的话，就无法使用shell等模块，就需要先用raw安装一下。
```
ansible testgroup -m raw -a "yum install python-simplejson -y"
ansible testgroup -m raw -a "yum install libselinux-python -y"
```
raw 模块中执行多个命令, 切换目录
```
ansible <host> -m raw -a 'cd ~/bin; source ./test.sh --help'
```

8.1 ansible模块copy(下放文件)
```
ll -h /usr/local/src/
cat /tmp/testdir/test.txt
ansible testgroup -m copy -a "src=/tmp/testdir/test.txt dest=/usr/local/src/"
```
#src指定本地的文件
#dest指定远程主机的目录或者文件

8.2 拷贝文件夹

```
ll -h /usr/local/src/
ansible testgroup -m copy -a "src=/tmp/testdir/ dest=/usr/local/src/" #testdir文件夹没拷贝
ansible testgroup -m copy -a "src=/tmp/testdir dest=/usr/local/src/" #testdir文件夹也拷贝了
```

8.3 备份文件
```
ansible testgroup -m copy -a "src=/tmp/testdir/test.txt dest=/usr/local/src/ backup=yes"?
```
8.4 指定用户和权限
```
ansible testgroup -m copy -a "src=/tmp/testdir/test.txt dest=/usr/local/src/ backup=yes owner=nobody group=nobody mode=0600"
```
9: ansible模块script(远程机器运行ansible主控端的脚本)
实现的方案：把脚本下发到所有的服务器，然后再运行脚本。copy+shell+delete
```
cat /usr/local/src/script
chmod a+x /usr/local/src/script
ansible testgroup -m script -a "/usr/local/src/script"
```
10: ansible-playbook(把ansible执行命令写入文件中)
```
#cat /usr/local/src/test.yaml
- hosts: testgroup
  tasks:
  - name: test ansible
    shell: echo "shell 1" >>/tmp/a
  - name: test2
    shell: echo "shell 2" >>/tmp/a
```
运行：ansible-playbook /usr/local/src/test.yaml
```
#cat /usr/local/src/test_copy.yaml 
- hosts: testgroup
  tasks:
  - name: test ansible
    shell: echo "shell 1" >>/tmp/a
  - name: test copy
    copy: src=/tmp/a dest=/usr/local/src/
```
#下发nginx配置，对nginx进行检测
```
#cat /usr/local/src/test_nginx.yaml
- hosts: testgroup
  tasks:
  - name: copy nginx conf
    copy: src=/tmp/nginx.conf dest=/usr/local/nginx/conf/ backup=yes
  - name: nginx conf check
    shell: /usr/local/nginx/sbin/nginx -t
    register: nginx_result
  - debug: var=nginx_result
#可只输出stdout_lines或者stderr_lines
```

## playbook

文档 https://docs.ansible.com/ansible/latest/user_guide/playbooks.html
中文介绍 https://ansible-tran.readthedocs.io/en/latest/docs/playbooks.html

playbooks 是 ansible 的配置文件, 可以用来编写管理一系列的执行脚本, 可以跨多组机器执行特定步骤. 并且可以同步或异步执行任务

### playbook 语法结构

```yaml
---
# hosts 可以是一个或多个主机组, 多个以逗号分割
- hosts: webservers
  vars:
    http_port: 80
    max_clients: 200
  # 远程机器用户名, 也可以在具体的 task 中定义
  remote_user: root
  # 是否使用 sudo 执行命令, 也可以在 task 中使用
  sudo: yes
  # tasks 列表
  tasks:
  - name: ensure apache is at the latest version
    yum: pkg=httpd state=latest
  - name: write the apache config file
    template: src=/srv/httpd.j2 dest=/etc/httpd.conf
    notify:
    - restart apache
  - name: ensure apache is running
    service: name=httpd state=started
  handlers:
    - name: restart apache
      service: name=httpd state=restarted
```

### Variables 变量使用

文档 https://ansible-tran.readthedocs.io/en/latest/docs/playbooks_variables.html

在 vars 中定义变量

```yaml
- hosts: webservers
  vars:
    http_port: 80
```

#### register 注册变量

变量的另一个主要用途是在运行命令时,把命令结果存储到一个变量中.不同模块的执行结果是不同的.运行playbook时使用-v选项可以看到可能的结果值. 在ansible执行任务的结果值可以保存在变量中,以便稍后使用它.

```yaml
- hosts: web_servers

  tasks:

     - shell: /usr/bin/foo
       register: foo_result
       ignore_errors: True

     - shell: /usr/bin/bar
       when: foo_result.rc == 5
```

把输出的结果保存到 register 指定的变量中, when 关键字结果为 true 的时候才会执行对应的 task

```yaml
- name: echo date 
 command: date 
 register: date_output 
 
- name: echo date_output 
 command: echo "30"
 when: date_output.stdout.split(' ')[2] == "30"
```

命令行中传递变量

通过 extra-vars  参数可以通过命令行发送变量, 对于编写在不同的机器上执行相同的脚本非常有用

如
```yaml
---

- hosts: '{{ hosts }}'
  remote_user: '{{ user }}'

  tasks:
     - ...

```

执行命令

```shell
$ ansible-playbook release.yml --extra-vars "hosts=vipers user=starbuck"
```

### tasks

每个 task 用来执行一个 module, module 执行具有幂等性, 多次执行应该具有相同的结果
可以给要执行的 module 设置参数

每个 task 需要有 name, 可以在输出的信息中辨别执行了哪个 task, 如果没有 name, 'action' 的值会作为输出信息中的标记

执行的 module 语法

```yaml
tasks:
- <module name>: <args>
```

如 service 模块, 参数使用 key=value 的形式

```yaml
tasks:
  - name: make sure apache is running
    service: name=httpd state=running
```

比较特别的两个 modudle 是 command 和 shell ,它们不使用 key=value 格式的参数,而是这样:

```yaml
tasks:
  - name: disable selinux
    command: /sbin/setenforce 0
```
使用 command module 和 shell module 时,我们需要关心返回码信息,如果有一条命令,它的成功执行的返回码不是0, 你或许希望这样做:

```yaml
tasks:
  - name: run this command and ignore the result
    shell: /usr/bin/somecommand || /bin/true
```
或者是这样:

```yaml
tasks:
  - name: run this command and ignore the result
    shell: /usr/bin/somecommand
    # 忽略错误返回码
    ignore_errors: True
```

### Handlers 在发生改变时被触发的操作

handlers 也是一组 task 列表, 由tasks中的 notify 进行触发. 它们和一般的 task 并没有什么区别. Handlers 是由通知者进行 notify, 如果没有被 notify,handlers 不会执行.不管有多少个通知者进行了 notify,等到 play 中的所有 task 执行完成之后,handlers 也只会被执行一次.

handler 示例

```yaml

handlers:
    - name: restart memcached
      service:  name=memcached state=restarted
    - name: restart apache
      service: name=apache state=restarted
```

task 中的 notify 触发 handler

通过 handler 中 task 的 name 进行调用

```yaml
- name: template configuration file
  template: src=template.j2 dest=/etc/foo.conf
  notify:
     - restart memcached
     - restart apache
```

handler 执行的几个特点

1. handler 的执行顺序与定义的顺序有关, 与触发的顺序无关, 
2. handler 会在所有的 task 执行完毕之后才执行
3. handler 被多个 task notify, 也只执行一次
4. task 状态是 changed, 才会触发 notify 并执行 handler, 如果是 ok 状态, 则不会执行  handler

Handlers 最佳的应用场景是用来重启服务,或者触发系统重启操作.除此以外很少用到了.

按Handler的定义顺序执行
handlers是按照在handlers中定义个顺序执行的，而不是安装notify的顺序执行的。

下面的例子定义的顺序是1>2>3，notify的顺序是3>2>1，实际执行顺序：1>2>3.

```yaml
---
- hosts: lb
  remote_user: root
  gather_facts: no
  vars:
      random_number1: "\{\{ 10000 | random \}\}"
      random_number2: "\{\{ 10000000000 | random \}\}"
  tasks:
  - name: Copy the /etc/hosts to /tmp/hosts.\{\{ random_number1 \}\}
    copy: src=/etc/hosts dest=/tmp/hosts.\{\{ random_number1 \}\}
    notify:
      - define the 3nd handler
  - name: Copy the /etc/hosts to /tmp/hosts.\{\{ random_number2 \}\}
    copy: src=/etc/hosts dest=/tmp/hosts.\{\{ random_number2 \}\}
    notify:
      - define the 2nd handler
      - define the 1nd handler

  handlers:
  - name: define the 1nd handler
    debug: msg="define the 1nd handler"
  - name: define the 2nd handler
    debug: msg="define the 2nd handler"
  - name: define the 3nd handler
    debug: msg="define the 3nd handler"
```

### roles

文档 https://docs.ansible.com/ansible/latest/user_guide/playbooks_reuse_roles.html


### 从指定任务开始运行playbook

使用 start-at 参数

```shell
$ ansible-playbook playbook.yml --start-at="install packages"
```

### Tags

https://docs.ansible.com/ansible/latest/user_guide/playbooks_tags.html

为 task 指定 tag, 可以通过 tag 来运行特定的 task

如
```yaml
tasks:
- yum:
    name:
    - httpd
    - memcached
    state: present
  tags:
  - packages

- template:
    src: templates/src.j2
    dest: /etc/foo.conf
  tags:
  - configuration
```

在命令行中通过  --tags or --skip-tags 来指定运行或跳过的 tag, 可以指定多个 tag

```
$ ansible-playbook example.yml --tags "configuration,packages"
```

参数 list-tasks 查看将运行都 task, 不会运行
```shell
$ ansible-playbook example.yml --tags "configuration,packages" --list-tasks
```
多个 task 可以使用相同的 tag

```yaml
---
# file: roles/common/tasks/main.yml

- name: be sure ntp is installed
  yum:
    name: ntp
    state: present
  tags: ntp

- name: be sure ntp is configured
  template:
    src: ntp.conf.j2
    dest: /etc/ntp.conf
  notify:
  - restart ntpd
  tags: ntp

- name: be sure ntpd is running and enabled
  service:
    name: ntpd
    state: started
    enabled: yes
  tags: ntp
```

一个 tag 要执行多个 task, 可以使用 block

```yaml
- block:
  - name: First task to run
    ...
  - name: Second task to run
    ...
  tags:
  - mytag
```

always 是一个特殊的 tag, 这个 tag 总会执行, 除非通过 --skip-tags always 排除

```yaml
tasks:
- debug:
    msg: "Always runs"
  tags:
  - always

- debug:
    msg: "runs when you use tag1"
  tags:
  - tag1
```

## git 模块

### 使用 git 步骤
1. 添加 ssh key

```shell
# 生成 ssh key
$ ansible <host> -m shell -a 'ssh-keygen -q -t rsa -f /home/username/.ssh/id_rsa2 -C "" -N ""'
```

2. 添加 ssh key 到 git 中
3. 为 git 域名添加到 know_hosts 中
防止 ssh 在第一次建立连接的时候会做域名检查

```shell
$ ansible <host> -m shell -a 'ssh-keyscan -H github.com >> /home/username/.ssh/known_hosts'
```
4. 使用 git 模块拉取代码

```shell
$ ansible <host> -m git -a 'repo="github.com:test-repo.git" dest=/home/username/data/test-repo'
```


## 调试

ansible --version 查看配置文件


```
$ ansible --version
ansible 2.5.0
  config file = /etc/ansible/ansible.cfg
  configured module search path = [u'/usr/share/ansible']
  ansible python module location = /usr/lib/python2.7/dist-packages/ansible
  executable location = /usr/bin/ansible
  pyth
```

查看改动的配置信息

```
ansible-config dump --only-changed
```

输出详细信息, 增加 -vvvv 参数
```
ansible -vvvv
```


## 参考资料

1. 源码安装 nginx https://cloud.tencent.com/developer/article/1140044
2. 官方文档 https://docs.ansible.com/ansible/latest/index.html
3. 所有可用模块  https://docs.ansible.com/ansible/latest/modules/list_of_all_modules.html