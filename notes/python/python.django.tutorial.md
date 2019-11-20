[TOC]

# django

[官方文档 2.2](https://docs.djangoproject.com/en/2.2/)

## Tutorials

## 初步-搭建项目

### 安装

```
~]# pip install Django
```

测试

```
~]# import django
~]# print(django.get_version())

```
### 创建项目

```
django-admin startproject djsite
```

创建之后生成目录如下

```
djsite
├── djsite
│   ├── __init__.py
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
└── manage.py

```

这几个文件的作用

1. 外层的目录 djsite 是整个项目的 container
2. manage.py: 命令行工具用来管理项目
3. __init__.py: 空文件, 让 python 把该目录作文一个pcakage 来处理
4. settings.py 该项目的配置文件
5. urls.py 声明该项目的 URL
6. wsgi.py 作文WSGI(web server gateway interface)服务的入口

### 启动项目

开发模式启动

```
# 启动服务, 可以指定端口, 默认8000
~]# py manage.py runserver [port]

# 输出

Performing system checks...

System check identified no issues (0 silenced).
January 16, 2019 - 17:46:05
Django version 2.1.5, using settings 'djsite.settings'
Starting development server at http://127.0.0.1:8000/
Quit the server with CONTROL-C.
```
项目默认启动在8000端口
http://127.0.0.1:8000/

### 创建应用

django 中每一个应用都是一个 python 包, 遵从相同的规范. Django 自带一个工具可以自动生成应用的目录结构. 

> Prjects 和 apps 的区别: app 是一个 web 应用, 用来处理一种事情如, weblog, 数据库记录或者是一个简单的投票应用, 一个Project 包括配置多个 app 组成一个网站. 项目可以包括多个 app, 一个 app 可以存在多个项目中

一个 app 可以在 python 模块的任何路径. 可以与 manage.py 同级作为一级模块, 或者在子目录中作为子模块.

创建一个 polls app

```
~]# cd djsite
~]# python3 manage.py startapp polls
# 生成如下的目录结构
djsite
├── db.sqlite3
├── djsite
│   ├── __init__.py
│   ├── __pycache__
│   │   ├── __init__.cpython-37.pyc
│   │   ├── settings.cpython-37.pyc
│   │   ├── urls.cpython-37.pyc
│   │   ├── views.cpython-37.pyc
│   │   └── wsgi.cpython-37.pyc
│   ├── settings.py
│   ├── urls.py
│   ├── views.py
│   └── wsgi.py
├── manage.py
└── polls
    ├── __init__.py
    ├── admin.py
    ├── apps.py
    ├── migrations
    │   └── __init__.py
    ├── models.py
    ├── tests.py
    └── views.py
```

添加页面

```
# 编辑文件 djsite/polls/views.py
from django.http import HttpResponse

def index(request):
    return HttpResponse('欢迎进入首页')
```

添加路由
```
#  新增文件 djsite/polls/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index')
]
```

把路由引入到根 urls 中

```
# 编辑文件 djsite/djsite/urls.py

from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    # include 可以引入其他的 urls 配置
    path('polls/', include('polls.urls')),
    path('admin/', admin.site.urls),
]
```

启动应用

```
~]# python3 manage.py runserver
```

打开页面 http://127.0.0.1:8000/polls/

### path(route, view, [kwargs, name]) 方法. 用来设置路由

@param route {string} url pattern
@param view {function} Django 会使用指定的 view 模块, HttpRequest 对象会作为第一个参数, 捕获到的值作为其它的参数传递进去.
@param kwargs 任意个关键字参数可以作为一个字典传递给目标视图函数
@param name 给该url指定名称, 可以在 Django 的任何地方引用该名称. 尤其是在模板中。这个有用的特性允许你只改一个文件就能全局地修改某个 URL 模式。

## models 数据库操作

### 配置数据库

django 支持 sqlite3,postgresql,mysql等数据库

打开  djsite/settings.py 配置文件

django 默认使用 SQlite 数据库

配置项

```
DATABASES = {
    # 默认数据库
    'default': {
        # 数据库引擎, 取值 'django.db.backends.sqlite3', 'django.db.backends.postgresql', 'django.db.backends.mysql', or 'django.db.backends.oracle'.
        'ENGINE': 'django.db.backends.sqlite3', 
        # 数据库名称, 如果使用 SQlite, name 就是本地一个文件的绝对路径
        'NAME': 'mydatabase',
        # 如果使用的不是 SQlite, 还需要设置 USER, PASSWORD, and HOST
        'USER': '', 
        'PASSWORD': '',
        'HOST': ''
    }
}
```

设置数据库时区 
```
# 中国时区
TIME_ZONE = 'Asia/Shanghai'
```

数据库详细配置 [https://docs.djangoproject.com/zh-hans/2.1/ref/settings/#std:setting-DATABASES](https://docs.djangoproject.com/zh-hans/2.1/ref/settings/#std:setting-DATABASES)


settings.py 中的 INSTALLED_APPS 包含了项目中启用的所有的Django应用.

执行 migrate 命令为每个应用创建需要的数据表

### 创建模型

在 models.py 文件中添加模型

```python
from django.db import models

# Question 模型有内容和时间2个属性
class Question(models.Model):
    question_text = models.CharField(max_length=200)
    pub_date = models.DateTimeField('date published')


class Choice(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    choice_text = models.CharField(max_length=200)
    votes = models.IntegerField(default=0)
```

该步骤可以做2件事

1. 创建数据库 schema(生成 CREATE TABLE 语句)
2. 创建可以与 Question 和 Choice 对象进行交互的 Python 数据库 API

### 激活模型

1. 配置 INSTALLED_APPS 中添加设置. 修改 settings.py

```
INSTALLED_APPS = [
    'polls.apps.PollsConfig',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
]
```
2. 生成 migrations

```
$ python manage.py makemigrations polls
```

生成的 migrations 代码保存在 polls/migrations/0001_initial.py 里.

执行下面语句可以查看执行的数据库语句
```
$ python manage.py sqlmigrate polls 0001
```

3. 运行 migrate, 完成数据表的创建

```
$ python manage.py migrate
```


### migrate 迁移

更改模型后, 执行该命令会应用这些改动到数据库中. 

要改动 model, 需要执行3步

1. 更改 models(models.py 中)
2. 执行 python manage.py makemigrations 来为这些改动创建 migrations 文件
3. 执行 python manage.py migrate 来应用这些改动

数据库迁移被分解为2个步骤, 生成改动文件, 并应用. 可以方便改动在多个应用中使用.


### 在命令行中调试

以下命令可以进入 django 的命令行调试, 此时manage.py会加载 DJANGO_SETTINGS_MODULE 环境

```shell
$ python manage.py shell
```

命令行中调试 model

```shell
# 引入 model
 >>> from polls.models import Choice, Question  # Import the model classes we just wrote.

# No questions are in the system yet.
# 查询
>>> Question.objects.all()
<QuerySet []>

# Create a new Question.
# Support for time zones is enabled in the default settings file, so
# Django expects a datetime with tzinfo for pub_date. Use timezone.now()
# instead of datetime.datetime.now() and it will do the right thing.
>>> from django.utils import timezone
# 增加新项目
>>> q = Question(question_text="What's new?", pub_date=timezone.now())

# Save the object into the database. You have to call save() explicitly.
>>> q.save()

# Now it has an ID.
>>> q.id
1

# Access model field values via Python attributes.
>>> q.question_text
"What's new?"
>>> q.pub_date
datetime.datetime(2012, 2, 26, 13, 0, 0, 775217, tzinfo=<UTC>)

# Change values by changing the attributes, then calling save().
>>> q.question_text = "What's up?"
>>> q.save()

# objects.all() displays all the questions in the database.
>>> Question.objects.all()
<QuerySet [<Question: Question object (1)>]>
```

给 model 增加 __str__ 方法. 该方法可以在命令行中调试时显示具体内容, 在 django admin 中也会使用到

```pythons
# polls/models.py
from django.db import models

class Question(models.Model):
    # ...
    def __str__(self):
        return self.question_text

class Choice(models.Model):
    # ...
    def __str__(self):
        return self.choice_text
```

给 model 增加自定义方法

```py
import datetime

from django.db import models
from django.utils import timezone


class Question(models.Model):
    # ...
    # 自定义方法
    def was_published_recently(self):
        return self.pub_date >= timezone.now() - datetime.timedelta(days=1)
```

调试

```shell
>>> from polls.models import Choice, Question

# Make sure our __str__() addition worked.
>>> Question.objects.all()
<QuerySet [<Question: What's up?>]>

# Django provides a rich database lookup API that's entirely driven by
# keyword arguments.
>>> Question.objects.filter(id=1)
<QuerySet [<Question: What's up?>]>
>>> Question.objects.filter(question_text__startswith='What')
<QuerySet [<Question: What's up?>]>

# Get the question that was published this year.
>>> from django.utils import timezone
>>> current_year = timezone.now().year
>>> Question.objects.get(pub_date__year=current_year)
<Question: What's up?>

# Request an ID that doesn't exist, this will raise an exception.
>>> Question.objects.get(id=2)
Traceback (most recent call last):
    ...
DoesNotExist: Question matching query does not exist.

# Lookup by a primary key is the most common case, so Django provides a
# shortcut for primary-key exact lookups.
# The following is identical to Question.objects.get(id=1).
>>> Question.objects.get(pk=1)
<Question: What's up?>

# Make sure our custom method worked.
>>> q = Question.objects.get(pk=1)
>>> q.was_published_recently()
True

# Give the Question a couple of Choices. The create call constructs a new
# Choice object, does the INSERT statement, adds the choice to the set
# of available choices and returns the new Choice object. Django creates
# a set to hold the "other side" of a ForeignKey relation
# (e.g. a question's choice) which can be accessed via the API.
>>> q = Question.objects.get(pk=1)

# Display any choices from the related object set -- none so far.
>>> q.choice_set.all()
<QuerySet []>

# Create three choices.
>>> q.choice_set.create(choice_text='Not much', votes=0)
<Choice: Not much>
>>> q.choice_set.create(choice_text='The sky', votes=0)
<Choice: The sky>
>>> c = q.choice_set.create(choice_text='Just hacking again', votes=0)

# Choice objects have API access to their related Question objects.
>>> c.question
<Question: What's up?>

# And vice versa: Question objects get access to Choice objects.
>>> q.choice_set.all()
<QuerySet [<Choice: Not much>, <Choice: The sky>, <Choice: Just hacking again>]>
>>> q.choice_set.count()
3

# The API automatically follows relationships as far as you need.
# Use double underscores to separate relationships.
# This works as many levels deep as you want; there's no limit.
# Find all Choices for any question whose pub_date is in this year
# (reusing the 'current_year' variable we created above).
>>> Choice.objects.filter(question__pub_date__year=current_year)
<QuerySet [<Choice: Not much>, <Choice: The sky>, <Choice: Just hacking again>]>

# Let's delete one of the choices. Use delete() for that.
>>> c = q.choice_set.filter(choice_text__startswith='Just hacking')
>>> c.delete()
```

### Django Admin 

Django Admin  指后台管理系统, 给管理员用来进行网站数据操作的入口

1. 创建 admin 用户

按提示创建管理账户

```shell
$ python manage.py createsuperuser
```
2. 重启服务

```shell
$ python manage.py runserver
```
即可打开管理页面. 如  http://127.0.0.1:8000/admin/ 登录即可看到数据管理页面

3. 将新建的 model 添加到 admin 中

```py
# polls/admin.py
from django.contrib import admin
from .models import Question

admin.site.register(Question)
```

之后即可在管理页面上看到 polls  的 model, 并进行增删改查

## views

[tutoria 文档](https://docs.djangoproject.com/en/2.2/intro/tutorial03/)

django 中通过 url pattern 来配置 view

使用 URLconf 来 map URL patterns to views

详细文档 [URL dispatcher¶](https://docs.djangoproject.com/en/2.2/topics/http/urls/)


## Model 层

models 层用来组织管理数据

### Models
[官方文档-models](https://docs.djangoproject.com/en/2.2/topics/db/models/)

#### Fields

##### Relationships model 关系

model 之间有以下几种关系
- Many-to-one relationships
- Many-to-many relationships
- Extra fields on many-to-many relationships
- One-to-one relationships

##### 多对一关系

**Example:**
```py
# models.py

from django.db import models

class Book(models.Model):
    def __str__(self):
        return self.name

    name = models.CharField(max_length=200)
    price = models.IntegerField()
    # 外键, 书的作者
    # on_delete, 当 book 被删除后, 
    author = models.ForeignKey(
        'Author', max_length=200, on_delete=models.CASCADE)
    publisher = models.ForeignKey(
        'Publisher', on_delete=models.CASCADE, max_length=200)


class Publisher(models.Model):
    def __str__(self):
        return self.name
    # ForeignKe: 外键 [ForeignKe](https://docs.djangoproject.com/en/2.2/ref/models/fields/#django.db.models.ForeignKey) 定义关系,
    name = models.CharField(max_length=200)


class Author(models.Model):
    def __str__(self):
        return self.name
    # ForeignKe: 外键 [ForeignKe](https://docs.djangoproject.com/en/2.2/ref/models/fields/#django.db.models.ForeignKey) 定义关系,
    # 定义关系, chioce 是一个 Question, django 支持所有的数据库表关系, 多对1, 多对多, 一对一
    name = models.CharField(max_length=200)
    age = models.IntegerField()
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


### QuerySets
### Model instances
### Migrations

[官方文档-migrations](https://docs.djangoproject.com/en/2.2/topics/migrations/)

当改变 models 后, django 使用 migrations 来同步改动到数据库.

#### 提供的命令

- migrate: which is responsible for applying and unapplying migrations.
- makemigrations: which is responsible for creating new migrations based on the changes you have made to your models.
- sqlmigrate: which displays the SQL statements for a migration.
- showmigrations: which lists a project’s migrations and their status.

migrations 类似数据库的版本管理, makemigrations 用来把 model 的改变导出到一组 migration 文件, migrate 命令用来把这些改动同步到数据库

#### 工作流程

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
















