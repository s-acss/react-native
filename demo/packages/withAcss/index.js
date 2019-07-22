import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet, View, Text, Image, ImageBackground,
} from 'react-native';

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
/**
 *
 * @type {{pr: ((function(): null)|shim), pt: ((function(): null)|shim), pv: ((function(): null)|shim), b0: shim, brc: ((function(): null)|shim), fw800: shim, fw400: shim, ac: ((function(): null)|shim), bbc: ((function(): null)|shim), brw: ((function(): null)|shim), ai: ((function(): null)|shim), zi: ((function(): null)|shim), as: ((function(): null)|shim), bbw: ((function(): null)|shim), aic: shim, aib: shim, btrr: ((function(): null)|shim), t0: shim, fsi: shim, fsn: shim, bc: ((function(): null)|shim), acfs: shim, l0: shim, ais: shim, jcc: shim, acfe: shim, br: ((function(): null)|shim), btc: ((function(): null)|shim), fw500: shim, bs: ((function(): null)|shim), fdrr: shim, asfs: shim, fw100: shim, bw: ((function(): null)|shim), blc: ((function(): null)|shim), asfe: shim, fw900: shim, b: ((function(): null)|shim), c: ((function(): null)|shim), btw: ((function(): null)|shim), fdc: shim, f: ((function(): null)|shim), h: ((function(): null)|shim), blw: ((function(): null)|shim), l: ((function(): null)|shim), m: ((function(): null)|shim), asa: shim, o: ((function(): null)|shim), asc: shim, p: ((function(): null)|shim), asb: shim, r: ((function(): null)|shim), t: ((function(): null)|shim), fdr: shim, btlr: ((function(): null)|shim), jcsa: shim, w: ((function(): null)|shim), jcsb: shim, jcse: shim, lh: ((function(): null)|shim), acc: shim, ass: shim, fdcr: shim, jcfe: shim, dn: shim, f1: shim, acs: shim, fw600: shim, fw200: shim, mb: ((function(): null)|shim), taa: shim, tac: shim, mh: ((function(): null)|shim), taj: shim, tal: shim, ml: ((function(): null)|shim), tar: shim, mr: ((function(): null)|shim), mt: ((function(): null)|shim), mv: ((function(): null)|shim), bbrr: ((function(): null)|shim), fwb: shim, fwn: shim, ff: shim, aife: shim, fs: ((function(): null)|shim), fw700: shim, fw300: shim, aifs: shim, oh: shim, acsb: shim, acsa: shim, ttc: shim, bblr: ((function(): null)|shim), ttl: shim, ttn: shim, pa: shim, pb: ((function(): null)|shim), ttu: shim, jcfs: shim, ph: ((function(): null)|shim), pl: ((function(): null)|shim), r0: shim}}
 */
/* eslint-disable */
const acssPropTypes = {
    ac: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    acs: PropTypes.bool,
    acc: PropTypes.bool,
    acfs: PropTypes.bool,
    acfe: PropTypes.bool,
    acsb: PropTypes.bool,
    acsa: PropTypes.bool,
    ai: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    ais: PropTypes.bool,
    aib: PropTypes.bool,
    aic: PropTypes.bool,
    aifs: PropTypes.bool,
    aife: PropTypes.bool,
    as: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    asa: PropTypes.bool,
    ass: PropTypes.bool,
    asb: PropTypes.bool,
    asc: PropTypes.bool,
    asfs: PropTypes.bool,
    asfe: PropTypes.bool,
    bc: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    br: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    bw: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    bs: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    btw: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    btc: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    brw: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    brc: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    bbw: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    bbc: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    blw: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    blc: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    btrr: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    btlr: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    bbrr: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    bblr: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    b: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    b0: PropTypes.bool,
    c: PropTypes.oneOfType([PropTypes.string]),
    dn: PropTypes.bool,
    f: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    f1: PropTypes.bool,
    fdr: PropTypes.bool,
    fdrr: PropTypes.bool,
    fdc: PropTypes.bool,
    fdcr: PropTypes.bool,
    fwn: PropTypes.bool,
    fwb: PropTypes.bool,
    fw100: PropTypes.bool,
    fw200: PropTypes.bool,
    fw300: PropTypes.bool,
    fw400: PropTypes.bool,
    fw500: PropTypes.bool,
    fw600: PropTypes.bool,
    fw700: PropTypes.bool,
    fw800: PropTypes.bool,
    fw900: PropTypes.bool,
    fs: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    ff: PropTypes.string,
    fsn: PropTypes.bool,
    fsi: PropTypes.bool,
    h: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    h100p: PropTypes.bool,
    jcc: PropTypes.bool,
    jcsb: PropTypes.bool,
    jcfs: PropTypes.bool,
    jcfe: PropTypes.bool,
    jcsa: PropTypes.bool,
    jcse: PropTypes.bool,
    l: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    l0: PropTypes.bool,
    lh: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    m: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    mt: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    mr: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    mb: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    ml: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    mh: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    mv: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    o: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    oh: PropTypes.bool,
    p: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    pa: PropTypes.bool,
    pr: PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string]),
    pt: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    pb: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    pl: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    ph: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    pv: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    r: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    r0: PropTypes.bool,
    t: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    t0: PropTypes.bool,
    tac: PropTypes.bool,
    tar: PropTypes.bool,
    taa: PropTypes.bool,
    tal: PropTypes.bool,
    taj: PropTypes.bool,
    ttu: PropTypes.bool,
    ttc: PropTypes.bool,
    ttn: PropTypes.bool,
    ttl: PropTypes.bool,
    w: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    w100p: PropTypes.bool,
    zi: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};
/* eslint-enable */

const getPropsWidthStyle = (props) => {
  const { style, ...otherProps } = props;
  const acssStyle = {};
  Object.keys(otherProps).forEach((key) => {
    const value = otherProps[key];
    const styleInfo = styleMap[key];
    if (value && styleInfo) {
      delete otherProps[key];
      if (typeof styleInfo === 'string') {
        acssStyle[styleInfo] = value;
      } else if (styleInfo instanceof Array && styleInfo.length === 2) {
        const [styleName, StyleValue] = styleInfo;
        acssStyle[styleName] = StyleValue;
      } else if (typeof styleInfo === 'function') {
        const ret = styleInfo(value);
        if (ret) {
          Object.assign(acssStyle, ret);
        }
      }
    }
  });
  otherProps.style = StyleSheet.flatten([acssStyle, style]);
  return otherProps;
};

const widthAcss = (Component) => {
  const Acss = props => <Component {...getPropsWidthStyle(props)} />;
  Acss.propTypes = acssPropTypes;
  return Acss;
};

const V = widthAcss(View);
const T = widthAcss(Text);
const ImgBg = widthAcss(ImageBackground);
const Img = widthAcss(Image);

V.propTypes = acssPropTypes;
T.propTypes = acssPropTypes;
ImgBg.propTypes = acssPropTypes;
Img.propTypes = acssPropTypes;

export default widthAcss;
export {
  V as View, T as Text, Img as Image, ImgBg as ImageBackground, acssPropTypes,
};
