# Python Standard Library 标准库

[官方文档](https://docs.python.org/zh-cn/3/library/index.html)

## 内置类型

### 上下文管理器

[文档](https://docs.python.org/zh-cn/3/library/stdtypes.html#context-manager-types)

用户定义类时可以定义运行时上下文。当语句体执行时会执行该上下文

上下文主要实现了以下2个方法

1. contextmanager.__enter__()

进入运行时上下文并返回此对象或关联到该运行时上下文的其他对象。 此方法的返回值会绑定到使用此上下文管理器的 with 语句的 as 子句中的标识符。

一个返回其自身的上下文管理器的例子是 file object。 文件对象会从 __enter__() 返回其自身，以允许 open() 被用作 with 语句中的上下文表达式。

一个返回关联对象的上下文管理器的例子是 decimal.localcontext() 所返回的对象。 此种管理器会将活动的 decimal 上下文设为原始 decimal 上下文的一个副本并返回该副本。 这允许对 with 语句的语句体中的当前 decimal 上下文进行更改，而不会影响 with 语句以外的代码。

2. contextmanager.__exit__(exc_type, exc_val, exc_tb)

退出运行时上下文并返回一个布尔值旗标来表明所发生的任何异常是否应当被屏蔽。 如果在执行 with 语句的语句体期间发生了异常，则参数会包含异常的类型、值以及回溯信息。 在其他情况下三个参数均为 None。

自此方法返回一个真值将导致 with 语句屏蔽异常并继续执行紧随在 with 语句之后的语句。 否则异常将在此方法结束执行后继续传播。 在此方法执行期间发生的异常将会取代 with 语句的语句体中发生的任何异常。

传入的异常绝对不应当被显式地重新引发 —— 相反地，此方法应当返回一个假值以表明方法已成功完成并且不希望屏蔽被引发的异常。 这允许上下文管理代码方便地检测 __exit__() 方法是否确实已失败。