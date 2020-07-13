# Mysql Tips

[TOC]

## Delete Duplicate Rows

[原文](http://www.mysqltutorial.org/mysql-delete-duplicate-rows/)

### 在原表直接操作 

选出重复的行 使用 group by 统计数量

```sql
mysql> select name, count(name) 
    from shaolin 
    group by name
    having count(name) > 1;

+---------+-------------+
| name    | count(name) |
+---------+-------------+
| xuzhu   |           2 |
| chenkun |           1 |
| yuanjue |           1 |
+---------+-------------+
3 rows in set (0.00 sec)
```

删除 name 重复的项，并保留 id 比较小的

```sql
mysql> delete t1 from shaolin t1
    -> inner join
    -> shaolin t2
    -> where t1.name = t2.name and t1.id < t2.id;
Query OK, 1 row affected (0.06 sec)
```
结果确认

```sql
mysql> select * from shaolin;
+----+---------+-----------+------------+-----------+
| id | name    | nick_name | birth      | skill     |
+----+---------+-----------+------------+-----------+
|  5 | xuzhu   |           | 1989-01-02 | quan      |
|  6 | chenkun |           | 1939-01-02 | shizigong |
|  7 | yuanjue |           | 1969-02-02 | zhang     |
+----+---------+-----------+------------+-----------+
3 rows in set (0.00 sec)
```

### 通过新建中间表实现

1. 新建中间表

```sql
CREATE TABLE shaolin_copy LIKE shaolin;
```

2. 复制非重复的数据到中间表

```sql
insert into shaolin_copy 
    select 
        any_value(id) as id, name, any_value(nick_name) as nick_name,  any_value(birth) as birth, any_value(skill) as skill 
    from shaolin 
    group by name;
```

3. 重命名中间表替换原表

```sql
drop table shaolin;
alter table shaolin_copy rename to shaolin;
```

## 查看数据库中各个表的大小

```sql
# 查询books数据库中各个表的大小, DATA_LENGTH 数据大小,  INDEX_LENGTH 索引大小.
SELECT
  TABLE_NAME AS `Table`,
  ROUND((DATA_LENGTH + INDEX_LENGTH) / 1024 / 1024) AS `Size (MB)`
FROM
  information_schema.TABLES
WHERE
  TABLE_SCHEMA = "books"
ORDER BY
  (DATA_LENGTH + INDEX_LENGTH);
```