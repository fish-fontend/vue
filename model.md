## 数据来源
自身定义的
- data
- computed

父组件传递的
- props
- slot

- v-on 也可以理解为父组件向子组件传递事件参数，子组件通过触发事件函数来调用父组件方法

其他
- components
- router

## computed
``` js
computed:{
  usersNum: {
    get: function(){
      return this.users.length
    },
    set: function(){
    }
}
```
因为data + single expression 无法做出复杂计算，所有有了它
在模板里使用 `usersNum` or `usersNum()`