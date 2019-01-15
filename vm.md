medol层通过vue框架来指挥view。

view层触发事件来修改数据

## 数据监测
data computed props router 的变化都会使得使得视图重新渲染、以及触发watch函数。
可以监测到的变化类型到：
  - 如果data[Name]是值类型，那么它的值被修改可以监测到
  - 如果data[Name]是引用类型，那么它的引用被修改可以被监测到
  - 如果data[Name]是引用类型，已有属性被修改可以被检测到
  - 如果是data[Name]是数组，push pop shift unshift splice sort reverse可以被监测到
  - .data[Name][subName]也是符合上述规则

不能被监测到的变化：
  - 如果data[Name]是对象（包括数组），添加属性无法被监测到,例如
    - vm.items[indexOfItem] = newValue
    - vm.items.length = newLength
  它们不能被监测

filter(), concat() and slice() 是返回新的数组，可以这样做
``` js
example1.items = example1.items.filter(function (item) {
  return item.message.match(/Foo/)
})
```