# redux 学习笔记

## install

```
yarn add redux react-redux redux-thunk
```

## 三大原则

1. Single source of truth 单一数据源
所有的数据挂载在同一个store上

2. state is read-only 单向数据流

state是只读的, 唯一可以修改state的方法是action. 

action是用来描述所发生的事件的对象

action可以被打印, 序列化, 储存, 调试测试, 回放

3. Changes are made with pure functions 使用纯函数来执行修改

reducers是纯函数, 传入state, action, 返回一个新的state. 用来描述action如何改变state. 


## Action

action是一些信息的payloads, 用来把数据从应用传到store
payloads表示有效载荷, 指一堆信息中的有价值的信息.
通过store.dispatch()把数据传递到store

actions是一些普通的js对象, 必须包含type字段用来指定要做的动作, type是一个字符串常量.

如
```
{
  type: ADD_TODO,
  text: 'Build my first Redux app'
}
```

### Action Creators

Action Creators是用来生成action的函数, 即函数执行后return一个action

如:

```
function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  }
}
```

要dispatch该action, 调用dispatch

```
dispatch(addTodo(text))
```

可以创建a bind action creator来自动完成dispatch

```
const bindAddTodo = text => dispatch(addTodo(text))
const bindCompleteTodo = index => dispatch(completeTodo(index))
```

这些函数可以这样使用
```
boundAddTodo(text)
boundCompleteTodo(index)
```

dispatch 函数可以通过store.dispatch()来调用, 但是更多情况下通过react-redux's connect()来调用该函数.
也可以使用bindActionCreators()来自动绑定多个action creators函数到dispatch中

## Reducers

当action发送到store后, Reducers用来处理store中的state的改变的逻辑.
action用来描述发生了什么, reducer用来表示store如何处理这个动作(如何改变state数据).


## Store

store把action和reducer组装到一起

store有以下职责
- 保存state
- 通过getState提供获取state的接口
- 通过dispatch(action)提供更新state方法
- 通过提供subscribe(listener)来注册监听器
- 处理未注册的监听器通过subscribe(listener)返回的函数

redux项目中通常应该只有一个store, 可以通过reducer组合来拆分数据处理逻辑

使用reducer来创建store

```
import { createStore } from 'redux'
import todoApp from './reducers'
const store = createStore(todoApp)
```