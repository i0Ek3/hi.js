# Notes

All notes in this article are based on [this tutorial](https://web.qianguyihao.com/).

## 01 HTML

- 标签
  
  - 排版标签
    - 标题标签
      - `<h1>`-`<h6>`
        - 拥有 align 属性
    - html 注释
      - `<!-- this is a note for html -->`
    - 段落标签
      - `<p>xxxx</p>`
        - 拥有 align 属性
    - 水平线标签
      - `<hr />`
        - `align="属性值"`：设定线条置放位置。属性值可选择：left right center
        - `size="2"`：设定线条粗细。以像素为单位，内定为 2
        - `width="500"`或`width="70%"`：设定线条长度。可以是绝对值（单位是像素）或相对值。如果设置为相对值的话，内定为100%
        - `color="#0000FF"`：设置线条颜色
        - `noshade`：不要阴影，即设定线条为平面显示，若没有这个属性则表明线条具阴影或立体
    - 换行标签
      - `<br />`
    - `<div>`标签
      - div 的语义是 division，即分割
      - 可以把标签中的内容分割为独立的区块，必须单独占据一行
      - `align="属性值"`：设置块儿的位置。属性值可选择：left、right、 center
    - `<span>`标签
      - span 的语义就是 span，即范围、跨度
      - 和 div 的作用一致，但不换行
    - 内容居中标签
      - `<center>`
    - 预定义标签
      - `<pre>`
  - 字体标签
    - 特殊字符
      - `&nbsp;`：空格 （non-breaking spacing，不断打空格）
      - `&lt;`：小于号（less than）
      - `&gt;`：大于号（greater than）
      - `&amp;`：符号`&`
      - `&quot;`：双引号
      - `&apos;`：单引号
      - `&plusmn;`：正负号`±`
      - `&sup2;`：平方`x²`
        - `&sup3`：立方
      - `&yen;`：人民币`￥`
      - `&reg;`：注册商标`®`
      - `&copy;`：版权`©`
      - `&trade;`：商标`™`
      - `&deg;`：摄氏度`°`
      - `&#32464`：文字`绐`，其是汉字`绐`的unicode编码
    - 下划线、中划线、斜体
      - `<u>`：下划线标记
      - `<s>`或`<del>`：中划线标记（删除线）
      - `<i>`或`<em>`：斜体标记
  - 图片标签`<img src="./hi.jpg" />`
    - 能够插入的图片类型是：jpg(jpeg)、gif、png、bmp 等
    - 不能往网页中插入的图片格式是：psd、ai 等
    - 属性
      - src：指定图片路径
      - width：图像的宽度
      - height：图像的高度
      - alt：当图片不可用（无法显示）的时候，代替图片显示的内容
      - title：**提示性文本**，鼠标悬停时出现的文本
      - align：**图片和周围文字的相对位置**
        - bottom（默认）、center、top、left、right
  - 列表标签
    - `<ul>` 无序列表
      - ul 里的每一项都是 li
      - li 不能单独存在，必须包裹在 ul 里面
      - ul 的儿子，只能是 li。但是 li 是一个容器级标签，**li 里面什么都能放，甚至可以再放一个 ul**
      - type 属性
        - `disc`(实心原点，默认)
        - `square`(实心方点)
        - `circle`(空心圆)
    - `<ol>` 有序列表
      - ol 里的每一项都是 li
      - type 属性
        - 1(阿拉伯数字，默认)
        - a
        - A
        - i
        - I
    - `<dl>` 定义列表
      - dl 的子元素只能是 dt 和 dd，dd 是用来描述 dt 的
        - `<dt>`：definition title 列表的标题，这个标签是必须的
        - `<dd>`：definition description 列表的列表项，如果不需要它，可以不加
  - 表格标签`<table>`
    - 一个表格`<table>`是由每行都是`<tr>`组成的，每行是由每个单元格`<td>`组成的。即一个表格是由行组成的（行是由列组成的），而不是由行和列组成的
      - `<tr>`：行
        - 属性
          - dir：公有属性，设置这一行单元格内容的排列方式。可以取值：
            - `ltr`：从左到右（left to right，默认）
            - `rtl`：从右到左（right to left）
          - `bgcolor`：设置这一行的单元格的背景色。 注：没有 background 属性，即：无法设置这一行的背景图片，如果非要设置，可以用 css 实现
          - `height`：一行的高度
          - `align="center"`：一行的内容水平居中显示，取值：left、center、right
          - `valign="center"`：一行的内容垂直居中，取值：top、middle、bottom
      - `<td>`/`<th>`：单元格/加粗单元格
        - 属性
          - `align`：内容的横向对齐方式。属性值可以填：left right center。如果想让每个单元格的内容都居中，这个属性太麻烦了，以后用 css 来解决
          - `valign`：内容的纵向对齐方式。属性值可以填：top middle bottom
          - `width`：绝对值或者相对值(%)
          - `height`：单元格的高度
          - `bgcolor`：设置这个单元格的背景色
          - `background`：设置这个单元格的背景图片
        - 单元格合并
          - `colspan`：横向合并。例如`colspan="2"`表示当前单元格在水平方向上要占据两个单元格的位置
          - `rowspan`：纵向合并。例如`rowspan="2"`表示当前单元格在垂直方向上要占据两个单元格的位置
        - `<caption>`标签：表格的标题
        - `<thead>`/`<tbody>`/`<tfoot>`标签
    - 属性
      - `border`：边框，像素为单位
      - `style="border-collapse:collapse;"`：单元格的线和表格的边框线合并（表格的两边框合并为一条）
      - `width`：宽度，像素为单位
      - `height`：高度，像素为单位
      - `bordercolor`：表格的边框颜色
      - `align`：**表格**的水平对齐方式。属性值可以填：left right center。 注意：这里不是设置表格里内容的对齐方式，如果想设置内容的对齐方式，要对单元格标签`<td>`进行设置）
      - `cellpadding`：单元格内容到边的距离，像素为单位。默认情况下，文字是紧挨着左边那条线的，即默认情况下的值为0。 注意不是单元格内容到四条边的距离哈，而是到一条边的距离，默认是与左边那条线的距离。如果设置属性`dir="rtl"`，那就指的是内容到右边那条线的距离
      - `cellspacing`：单元格和单元格之间的距离（外边距），像素为单位，默认情况下的值为0
      - `bgcolor="#99cc66"`：表格的背景颜色
      - `background="路径src/..."`：背景图片，背景图片的优先级大于背景颜色
      - `bordercolorlight`：表格的上、左边框，以及单元格的右、下边框的颜色
      - `bordercolordark`：表格的右、下边框，以及单元格的上、左的边框的颜色 这两个属性的目的是为了设置 3D 的效果
      - `dir`：公有属性，单元格内容的排列方式(direction)。 可以取值 `ltr`：从左到右（left to right，默认），`rtl`：从右到左（right to left）。既然说`dir`是共有属性，如果把这个属性放在任意标签中，那表明这个标签的位置可能会从右开始排列
  - 框架标签及内嵌框架`<iframe>`
  - `<iframe>` 是 `<body>` 的子标记
    - 属性
      - `src="subframe/the_second.html"`：内嵌的那个页面
      - `width=800`：宽度
      - `height=“150`：高度
      - `scrolling="no"`：是否需要滚动条，默认值是 true
      - `name="mainFrame"`：窗口名称，公有属性
  - 表单标签`<form>`
    - 用于与服务器的交互
    - 表单和表格嵌套时，是在`<form>`标记中套`<table>`标记
    - 属性
      - `name`：表单的名称，用于 JS 来操作或控制表单时使用
      - `id`：表单的名称，用于 JS 来操作或控制表单时使用
      - `action`：指定表单数据的处理程序，一般是 PHP，如：action=“login.php”
      - `method`：表单数据的提交方式，一般取值：get(默认)和 post
    - 输入标签 `<input>`
    - 下拉列表标签 `<select>`
    - `<textarea>`
    - `label`
  - 多媒体标签
    - `<bgsound>`：播放背景音乐
    - `<embed>`：播放多媒体文件
      - 主要应用 Netscape 浏览器，它不是 W3C 规范
    - `<object>`：播放多媒体文件
      - 主要应用 IE 浏览器，它是 W3C 规范
  - 滚动字幕标签`<marquee>`
    - 属性
      - `direction="right"`：移动的目标方向。属性值可以是：`left`（从右向左移动，默认值）、`right`（从左向右移动）、`up`（从下向上移动）、`down`（从上向下移动）
      - `behavior="slide"`：行为方式。属性值可以是：`slide`（只移动一次）、`scroll`（循环移动，默认值）、`alternate`（循环移动）、。 `alternate`和`scroll`属性值都是循环移动，区别在于：假设在`direction="right"`的情况下，`behavior="scroll"`表示从左到右、从左到右、从左到右···`behavior="alternate"`表示从左到右、从右到左、从左到右···
      - `scrollamount="30"`：移动的速度
      - `loop="3"`: 循环多少圈。负值表示无限循环
      - `scrolldelay="1000"`：移动一次休息多长时间。单位是毫秒

- 超链接
  
  - 分类
    
    - 外部链接：链接到外部文件
      - `<a href="b.html">点击进入 b 文件</a>`
    - 锚链接：给超链接起一个名字，作用是**在本页面或者其他页面的的不同位置进行跳转**
    
    ```css
    <body>
        <a name="a">Top</a>
        <pre>
    
        </pre>
        <a href="#a">Back To Top</a>
    </body>
    ```
    
    - 邮件链接
    - `<a href="mailto:hi.js@gmail.com">点击进入邮箱</a>`
  
  - 属性
    
    - `href`：目标 URL
    - `title`：悬停文本
    - `name`：主要用于设置一个锚点的名称
    - target：告诉浏览器用什么方式来打开目标页面
      - `_self`：在同一个网页中显示（默认值）
      - `_blank`：**在新的窗口中打开**
      - `_parent`：在父窗口中显示
      - `_top`：在顶级窗口中显示

- HTML5
  
  - 新一代开发 **Web 富客户端**应用程序整体**解决方案**。包括：HTML5，CSS3，Javascript API 在内的一套**技术组合**
    
    - **富客户端**：具有很强的**交互性**和体验的客户端程序。比如说，浏览博客，是比较简单的客户端；一个在线听歌的网站、即时聊天网站就是富客户端。
  
  - 应用场景
    
    - 极具表现力的网页：内容简约而不简单
    
    - 网页应用程
      
      - 代替 PC 端的软件：iCloud、百度脑图
      
      - APP 端的网页：淘宝、京东、美团等
      
      - 微信端：公众号、小程序等
    
    - 混合式本地应用
    
    - 简单的游戏
  
  - 新增内容
    
    - 语义化标签：可以直接写 `<nav>` 而不是 `<div class="nav">`
      
      - `<section>` 表示区块
      
      - `<article>` 表示文章。如文章、评论、帖子、博客
      
      - `<header>` 表示页眉
      
      - `<footer>` 表示页脚
      
      - `<nav>` 表示导航
      
      - `<aside>` 表示侧边栏。如文章的侧栏
      
      - `<figure>` 表示媒介内容分组。
      
      - `<mark>` 表示标记 (用得少)
      
      - `<progress>` 表示进度 (用得少)
      
      - `<time>` 表示日期
    
    - 表单
      
      - `email` 只能输入 email 格式，自动带有验证功能
      
      - `tel` 手机号码
      
      - `url` 只能输入 url 格式
      
      - `number` 只能输入数字
      
      - `search` 搜索框
      
      - `range` 滑动条
      
      - `color` 拾色器
      
      - `time` 时间
      
      - `date` 日期
      
      - `datetime` 时间日期
      
      - `month` 月份
      
      - `week` 星期
    
    - 多媒体
      
      - 音频 <audio>
      
      - 视频 <vedio>
    
    - DOM 操作
      
      - 获取元素
        
        - document.querySelector("selector") 通过 CSS 选择器获取符合条件的第一个元素
        
        - document.querySelectorAll("selector") 通过 CSS 选择器获取符合条件的所有元素，以类数组形式存在
      
      - 类名操作
        
        - Node.classList.add("class") 添加 class
        
        - Node.classList.remove("class") 移除 class
        
        - Node.classList.toggle("class") 切换 class，有则移除，无则添加
        
        - Node.classList.contains("class") 检测是否存在 class
      
      - 自定义属性
    
    - 拖拽 `draggable="true"`
      
      - 拖拽元素的监听事件
        
        - `ondragstart`当拖拽开始时调用
        
        - `ondragleave` 当**鼠标离开拖拽元素时**调用
        
        - `ondragend` 当拖拽结束时调用
        
        - `ondrag` 整个拖拽过程都会调用
      
      - 目标元素的监听事件
        
        - `ondragenter` 当拖拽元素进入时调用
        
        - `ondragover` 当拖拽元素停留在目标元素上时，就会连续一直触发（不管拖拽元素此时是移动还是不动的状态）
        
        - `ondrop` 当在目标元素上松开鼠标时调用
        
        - `ondragleave` 当鼠标离开目标元素时调用
      
      - 如果想让拖拽元素在目标元素里做点事情，就必须要在 `ondragover()` 里加`event.preventDefault()`这一行代码
    
    - 历史
      
      - 在 HTML5 中可以通过 `window.history` 操作访问历史状态，让一个页面可以有多个历史状态
    
    - 地理位置
      
      - 在 HTML 规范中，增加了获取用户地理信息的 API，这样使得我们可以基于用户位置开发互联网应用，即**基于位置服务 LBS** (Location Base Service)
      
      - 获取地理信息的方式
        
        - IP 地址
        
        - 三维坐标
          
          - GPS
          
          - Wi-Fi 定位：仅限于室内
          
          - 手机信号定位：通过运营商的信号塔定位)
        
        ![](http://img.smyhvae.com/20180224_2110.png)
    
    - 全屏
      
      - requestFullscreen() 让元素开启全屏显示
      
      - cancleFullscreen() 让元素关闭全屏显示
      
      - document.fullScreen 检测当前是否处于全屏状态
      
      - 全屏的伪类
        
        - :full-screen .box {}
        
        - :-webkit-full-screen {}
        
        - :moz-full-screen {}
    
    - Web 存储
      
      - 存储方式
        
        - **`window.sessionStorage` 会话存储**
          
          - 保存在内存中
          
          - **生命周期**为关闭浏览器窗口，当窗口关闭时数据销毁
          
          - 在同一个窗口下数据可以共享
        
        - **`window.localStorage` 本地存储**
          
          - 有可能保存在浏览器内存里，有可能在硬盘里
          
          - 永久生效，除非手动删除（比如清理垃圾的时候）
          
          - 可以多窗口共享
      
      - 存储的特性
        
        - 设置、读取方便
        
        - 容量较大，sessionStorage 约 5M、localStorage 约 20M
        
        - 只能存储字符串，可以将对象 JSON.stringify() 编码后存储
    
    - 网络状态：通过 `window.onLine` 来检测用户当前的网络状况
    
    - 应用缓存
      
      - HTML5 中我们可以轻松的构建一个离线（无网络状态）应用，只需要创建一个 `cache manifest` 缓存清单文件
      
      - 优势
        
        - 可配置需要缓存的资源
        
        - 网络无连接应用仍可用
        
        - 本地读取缓存资源，提升访问速度，增强用户体验
        
        - 减少请求，缓解服务器负担
      
      - 缓存清单文件
        
        - 缓存清单文件中列出了浏览器应缓存，以供离线访问的资源。推荐使用 `.appcache`作为后缀名，另外还要添加 MIME 类型
        
        - 缓存清单文件里的内容如何写？
          
          - 顶行写 CACHE MANIFEST
          
          - CACHE: 换行 指定我们需要缓存的静态资源，如 .css、image、js 等
          
          - NETWORK: 换行 指定需要在线访问的资源，可使用通配符（也就是：不需要缓存的、必须在网络下面才能访问的资源）
          
          - FALLBACK: 换行 当被缓存的文件找不到时的备用资源（当访问不到某个资源时，自动由另外一个资源替换）
          
          ![](http://img.smyhvae.com/20180224_2240.png)

## 02 CSS

### 01 Preferences

- font

```CSS
font: 50 14px/24px "SimSun"; /*加粗 字号/行高/ 字体*/
font-size: 50px;                  /*字体大小*/
line-height: 30px;           /*行高*/
font-family: "Microsoft YaHei", "SimSun"; /*字体类型：如果没有幼圆就显示黑体，没有黑体就显示默认*/
font-style: italic ;          /*italic表示斜体，normal表示不倾斜*/
font-weight: bold;          /*粗体*/
font-variant: small-caps; /*小写变大写*/
vertical-align: middle;   /*单行文本垂直居中*/
```

- text

![](http://img.smyhvae.com/2015-10-03-css-18.png)

- list

![](http://img.smyhvae.com/2015-10-03-css-26.png)

- overflow
  - `visible`：默认值。多余的内容不剪切也不添加滚动条，会全部显示出来
  - `hidden`：不显示超过对象尺寸的内容
  - `auto`：如果内容不超出，则不显示滚动条；如果内容超出，则显示滚动条
  - `scroll`：Windows 平台下，无论内容是否超出，总是显示滚动条。Mac 平台下，和 `auto` 属性相同
- cursor
  - `auto`：默认值。浏览器根据当前情况自动确定鼠标光标类型
  - `pointer`：IE6.0，竖起一只手指的手形光标。就像通常用户将光标移到超链接上时那样
  - `hand`和`pointer`的作用一样：竖起一只手指的手形光标。就像通常用户将光标移到超链接上时那样
- 滤镜
  - `<img src="x.jpg" style="filter:gray()">`
- background：`background: red url(1.jpg) no-repeat 100px 100px fixed;`
  - `background-color: #ff99ff;` 设置元素的背景颜色，值还可以是 RGBA 或 HSLA
  - `background-image:url(images/2.gif);` 将图像设置为背景
  - `background-repeat: no-repeat;` 设置背景图片是否重复及如何重复，默认平铺满（重要）
    - `no-repeat`不要平铺
    - `repeat-x`横向平铺
    - `repeat-y`纵向平铺
  - `background-position:center top;` 设置背景图片在当前容器中的位置
  - `background-attachment:scroll;` 设置背景图片是否跟着滚动条一起移动。属性值可以是`scroll`、`fixed`
  - `background-origin` 控制背景从什么地方开始显示
  - `background-clip` 背景裁切
  - `background-size` 调整尺寸
  - `background-image` 渐变
    - 线性渐变
    - 径向渐变
  - `clip-path` 裁剪元素的部分区域
  - 多重背景

### 02 Selector

- 样式表（Cascading Style Sheet）：给 HTML 页面标签添加各种样式，**定义网页的显示效果**
  
  - 行内样式表：在某个特定的标签里采用 style 属性，范围只针对此标签
    
    - `<p style="color:white;background-color:red">hi</p>`
  
  - 内嵌样式表：在页面的 head 里采用`<style>`标签，范围针对此页面
    
    - ```css
      <style type="text/css">
          p {
      
          }
      </style>
      ```
  
  - 外部样式表：引入外部样式表 css 文件的方式
    
    - <link> 标签引入：`<link rel = "stylesheet" type = "text/css" href = "a.css"></link>`
    - import 引入：`@import url(a.css);`

- 选择器：指定 CSS 要作用的标签，即选择哪个容器
  
  - 基本选择器
    
    - 标签选择器：针对**一类**标签
      
      - 所有的标签，都可以是选择器
      - 选择器的名字就是 html 页面上的标签，如下面的 p 标签
      
      ```css
      <style type="text/css">
          p {
            font-size: 50px;
          }
      </style>
      
      <body>
          <p>hi</p>
      </body>
      ```
    
    - 类选择器：针对**你想要的所有**标签使用，规定用圆点`.`来定义
      
      - 类选择器可以被多种标签使用
      - 同一个标签可以使用多个类选择器，用**空格**隔开即可
      - 尽可能的用 class，除非极特殊的情况可以用 id
      
      ```css
      <h3 class="cs">class selector</h3>
      ```
    
    - ID 选择器：针对某**一个**特定的标签使用，规定用`#`来定义
      
      - ID 只能有字母、数字、下划线
      - 必须以字母开头
      - 不能和标签同名
      - html 页面，不能出现相同的 id
    
    ```css
    <style type="text/css">
        #myp {
          font-size: 50px;
        }
    </style>
    
    <body>
        <p id="myp">hi</p>
    </body>
    ```
    
    - 通用选择器：针对所有的标签都适用（不建议使用）
      
      - 匹配所有标签，可以用来清除初始效果
      
      ```css
      * {
          margin-left: 0px;
          margin-top: 0px;
      }
      ```
  
  - 扩展选择器
    
    - 后代选择器：用空格隔开
      
      - 对于`E F`这种格式，表示**所有属于 E 后代的 F 元素**，空格表示后代
      
      ```css
      /* 表示 类选择器 div 下的 p 标签会变成红色 */
      <style type="text/css">
          .div1 p {
              color: red;
          }
      </style>
      ```
    
    - 交集选择器：选择器之间紧密相连
      
      - 以标签名开头，比如`div.haha`
      - 如果后一个选择器是类选择器，则写为`div.special`；如果后一个选择器 id 选择器，则写为`div#special`
      
      ![](http://img.smyhvae.com/20170711_1851.png)
    
    - 并集选择器：用逗号隔开
      
      - 三种基本选择器都可以放进来
      
      ```css
      p,
      h1,
      #myp,
      .one {
          color: red;
      }
      ```
  
  - CSS3 选择器
    
    - 子代选择器
    
    ```css
    div > p {
        color: red;
    }
    ```
    
    - 序选择器
    
    ```css
    ul li:last-child {
        color: blue;
    }
    ```
    
    - 下一个兄弟选择器
    
    ```css
    <style type="text/css">
        h3 + p {
            color: red;
        }
    </style>
    ```

### 03 Pseudo-Class

- 伪类：同一个标签，根据其**不同的种状态，有不同的样式**，用 `:` 表示
  
  - 静态伪类：只能用于**超链接**的样式
    - `:link` 超链接点击之前
    - `:visited` 链接被访问过之后
  - 动态伪类：针对**所有标签**都适用的样式
    - `:hover` “悬停”：鼠标放到标签上的时候
    - `:active` “激活”：鼠标点击标签，但是不松手时
    - `:focus` 是某个标签获得焦点时的样式（比如某个输入框获得焦点）

- 超链接 a 标签
  
  - 包含四种伪类（重点），这四种状态**必须按照固定的顺序写**
    
    - `:link` “链接”：超链接点击之前
    - `:visited` “访问过的”：链接被访问过之后
    - `:hover` “悬停”：鼠标放到标签上的时候
    - `:active` “激活”：鼠标点击标签，但是不松手时
    
    ```css
    <style type="text/css">
        /*让超链接点击之前是红色*/
        a:link{
            color:red;
        }
    
        /*让超链接点击之后是绿色*/
        a:visited{
            color:orange;
        }
    
        /*鼠标悬停，放到标签上的时候*/
        a:hover{
            color:green;
        }
    
        /*鼠标点击链接，但是不松手的时候*/
        a:active{
            color:black;
        }
    </style>
    ```
  
  - a{} 和 link{} 的区别
    
    - `a{}`定义的样式针对所有的超链接(包括锚点)
    - `a:link{}`定义的样式针对所有写了href属性的超链接(不包括锚点)

### 04 Inheritance and Cascading

- 继承性
  
  - 有一些属性，当给自己设置的时候，自己的后代都继承上了，这个就是**继承性**
  - 继承性是从自己开始，直到最小的元素
  - 关于文字样式的属性，都具有继承性。包括 color、 text-开头的、line-开头的、font-开头的属性
  - 关于盒子、定位、布局的属性，都不能继承
  - 如果不能直接选中某个元素，通过继承性影响的话，那么权重是 0

- 层叠性（重要）：**就是 CSS 处理冲突的能力**
  
  - 计算权重
    - 当多个选择器，选择上了某个元素的时候，要按照如下顺序统计权重
      - ID 选择器
      - 类选择器、属性选择器、伪类选择器
      - 标签选择器、伪元素选择器
    - 选择器排序的优先级为：ID 选择器 > 类选择器 > 标签选择器
    - 权重相同，就近原则
    - 总结
      - 选择上了，数权重(id 的数量，类的数量，标签的数量)。如果权重一样，谁写在后面听谁的
      - 没有选择上，通过继承影响的，就近原则，谁描述的近听谁的。如果描述的一样近，比如选择器权重，如果权重再一样重，谁写在后面听谁的
  
  ![](http://img.smyhvae.com/20170727_2050.png)
  
  - 权重问题
    - !important 标记优先级最高
      - !important 提升的是一个属性，而不是一个选择器
      - !important 无法提升继承的权重，该是 0 还是 0
      - !important 不影响就近原则

### 05 Box model

- 盒子模型：div、span、a 都是盒子，但图片、表单元素一律看作是文本
  
  - 种类
    
    - 标准盒子模型
      
      ![](http://img.smyhvae.com/2015-10-03-css-27.jpg)
    
    - IE 盒子模型
      
      ![](http://img.smyhvae.com/2015-10-03-css-30.jpg)
  
  - 属性
    
    - width：宽度和真实占有宽度，不是一个概念
      - 真实占有宽度 = 左 border + 左 padding + width + 右 padding + 右 border
    - height：同理，高度和真实占有高度也不是一个概念
      - 真实占有宽度 = 上 border + 上 padding + height + 下 padding + 下 border
    - padding：内边距
      - padding 区域也是有颜色的
      - 存在四个方向
        - 综合写法：`padding: 30px 20px 40px 50px;`，分别表示上、右、下、左。如果只写了三个值，则顺序为上、右、下，最后一个值和右值一致。如果只写了两个值`30px 20px`，则表示为`30px 20px 30px 20px`
        - 单独写法：`padding-top: 30px; padding-right: 20px; padding-bottom: 40px; padding-left: 50px;`
      - 注意：**要用小属性层叠大属性**
    - border：边框
      - 三个要素：像素（粗细）、线型、颜色，如`border: 2px solid red;`，不写颜色则默认为黑色
      - 同 padding 类似，border 的要素是可以按方向和三要素进行拆分的
    - margin：外边距
      - 切记：`<body>` 标签也有 margin

### 06 Float

- 标准文档流
  - 特性
    - 空白折叠：无论多少个空格、换行、tab，都会折叠为一个空格
    - 高矮不齐，底边对齐
    - 自动换行，一行写不满，换行写
  - 标签分类
    - 文本级标签：p、span、a、b、i、u、em
    - 容器级标签：div、h系列、li、dt、dd
  - 元素分类
    - 行内元素：除了 p 标签之外，所有的文本级标签，都是行内元素
    - 块级元素：所有的容器级标签都是块级元素，还有 p 标签
    - 二者的转换
      - `display: inline;`将块级元素转换为行内元素，此时该标签和 span 标签无异
      - `display:block;`将行内元素转换为块级元素，此时该标签和 div 标签无异
    - 二者区别
      - 行内元素与其他行内元素并排，不能设置高和宽，默认的宽度为文字的宽度
      - 块级元素独自占用一行，不能与其他任何元素并列，能够设置高和宽。如果没有设置宽度，宽度将默认为父亲的 100%
  - 脱离标准流（脱标）方法
    - 浮动：一旦一个元素浮动了，那么该元素将能够并排了，并且能够设置宽高
      - 性质
        - 浮动的元素脱标
        - 浮动的元素互相贴靠
        - 浮动的元素有字围效果
        - 收缩：一个浮动的元素，如果没有设置 width，那么将自动收缩为内容的宽度
      - 浮动的清除
        - 给浮动元素的祖先元素加高度：如果一个元素要浮动，那么它的祖先元素一定要有高度。有高度的盒子，才能关住浮动
        - `clear:both;`即不允许左侧和右侧有浮动对象
        - 隔墙法
          - 内墙法
            - `<div class="cl"></div>`
            - 一个父亲是不能被浮动的儿子撑出高度的
          - 外墙法：在两部分浮动元素中间，建一个墙。隔开两部分浮动，让后面的浮动元素，不去追前面的浮动元素
        - `overflow:hidden;`: 所有溢出边框的内容，都要隐藏掉
      - 兼容性问题（解决办法：伴生属性）
        - IE6 不支持小于 12px 的盒子，任何小于 12px 的盒子，在 IE6 中看起来都很大
          - 可以在`height:6px;`后面增加`_font-size:0;`解决
        - IE6 不支持用`overflow:hidden;`来清除浮动
          - 可以在`overflow:hidden;`后面增加`_zoom:1;`解决
      - margin
        - 标准文档流中，竖直方向的 margin 不叠加，取**较大的值**作为 margin。水平方向的 margin 是可以叠加的，即水平方向没有塌陷现象
        - 盒子居中使用`margin:0 auto;`
        - 善于使用父亲的 padding，而不是儿子的 margin
        - IE6 中双倍 margin 的 bug：当出现连续浮动的元素，携带与浮动方向相同的 margin 时，队首的元素，会双倍 marign
          - 解决办法（面试必考点）
            - 使浮动的方向和 margin 的方向相反（推荐）
            - 单独给队首元素写一个一般的 margin
        - IE6 的 3px 的 bug：如果你出现了 3px bug，说明你的代码不标准

### 07 Position

- 固定位置：fixed
  - 用途
    - 返回到顶部
    - 顶部导航条
  - z-index
    - 数值大的压盖住数值小的
- 绝对位置：absolute
  - 绝对位置脱标
  - 参考点
    - top，**页面**的左上角
    - bottom，**浏览器首屏窗口尺寸**
  - 工程应用
    - 压盖效果
- 相对位置：relative
  - 相对位置不脱标
  - 用途
    - 微调元素
    - 做绝对定位的参考，子绝父相

### 08 CSS3 Selector

- 原本的选择器
  
  - 标签选择器：div
  - 类名选择器：.box
  - 伪类选择器：:link, :active, :visited, :hover
  - ID 选择器：#box
  - 后代选择器：div p
  - 交集选择器：div.box
  - 并集选择器：div,p,span
  - 子代选择器：div>p
  - 通配符：*
  - 选中 div 后面相邻的第一个 p：div+p
  - 选中 div 后面所有的 p：div~p

- CSS3 中新增的选择器
  
  - 属性选择器：[]
    
    ![](http://img.smyhvae.com/20180207_1500.png)
  
  - 结构伪类选择器：`:`
  
  - 伪元素选择器：`::`![](http://img.smyhvae.com/20180207_1503.png)

### 09 CSS3 Attr

- 文本
  
  - 设置文本阴影：`text-shadow: 20px 27px 22px pink;`，四个参数分别表示为水平位移、垂直位移、模糊程度、阴影颜色

- 盒模型：CSS3 中的定义，允许开发人员**指定盒子宽度和高度的计算方式**
  
  - `box-sizing`
    - 外加模式：`content-box`，CSS 中的默认方式
    - 内减模式：`border-box`

- 私有前缀：用来处理兼容性问题的常见方法

- 边框
  
  - 边框圆角
    - `border-radius: 20px 60px 100px 140px;`表示为从左上开始，顺时针赋值。如果当前角没有值，取对角的值
    - `border-radius: 60px;`表示为四个角的半径都相同
  - 边框阴影
    - `box-shadow: 15px 21px 48px -2px #666;`，其中的五个值分别表示为水平偏移、垂直偏移、模糊程度、阴影大小、阴影颜色

- 过渡`transition`：实现元素不同状态间的平滑过渡，用来制作动画效果
  
  - 补间动画：自动完成从起始状态到终止状态的的过渡，不用管中间的状态
  - 帧动画：通过一帧一帧的画面按照固定顺序和速度播放，如电影胶片
  - 属性：`transition: all 3s linear 0s;`
    - 所有属性都应用过渡：`transition-property: all;`
    - 过渡的持续时间：`transition-property: 1s;`
    - 运动曲线：`transition-timing-function: linear;`，有 ease、ease-in、ease-out、ease-in-out 可选
    - 过渡延迟：`transition-delay: 1s;`

- 2D transform：用来实现元素的**位移、旋转、变形、缩放**，甚至支持矩阵方式
  
  - 缩放`scale`：`transform: scale(x, y);`，x 和 y 分别表示水平和垂直方向的缩放倍数，值大于 1 表示放大，否则表示缩小
  - 位移`translate`：`transform: translate(-50%, -50%);`，正值：向右和向下；负值：向左和向上。如果只写一个值，则表示水平移动
  - 旋转`rotate`：`transform: rotate(45deg);`，正值：顺时针；负值：逆时针
  - 倾斜

- 3D transform
  
  - 旋转`rotateX, rotateY, rotateZ`：`transform: rotateX(360deg);`
  
  - 移动`translateX, translateY, translateZ`：`transform: translateY(360px);`
  
  - 透视`perspective`：透视可以将一个2D平面在转换的过程当中，呈现3D效果
    
    - 作为一个属性，设置给父元素，作用于所有3D转换的子元素
    - 作为 transform 属性的一个值，做用于元素自身。如`perspective: 500px;`
  
  - 3D 呈现 `transform-style
    
    - `transform-style: preserve-3d; `
    - `transform-style: flat;`

- 动画 `animation`
  
  - 定义动画
    
    - 通过 @keyframes 定义动画
    
    ```CSS
    /* define */
    @keyframes ani_name{
            from{ 初始状态 }
        to{ 结束状态 }
    }
    
    /* invoke */
    animation: ani_name 持续时间;
    
    /* step 表示分几步执行 */
    steps(num)
    ```
    
    - 将动画通过百分比分割成多个节点；然后各节点中分别定义各属性
    - 在指定元素里，通过 `animation` 属性调用动画

### 10 Flex Layout

- 概念
  
  - 弹性盒子：指的是使用 `display:flex` 或 `display:inline-flex` 声明的**父容器**，主要是用前者
    - `flex-direction`用来更换主轴和侧轴的方向的，包含 row, column, row-reverse, column-reverse 四个属性值
    - `flex-wrap`控制子元素溢出时的换行处理
    - `justify-content`控制子元素在主轴上的排列方式
  - 子元素、弹性元素：指的是父容器里面的子元素们（父容器被声明为 flex 盒子的情况下）
    - `justify-content: flex-start;` 设置子元素在**主轴上的对齐方式**，属性值包括 flex-start, flex-end, center, space-around, space-between
    - `align-items`：设置子元素在**侧轴上的对齐方式**，属性值包括 flex-start, flex-end, baseline, center, stretch
    - `flex`属性设置盒子的权重
  - ![](http://img.smyhvae.com/20190821_2101.png)
  - 主轴：flex 容器的主轴，默认是水平方向，从左向右
  - 侧轴：与主轴垂直的轴称作侧轴，默认是垂直方向，从上往下

- flex 布局
  
  - `display: flex`
  - 优势
    - **flex 布局的子元素不会脱离文档流**，很好地遵从了“流的特性”
    - **flex 是一种现代的布局方式，是 W3C 第一次提供真正用于布局的 CSS 规范**
  - 缺点：不支持低版本的 IE 浏览器

### 11 CSS Font

- 字体格式：**我们需要为不同的浏览器准备不同格式的字体**，通常我们通过字体生成工具帮助我们生成各种格式的字体
  - .ttf：.ttf 字体是 Windows 和 Mac 的最常见的字体，是一种 RAW 格式
  - .otf：.otf 字体被认为是一种原始的字体格式，其内置在 TureType 的基础上
  - .woff：.woff 字体是 Web 字体中最佳格式，它是一个开放的 TrueType/OpenType 的压缩版本，同时也支持元数据包的分离
  - .eot：.eot 字体是 IE 专用字体，可以从 TrueType 创建此格式字体
  - .svg：.svg 字体是基于 SVG 字体渲染的一种格式
- 字体使用

```CSS
/* 1. 使用 font-face 声明字体 */
@font-face {font-family: 'webfont';
    src: url('webfont.eot'); /* IE9*/
    src: url('webfont.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('webfont.woff') format('woff'), /* chrome、firefox */
    url('webfont.ttf') format('truetype'), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
    url('webfont.svg#webfont') format('svg'); /* iOS 4.1- */
}

/* 2 定义使用 webfont 的样式 */
.web-font{
    font-family:"webfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;}

/* 3 为文字加上对应的样式 */
<i class="web-font">This is a test.</i>
```

- 字体图标
  - [https://www.iconfont.cn/](https://www.iconfont.cn/)
  - [https://icomoon.io/](https://icomoon.io/)

### 12 [Sass](https://sass-lang.com/)

- Syntactically Awesome Stylesheets, Sass
  - 介绍
    - Sass 是这个世界上最成熟、稳定和强大的专业级 CSS 扩展语言
    - Sass 专注的是怎样创建优雅的样式表，而不是内容
    - Less/Sass 是语法，Compass 是框架，CSS 是目标
  - 安装 Sass/Compass
    - `./scripts/setup.sh`
  - 语法
    - 后缀：一个项目中可以混合使用两种语法，但是一个文件中不能同时使用两种语法
      - .sass：对空格敏感，不使用大括号和分号，所以每个属性之间是通过换行来分隔
      - .scss：是 CSS 语法的超集，可以使用大括号和分号
    - 变量：Sass 是通过`$`符号来声明变量
      - 通常我们会新建一个文件`_variables.scss`，这个文件专门用来存放变量，然后在其他文件中引入`_variables.scss`即可
      - 引入：`@import "variables";`
    - 注释：
      - 单行注释 //
      - 块级注释 /* */

## 03 CSS in Advanced

- CSS 非布局样式
  
  - 字体、字重、颜色、大小、行高
  
  - 背景、边框
  
  - 滚动、换行
    
    - `overflow-wrap`
    
    - `word-break`
    
    - `white-space`
      
      - `white-space: nowrap`
      
      - `white-space: pre-wrap`
  
  - 装饰性属性（粗体、斜体、下划线）
  
  - CSS Hack：可以用来解决一些浏览器的兼容性问题
  
  - CSS 效果
    
    - box-shadow：盒子的阴影
    
    - text-shadow：文本的阴影
    
    - border-radius
    
    - background
    
    - clip-path

- CSS 布局
  
  - 常见布局属性
    
    - display
    
    - position
  
  - 常见布局方法
    
    - table（弃用）
    
    - float + margin：为了兼容低版本的IE浏览器，很多网站（比如腾讯新闻、网易新闻、淘宝等）都会采用 float 布局
      
      - float 布局是 CSS 中一种比较麻烦的属性，涉及到 BFC 和清除浮动（面试的重点）
      
      - float 带来的影响
        
        - 对自身的影响
          
          - 形成块 BFC
          
          - 位置靠上
          
          - 位置靠左/右
        
        - 对兄弟元素的影响
          
          - 不影响其他块级元素的位置
          
          - 影响其他块级元素的内部文本
        
        - 对父级元素的影响
          
          - 从父级的布局中“消失”
          
          - 造成父级元素的高度塌陷：父级元素撑开 div1 之后（父级元素里没有其他元素的情况下），如果设置 div1 为 float 之后，会让父级元素的高度变为 0
    
    - inline-block：对外的表现是行内元素（不会独占一行），对内的表现是块级元素（可以设置宽高）
      
      - 像文本一样去排列 block 元素，没有清除浮动等问题
      
      - 存在的问题：需要处理间隙
    
    - flex：为布局而生，非常灵活，是最为推荐的布局写法
      
      - 其唯一的缺点是兼容性问题，flex 布局不支持 IE9 及以下的版本
    
    - 响应式布局：主要用于移动端

- 字体
  
  - 类别
    
    > **非衬线体更符合现代审美，做 PPT 不要用宋体。**
    
    - **serif（衬线体）**：在字的笔画开始、结束的地方有额外的装饰，而且笔画的粗细会有所不同
      
      - 宋体、楷体
      
      - Times New Roman
    
    - **sans-serif（无衬线体）**：笔划粗细基本一致，只剩下主干，造型简明有力，起源也很晚，适用于标题、广告等，识别性高
      
      - 黑体
      
      - Windows 平台默认的中文字体：微软雅黑（Microsoft Yahei）
      
      - Windows 平台默认的英文字体：Arial
      
      - Mac & iOS 平台默认的中文字体：苹方（PingFang SC）
      
      - Mac & iOS 平台默认的英文字体：San Francisco
      
      - Android 平台默认字体：Droid Sans
  
  - 族别
    
    - serif：衬线体
    
    - sans-serif：无衬线体
    
    - monospace：等宽字体。每一个字母所占的宽度是相同的。写代码的字体尽量用等宽字体
    
    - cursive：手写字体。比如徐静蕾手写体
    
    - fantasy：梦幻字体。比如一些艺术字
  
  - 多字体 fallback 机制：当指定的字体找不到（或者某些文字不支持这个字体）时，那就接着往后找
    
    - 写 CSS 代码时，字体族不需要带引号
    
    - 有些 Mac 用户会安装 Office 等软件，安装这些软件后，系统会顺带安装微软雅黑字体。此时，写 CSS 代码时，如果写成 `"Microsoft Yahei", "PingFang SC"`这种顺序，可能导致有些 Mac 用户用微软雅黑来显示字体
  
  - font-weight 属性
    
    - 在设置字体是否加粗时，属性值既可以直接填写 100 至 900 这样的数字，也可以填写`normal`、`bold`这样的单词。`normal`的值相当于 400，`bold`的值相当于 700
    
    - 在 Windows 下，**所有这些数值关键字浏览器都是支持的，之所以没有看到任何粗细的变化，是因为你所使用的字体不支持**
      
      - 微软雅黑只支持 400 和 700 这两种粗细
      
      - Mac 上的“苹方”字体，就支持从100到900之间的各种粗细
      
      - 阿里巴巴开源的普惠字体，也是支持多种粗细
    
    - 各大平台的默认字体加粗效果
      
      - Mac & iOS 平台的“苹方”字体：500 和 600，加粗效果是不同的，`>=600`的加粗效果是相同的
      
      - Windows 平台的“微软雅黑”字体：只有 `>=600` 才会加粗，而且加粗效果相同
      
      - Android 平台的 Droid Sans 字体，只有 `>=700`才会加粗，而且加粗效果相同
    
    - 注意⚠️
      
      - 大部分字体，都不是免费的。换句话说，如果你想用第三方字体从事商业活动，要先交钱，获得授权后才可以使用。你在给公司做网页的时候，就是一种商业行为
      
      - 大多数情况下，网页使用系统默认的字体就足够了。如果要使用特殊字体，顶多只是让**阿拉伯数字**使用特殊字体。中文和英文，使用默认字体，完全足够
      
      - 如果确实要使用特殊字体，只有这几种办法
        
        - 使用开源的免费字体（比如思源黑体、阿里巴巴普惠体等）。但这类字体，种类很少，而且不是很好看。网页开发中，基本没人用
        
        - 单独购买商用字体，获得授权
        
        - 自己公司开发一套字体，给自己人用
      
      - 免费商用的字体
        
        - [思源黑体（Source Han Sans）](https://github.com/adobe-fonts/source-han-sans/tree/release/)：Adobe 和 Google 在 2014 年 7 月联合推出的针对中日韩的开源字体，在字重（字体粗细程度）上分7个层级
        
        - 站酷系列字体
        
        - 方正系列：方正对外提供四款免费字体，楷体、黑体、仿宋、书宋，可以商业发布，只要不进行转换、改编、传播
        
        - 文泉驿系列字体
        
        - Font Space
      
      - [字体侵权查询](https://fonts.safe.360.cn/)

## 04 JavaScript

- Web 前端
  
  - HTML：描述页面结构
  
  - CSS：描述页面样式
  
  - JavaScript：描述页面行为

- JavaScript
  
  > 未写明详细信息的，表明与其他语言知识点相似，需自行学习。
  
  - JavaScript 运行三部曲
    
    - 语法分析
    
    - 预编译
      
      - 规律
        
        - **任何变量，如果未经声明就赋值，此变量是属于 window 的属性**，而且不会做变量提升
        
        - **一切声明的全局变量，全是window的属性**
      
      - 步骤
        
        - 创建 AO 对象。AO 即 Activation Object 活跃对象，其实就是执行期上下文
        
        - 找形参和变量声明，将形参名和变量作为 AO 的属性名，值为undefined
        
        - 将实参值和形参统一，实参的值赋给形参
        
        - 查找函数声明，函数名作为 AO 对象的属性名，值为整个函数体
    
    - 解释执行
  
  - 组成
    
    > 通俗理解就是：ECMAScript 是 JS 的语法；DOM 和 BOM 是浏览器运行环境为 JS 提供的 API
    
    - ECMAScript：JavaScript 的语法标准，包括变量、表达式、运算符、函数、if 语句、for 语句等
    
    > 参考：https://es6.ruanyifeng.com
    
    - DOM：Document Object Model（文档对象模型），JS 操作**页面上的元素**（标签）的 API，比如让盒子移动、变色、改变大小、轮播图等等
    
    - BOM：Browser Object Model（浏览器对象模型），JS 操作**浏览器部分功能**的 API。通过 BOM 可以操作浏览器窗口，比如弹框、控制浏览器跳转、获取浏览器分辨率等等
  
  - 特点
    
    - 解释型语言
    
    - 单线程
    
    - ECMAScript 标准
  
  - 引入方式
    
    - **行内式**：写在标签内部
      
      - `<input type="button" value="Click" onclick="alert('Inline')" />`
    
    - **内嵌式**（内联式）：写在 head 标签中
      
      - `<script type=”text/javascript”></script>`
    
    - **外链式（推荐）**：引入外部 JS 文件
      
      - `<script src="utils.js"></script>`
    
    > 当你**需要通过 JS 来操作界面上的标签元素**的时候，如果实在想把 JS 写到`<head>`标签中，那么就必须用 window.onload 将 JS 代码进行包裹。**window.onload** 的含义是等界面上所有内容都加载完毕后（不仅要等文本加载完毕，而且要等图片也要加载完毕），再执行`{}`中的代码。做到了**先加载，最后执行**，也就是**等页面加载完毕后再执行**。
  
  - 语法规则
    
    - 以分号结尾，也可以不加，推荐加上
    
    - 区分大小写
    
    - 单行注释`// `和多行注释`/* xxx */`
    
    - 输出语句
      
      - alert() 弹窗
      
      - confirm() 弹窗（含确认/取消）
      
      - prompt() 弹出输入框
      
      - document.write() 网页内容区域输出
      
      - console.log() 控制台输出
      
      > alert() 主要用来显示消息给用户，console.log() 用来给程序员做调试用。alert() 语句中可以输出数字和字符串，如果要输出字符串，则必须用引号括起来；prompt() 语句中，用户不管输入什么内容，都是字符串。prompt() 会返回用户输入的内容，我们可以用一个变量，来接收用户输入的内容。
    
    - 变量与常量、关键字等基本同其他语言
    
    - 数据类型
      
      - 基本数据类型（值类型，传值）：String 字符串、Number 数值、BigInt 大型数值、Boolean 布尔值、Null 空值、Undefined 未定义、Symbol，都存储在栈区
        
        - String
          
          - `""` 或者 `''`
          
          - 字符串具有不可变性
          
          - 获取长度，str.length
        
        - Number
          
          - 最大值：Number.MAX_VALUE
          
          - 最小值：Number.MIN_VALUE
          
          - 无穷大（正无穷）：Infinity
          
          - 无穷小（负无穷）：-Infinity
          
          - NaN: Not a Number
            
            - `typeof NaN`的返回结果是 number
            
            - Undefined 和任何数值计算的结果为 NaN。NaN 与任何值都不相等，包括 NaN 本身
            
            - isNaN()
        
        - Null
        
        - Undefined
          
          - 变量已声明，未赋值时
          
          - 变量未声明（未定义）时
          
          - 函数无返回值时
          
          - 调用函数时，未传参
          
          - 注意
            
            - 任何值和 null 运算，null 可看做 0 运算
            
            - 任何数据类型和 undefined 运算都是 NaN
      
      - 引用数据类型（引用类型，传地址）：Object 对象，存储在堆区
        
        - 内置对象 Function、Array、Date、RegExp、Error 等都是属于 Object 类型。也就是说，除了七种基本数据类型之外，其他的都是 Object 类型
    
    - 数据类型转换 typeof
      
      - `typeof var_name` or `typeof(var_name)`
      
      - 显式类型转换
        
        - toString()
        
        - String()
        
        - Number()
        
        - Boolean()
          
          - null 和 undefined 都会转换为 false
          
          - 引用数据类型会转换为 true，空数组`[]`和空对象`{}`，**转换结果也是 true**
          
          - 使用 `!!`可以显式转换为 Boolean 类型，如 `!!3`的结果是 true
      
      - 隐式类型转换
        
        - isNaN()
          
          - **任何不能被转换为数值的参数，都会让这个函数返回 true**
        
        - 自增/自减运算符、正号/负号、加减乘除
        
        - 注意
          
          - **字符串 + XX = 字符串**
          
          - **Boolean + 数字 = 数字**
          
          - **null + 数字 = 数字**
          
          - **undefined + 数字 = NaN**
          
          - 任何值和 NaN 做运算的结果都是 NaN
      
      - 隐式类型转换（特殊）
        
        - 逻辑运算符
        
        - 关系运算符
    
    - 运算符：操作符，是一种符号。通过运算符可以对一个或多个值进行运算，并获取运算结果
      
      - 分类
        
        - 算数运算符
          
          - **不要直接判断两个浮点数是否相等**
        
        - 自增/自减运算符
        
        - 一元运算符
        
        - 逻辑运算符
          
          - JS 中的逻辑运算符为**短路运算**
          
          - 非布尔值进行**与或运算**时，会先将其转换为布尔值，然后再运算，但返回结果是**原值**
        
        - 赋值运算符
        
        - 比较运算符
          
          - 等于`==`**判断是否等于**，而不是赋值
          
          - 全等于`===`为绝对等于，在比较时**不会做类型转换**
        
        - 三元运算符（条件运算符）
    
    - 流程控制：基本同 Go 的语法
      
      - if
      
      - switch
      
      - for
      
      - while
      
      - break
        
        - break 可以用来退出 switch 语句或退出**整个**循环语句，包括 for 循环、while 循环。单独的 if 语句里不能用 break 和 continue，否则会报错
        
        - break 会立即终止离它**最近**的那个循环语句
      
      - continue
        
        - continue 可以用来跳过**当次**循环，继续下一次循环
        
        - continue 默认只会离他**最近**的循环起作用
    
    - 对象
      
      - 概念：在 JavaScript 中，对象是一组**无序**的相关属性和方法的集合
      
      - 特点：封装、继承、多态
      
      - 作用：封装信息，如Student类里可以封装学生的姓名、年龄、成绩等
      
      - 存储位置：对象的值在堆上，对象的引用在栈上
      
      - 分类
        
        - 内置对象
          
          - 由 ES 标准中定义的对象，在任何的 ES 的实现中都可以使用
          
          - 如 Object、Math、Date、String、Array、Number、Boolean、Function 等
            
            - 与 Math 对象不同，Date 对象是一个**构造函数** ，需要**先实例化**后才能使用
        
        - 宿主对象
          
          - 由 JS 的运行环境提供的对象，目前来讲主要指由浏览器提供的对象
          
          - 如 BOM DOM 的 `console`、`document`
        
        - 自定义对象
          
          - 通过 new 关键字创建出来的对象实例，都是属于对象类型，比如Object、Array、Date等
          
          - 创建方法
            
            - 对象字面量
            
            - 工厂模式 new Object()
            
            - 构造函数
      
      - 补充
        
        - 对象的属性值可以是任何的数据类型，也可以是个**函数**
        
        - 对象中的属性值，也可以是一个**对象**
        
        - **如果两个变量保存的是同一个对象引用，当一个通过一个变量修改属性时，另一个也会受到影响**
    
    - 基本包装类型
      
      - **基本包装类**
        
        - String()：将基本数据类型字符串，转换为 String 对象
        
        - Number()：将基本数据类型的数字，转换为 Number 对象
        
        - Boolean()：将基本数据类型的布尔值，转换为 Boolean 对象
      
      - 注意
        
        - 基本数据类型不能绑定属性和方法
        
        - 引用数据类型可以绑定属性和方法
        
        - 在底层，字符串是以字符数组的形式保存的
    
    - 数组
      
      - 数组中的元素可以是任意的数据类型，也可以是对象，也可以是函数，也可以是数组
      
      - 创建数组
        
        - `var arr = [];` or `var arr = [1 1 1];`
        
        - `let arr = new Array(para);` or `let arr = Array(para);`
      
      - [常用数组方法](https://web.qianguyihao.com/04-JavaScript%E5%9F%BA%E7%A1%80/19-%E6%95%B0%E7%BB%84%E7%9A%84%E5%B8%B8%E8%A7%81%E6%96%B9%E6%B3%95.html#%E6%95%B0%E7%BB%84%E7%9A%84%E6%96%B9%E6%B3%95%E6%B8%85%E5%8D%95)
    
    - 函数
      
      - 函数有哪几种定义和调用方式
        
        - `function funcName(para1, para2, ...) {}`
        
        - `var varName = function(para1, para2, ...) {}`
        
        - `var varName/funcName = new Function(para, func body);`
        
        - 调用
          
          - `funcName();`
          
          - `(function() { console.log("test"); })();` 类似 Go 的闭包
        
        - return
          
          - return 的值将会作为函数的执行结果返回，可以定义一个变量，来接收该结果
          
          - 在函数中，return后的语句都不会执行（函数在执行完 return 语句之后停止并立即退出函数）
          
          - 如果return语句后不跟任何值，就相当于返回一个undefined
          
          - 如果函数中不写return，则也会返回undefined
          
          - 返回值可以是任意的数据类型，可以是对象，也可以是函数
          
          - return 只能返回一个值。如果用逗号隔开多个值，则以最后一个为准
      
      - this：解析器在调用函数每次都会向函数内部传递进一个隐含的参数，这个隐含的参数就是 this，this 指向的是一个对象，这个对象我们称为函数执行的**上下文对象**
        
        - 函数内部的 this 指向
          
          - 以函数的形式（包括普通函数、定时器函数、立即执行函数）调用时，this 的指向永远都是 window。比如`fun();`相当于`window.fun();`
          
          - 以方法的形式调用时，this 指向调用方法的那个对象
          
          - 以构造函数的形式调用时，this 指向实例对象
          
          - 以事件绑定函数的形式调用时，this 指向**绑定事件的对象**
          
          - 使用 call 和 apply 调用时，this 指向指定的那个对象
        
        - 箭头函数中的 this 指向
          
          - ES6 中的箭头函数并不会使用上面的准则，而是会继承外层函数调用的 this 绑定（无论 this 绑定到什么）
        
        - 如何改变 this 的指向
          
          - JS 专门为我们提供了 call()、apply()、bind() 方法来改变函数内部的 this 指向
          
          - call()
            
            - 可以**调用**一个函数，与此同时，它还可以改变这个函数内部的 this 指向
            
            - **可以实现继承**。之所以能实现继承，其实是利用了上面的作用
          
          - apply()
            
            - 可以**调用**一个函数，与此同时，它还可以改变这个函数内部的 this 指向
            
            - 可以用来求数组的最大值
          
          - bind()
            
            - **不会调用函数**，但是可以改变函数内部的 this 指向
      
      - 函数的严格模式
      
      - 高阶函数：当函数 A 接收函数 B 作为**参数**，或者把函数 C 作为**返回值**输出时，我们称函数 A 为高阶函数
        
        - 函数作为参数传递
        
        - 函数作为返回值传递
      
      - 闭包：指有权**访问**另一个函数作用域中**变量**的**函数**
        
        - 闭包的作用：延伸变量的作用范围
      
      - 深拷贝和浅拷贝的区别
        
        - 浅拷贝只拷贝最外面一层的数据；更深层次的对象，只拷贝引用
          
          - 用 Object.assgin() 实现浅拷贝
        
        - 深拷贝拷贝多层数据；每一层级别的数据都会拷贝
          
          - 深拷贝其实就是将浅拷贝进行递归
    
    - 正则表达式：用于定义一些字符串的规则
      
      - 创建
        
        - `var varName = new RegExp("expression");`
        
        - `var varName = /expression/;`
    
    - 事件：就是文档或浏览器窗口中发生的一些特定的交互瞬间
      
      - 三要素：**事件源、事件、事件驱动程序**
        
        - 事件源：引发后续事件的 html 标签
        
        - 事件：JS 已经定义好了
        
        ![](http://img.smyhvae.com/20180126_1553.png)
        
        - 事件驱动程序：对样式和 html 的操作，也就是 DOM
      
      - 事件的绑定
        
        - 方法一：DOM0的写法：onclick
        
        ```html
        element.onclick = function () {
        
        }
        ```
        
        - 方法二：DOM2的写法：addEventListener
        
        ```html
        // 高版本浏览器
        element.addEventListener('click', function () {
        
        }, false);
        
        参数1：事件名的字符串(注意，没有on)
        参数2：回调函数：当事件触发时，该函数会被执行
        参数3：true表示捕获阶段触发，false表示冒泡阶段触发（默认）。如果不写，则默认为false
        
        // IE8及以下版本浏览器
        element.attachEvent('onclick', function () {
        
        });
        
        参数1：事件名的字符串(注意，有on)
        参数2：回调函数：当事件触发时，该函数会被执行
        ```
      
      - 事件对象
        
        - 当事件的响应函数被触发时，会产生一个事件对象`event`。浏览器每次都会将这个事件`event`作为实参传进之前的响应函数。这个对象中包含了与当前事件相关的一切信息。比如鼠标的坐标、键盘的哪个按键被按下、鼠标滚轮滚动的方向等
        
        - 获取 event 对象
        
        ```html
        event = event || window.event; // 兼容性写法
        ```
        
        - event 属性
        
        ![](http://img.smyhvae.com/20180203_1739.png)
      
      - 事件传播
        
        - 事件传播的三个阶段分别是：事件捕获、事件冒泡和目标)
          
          ![](http://img.smyhvae.com/20180204_1218.jpg)
          
          - 事件捕获阶段：事件从祖先元素往子元素查找（DOM树结构），直到捕获到事件目标 target。在这个过程中，默认情况下，事件相应的监听函数是不会被触发的
            
            - 捕获阶段，事件依次传递的顺序是：window --> document --> html--> body --> 父元素、子元素、目标元素
            
            ```html
            // addEventListener 可以捕获事件
            box1.addEventListener("click", function () {
                    alert("捕获 box3");
            }, true);
            ```
          
          - 事件目标：当到达目标元素之后，执行目标元素该事件相应的处理函数。如果没有绑定监听函数，那就不执行
          
          - 事件冒泡阶段：事件从事件目标 target 开始，从子元素往冒泡祖先元素冒泡，直到页面的最上一级标签
      
      - 事件冒泡
        
        - 当一个元素上的事件被触发的时候（比如说鼠标点击了一个按钮），同样的事件将会在那个元素的所有**祖先元素**中被触发，这一过程被称为事件冒泡，这个事件从原始元素开始一直冒泡到 DOM 树的最上层
        
        - 通俗来讲，冒泡指的是**子元素的事件被触发时，父元素的同样的事件也会被触发**，取消冒泡就是取消这种机制
        
        - 冒泡顺序
          
          - 一般的浏览器: （除IE6.0之外的浏览器）：div -> body -> html -> document -> window
          
          - IE6.0：div -> body -> html -> document
        
        - 以下事件不冒泡：blur、focus、load、unload、onmouseenter、onmouseleave，即事件不会往父元素那里传递
        
        - 阻止冒泡
        
        ```html
        //w3c的方法（火狐、谷歌、IE11）
        event.stopPropagation();
         
        // IE10 以下
        event.cancelBubble = true
        ```
      
      - 事件委托
        
        - 把一个元素响应事件（click、keydown......）的函数委托到另一个元素
        
        - 事件委托是利用了冒泡机制，减少了事件绑定的次数，减少内存消耗，提高性能
      
      - 键盘事件
        
        - 拖拽事件
          
          - 拖拽流程
            
            - `onmousedown`：当鼠标在被拖拽元素上按下时，开始拖
            
            - `onmousemove`：当鼠标移动时被拖拽元素跟随鼠标移动
            
            - `onmouseup`：当鼠标松开时，被拖拽元素固定在当前位置
        
        - 滚轮事件
          
          - `onmousewheel`：鼠标滚轮滚动的事件，会在滚轮滚动时触发。但是火狐不支持该属性
          
          - `DOMMouseScroll`：在火狐中需要使用 DOMMouseScroll 来绑定滚动事件。注意该事件需要通过 addEventListener() 函数来绑定
        
        - 键盘事件
          
          - `onkeydown`：按键被按下
          
          - `onkeyup`：按键被松开
      
      - 事件编写步骤
        
        - 获取事件源 div
          
          - 获取方式
          
          ```html
          var div1 = document.getElementById("box1");      //方式一：通过id获取单个标签
          
          var arr1 = document.getElementsByTagName("div");     //方式二：通过 标签名 获得 标签数组，所以有s
          
          var arr2 = document.getElementsByClassName("hehe");  //方式三：通过 类名 获得 标签数组，所以有s
          ```
        
        - 绑定事件 onclick： div.onclick = function(){ 事件驱动程序 };
          
          - 绑定方式
            
            - 直接绑定匿名函数
            
            ```html
            <div id="box1" ></div>
            
            <script type="text/javascript">
                var div1 = document.getElementById("box1");
                //绑定事件的第一种方式
                div1.onclick = function () {
                    alert("我是弹出的内容");
                }
            </script>
            ```
            
            - 先单独定义函数，再绑定
            
            ```html
             <div id="box1" ></div>
            
            <script type="text/javascript">
                var div1 = document.getElementById("box1");
                //绑定事件的第二种方式
                div1.onclick = fn;   //注意，这里是fn，不是fn()。fn()指的是返回值。
                //单独定义函数
                function fn() {
                    alert("我是弹出的内容");
                }
            </script>
            ```
            
            - 行内绑定
            
            ```html
            <!--行内绑定-->
            <div id="box1" onclick="fn()"></div>
            
            <script type="text/javascript">
            
                function fn() {
                    alert("我是弹出的内容");
                }
            
            </script>
            ```
        
        - 书写事件驱动程序：关于 DOM 的操作
        
        ```html
        <body>
        <div id="box1"></div>
        
        <script type="text/javascript">
            // 1、获取事件源
            var div = document.getElementById("box1");
            // 2、绑定事件
            div.onclick = function () {
                // 3、书写事件驱动程序
                alert("我是弹出的内容");
            }
        </script>
        
        </body>
        ```
    
    - DOM：文档对象模型（Document object Model），操作**网页上的元素**的API，如让盒子移动、变色、轮播图等
      
      - DOM 由节点组成
        
        - 节点：构成 HTML 网页的最基本单元。网页中的每一个部分都可以称为是一个节点，比如 html标签、属性、文本、注释、整个文档等都是一个节点
          
          - 分类：所有的节点都是 Object
            
            - 文档节点（文档）：整个 HTML 文档
            
            - 元素节点（标签）：HTML 标签
            
            - 属性节点（属性）：元素的属性
            
            - 文本节点（文本）：HTML 标签中的文本内容（包括标签之间的空格、换行）
          
          - 获取节点
            
            - 获取 html 节点：`document.documentElement`
            
            - 获取 body 节点：``document.body
        
        - **解析过程**： HTML 加载完毕，渲染引擎会在内存中把 HTML 文档生成一棵 DOM 树，getElementById 获取内存中 DOM 上的元素节点，操作的时候修改的是该元素的**属性**)
        
        ![](http://img.smyhvae.com/20180126_2105.png)
        
        - DOM 可以做什么
          
          - 找对象（元素节点）
          
          - 设置元素的属性值
          
          - 设置元素的样式
          
          - 动态创建和删除元素
          
          - 事件的触发响应：事件源、事件、事件的驱动程序
        
        - 元素节点的获取
          
          - 获取 DOM 节点的方式（上面的笔记里已经覆盖）
        
        - DOM 访问关系（属性）的获取
          
          ![](http://img.smyhvae.com/20180126_2145.png)
          
          - 获取父节点
            
            - ```html
              节点.parentNode
              ```
          
          - 获取兄弟节点
            
            - ```html
              下一个兄弟节点 = 节点.nextElementSibling || 节点.nextSibling
              前一个兄弟节点 = 节点.previousElementSibling || 节点.previousSibling
              兄弟节点 = 节点自己.parentNode.children[index];
              ```
          
          - 获取单个的子节点
            
            - ```html
              第一个子元素节点 = 节点.firstElementChild || 节点.firstChild
              最后一个子元素节点 = 节点.lastElementChild || 节点.lastChild
              ```
          
          - 获取所有的子节点
            
            - ```html
              子节点数组 = 父节点.childNodes;  // 1
              子节点数组 = 父节点.children;  // 2
              ```
        
        - DOM 节点的操作（函数或者方法）
          
          - 创建节点
            
            - ```html
              新的标签(元素节点) = document.createElement("标签名");
              ```
          
          - 插入节点
            
            - ```html
              父节点.appendChild(新的子节点);
              父节点.insertBefore(新的子节点,作为参考的子节点);
              ```
          
          - 删除节点
            
            - ```html
              父节点.removeChild(子节点);
              ```
          
          - 复制（克隆）节点
            
            - ```html
              要复制的节点.cloneNode(); // 不带参数/带参数false：只复制节点本身，不复制子节点
              要复制的节点.cloneNode(true); // 带参数true：既复制节点本身，也复制其所有的子节点
              ```
        
        - 设置节点的属性
          
          - 获取节点的属性值
            
            - ```html
              // 1
              元素节点.属性名;
              元素节点[属性名];
              
              // 2
              元素节点.getAttribute("属性名称");
              ```
          
          - 设置节点的属性值
            
            - ```html
              myNode.src = "images/2.jpg"   //修改src的属性值
              myNode.className = "image2-box";  //修改class的name
              
              元素节点.setAttribute("属性名", "新的属性值");
              ```
          
          - 删除节点属性
            
            - ```html
              元素节点.removeAttribute(属性名);
              ```
      
      - 属性补充
        
        - innerHTML 和 innerText 的区别
          
          - **innerHTML**：双闭合标签里面的内容（包含标签）
          
          - **innerText**：双闭合标签里面的内容（不包含标签）
        
        - nodeType
          
          - **nodeType == 1 表示的是元素节点**（标签），即这里的元素就是标签
          
          - nodeType == 2 表示是属性节点
          
          - nodeType == 3 是文本节点
        
        - nodeType、nodeName、nodeValue
        
        - style 属性：style 是一个对象，只能获取行内样式，不能获取内嵌的样式和外链的样式
          
          - DOM 中设置样式的方式
            
            - className（针对内嵌样式）
            
            - style（针对行内样式）
              
              - 通过 JS 读取元素的样式
              
              ```html
                元素.style.样式名; // 1
              
                 元素.style["属性"]; // 2 可以给属性传递参数
              ```
              
              - 通过 JS 设置元素的样式
              
              ```html
              元素.style.样式名 = 样式值;
              ```
              
              - 通过 JS 获取元素当前显示的样式
              
              ```html
              // w3c 的做法
              window.getComputedStyle("要获取样式的元素", "伪元素");  
              
              // IE 和 Opera 的做法
               obj.currentStyle;
              ```
          
          - 注意事项
            
            - 样式少的时候使用
            
            - style 是对象
            
            - 值是字符串，没有设置值是`""`
            
            - 命名规则，驼峰命名
            
            - 只能获取行内样式，和内嵌和外链无关
            
            - box.style.cssText = “字符串形式的样式”
          
          - 常用属性
            
            - backgroundColor
            
            - backgroundImage
            
            - color
            
            - width
            
            - height
            
            - border
            
            - opacity 设置透明度
        
        - offset 属性
          
          - JS 中有一套方便的**获取元素尺寸**的办法就是 offset 家族
            
            - offsetWidth/offsetHight：获取元素的**宽高 + padding + border**，不包括margin
              
              - offsetWidth = width + padding + border
              
              - offsetHeight = Height + padding + border
            
            - offsetLeft：当前元素相对于其**定位父元素**的水平偏移量
            
            - offsetTop：当前元素相对于其**定位父元素**的垂直偏移量
            
            - offsetParent：获取当前元素的**定位父元素**
              
              - 如果当前元素的父元素，**有CSS定位**（position为absolute、relative、fixed），那么 `offsetParent` 获取的是**最近的**那个父元素
              
              - 如果当前元素的父元素，**没有CSS定位**（position为absolute、relative、fixed），那么`offsetParent` 获取的是**body**
            
            - offsetLeft 和 style.left 区别：**用 offsetLeft 和 offsetTop 获取值，用 style.left 和 style.top 赋值**
              
              - style.left：只能获取行内式，获取的值可能为空，容易出现NaN
              
              - offsetLeft：获取值特别方便，而且是现成的number，方便计算。它是只读的，不能赋值
        
        - scroll 属性
          
          - 当我们用鼠标滚轮，滚动网页的时候，会触发 window.onscroll() 方法
          
          - 属性
            
            - `ScrollWidth` 和 `scrollHeight`：获取元素**整个滚动区域**的宽、高。包括 width 和 padding，不包括 border 和 margin
            
            - `scrollLeft`：获取水平滚动条滚动的距离。`scrollTop`：获取垂直滚动条滚动的距离
            
            - 当某个元素满足`scrollHeight - scrollTop == clientHeight`时，说明垂直滚动条滚动到底了。当某个元素满足`scrollWidth - scrollLeft == clientWidth`时，说明水平滚动条滚动到底了
            
            - 兼容性写法
            
            ```html
            window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;
            ```
            
            - 判断是否已经 DTD 声明
            
            ```html
            document.compatMode === "CSS1Compat"   // 已声明
            document.compatMode === "BackCompat"   // 未声明
            ```
            
            - 获取 html 文档的方法
              
              - `document.title` 文档标题；
              
              - `document.head` 文档的头标签
              
              - `document.body` 文档的body标签；
              
              - `document.documentElement` （这个很重要）
        
        - client 属性
          
          - clientWidth 和 clientHeight
            
            - 元素调用时
              
              - clientWidth：获取元素的可见宽度（width + padding）
              
              - clientHeight：获取元素的可见高度（height + padding）
            
            - body/html 调用时
              
              - clientWidth：获取网页可视区域宽度
              
              - clientHeight：获取网页可视区域高度
          
          - clientX 和 clientY
            
            - event调用：
              
              - clientX：鼠标距离可视区域左侧距离
              
              - clientY：鼠标距离可视区域上侧距离
          
          - clientTop 和 clientLeft
            
            - clientTop：盒子的上border
            
            - clientLeft：盒子的左border
          
          - 获取浏览器的宽高（可视区域）
          
          - 获取显示器分辨率
          
          ```html
          window.onresize = function () {
              document.title = window.screen.width + "    " + window.screen.height;
          }
          ```
        
        - offset/scroll/client三大属性的区别
          
          - 区别1：宽高
            
            - offsetWidth = width + padding + border
            
            - offsetHeight = height + padding + border
            
            - scrollWidth = 内容宽度（不包含border）
            
            - scrollHeight = 内容高度（不包含border）
            
            - clientWidth = width + padding
            
            - clientHeight = height + padding
          
          - 区别2：上左
            
            - offsetTop/offsetLeft
              
              - 调用者：任意元素(盒子为主)
              
              - 作用：距离父系盒子中带有定位的距离
            
            - scrollTop/scrollLeft
              
              - 调用者：document.body.scrollTop（window调用）(盒子也可以调用，但必须有滚动条)
              
              - 作用：浏览器无法显示的部分（被卷去的部分）
            
            - clientY/clientX
              
              - 调用者：event
              
              - 作用：鼠标距离浏览器可视区域的距离（左、上）
        
        - 动画
          
          - JS 动画的主要内容
            
            - 三大家族和一个事件对象
              
              - 三大家族：offset/scroll/client，也叫三大系列
              
              - 事件对象/event（事件被触动时，鼠标和键盘的状态，通过属性控制）
            
            - 动画种类
              
              - 闪现
              
              - 匀速（重点）
              
              - 缓动（重点）
                
                - 原理：在移动的过程中，步长越来越小
                  
                  - ```html
                    盒子位置 = 盒子本身位置 + (目标位置 - 盒子本身位置)/ 10；
                    ```
                
                - 常用的三个函数
                  
                  - Math.ceil() 向上取整
                  
                  - Math.floor() 向下取整
                  
                  - Math.round(); 四舍五入
            
            - 冒泡/兼容/封装
      
      - 文档的加载
        
        - 浏览器在加载一个页面时，是按照自上向下的顺序加载的，读取到一行就运行一行。如果将 script 标签写到页面的上边，在代码执行时，页面还没有加载，页面没有加载 DOM 对象也没有加载，会导致无法获取到 DOM 对象
        
        - onload 事件会在整个页面加载完成之后才触发。为 window 绑定一个onload 事件，该事件对应的响应函数将会在页面加载完成之后执行，这样可以确保我们的代码执行时所有的DOM对象已经加载完毕了
    
    - BOM
    
      - BOM 是构成 JavaScript 基础的一份子，另外两个分别是 DOM 和 ECMAScript 标准
      - BOM 是浏览器对象模型（Browser Object Model），是能够操作浏览器部分功能的API，如让浏览器自动滚动
      - 常见 BOM 对象
        - Window：代表整个浏览器的窗口，同时 window 也是网页中的全局对象
        - Navigator：代表当前浏览器的信息，通过该对象可以识别不同的浏览器
        - Location：代表当前浏览器的地址栏信息，通过 Location 可以获取地址栏信息，或者操作浏览器跳转页面
        - History：代表浏览器的历史记录，通过该对象可以操作浏览器的历史记录。由于隐私原因，该对象不能获取到具体的历史记录，只能操作浏览器向前或向后翻页，而且该操作只在当次访问时有效
        - Screen：代表用户的屏幕信息，通过该对象可以获取用户的显示器的相关信息
    
    - 定时器
    
      - 常见方法
        - setInterval()：循环调用。将一段代码，每隔一段时间执行一次
        - setTimeout()：延时调用。将一段代码，等待一段时间之后再执行
    
    - jQuery
    
      - jQuery 是 JS 的一个库，封装了我们开发过程中常用的一些功能，方便我们调用，提高开发效率
    
      - 特点
    
        - 链式调用
        - 隐式迭代
    
      - 使用 jQuery 的基本步骤
    
        - 引入包
    
        - 入口函数
    
          - 和 JS 的入口函数的区别
    
            - JS 中只能有一个入口函数，多个入口函数会存在覆盖关系，jQuery 中则没有该限制
            - JS 的入口函数是在所有的文件资源加载完成后，才执行。这些文件资源包括：页面文档、外部的js文件、外部的css文件、图片等；jQuery 的入口函数是在文档加载完成后就执行。文档加载完成指的是：DOM 树加载完成后，就可以操作 DOM 了，不用等到所有的外部资源加载完成
    
          - 写法
    
            ```javascript
            // 1.文档加载完毕，图片不加载的时候，就可以执行这个函数。
                   $(document).ready(function () {
                       alert(1);
                   })
            
            // 2.文档加载完毕，图片不加载的时候，就可以执行这个函数。
                   $(function () {
                       alert(1);
                   });
            
            // 3.文档加载完毕，图片也加载完毕的时候，在执行这个函数。
                   $(window).ready(function () {
                       alert(1);
                   })
            ```
    
            
    
        - 功能实现（事件处理）
    
      - jQuery 中对象和 JS 中的 DOM 对象
    
        - 区别
          - 通过 jQuery 获取的元素是一个数组，数组中包含着原生 JS 中的 DOM 对象
        - 转换
          - DOM -> JS Obj: $(JS Obj);
          - JQuery -> DOM: jQuery-Obj[idx];
    
      - jQuery 选择器
    
        - JS 选择器
    
        > ![](http://img.smyhvae.com/20180204_2122.png)
    
        - jQuery 基本选择器
    
        > ![](http://img.smyhvae.com/20180204_2125.png)
    
        > ![](http://img.smyhvae.com/20180204_2126.png)
    
        - 层级选择器
    
        > ![](http://img.smyhvae.com/20180204_2138.png)
    
        > ![](http://img.smyhvae.com/20180204_2139.png)
    
        - 基本过滤选择器
    
        > ![](http://img.smyhvae.com/20180204_2150.png)
    
        > ![](http://img.smyhvae.com/20180204_2151.png)
    
        - 属性选择器
    
        > ![](http://img.smyhvae.com/20180204_2155.png)
    
        - 筛选选择器
    
        > ![](http://img.smyhvae.com/20180204_2200.png)
    
      - jQuery 动画
    
        - 显示动画
    
        - ```javascript
          $("div").show();
          $("div").show(2000);
          $("div").show("slow");
          
          //show(毫秒值，回调函数;
          $("div").show(5000,function () {
              alert("动画执行完毕！");
          });
          ```
    
        - 隐藏动画
    
        - ```javascript
          $(selector).hide();
          
          $(selector).hide(1000);
          
          $(selector).hide("slow");
          
          $(selector).hide(1000, function(){});
          ```
    
        - 滑入滑出
          - 滑入：`$(selector).slideDown(speed, 回调函数);`
          - 滑出：`$(selector).slideUp(speed, 回调函数);`
          - 切换：`$(selector).slideToggle(speed, 回调函数);`
        - 淡入淡出
          - 淡入：`$(selector).fadeIn(speed, callback);`
          - 淡出：`$(selector).fadeOut(1000);`
          - 切换：`$(selector).fadeToggle('fast', callback);`
        - 自定义动画：`$(selector).animate({params}, speed, callback);`
        - 停止动画：`$(selector).stop(true, false);`
    
      - jQuery 操作 DOM
    
      - jQuery 事件机制
    
    - Zepto
    
      - 轻量级的 JavaScript 库，专门为移动端定制的框架

## 05 Misc

### 01 CSS & DOM

WIP.

### 02 Web Dev

WIP.

### 03 MySQL

WIP.

### 04 Node.js

WIP.

### 05 Vue

WIP.

### 06 React

WIP.

### 07 Performance

###### WIP.
