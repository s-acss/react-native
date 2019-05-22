# ACSS React Native

Quick way to write style in react native.

Idea from Atomic CSS Design system.

```
$ npm install --save  @y-fe/acss-react-native
```

## How to use?

```
import React from 'react';
import {Text as RnText} from 'react-native';
import styled from "styled-components";
import {View, Text, Image, ImageBackground, withAcss, Acss} from './components/Acss';
import mImg1 from '../assets/pics/10.jpg';
import mImg2 from '../assets/pics/11.jpg';


// 第一种自己拓展基础组件的方式
const CusText = styled(RnText)`
  background-color:blue;
  color:#ffffff;
  text-align: center;
  padding-top: 8px;
  padding-bottom: 8px;
  ${props => Acss(props)}  
`;

// 第2二种自己拓展基础组件的方式
const CusText2 = withAcss(RnText);

export default class App extends React.Component {
    static navigationOptions = {
        title: 'Example1',
    };

    render() {
        return (
            <View bc="#00ffff" p="30">
                <View mb="16" aic>
                    <Image w="64" h="64" source={mImg1}/>
                </View>
                <View mb="16">
                    <Text c="#ff0000" tac>Hello world!</Text>
                </View>
                <View mb="16">
                    <CusText>Custom text</CusText>
                </View>
                <View mb="16">
                    <CusText2 tac>Custom text2</CusText2>
                </View>
                <ImageBackground br="20" h="100" source={mImg2}>
                    <View br="20" h="100%" pt="30" bc="rgba(0,0,0,0.8)">
                        <Text tac fs="40" fwb c="#FFFF00"> Hello Again! </Text>
                    </View>
                </ImageBackground>
            </View>
        );
    }
};
```

![demo](./demo.png)



## Name rules

- Only Initials `${props.aic && \`align-items: center;\`}`;
- Direct digital connection `${props.f1 && \`flex:1;\`}`;


## API

Pure, simple, natural

```JSX
const Acss = props => `
    ${props.aic && `align-items: center;`};
    ${props.aifs && `align-items: flex-start;`};
    ${props.asfe && `align-self: flex-end;`};
    ${props.br && `border-radius:${props.br};`};
    ${props.bbw && `border-bottom-width:${props.bbw};`};
    ${props.bbc && `border-bottom-color:${props.bbc};`};
    ${props.bc && `background-color:${props.bc};`};
    ${props.b && `bottom:${props.b};`};
    ${props.c && `color: ${props.c};`};
    ${props.f1 && `flex:1;`};
    ${props.fdr && `flex-direction: row;`};
    ${props.fdc && `flex-direction: column;`};
    ${props.fwn && `flex-wrap: nowrap;`};
    ${props.fs && `font-size: ${props.fs};`};
    ${props.fw && `font-weight:${props.fw};`};
    ${props.h && `height:${props.h};`};
    ${props.jcsb && `justify-content: space-between;`};
    ${props.jcc && `justify-content: center;`};
    ${props.jcfe && `justify-content: flex-end;`};
    ${props.l && `left:${props.l};`};
    ${props.lh && `line-height:${props.lh};`};
    ${props.m && `margin-top:${props.m}; margin-bottom:${props.m}; margin-left:${props.m}; margin-right:${props.m};`}
    ${props.mt && `margin-top:${props.mt};`};
    ${props.mr && `margin-right:${props.mr};`};
    ${props.mb && `margin-bottom:${props.mb};`};
    ${props.ml && `margin-left:${props.ml};`};
    ${props.o && `opacity:${props.o};`};  
    ${props.oh && `overflow:hidden`};
    ${props.p && `padding-top:${props.p}; padding-left:${props.p}; padding-right:${props.p}; padding-bottom:${props.p};`};
    ${props.pa && `position:absolute;`};
    ${props.pt && `padding-top:${props.pt};`};
    ${props.pr === true && `position:relative;`};
    ${props.pr && props.pr > 0 && `padding-right:${props.pr};`};
    ${props.pb && `padding-bottom:${props.pb};`};
    ${props.pl && `padding-left:${props.pl};`};
    ${props.r && `right:${props.r};`};
    ${props.t && `top:${props.t};`};
    ${props.tac && `text-align:center;`};
    ${props.tar && `text-align:right;`};
    ${props.ttu && `text-transform: uppercase;`};  
    ${props.ttc && `text-transform: capitalize;`}; 
    ${props.w && `width:${props.w};`};
`;
```

It is not perfect, but we can make it better together [issue](https://github.com/yued-fe/acss-react-native/issues).
