# Notes

All notes in this article are based on [this tutorial](https://web.qianguyihao.com/).

## 01 HTML

### Basic

WIP.

## 02 CSS

### 01 Preferences

WIP.

### 02 Selector

WIP.

### 03 Pseudo-Class

WIP.

### 04 Inheritance and Cascading

WIP.

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

## 03 CSS in Advanced

WIP.

## 04 JavaScript

WIP.

## 05 Misc

### 01 CSS & DOM

WIP.

### 02 Web Dev

WIP.

### 03 MySQL

WIP.

### 04 Node.js

WIP.

## 05 Vue

WIP.

### 06 React

WIP.

### 07 Performance

###### WIP.
