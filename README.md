# 这是一个NB的项目

## 牛不牛逼， 用心去感受， 每一行代码中的诗情雅意

### 我们是有灵魂的程序员，所以，我们的代码富有诗意

#### 牛逼 哈哈哈

## 制作首页App组件
1. 完成 Header 区域，使用的是 Mint-UI 中的Header组件
2. 制作底部的 Tabbar 区域，使用的是 MUI 的 Tabbar.html
 + 在制作 购物车 小图标的时候，操作会相对多一些：
 + 先把 扩展图标的 css 样式，拷贝到项目中
 + 拷贝 扩展自体库 ttf文件，到项目中
 + 为 购物车 小图标 ，添加 如下样式 ''
3. 要在 中间区域放置一个 router-view 来展示路由匹配到的组件

## 改造 tabbar 为 router-link

## 设置路由高亮

## 点击 tabbar 中的路由链接，展示对应的路由组件

## 制作首页轮播图布局

## 加载首页轮播图数据

1. 获取数据，使用 vue-resource,axios
2. 使用 vue-resource 的 this.$http.get 获取数据
3. 获取到的数据，要保存到 data 身上
4. 使用 v-for 循环渲染 每个item项目


## 改造 九宫格 区域的样式 

## 改造 新闻资讯 路由裂解

## 新闻资讯 页面 制作
1.绘制界面 使用MUI 重的 media-list.html
2.使用 vue-resource 获取数据
3.渲染数据

## 实现 新闻资讯列表 点击跳转到新闻详情
1. 把列表中的每一项 改造为 router-link ，同时，在跳转的时候应该提供唯一的Id 标示符
2. 穿件新闻详情的组件页面 NewsInfo.vue
3. 在 路由模块中，将 新闻详情的 路由地址 和 组件详情 关联起来

## 实现 新闻详情的 页面布局 和渲染

## 单独封装一个 comment.vue 评论子组件
1. 先创建一个 单独的 comment.vue 组件模版
2. 在需要使用 comment 组件的 页面中， 先手动 导入 comment 组件
    + `import comment from './comment.vue'`
3. 在父组件中 ，使用 `components` 属性，将刚才导入 comment 组件，注册为自己的 子组件
4. 将注册子组件时候的 ，注册名称，以标签形式，在页面中 引用即可

## 获取所有的 评论数据 显示到页面中

## 实现点击加载更多评论的功能
1. 为加载更多按钮，绑定点击事件，在事件中，请求 下一页数据
2. 点击加载更多， 让pageIndex++ ，然乎重新调用 this.getComments() 方法 获取重新一页的数据
3. 为了防止 新数据 覆盖老数据的清空，我们在 点击 加载更多的时候，每当获取到新数据，应该让 老数据 
   调用数组的concat 方法，拼接上新数组

## 发表评论
1. 把文本框做双向绑定
2. 为发表按钮绑定一个事件
3. 校验评论内容是否为空，如果为空，则Toast 提示用户，评论内容不能为空
4. 通过 vue-resource 发送一个请求，把评论内容发送给服务器
5. 当发表评论ok后，重新刷新列表，以查看最新的评论
    + 如果调用 getComments方法 重新刷新评论列表的话，可能只能得到 最后一夜的平了，前几页的评论 获取不到
    + 换一种思路，当评论成功后，在客户端，手动拼接出一个最新的评论对象，然后调用数组的unshift方法
  
## 改造图片分析 按钮为 路由的链接并显示对应的组件页面
1. 制作 顶部的滑动条
2. 制作 图片列表
### 制作顶部滑动条的坑们：
1. 需要借助于 MUI 重的tab-top-webview-main.html
2. 需要把 slider 区域的 mui-fullscreen 类去掉
3. 滑动条无法正常触发华东，通过检查官方文档发现这是JS组件，需要被初始化一下
    + 导入 mui.JS
    + 调用官方提供的 方式 去初始化：

```
mui('.mui-scroll-wrapper').scroll({
	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
});

```
4. 我们在初始化 滑动条 的时候，导入的 mui.js 但是，控制台报错mui.js:3969 Uncaught TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them
    + mui.js  中用到了 ‘caller’ ,'calleee' ,and 'arguments' 但是 webpack 打包好的 bundle.js 总，默认是启用严格模式的，所有两者冲突了
    + 1. 把 mui.js 中的 非严格 模式的代码改掉；但是不现实； 2. 把 webpack 打包时候的 严格模式禁用掉


### 制作图片列表区域
1. 图片列表需要使用懒加载技术，我们可以使用 Mint-UI 提供的现成的 组件 ‘Lazy-load' 
2. 根据 `lazy-load` 的使用嗯当，尝试使用
3. 渲染图片列表数据

### 实现了 图片列表的 懒加载改造和 样式没话

## 实现了 点击图片 跳转到 图片详情页面
1. 在改造 li 造成 router-link 的时候 ，需要使用 tag 属性 指定要渲染为哪种元素

## 实现 页面详情的布局和没话是


### 尝试在手机上 去进行项目的预览和测试
1. 要保证自己的手机可以正常运行
2. 要保证 手机 和 开发项目的 电脑 处于同一个 wifi 环境中，也就是说 手机 可以访问到 电脑的 IP
3. 打开自己的 项目中 package.json 文件，在 dev 脚本中，添加一个 --host 指令 把 当前 电脑的 
   WIFI IP 地址， 设置为 --host 的指令值;
   + 如何查看自己电脑所粗 wifi 的 IP 呢 ，在cmd 终端中 运行    `ipconfig`