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
ssh-keygen -t rsa#一直按回车即可
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

### register

把输出的结果保存到 register 指定的变量中, when 关键字结果为 true 的时候才会执行对应的 task

```yaml
- name: echo date 
 command: date 
 register: date_output 
 
- name: echo date_output 
 command: echo "30"
 when: date_output.stdout.split(' ')[2] == "30"
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