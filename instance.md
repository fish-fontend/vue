# instance
vue 实例和组件有什么区别？
我只看到实例可以使用el option或者vm.$mount()选择挂载到某个元素上，组件不行。同时组件的data只能写成函数返回值的形式

computed watch lifecycle 函数里面的this都是当前组件的实例

vue组件只是语法糖，其实会解析成下面的函数

## 属性
vue 实例上有两种属性
data computed props 上的内容会被直接挂载到实例上；自带的魔法属性

假设this是当前组件实例，vm是根实例

- vm.$children
  子组件数组

- this.$el 根dom节点的引用。即使是子组件的this.$el，也总是指顶层实例的dom节点
- this.$root 总是指向vm 

- this.$refs 引用的子组件的键值对集合

- this.$watch('text', function(newText, oldText) => {}) 添加watch函数

- this.$on('checked', () => {})
- this.$emit('checked')

this.$forceUpdate 在对象 数组修改后。。。

## 挂载
调用vm.$mount('#app')后开始挂载

## 渲染阶段
会调用这个函数vm.render( h => {
  h(vm.template)
})


