# Mysql 使用

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

## 配置文件

windows下mysql的配置文件在 /c/ProgramData/MySQL/MySQL Server 8.0/my.ini

## 启动mysql服务

先用 mysqld install 安装mysql服务 
再用 net start mysql启动服务
接着就可以 键入 mysql - u root -p进行登录了
停止服务 net stop mysql
