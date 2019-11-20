[TOC]

# django model 层

[官方文档-models](https://docs.djangoproject.com/en/2.2/topics/db/models/)

models 层用来组织管理数据

- Models: Introduction to models | Field types | Indexes | Meta options | Model class
- QuerySets: Making queries | QuerySet method reference | Lookup expressions
- Model instances: Instance methods | Accessing related objects
- Migrations: Introduction to Migrations | Operations reference | SchemaEditor | Writing migrations
- Advanced: Managers | Raw SQL | Transactions | Aggregation | Search | Custom fields | Multiple databases | Custom lookups | Query Expressions | Conditional Expressions | Database Functions
- Other: Supported databases | Legacy databases | Providing initial data | Optimize database access | PostgreSQL specific features

## Models

### 创建 model

```python
class Publisher(models.Model):
    def __str__(self):
        return self.name
    # ForeignKe: 外键 [ForeignKe](https://docs.djangoproject.com/en/2.2/ref/models/fields/#django.db.models.ForeignKey) 定义关系,
    # 定义关系, chioce 是一个 Question, django 支持所有的数据库表关系, 多对1, 多对多, 一对一
    name = models.CharField(max_length=200)
```
### 使用 models

定义好 models 后, 需要在 django 中注册 model. 需要在 setting 文件的 installed_apps 中进行配置
比如要注册 book.models 则如下配置. 
然后执行 migrate

```
INSTALLED_APPS = [
    #...
    'book',
    #...
]
```

### Fields

### Relationships 关系

model 之间有以下几种关系
- Many-to-one relationships
- Many-to-many relationships
- Extra fields on many-to-many relationships
- One-to-one relationships

#### 多对一关系

**Example:**

```py
# models.py
from django.db import models
from django.utils import timezone
import datetime


class Book(models.Model):
    # 在执行 Question.objects.all() 时会输出该内容. 同时也会作为 django 自动生成时的内容
    def __str__(self):
        return self.name

    # 定义字段, 每个字段都是一个内置Field类型的示例, 第一个参数可以传一个备注名称. 否则使用字段名称
    # 一些Field类型需要设置参数. 如 CharFields 必须传入 max_length. 不仅作为 database schema 也会进行校验

    name = models.CharField(max_length=200)
    # time = models.DateTimeField('date published')
    price = models.IntegerField()
    # 外键, 书的作者
    # on_delete, 当 author 被删除后, 想关联的 book 也会删除
    author = models.ForeignKey(
        'Author', max_length=200, on_delete=models.CASCADE)
    publisher = models.ForeignKey(
        'Publisher', on_delete=models.CASCADE, max_length=200)


class Publisher(models.Model):
    def __str__(self):
        return self.name
    # ForeignKe: 外键 [ForeignKe](https://docs.djangoproject.com/en/2.2/ref/models/fields/#django.db.models.ForeignKey) 定义关系,
    # 定义关系, chioce 是一个 Question, django 支持所有的数据库表关系, 多对1, 多对多, 一对一
    name = models.CharField(max_length=200)


class Author(models.Model):
    def __str__(self):
        return self.name
    # ForeignKe: 外键 [ForeignKe](https://docs.djangoproject.com/en/2.2/ref/models/fields/#django.db.models.ForeignKey) 定义关系,
    # 定义关系, chioce 是一个 Question, django 支持所有的数据库表关系, 多对1, 多对多, 一对一
    name = models.CharField(max_length=200)
    age = models.IntegerField(null=True, blank=True, default=None)

```

**新增项目**

```shell
# 进入 shell 模式. 新增书(笑傲江湖)
$ python manage.py shell
>>> from book.models import Book
>>> from book.models import Author
>>> from book.models import Publisher
# 先创建外键的项目
>>> a1 = Author(name="金庸", age=90)
>>> a1.save()
>>> p1 = Publisher(name='人民出版社')
>>> p1.save()
# 外键的地方需要使用相应 model 的 instance
>>> b1 = Book(name="笑傲江湖", price=26, author=a1, publisher=p1)
>>> b1.save()
# 查看
>>> Book.objects.all()
<QuerySet [<Book: 笑傲江湖>]>
```
**删除**

```shell
$ python manage.py shell
>>> from book.models import Book, Publisher, Author
>>> book = Book.objects.get(pk=1)
# 删除 book, 只删除选择的项目
>>> book.delete()
>>> author = Author.objects.get(pk=3)
# 删除 author 会把关联的 book 一起删除
>>> author.delete()
```

#### 多对多关系

https://www.revsys.com/tidbits/tips-using-djangos-manytomanyfield/

##### example

Example: 
书和作者之间的多对多关系

ManyToManyField 定义多对多关系, 只需要在一个 model 中设置即可
django 会自动创建中间表 app_<model1>_<model2> 如下会创建表 book_author_books
自动创建的中间表结构为

```sql
mysql> select * from book_author_books;
+----+-----------+---------+
| id | author_id | book_id |
+----+-----------+---------+
|  1 |         1 |      11 |
|  2 |         5 |      11 |
|  3 |         6 |      12 |
|  4 |         7 |      12 |
+----+-----------+---------+
4 rows in set (0.00 sec)
```

```python
# book.models

class Book(models.Model):
    # 在执行 Question.objects.all() 时会输出该内容. 同时也会作为 django 自动生成时的内容
    def __str__(self):
        return self.name

    name = models.CharField(max_length=200)
    # 外键, 书的作者
    # on_delete, 当 author 被删除后, 想关联的 book 也会删除
    author = models.ForeignKey(
        'Author', max_length=200, on_delete=models.CASCADE)

class Author(models.Model):
    def __str__(self):
        return self.name
    name = models.CharField(max_length=200)
    # 作者与书是多对多的关系 ManyToManyField 定义在哪个 model 中都可以. 只需要在一个 model 中声明即可
    # 多对多会创建一个不可见的 through model 来保存两者的关系, 同时创建一个中间表, 命名为 appname_model1_model2
    # 该 through table 会创建3个字段, 来表示关系, id (primary key), <containing_model>_id (声明 manyToManyField 的 model), <other_model>_id (manyToManyField 指向的 model)
    # 创建关系之前, 需要先2个 model 的实例都存在
    books = models.ManyToManyField(Book)

```

```shell
$ python manage.py shell
>>> from book.models import Book, Author
>>> b1 = Book(name='天龙八部', price=89)
>>> b1.save()
>>> b2 = Book(name='射雕', price=89)
>>> b2.save()
# 相关联的实例需要存在, 如果不存在则需要先创建并保存
>>> a1 = Author.objects.get(name='金庸')
>>> a2 = Author.objects.get(name='倪匡')
# add 命令 添加关联
>>> a1.books.add(b1)
# 反向添加关联
>>> b1.author_set.add(a1)
# 查看 
>>> a1.books.all()
<QuerySet [<Book: 天龙八部>]>
# 反向查找, 反向查找需要在小写的model class后面加 _set
>>> b1.author_set.all()
<QuerySet [<Author: 金庸>, <Author: 倪匡>]>
# 反向删除某个关联项
>>> b1.author_set.remove(a1)
>>> b1.author_set.all()
<QuerySet [<Author: 倪匡>]>
# 正向删除某个关联项
>>> a1.books.add(b2)
>>> a1.books.all()
<QuerySet [<Book: 天龙八部>, <Book: 射雕>]>
# 删除
>>> a1.books.remove(b2)
>>> a1.books.all()
<QuerySet [<Book: 天龙八部>]>
```
从被关联模型反向查找模型, 需要在小写的model class后面加 _set
如果定义了 related_name 则可以使用该名称.

```py
class Book(models.Model):
    # 在执行 Question.objects.all() 时会输出该内容. 同时也会作为 django 自动生成时的内容
    def __str__(self):
        return self.name

    name = models.CharField(max_length=200)
    # 外键, 书的作者
    # on_delete, 当 author 被删除后, 想关联的 book 也会删除
    author = models.ForeignKey(
        'Author', max_length=200, on_delete=models.CASCADE)

class Author(models.Model):
    def __str__(self):
        return self.name
    name = models.CharField(max_length=200)
    # 作者与书是多对多的关系 ManyToManyField 定义在哪个 model 中都可以. 只需要在一个 model 中声明即可
    # 多对多会创建一个不可见的 through model 来保存两者的关系, 同时创建一个中间表, 命名为 appname_model1_model2
    # 该 through table 会创建3个字段, 来表示关系, id (primary key), <containing_model>_id (声明 manyToManyField 的 model), <other_model>_id (manyToManyField 指向的 model)
    # 创建关系之前, 需要先2个 model 的实例都存在
    books = models.ManyToManyField('Book', related_name="authors")

```
测试 related_name
```shell
>>> from book.models import Book, Publisher, Author
>>> b1 = Book.objects.get(name="天龙八部")
>>> b1
<Book: 天龙八部>
>>> b1.authors.all()
<QuerySet [<Author: 倪匡>, <Author: 金庸>]>
```

##### 自定义中间表

自定义中间表方便对中间表扩展字段信息

```py

class Book(models.Model):
    def __str__(self):
        return self.name

    name = models.CharField(max_length=200)
    price = models.IntegerField()
    publisher = models.ForeignKey(
        'Publisher', on_delete=models.CASCADE, max_length=200)


class Publisher(models.Model):
    def __str__(self):
        return self.name
    name = models.CharField(max_length=200)


# 标签


class Tag(models.Model):
    def __str__(self):
        return self.name
    name = models.CharField(max_length=200)
    # 仍然需要定义 ManyToManyField 字段, 同时通过 through 指定自定义的中间表
    books = models.ManyToManyField(
        'Book', through='BookTag', related_name='tags')

# 多对多自定义中间表

class BookTag(models.Model):
    # 扩展字段
    time = models.DateTimeField(auto_now_add=True)
    book = models.ForeignKey(
        'Book', related_name='book_tags', on_delete=models.SET_NULL, null=True)
    tag = models.ForeignKey('Tag', related_name='book_tags',
                            on_delete=models.SET_NULL, null=True, blank=True)

```

如果之前已经采用默认的中间表, 更换未自定义中间表后, 执行 migrate 会报错
```shell
>>> python manage.py migrate
...
ValueError: Cannot alter field book.Tag.books into book.Tag.books - they are not compatible types (you cannot alter to or from M2M fields, or add or remove through= on M2M fields)
```

此时需要重新生成 migrations
重置 model 的操作 https://blog.csdn.net/zhuoxiuwu/article/details/52167599

多对多自定义中间表新增

```shell
$ from book.models import Book, Publisher, Author, Tag, BookTag
>>> b1 = Book.objects.get(name='天龙八部')
>>> a1 = Author.objects.get(name='金庸')
>>> t1 = Tag.objects.creat(name='武侠')
>>> t2 = Tag.objects.create(name='爱情')
>>> bt1 = BookTag.objects.create(book=b1, tag=t1)
>>> b1.tags.all()
<QuerySet [<Tag: 爱情>]>
>>> t1.books.all()
<QuerySet [<Book: 天龙八部>]>
# 新增
>>> b1.tags.add(t2)
>>> t2
<Tag: 武侠>
>>> b1.tags.all()
<QuerySet [<Tag: 武侠>, <Tag: 爱情>]>
# 删除一个
>>> b1.tags.remove(t1)
>>> b1.tags.all()
<QuerySet [<Tag: 武侠>]>
# 删除所有关联
>>> b1.tags.clear()
>>> b1.tags.all()
<QuerySet []>
```




## QuerySets

### Making queries

查询条件 [文档](https://docs.djangoproject.com/en/2.2/topics/db/queries/)

### Field lookups

字段查询条件, 相当于指定 where 语句
```
>>> Entry.objects.filter(pub_date__lte='2006-01-01')
```
会被转化为以下的 sql 语句
```sql
SELECT * FROM blog_entry WHERE pub_date <= '2006-01-01';
```
可以用的语句有

- exact: 准确匹配
- iexact: 忽略大小写匹配
- contains
- startswith, endswith

### 跨关系查询

如查询 entry 对象包含 headline 同时 headline包含 'Lennon' 字符
```
>>> Blog.objects.filter(entry__headline__contains='Lennon')
```

## Model instances
## Migrations

[官方文档-migrations](https://docs.djangoproject.com/en/2.2/topics/migrations/)

当改变 models 后, django 使用 migrations 来同步改动到数据库.



### 提供的命令

- migrate: which is responsible for applying and unapplying migrations.
- makemigrations: which is responsible for creating new migrations based on the changes you have made to your models.
- sqlmigrate: which displays the SQL statements for a migration.
- showmigrations: which lists a project’s migrations and their status.

migrations 类似数据库的版本管理, makemigrations 用来把 model 的改变导出到一组 migration 文件, migrate 命令用来把这些改动同步到数据库

### 工作流程

1. makemigrations: 当 models 改变后, 先执行 makemigrations 生成改动文件

```shell
$ python manage.py makemigrations
Migrations for 'books':
  books/migrations/0003_auto.py:
    - Alter field author on book
```

2. 执行migrate. 同步改变到数据库

```
$ python manage.py migrate
Operations to perform:
  Apply all migrations: books
Running migrations:
  Rendering model states... DONE
  Applying books.0003_auto... OK
```

### 重置数据库

https://blog.csdn.net/zhuoxiuwu/article/details/52167599
















