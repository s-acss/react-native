# ACSS RN版本

基于React Native实现的Atomic CSS，用于快速简易地便编写RN对象样式。

## 安装

```
npm install --save  @_y/acss-rn
```

## 用法

### 基础版本

```
import React from 'react';
import  { V, T } from '@_y/acss-rn'
export default class App extends React.Component {
  render() {
    return (
        <V mt="40">
            <T c="#123212">测试测试</T>  
        </V>
    );
  }
}
```

### 进阶版本

封装组件，并传递props样式

```
import React from 'react';
import  { V, T } from '@_y/acss-rn'

// Button
export default function(props) {
    return (
        <V {...props}><T c_fff={props.c_fff}>这是一个按钮</T></V>
    );
}

//调用
import Button from './components/Button'
export default class App extends React.Component {
  render() {
    return (
        <V mt="40">
            <Button bg={"yellow"} c_fff w="50" d="block"></Button>
            <Button bg={"gray"} c_fff w="50" d="block"></Button>  
            <Button bg={"blue"} c_fff w="50" d="block"></Button>  
            <Button bg={"red"} c_fff w="50" d="block"></Button>    
        </V>
    );
  }
}
```

## 详情API查询

styled-components

|对外API|对应|作用|使用|
|:--:|:--:|:--:|:--:|
|V|View|类似于HTML中的div|`<Div mt="10"></Div>`|
|T|Text|不同与HMTL中的P，类似于span|`<P mt="10">aaaaaa</P>`|
|Img|Image|HTML中的img|
|ImgBg|ImageBackground|||
|ComponentStyled|/|封装对象，使其拥有ACSS样式|CustomStyle(View）|
|SpeedCustomComponent|/|快速创建组件|SpeedCustomComponent(View）|

## 自定义样式组件

### 方式一

快速创建组件

定义
```
const V = SpeedCustomComponent(View)
```

使用
```
<V mt="50"><T>快速创建组件</T></V>
```

### 方式二

自定义属性类型

定义组件，以Text为例子

首先封装成带有ACSS样式的组件
```
const TStyled = styled(Text)`${props => Acss(props)};`;
```

再封装成高阶组件，可处理props，最后返回自定义的组件。
```
const T = ({ ttu, ttc, children, ...otherProps }) => {
  let text = children;
  // 安卓设置了这个属性文字直接就不显示了
  let isAndriod = Platform.OS !== "ios" ? true : false;
  if (ttu && isAndriod) {
    //变成小写
    text = text.toUpperCase();
  } else if (ttc && isAndriod) {
    //变成大写
    text = titleCase(text);
  }
  return (
    <TStyled
      ttu={isAndriod ? false : ttu}
      ttc={isAndriod ? false : ttc}
      {...otherProps}
    >
      {text}
    </TStyled>
  );
};
```

## 单位转换问题

根据屏幕大小给予不同dp 基数320px的屏幕16px为基准。

|屏幕大小|size|
|:--:|:--:|
|<320|14px|
|<361|16px~18px|
|<414|18px~22px|
|<1001|18px~22px|

ppx,
rpx,
dpx,
spx,
toPpx,
toRpx,
toDpx,
toSpx,
vh,
vw,
statusBarHeight




## 二维码体验Demo


安装expo app：https://expo.io/tools


## ACSS支持API一览

### 不对应命名规则的各类API

#### 特殊单位

|API|对应|
|:--:|:--:|
|wp|`width:${props.wp};`单位是%|
|hp|`height:${props.hp};`单位是%|
|wrap|`margin-left:${toPpx(16)}px; margin-right:${toPpx(16)}px`|
|row|`padding-left:${toPpx(16)}px; padding-right:${toPpx(16)}px`|

### 其余按照命名规则存在的API
 
#### background

|API|对应|
|:--:|:--:|
|bg|background|
|bgc|background-color|
 
#### text transform
|API|对应|
|:--:|:--:|
|tac|text-align:center;|
|tar|text-align:right;|
|ttu|text-transform: uppercase|
|ttc|text-transform: capitalize|
 
#### flexbox
|API|对应|
|:--:|:--:|
|asfe|`align-self: flex-end;`|
|aifs|`align-items: flex-start;`|
|fdr|`flex-direction: row;`|
|fdc|`flex-direction: column;`|
|fwn|`flex-wrap: nowrap;`|
|aic|`align-items: center;`|
|jcsb|`justify-content: space-between;`|
|jcc|justify-content: center;`|
|jcfe|`justify-content: flex-end;`|
|f1|`flex:1;`|
  
#### font
|API|对应|
|:--:|:--:|
|fs|`font-size: ${toPpx(props.fs)}px;`|
|fw|`font-weight:${props.fw};`|
|c| `color: ${props.c};`|
|c_l|`color: ${color.l};`|
|c_m|`color: ${color.m};`|
|c_s|`color: ${color.s};`|
|c_xs|`color: ${color.xs};`|
|c_000|`color: #000;`};
|c_fff|`color: #fff;`};
|c_primary|`color: ${color.primary}`font-weight:${props.fw};`
|c_danger|`color: ${color.danger}`|
|c_success|`color: ${color.success}`|
|c_warning|color: ${color.warning}`|


#### position

|API|对应|
|:--:|:--:|
|pr|`position:relative;`|
|pa |`position:absolute;`|
|t0|`top:0;`|
|l0|`left:0;`|
|r0|`right:0;`|
|b0|`bottom:0;`|


#### border

|API|对应|
|:--:|:--:|
|br|`border-radius:${props.br}px;`|

#### 宽高

|API|对应|
|:--:|:--:|
|w|`width:${toPpx(props.w)}px;`|
|h|`height:${toPpx(props.h)}px;`|
|lh|`line-height:${toPpx(props.lh)}px;`|

#### margin

|API|对应|
|:--:|:--:|
|mt|`margin-top:${toPpx(props.mt)}px;`|
|mr|`margin-right:${toPpx(props.mr)}px;`|
|mb|`margin-bottom:${toPpx(props.mb)}px;`|
|ml|`margin-left:${toPpx(props.ml)}px;`|

#### padding

|API|对应|
|:--:|:--:|
|p|`padding:${toPpx(props.p)}px;`|
|pt|`padding-top:${toPpx(props.pt)}px;`|
|pr|`padding-right:${toPpx(props.pr)}px;`|
|pb|`padding-bottom:${toPpx(props.pb)}px`|
|pl|`padding-left:${toPpx(props.pl)}px;`|

#### opacity

|API|对应|
|:--:|:--:|
|o|`opacity:${toPpx(props.o)};`|