# shell脚本记录

## 同步db

```sh
#!/bin/sh

tbs=$(mysql -uroot -p12345678 -h 127.0.0.1 -P3306 -e 'SELECT TABLE_NAME AS `Table`,   ROUND((DATA_LENGTH + INDEX_LENGTH) / 1024 / 1024) AS `Size (MB)` FROM   information_schema.TABLES WHERE  TABLE_SCHEMA = "origin_table_name";')
echo $tbs;

tbarr=($(echo "$tbs" | tr "[:blank:]" "@"))

n=0
for i in "${tbarr[@]}"
do
	t1=$(date "+%s")
	n=$((n+1))
	if [[ "$n" == 1 ]]; then
		continue
	fi
	idx=$(expr index $i "@")
	tbname=${i:0:idx-1}
	size=${i:idx}
	echo "$n 开始导出$tbname ($size M)"
	# --default-character-set 设置字符编码
	mysqldump --skip-add-locks --skip-lock-tables --single-transaction -uroot -p12345678 -h 127.0.0.1 -P3306 --default-character-set=utf8 dbname $tbname > /root/tmp/dump_dir/$tbname.db

        if [ $? -ne 0 ]; then
                echo "$tbname 导出失败"
                continue
        fi
	t2=$(date "+%s")
	echo "导出耗时$((t2 - t1))秒"
	echo "开始导入 $tbname"
	# -f 跳过执行错误的语句
	# --default-character-set 设置字符编码
	mysql -uroot -p12345678 -h127.0.0.1 -P3306 --default-character-set=utf8 -f dbname < /root/tmp/dump_dir/$tbname.db
	if [ $? -ne 0 ]; then
		echo "$tbname 导入失败"
		continue
	fi
	t3=$(date "+%s")
	echo "导入成功"
	echo "导入耗时$((t3 - t2))秒"
done

t4=$(date "+%s")

echo "同步完成"echo "同步完成"
echo "总耗时$((t4 - t0))秒"
```

```sh
#!/bin/sh
t1=$(date "+%s")
echo "开始执行"

rm -f /home/user/tmp/bak.db
echo "删除备份文件"
mysqldump --skip-add-locks --skip-lock-tables --single-transaction -uroot -p12345678 -h 127.0.0.1 -P3306 dbname > /home/qspace/tmp/dbname.db

if [ $? -ne 0 ]; then
	echo "导出失败"
	exit
fi

echo "导出成功"
t2=$(date "+%s")

echo "导出耗时$((t2 - t1))秒"


mysql -uroot -p12345678 -h127.0.0.1 -P3306 dbname < /home/user/tmp/bak.db

if [ $? -ne 0 ]; then
	echo "导入失败"
	exit
fi

t3=$(date "+%s")

echo "导入成功"
echo "导入耗时$((t3 - t2))秒"

echo "同步完成"
echo "总耗时$((t3 - t1))秒"
```