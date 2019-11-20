
# 数据结构 Data Structures

## 列表

列表方法

```
cities = ['北京', '上海']
cities.append('广州')
henan = ['zhengzhou', 'anyang']
# extend 追加一个列表
cities.extend(henan)

>>> cities.remove('广州')
>>> cities
['北京', '上海', 'zhengzhou', 'anyang']
# 移除匹配的到第一项
cities.remove('广州')
# 移除某项
cities.pop(2)
# sort
cities.sort()
# reverse
cities.reverse()
# 浅复制一个列表
cities.copy()
```