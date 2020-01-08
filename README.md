# React的基础学习-练习

项目练习采用antd组件库
```javascript
// 下载依赖，推荐使用cnpm
cnpm install
// 启动服务
npm start
```

### 简介
render: 页面state或props发生变化时执行，而render函数是只要有state和props变化就会执行。
componentWillMount和componentDidMount这两个生命周期函数，只在页面刷新的时候执行一次。

### 1，初始化阶段: 定义props和state的状态

```javascript
constructor(props){
  super(props)
  this.state = {}
}
```

### 2，挂载阶段
```javascript
componentWillMount(){
    // 在组件即将被挂载到页面的时刻执行
    console.log('componentWillMount--组件挂载前');
  }

  componentDidMount(){
    // 组件挂载完成时被执行
    // ajax的接口请求一般放在这里进行执行
    console.log('componentDidMount--组件挂载结束');
  }
```
### 3，更新阶段
shouldComponentUpdate函数返回true后，componentWillUpdate和componentDidUpdate才会被执行，返回false，将不会被执行；
```javascript
shouldComponentUpdate(){
    // 函数会在组件更新之前，自动被执行。它要求返回一个布尔类型的结果，必须有返回值，
    // 1, 返回true: 同意组件更新；2，false: 不允许组件更新；
    return false;
    console.log('shouldComponentUpdate--组件更新前');
  }
  
  componentWillUpdate(){
    // 组件更新前执行
    console.log('componentWillUpdate--组件即将更新');
  }

  componentDidUpdate(){
    // 组件更新后执行
    console.log('componentDidUpdate--组件更新后');
  }

  componentWillReceiveProps(){
    // 子组件接收父组件传递过来的参数，父组件render函数重新被执行，这个生命周期就会被执行；
    console.log('componentWillReceiveProps--组件是否接收props更新');
  }
```
### 4，销毁阶段
```javascript
componentWillUnmount(){
    // 当组件从页面中删除的时候执行
  console.log('componentWillUnmount -- 当组件从页面中销毁的时候执行');
}
```
### 5，存在的性能问题
通过shouldComponentUpdate来解决子组件的渲染性能问题
nextProps：变化后的属性
nextState：变化后的状态