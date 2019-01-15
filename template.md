## 变量
在`v-*=''` `{{}}` `v-bind:*=''`里面的内容被当做JS表达式（能且只能使用一个表达式）。
- 可以使用当前组件 data computed props v-for的数据
- 只能使用宿主环境自带全局变量，不能使用自定环境变量
  尽量只是用当前组件的数据，不然代码耦合度太高
- `this` 为undefined

## 模板指令
- v-for
历史原因，和原生JS语法不一致
  - `<li v-for="item in itemsArray">`
  - `<li v-for="(item, index) in itemsArray">`
  - `<li v-for="item of itemsArray">`
  - `<li v-for="value in object">`
  - `<div v-for="(value, key) in object">`

- v-if and v-show
If v-if is false, the element will not be added to DOM tree; if v-show is false, the element will be "display:none"

v-else v-else-if 必须跟在v-if后面

- v-text and v-html
  insert innerText or innerHTML, original data will be removed.

- v-once
  第一次渲染后不会再随之数据的变化而变化

## style class
虽然这两个值也可以通过控制字符串来处理，但是这样做比较低效，vue提供了一些特殊的语法
- :class
  - classObj
    键是类名，根据值是否为真决定要不要添加这个类
  - classArray
    根据数组中的类来确定样式
- style

父组件给子组件绑定class 或 style会被添加到子组件的属性后面

## 其他
### 为什么key值可以提高性能？ 待议 
- 没有key的话是每次都销毁 子元素，然后重新渲染吗？
- 不是有v-dom吗？
- 不恰当的key值怎么办？这个item会不会重新渲染？
- 给了key，但是具体数据又发生变化了怎么办？

### is
考虑到 select 等标签内部只能是option,可以用`is`标签来间接使用子组件