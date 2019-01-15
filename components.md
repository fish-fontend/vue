# 父子组件数据的传递

## data from father to child
- father data --attributes of child--> 
  - v-bind:attribute -> 
  - attribute -> 
    - child `props` ->
        - child `data`

## data from child to father
- passive
  - child -> trigger native event -> trigger father v-on event ->trigger father methods

- nagetive
  - father <- this.$refs.NAME （需要给组件一个ref属性）

# lifecycle

## 父子组件的先后顺序
假设root是Add的父组件

钩子的触发顺序
- beforeCreate root
- created root
- beforeMount root
- beforeCreate Add
- created Add
- beforeMount Add
- mounted Add
- mounted root

Add发生变化，触发Add.beforeUpdate Add.updated
不会触发父组件的相关事件

如果通过v-if=false 控制子组件,会触发
beforeUpdate root
beforeDestory Add
destoryed Add
updated root

再次设置v-if=true
beforeUpdate root
beforeCreate Add
created Add
beforeMount Add
mounted Add
updated root

如何选着用哪个函数呢？
- beforeCreate -- this.$el === undefined
- Created -- this.$el === undefined
- beforeMount -- this.$el === 写在HTML中的dom节点
- mounted -- this.$el === 新创建的节点