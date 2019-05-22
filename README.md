# ACSS RN版本

基于React Native实现的Atomic CSS，用于快速简易地便编写RN对象样式。

## 安装

```
npm install --save  @y-fe/acss-react-native
```

## 用法

### 基础版本

```
import React from 'react';
import  { View, Text, Image, ImageBackground, withAcss, Acss } from '@_y/acss-react-native';

const CusBox = styled(component)`
    ${props => Acss(props)}
    width:'20%'
`;

const CusButton = withAcss(Button);

export default class App extends React.Component {
  render() {
    
    return (
        <View pt="20">
            <Text c="#123212">测试测试</Text>
            <CusButton mt="16">上间距是16的按钮</CusButton>
            <CusBox>
                <Text>宽度20%的盒子</Text>            
            <CusBox>
        </View>
    );
  }
}
```

## 二维码体验Demo

安装expo app：https://expo.io/tools


## ACSS支持API一览

```JSX
    let ret = `
        ${props.bg && `background:${props.bg};`};
        ${props.bc && `background-color:${props.bc};`};
        ${props.tac && `text-align:center;`};
        ${props.tar && `text-align:right;`};
        ${props.ttu && `text-transform: uppercase;`};  
        ${props.ttc && `text-transform: capitalize;`};  
        ${props.asfe && `align-self: flex-end;`};
        ${props.aifs && `align-items: flex-start;`};
        ${props.fdr && `flex-direction: row;`};
        ${props.fdc && `flex-direction: column;`};
        ${props.fwn && `flex-wrap: nowrap;`};
        ${props.aic && `align-items: center;`};
        ${props.jcsb && `justify-content: space-between;`};
        ${props.jcc && `justify-content: center;`};
        ${props.jcfe && `justify-content: flex-end;`};
        ${props.f1 && `flex:1;`};
        ${props.fs && `font-size: ${props.fs};`};
        ${props.fw && `font-weight:${props.fw};`};
        ${props.c && `color: ${props.c};`};
        ${props.pr && `position:relative;`};
        ${props.pa && `position:absolute;`};
        ${props.t0 && `top:0;`};
        ${props.l0 && `left:0;`};
        ${props.r0 && `right:0;`};
        ${props.b0 && `bottom:0;`};
        ${props.br && `border-radius:${props.br};`};
        ${props.btw && `border-bottom-width:${props.btw};`};
        ${props.btc && `border-bottom-color:${props.btc};`};
        ${props.w && `width:${props.w};`};
        ${props.h && `height:${props.h};`};
        ${props.lh && `line-height:${props.lh};`};
        ${props.m && `margin-top:${props.m}; margin-bottom:${props.m}; margin-left:${props.m}; margin-right:${props.m};`}
        ${props.mt && `margin-top:${props.mt};`};
        ${props.mr && `margin-right:${props.mr};`};
        ${props.mb && `margin-bottom:${props.mb};`};
        ${props.ml && `margin-left:${props.ml};`};
        ${props.p && `padding-top:${props.p}; padding-left:${props.p}; padding-right:${props.p}; padding-bottom:${props.p};`};
        ${props.pt && `padding-top:${props.pt};`};
        ${props.pr && `padding-right:${props.pr};`};
        ${props.pb && `padding-bottom:${props.pb};`};
        ${props.pl && `padding-left:${props.pl};`};
        ${props.o && `opacity:${props.o};`};
        ${props.oh && `overflow:hidden`};
    `;
```
