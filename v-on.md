# `v-on:` (简写为`@`)
- 原生HTML标签上绑定的是原生事件

- 子组件上绑定的是要由后代的`this.$emit(EVENT_NAME,arg1,agr2...)`触发的自定义事件
  
- 父组件想要监听子组件的原生事件，需要这样写
  `<Alert @click.native='alert'></Alert>`

- `v-on:click=""`里面填写表达式
  - `<button v-on:click="counter += 1">Add 1</button>`
  - `<button v-on:click="say('hi')">Say hi</button>`

- `<button v-on:click="greet">Greet</button>`也能用，greet也被当做函数名称，触发greet时候回传入`events`
  
- 同时传入一般参数和原始`event`比较麻烦 `<button v-on:click="say('Hi', $event)">Submit</button>` 用`$event`特殊变量来做

## v-model
给input之类的设置属性，达到双向数据绑定,算是比较干脆的命令了。可以理解为 `<input :value=text @input="changeText">`的缩写

## document
https://vuejs.org/v2/guide/events.html

## 为甚要包装一波原生的事件？
没有模块化。我们如何给一个HTML元素绑定一个事件？
  - ID选择器 + addEventListener: ID容易冲突，必须非常小心
  - Tag、Class选择器 + addEventListener: 结果容易冲突，dom结构还不能变
  - 标签上直接 `onclick="func()"` 全局函数名容易冲突

当然你在Vue中依然可以延续恶习，设定ID，或者预估DOM结构，或者使用全局函数，但是这样做太无聊。通过v-on，vue能够生成专门的作用域，帮你管理事件