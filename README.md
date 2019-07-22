# nu-react-native-acss

[![npm package][npm-badge]][npm]

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/@_nu/react-native-acss

Quick way to write style in react native.

Idea from Atomic CSS Design system.

```
$ yarn add @_nu/react-native-acss
```

## How to use?

```JSX
import React from 'react';
import {Text, View, ImageBackground, Image} from './packages/withAcss';
import mImg1 from "./assets/1.jpg";
import mImg2 from "./assets/2.jpg";

export default function App() {
    return (
        <View bc="#f5f5f5" pt={100} ph={30} h="100%">
            <View mb={16} aic>
                <Image br={32} w={64} h={64} source={mImg1}/>
            </View>
            <Text c="#ffffff" p={16} bc="#4c5fe2" tac mb={16}>Hello world!</Text>
            <ImageBackground source={mImg2} mb={40}>
                <View bc="rgba(255,255,255,.8)">
                    <Text fs={40} lh={100} tac fwb c="#4c5fe2">Hello Again!</Text>
                </View>
            </ImageBackground>
        </View>
    );
};
```

## How to bind to custom component?

```JSX
import React from 'react';
import {Text, View} from 'react-native';
import widthAcss from './packages/withAcss';

const CusText = widthAcss(Text);
const CusView = widthAcss(View);

export default function App() {
    return (
        <CusView bc="#4c5fe2" p={16}>
            <CusText tac c="#ffffff">Custom text</CusText>
        </CusView>
    );
};
```

![demo](./demo.png)

## Name rules

It looks wired in first sight what we use abbreviation instead of the full name. Cause we want user just remember the rules below rather than all the props.

1. Only Initials: `aic` means `alignItems: center`;
2. Direct digital connection: `fw700` means `fontWidth:700`;
4. `p` means `percent`: `w100p` means `width:'100%'`;

```JSX
<View mb={16} bc="#4c5fe2" aic>
    <Text c="#ffffff" pt={16} pb={16} tac>Hello world!</Text>
</View>
```

equal to

```JSX
<View style={{
    marginBottom:16,
    backgroundColor:'#4c5fe2',
    alignItem:'center'
}}>
    <Text style={{
      color:'#ffffff',
      paddingTop: 16,
      paddingBottom: 16,
      alignItem:'center'
    }}>Hello world!</Text>
</View>
```

## API

```JSX
const styleMap = {
  ac: 'alignContent',
  acs: ['alignContent', 'stretch'],
  acc: ['alignContent', 'center'],
  acfs: ['alignContent', 'flex-start'],
  acfe: ['alignContent', 'flex-end'],
  acsb: ['alignContent', 'space-between'],
  acsa: ['alignContent', 'space-around'],
  ai: 'align-items',
  ais: ['alignItems', 'stretch'],
  aib: ['alignItems', 'baseline'],
  aic: ['alignItems', 'center'],
  aifs: ['alignItems', 'flex-start'],
  aife: ['alignItems', 'flex-end'],
  as: 'alignSelf',
  asa: ['alignSelf', 'auto'],
  ass: ['alignSelf', 'stretch'],
  asb: ['alignSelf', 'baseline'],
  asc: ['alignSelf', 'center'],
  asfs: ['alignSelf', 'flex-start'],
  asfe: ['alignSelf', 'flex-end'],
  bc: 'backgroundColor',
  br: 'borderRadius',
  bw: 'borderWidth',
  bs: 'borderStyle',
  btw: 'borderTopWidth',
  btc: 'borderTopColor',
  brw: 'borderRightWidth',
  brc: 'borderRightColor',
  bbw: 'borderBottomWidth',
  bbc: 'borderBottomColor',
  blw: 'borderLeftWidth',
  blc: 'borderLeftColor',
  btrr: 'borderTopRightRadius',
  btlr: 'borderTopLeftRadius',
  bbrr: 'borderBottomRightRadius',
  bblr: 'borderBottomLeftRadius',
  b: 'bottom',
  b0: 'bottom',
  c: 'color',
  dn: ['display', 'none'],
  f: 'flex',
  f1: ['flex', 1],
  fdr: ['flexDirection', 'row'],
  fdrr: ['flexDirection', 'row-reverse'],
  fdc: ['flexDirection', 'column'],
  fdcr: ['flexDirection', 'column-reverse'],
  fwn: ['flexWrap', 'nowrap'],
  fwb: ['fontWeight', 'bold'],
  fw100: ['fontWeight', 100],
  fw200: ['fontWeight', 200],
  fw300: ['fontWeight', 300],
  fw400: ['fontWeight', 400],
  fw500: ['fontWeight', 500],
  fw600: ['fontWeight', 600],
  fw700: ['fontWeight', 700],
  fw800: ['fontWeight', 800],
  fw900: ['fontWeight', 900],
  fs: 'fontSize',
  ff: 'fontFamily',
  fsn: ['fontStyle', 'normal'],
  fsi: ['fontStyle', 'italic'],
  h: 'height',
  h100p: ['height', '100%'],
  jcc: ['justifyContent', 'center'],
  jcsb: ['justifyContent', 'space-between'],
  jcfs: ['justifyContent', 'flex-start'],
  jcfe: ['justifyContent', 'flex-end'],
  jcsa: ['justifyContent', 'space-around'],
  jcse: ['justifyContent', 'space-evenly'],
  l: 'left',
  l0: ['left', 0],
  lh: 'lineHeight',
  m(value) {
    return {
      marginTop: value,
      marginBottom: value,
      marginRight: value,
      marginLeft: value,
    };
  },
  mt: 'marginTop',
  mr: 'marginRight',
  mb: 'marginBottom',
  ml: 'marginLeft',
  mh: 'marginHorizontal',
  mv: 'marginVertical',
  o: 'opacity',
  oh: ['overflow', 'hidden'],
  p(value) {
    return {
      paddingTop: value,
      paddingBottom: value,
      paddingRight: value,
      paddingLeft: value,
    };
  },
  pa: ['position', 'absolute'],
  pr(value) {
    if (value === true) {
      return {
        position: 'relative',
      };
    }
    return {
      paddingRight: value,
    };
  },
  pt: 'paddingTop',
  pb: 'paddingBottom',
  pl: 'paddingLeft',
  ph: 'paddingHorizontal',
  pv: 'paddingVertical',
  r: 'right',
  r0: ['right', 0],
  t: 'top',
  t0: ['top', 0],
  tac: ['textAlign', 'center'],
  tar: ['textAlign', 'right'],
  taa: ['textAlign', 'auto'],
  tal: ['textAlign', 'left'],
  taj: ['textAlign', 'justify'],
  ttu: ['textTransform', 'uppercase'],
  ttc: ['textTransform', 'capitalize'],
  ttn: ['textTransform', 'none'],
  ttl: ['textTransform', 'lowercase'],
  w: 'width',
  w100p: ['width', '100%'],
  zi: 'zIndex',
};
```

Pure, simple, natural. 

As you can see that is all the code we create blew. 

We just did a little but can help you a lot when create style in react native.

help us to make it better together [issue](https://github.com/nu-system/acss-react-native/issues).
