[TOC]

# MySQL

[官网](https://dev.mysql.com/doc/refman/8.0/en/)

## Mysql版本

1. MySQL Community Server 社区版本，开源免费，但不提供官方技术支持。
2. MySQL Enterprise Edition 企业版本，需付费，可以试用30天。
3. MySQL Cluster 集群版，开源免费。可将几个MySQL Server封装成一个Server。
4. MySQL Cluster CGE 高级集群版，需付费。
5. MySQL Workbench（GUI TOOL）一款专为MySQL设计的ER/数据库建模工具。它是著名的数据库设计工具DBDesigner4的继任者。MySQL Workbench又分为两个版本，分别是社区版（MySQL Workbench OSS）、商用版（MySQL Workbench SE）

## 语法

```bash
# shell 命令
shell> type a shell command here
# 以root模式执行的shell
root-shell> type a shell command as root here
# 通过mysql客户端执行的命令
mysql> type a mysql statement here
```

## 安装MySQL

community为社区版

包含的几个软件:
1. mysql server是mysql服务
2. mysql cluster是集群版
3. mysql shell: mysql-shell是一个高级的mysql命令行工具、它直接两种模式(交互式&批处理式)三种语言(javascript\python\sql）
4. mysql workbench是mysql提供的可视化编辑工具
5. mysql connectors是mysql连接不同语言的连接层,如nodejs, python等调用mysql的连接层


下载安装Server https://dev.mysql.com/downloads/mysql/

### mac 安装mysql

1. 安装mysql

```
brew install mysql
```

查看brew的安装目录

```
brew --prefix
```

查看brew安装的某个文件的安装目录

```
# 查看brew安装的mysql的安装目录
brew --prefix mysql
```

2. 创建datadir

basedir为mysql的安装目录
datadir 为mysql数据文件

```bash
shell>cd BASEDIR
shell>mkdir data
# 修改文件夹owner
shell>sudo chown mysql:mysql data
# 修改文件夹权限
shell>sudo chmod 750 data
```

3. 配置/ect/my.cnf

```bash
[mysqld]
datadir=/usr/local/opt/mysql/data
port=3306
user=mysql

[mysql.server]
basedir=/usr/local/opt/mysql
```

4. 初始化data文件夹

```bash
shell>sudo mysqld --initialize --user=mysql
# 在输出的项目中会输出随机设置的密码
```

5. 启动server
```bash
shell>sudo mysql.server start
```

6. 连接数据库

mysql -u <username> -p<password> -h <host>

```bash
shell> mysql -uroot -p
# 输入密码, 即可连接
```

7. 修改密码

```bash
mysql> ALTER USER 'root'@'localhost' IDENTIFIED BY 'new_password';
```

8. 测试
```bash
mysql> show databases;
```

## server 相关

#### 4.2.7 my.cnf配置文件

文档 https://dev.mysql.com/doc/refman/8.0/en/option-files.html

这是mysql的配置文件.

windows下mysql的配置文件在 /c/ProgramData/MySQL/MySQL Server 8.0/my.ini

my.cnf文件的查找顺序

```bash
/etc/my.cnf
/etc/mysql/my.cnf
/usr/local/etc/my.cnf
~/.my.cnf
```
my.cnf 配置

```bash
#
# The MySQL database server configuration file.
#
# You can copy this to one of:
# - "/etc/mysql/my.cnf" to set global options,
# - "~/.my.cnf" to set user-specific options.
#
# One can use all long options that the program supports.
# Run program with --help to get a list of available options and with
# --print-defaults to see which it would actually understand and use.
#
# For explanations see
# http://dev.mysql.com/doc/mysql/en/server-system-variables.html

# This will be passed to all mysql clients
# It has been reported that passwords should be enclosed with 
# ticks/quotes escpecially if they contain "#" chars...
# Remember to edit /etc/mysql/debian.cnf when changing 
# the socket location.
[client]
port        = 3306
#socket     = /var/run/mysqld/mysqld.sock

# Here is entries for some specific programs
# The following values assume you have at least 32M ram

# This was formally known as [safe_mysqld]. Both versions 
# are currently parsed.
[mysqld_safe]
#socket     = /var/run/mysqld/mysqld.sock
#nice       = 0

[mysqld]
#
# * Basic Settings
#

#
# * IMPORTANT
#   If you make changes to these settings and your system uses 
#   apparmor, you may also need to also adjust 
#   /etc/apparmor.d/usr.sbin.mysqld.
#

#user       = mysql
#socket     = /var/run/mysqld/mysqld.sock
port        = 3306
#basedir    = /usr
datadir    = /usr/local/var/mysql
#tmpdir     = /tmp
skip-external-locking
#
# Instead of skip-networking the default is now to listen only on
# localhost which is more compatible and is not less secure.
bind-address        = 127.0.0.1
#
# * Fine Tuning
#
key_buffer          = 16M
max_allowed_packet  = 16M
thread_stack        = 192K
thread_cache_size   = 8
# This replaces the startup script and checks MyISAM tables if needed
# the first time they are touched
myisam-recover         = BACKUP
#max_connections       = 100
#table_cache           = 64
#thread_concurrency    = 10
#
# * Query Cache Configuration
#
query_cache_limit   = 1M
query_cache_size    = 16M
#
# * Logging and Replication
#
# Both location gets rotated by the cronjob.
# Be aware that this log type is a performance killer.
# As of 5.1 you can enable the log at runtime!
#general_log_file        = /var/log/mysql/mysql.log
#general_log             = 1

log_error                = /usr/local/var/mysql/MacBook15.local.err

# Here you can see queries with especially long duration
#log_slow_queries   = /var/log/mysql/mysql-slow.log
#long_query_time = 2
#log-queries-not-using-indexes
#
# The following can be used as easy to replay backup logs or 
# for replication.
# note: if you are setting up a replication slave, see 
#       README.Debian about other settings you may need 
#       to change.
#server-id          = 1
#log_bin            = /var/log/mysql/mysql-bin.log
expire_logs_days    = 10
max_binlog_size     = 100M
#binlog_do_db       = include_database_name
#binlog_ignore_db   = include_database_name
#
# * InnoDB
#
# InnoDB is enabled by default with a 10MB datafile in /var/lib/mysql/.
# Read the manual for more InnoDB related options. There are many!
#
# * Security Features
#
# Read the manual, too, if you want chroot!
# chroot = /var/lib/mysql/
#
# For generating SSL certificates I recommend the OpenSSL GUI "tinyca".
#
# ssl-ca=/etc/mysql/cacert.pem
# ssl-cert=/etc/mysql/server-cert.pem
# ssl-key=/etc/mysql/server-key.pem

# Query Caching
query-cache-type = 1

# Default to InnoDB
default-storage-engine=innodb

[mysqldump]
quick
quote-names
max_allowed_packet  = 16M

[mysql]
#no-auto-rehash # faster start of mysql but no tab completition

[isamchk]
key_buffer      = 16M
```

### 4.3 server 启动

#### 4.3.1  mysqld - The MySQL Server

这个是mysql的server程序， 可以管理mysql的数据文件夹， data

查看帮助
```bash
shell> mysqld --verbose --help
```

#### 4.3.2 mysqld_safe MySQL Server Startup Script

文档 https://dev.mysql.com/doc/refman/8.0/en/mysqld-safe.html

推荐使用该命令启动server，其中增加了一些安全特性

该命令会尝试调用mysqld， 该命令和mysqld的参数大部分一致

命令的可选参数

| Format | Description |
| -- | -- |
| --basedir | Path to MySQL installation directory |
| --core-file-size | Size of core file that mysqld should be able to create |
| --datadir | Path to data directory |
| --defaults-extra-file | Read named option file in addition to usual option files |
| --defaults-file | Read only named option file |
| --help | Display help message and exit |
| --ledir | Path to directory where server is located |
| --log-error | Write error log to named file |
| --malloc-lib | Alternative malloc library to use for mysqld |
| --mysqld | Name of server program to start (in ledir directory) |
| --mysqld-safe-log-timestamps | Timestamp format for logging |
| --mysqld-version | Suffix for server program name |
| --nice | Use nice program to set server scheduling priority |
| --no-defaults | Read no option files |
| --open-files-limit | Number of files that mysqld should be able to open |
| --pid-file | Path name of server process ID file |
| --plugin-dir | Directory where plugins are installed |
| --port | Port number on which to listen for TCP/IP connections |
| --skip-kill-mysqld | Do not try to kill stray mysqld processes |
| --skip-syslog | Do not write error messages to syslog; use error log file |
| --socket | Socket file on which to listen for Unix socket connections |
| --syslog | Write error messages to syslog |
| --syslog-tag | Tag suffix for messages written to syslog |
| --timezone | Set TZ time zone environment variable to named value |
| --user | Run mysqld as user having name user_name or numeric user ID user_id |

#### 4.3.3  mysql.server — MySQL Server Startup Script

文档 https://dev.mysql.com/doc/refman/8.0/en/mysql-server.html

在Unix and Unix-like系统中包含mysql.start命令，
会通过调用mysqld_safe来启动或停止服务

```
shell> mysql.server start
shell> mysql.server stop
```

mysql.server读取my.cnf中的[mysql.server] and [mysqld]配置项

mysql.server 支持以下参数, 这些参数只能放在配置文件中, 不能添加在命令行参数上
basedir 是mysql的安装文件夹
datadir 是mysql的数据文件夹

| Option Name|Description|Type |
| -- | -- | -- |
| basedir|Path to MySQL installation directory|Directory name |
| datadir|Path to MySQL data directory|Directory name |
| pid-file|File in which server should write its process ID|File name |
| service-startup-timeout|How long to wait for server startup|Integer |

### 安装之后需要做以下事情

https://dev.mysql.com/doc/refman/8.0/en/data-directory-initialization-mysqld.html

1. 初始化data directory, 同时创建mysql默认权限表(grant tables), 有些版本在安装时会自动完成这一步
2. 启动server
3. 在grant tables中设置root账户的密码
4. 设置server的自动启动
5. 设置时区

#### 初始化数据库文件夹

进入basedir, 为mysql的安装路径,如 /usr/local/opt/mysql

```bash
shell>cd basedir
```

1. 创建文件夹, 该文件夹用来存放mysql执行时的数据库文件

```bash
shell> cd /usr/local/mysql
# 创建数据文件夹, 该文件会被赋予全局变量 secure_file_priv  
shell> mkdir mysql-files
```

2. 给该文件设置mysql的权限, 在mac上用户和用户组需要设置为 mysql:mysql

mac上mysql执行使用的用户是_mysql 可以通过 dscl . list /Users 查看mac中的用户

```bash
shell> chown mysql:mysql mysql-files
shell> chmod 750 mysql-files
```

3. 初始化该文件夹

会创建包括mysql的database和grant tables

```bash
# --user指定用户, --basedir 指定mysql的basedir, --datadir指定data文件夹
shell> bin/mysqld --initialize --user=mysql
```

### 安装的命令

可以查看安装的命令

```bash
shell> ls /usr/local/mysql/bin
```

### 启动server

如果系统安装了 mysqld_safe 则可以用下面的命令启动

```bash
shell> bin/mysqld_safe --user=mysql &
```
如果使用rpm包安装则使用systemd 命令

如果安装了systemd则使用以下方式启动

```bash
shell> systemctl start mysqld
```
mysql server需要使用unprivileged (non-root) 账号启动, 因此可以使用--user来指定用户

### server状态测试

验证server是否启动并且可以建立连接

```bash
shell> bin/mysqladmin version
shell> bin/mysqladmin variables
```
指定root账号连接

```bash
shell> bin/mysqladmin -u root -p version
Enter password: (enter root password here)
```

测试是否可以关闭连接

```bash
shell> bin/mysqladmin -u root shutdown
```

是否可以重启server
```bash
shell> bin/mysqld_safe --user=mysql &
```

查看当前存在的数据库

```bash
shell> mysqlshow -u root
+--------------------+
|     Databases      |
+--------------------+
| information_schema |
| mysql              |
| performance_schema |
| sys                |
+--------------------+
```

查看数据库中的表

```bash
# 列出数据库mysql中的表
shell> mysqlshow -u root mysql
```

查看mysql变量
```bash
mysqladmin variables -u root -h host_name
```

#### 错误情况

当启动mysqld时如果提示Permission denied表示没有data directory的权限,此时可以通过修改该文件的权限来解决, 也可以用root模式启动Server, 这种方式会有一些风险.

添加权限

```bash
shell> chown -R mysql /usr/local/mysql/data
shell> chgrp -R mysql /usr/local/mysql/data
```

#### 给mysql账户设置密码

mysql在初始化的时候会初始化data文件夹, 其中会创建grant tables,这个表里定义了mysql的账号

更改密码

1. 有已知密码

```bash
mysql> ALTER USER 'root'@'localhost' IDENTIFIED BY 'new_password';
```

2. 未设置密码

```bash
# 连接Server, 不使用密码
shell> mysql -u root --skip-password
# 设置一个密码
mysql> ALTER USER 'root'@'localhost' IDENTIFIED BY 'new_password';
```


### 连接server

```
# 连接数据库 host是数据库的服务, 省略则连接本机, -u 设置数据库用户名, -p 密码, 如果要带密码的话需要紧跟-p 如, -p123456, 可以加数据库名则直接选择该数据库.
shell> mysql [-h host] -u root -p [database_name]
Enter PASSWORD ****
# 连接成功之后进入mysql模式, 可以开始输入sql语句
mysql>
```

退出连接

```bash
mysql> quit
```

### 查看mysql 运行状态

```bash
sudo /usr/local/mysql/support-files/mysql.server status
```

### 启动mysql

```bash
sudo /usr/local/mysql/support-files/mysql.server start
```

### 重启MySQL

```bash
sudo /usr/local/mysql/support-files/mysql.server restart
```

### 停止MySQL

```bash
sudo /usr/local/mysql/support-files/mysql.server stop
```

### 修改密码

```bash
/usr/local/mysql/bin/mysqladmin -u root password <your-password>
```

### 查看端口

```bash
# 登录mysql
mysql -u root -p
mysql> SHOW GLOBAL VARIABLES LIKE 'PORT';
```

### 查看变量

```bash
mysql> SHOW [GLOBAL | SESSION] VARIABLES
    [LIKE 'pattern' | WHERE expr]
```

## 客户端

连接mysql

```
shell> mysql -u user -p<password> -h localhost -P 3306
```

## 基本操作

### 输入sql语句

查询当前Server的版本;

最后一行会输出输出的行数以及查询时间

```
mysql> SELECT VERSION(), CURRENT_DATE;
+-----------+--------------+
| VERSION() | CURRENT_DATE |
+-----------+--------------+
| 5.8.0-m17 | 2015-12-21   |
+-----------+--------------+
1 row in set (0.02 sec)
mysql>

```

关键词大小写都支持

可以执行计算

```
mysql> select sin(pi()/4), (4+1)*5;
+--------------------+---------+
| sin(pi()/4)        | (4+1)*5 |
+--------------------+---------+
| 0.7071067811865475 |      25 |
+--------------------+---------+
1 row in set (0.01 sec)
```

多条语句可以写在一行

```
mysql> select version(); select now();
+-----------+
| version() |
+-----------+
| 8.0.12    |
+-----------+
1 row in set (0.00 sec)

+---------------------+
| now()               |
+---------------------+
| 2018-07-28 23:19:14 |
+---------------------+
1 row in set (0.00 sec)
```

一条语句也可以在多行书写, 一条sql语句需要以分号结尾. 即只有遇到分号时mysql才会执行当前语句.

```
mysql> select
    -> user()
    -> ,
    -> current_date;
+----------------+--------------+
| user()         | current_date |
+----------------+--------------+
| root@localhost | 2018-07-28   |
+----------------+--------------+
1 row in set (0.00 sec)

```

在等待执行时, 要退出该语句, 输入\c

mysql模式中prompt符号的意义

| Prompt | 含义	| Meaning |
| -- | -- | -- |
|mysql>	| 等待输入新的语句 |Ready for new query|
| -> | 等待输入下一行语句 |	Waiting for next line of multiple-line query|
| '> | 等待输入单引号结束	| Waiting for next line, waiting for completion of a string that began with a single quote (')|
| "> | 等待输入双引号封闭	| Waiting for next line, waiting for completion of a string that began with a double quote (")|
|`> | 等待输入反引号	| Waiting for next line, waiting for completion of an identifier that began with a backtick (`)|
| /*> |	 等待输入注释结尾 | Waiting for next line, waiting for completion of a comment that began with /* |

mysql中清空当前屏幕

mysql> system clear;

### 创建以及选择数据库

查看当前服务上存在的数据库, 只能显示当前用户有权限的数据库.

```
mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| mysql              |
| performance_schema |
| sys                |
+--------------------+
4 rows in set (0.00 sec)
```

切换数据库

```
mysql> use mysql

Database changed

```

use命令和quit命令一样结尾可以不加引号, 不过需要在单独一行来写. 

管理员为某个用户设置一个数据库的权限 

```
mysql> GRANT ALL ON menagerie.* TO 'your_mysql_name'@'your_client_host';
```

创建一个数据库wuxia, 并切换到该数据库

```
mysql> create database wuxia;
Query OK, 1 row affected (0.03 sec)

mysql> use wuxia 
```

数据库名和表名需要区分大小写.

查看当前连接的用户

```
mysql> select user();
+----------------+
| user()         |
+----------------+
| root@localhost |
+----------------+
1 row in set (0.00 sec)
```

查看当前使用的数据库

```
mysql> select database();
+------------+
| database() |
+------------+
| memories   |
+------------+
1 row in set (0.00 sec)
```

查看当前连接状态

```
mysql> status;
--------------
mysql  Ver 8.0.11 for osx10.13 on x86_64 (Homebrew)

Connection id:		27
Current database:	memories
Current user:		root@localhost
SSL:			Not in use
Current pager:		less
Using outfile:		''
Using delimiter:	;
Server version:		8.0.11 Homebrew
Protocol version:	10
Connection:		Localhost via UNIX socket
Server characterset:	utf8
Db     characterset:	utf8
Client characterset:	utf8mb4
Conn.  characterset:	utf8mb4
UNIX socket:		/tmp/mysql.sock
Uptime:			6 days 22 hours 42 min 41 sec

Threads: 5  Questions: 4148  Slow queries: 0  Opens: 267  Flush tables: 2  Open tables: 243  Queries per second avg: 0.006
--------------
```

### 创建表

新创建的数据库里没有表, 需要新建

查看已有的表

```
mysql> show tables;
Empty set (0.00 sec)

```

创建表 shaolin

```
mysql> create table shaolin (name varchar(5), nick_name varchar(20), birth date,  skill varchar(20));
Query OK, 0 rows affected (0.07 sec)
```

birth 使用date类型

再次查看表

```
mysql> show tables;
+-----------------+
| Tables_in_wuxia |
+-----------------+
| shaolin         |
+-----------------+
1 row in set (0.00 sec)
```

查看表结构使用describe命令

```
mysql> describe shaolin;
+-----------+-------------+------+-----+---------+-------+
| Field     | Type        | Null | Key | Default | Extra |
+-----------+-------------+------+-----+---------+-------+
| name      | varchar(5)  | YES  |     | NULL    |       |
| nick_name | varchar(20) | YES  |     | NULL    |       |
| birth     | date        | YES  |     | NULL    |       |
| skill     | varchar(20) | YES  |     | NULL    |       |
+-----------+-------------+------+-----+---------+-------+
4 rows in set (0.01 sec)
```



## 第13章 SQL语句

### 13.1 数据定义语句

#### 13.1.8 ALTER TABLE

修改表头

在表第一列添加一个自增的id键
```
ALTER TABLE members ADD id INT(8) auto_increment PRIMARY KEY FIRST;
```
在id后面添加一列user_name, 默认值为NULL

```
ALTER TABLE members ADD COLUMN user_name VARCHAR(18) DEFAULT NULL AFTER id;
```

修改一列

```
ALTER TABLE members modify telephone varchar(11)
```

### 13.2 数据操作语句 Data Manipulation Statements

#### 13.2.1 INSERT

https://dev.mysql.com/doc/refman/8.0/en/insert.html

```
INSERT [LOW_PRIORITY | DELAYED | HIGH_PRIORITY] [IGNORE]
    [INTO] tbl_name
    [PARTITION (partition_name [, partition_name] ...)]
    [(col_name [, col_name] ...)]
    {VALUES | VALUE} (value_list) [, (value_list)] ...
    [ON DUPLICATE KEY UPDATE assignment_list]

INSERT [LOW_PRIORITY | DELAYED | HIGH_PRIORITY] [IGNORE]
    [INTO] tbl_name
    [PARTITION (partition_name [, partition_name] ...)]
    SET assignment_list
    [ON DUPLICATE KEY UPDATE assignment_list]

INSERT [LOW_PRIORITY | HIGH_PRIORITY] [IGNORE]
    [INTO] tbl_name
    [PARTITION (partition_name [, partition_name] ...)]
    [(col_name [, col_name] ...)]
    SELECT ...
    [ON DUPLICATE KEY UPDATE assignment_list]

value:
    {expr | DEFAULT}

value_list:
    value [, value] ...

assignment:
    col_name = value

assignment_list:
    assignment [, assignment] ...
```

插入数据

```
insert into members (user_name, email, password, telephone) values (
'test',
'1234@qq.com',
'12345678',
'13312345678'
);
```
插入多条, 多组values用逗号隔开

```
insert into members (user_name, email, password, telephone) values (
'test',
'1234@qq.com',
'12345678',
'13312345678'
), (
'test',
'1234@qq.com',
'12345678',
'13312345678'
), (
'test',
'1234@qq.com',
'12345678',
'13312345678'
), (
'test',
'1234@qq.com',
'12345678',
'13312345678'
);
```

13.2.2 DELETE Syntax

https://dev.mysql.com/doc/refman/8.0/en/delete.html

单表删除

```
DELETE [LOW_PRIORITY] [QUICK] [IGNORE] FROM tbl_name
    [PARTITION (partition_name [, partition_name] ...)]
    [WHERE where_condition]
    [ORDER BY ...]
    [LIMIT row_count]
```

```
delete from user_list 
where 
id=6;
```

多个表格删除

```
DELETE [LOW_PRIORITY] [QUICK] [IGNORE]
    tbl_name[.*] [, tbl_name[.*]] ...
    FROM table_references
    [WHERE where_condition]

DELETE [LOW_PRIORITY] [QUICK] [IGNORE]
    FROM tbl_name[.*] [, tbl_name[.*]] ...
    USING table_references
    [WHERE where_condition]
    
```


