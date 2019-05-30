[TOC]

# django

[官网](https://www.djangoproject.com/start/)

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

django 中每一个应用都是一个 python 包, 遵从相同的约定. Django 自带一个工具可以自动生成应用的目录结构. 

创建一个 polls 应用

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

## 数据库操作

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

```
from django.db import models


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













