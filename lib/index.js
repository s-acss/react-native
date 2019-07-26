import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet, View, Text, Image, ImageBackground,
} from 'react-native';
import styleMap from "./styleMap"

/**
 *
 * @type {{pr: ((function(): null)|shim), pt: ((function(): null)|shim), pv: ((function(): null)|shim), b0: shim, brc: ((function(): null)|shim), fw800: shim, fw400: shim, ac: ((function(): null)|shim), bbc: ((function(): null)|shim), brw: ((function(): null)|shim), ai: ((function(): null)|shim), zi: ((function(): null)|shim), as: ((function(): null)|shim), bbw: ((function(): null)|shim), aic: shim, aib: shim, btrr: ((function(): null)|shim), t0: shim, fsi: shim, fsn: shim, bc: ((function(): null)|shim), acfs: shim, l0: shim, ais: shim, jcc: shim, acfe: shim, br: ((function(): null)|shim), btc: ((function(): null)|shim), fw500: shim, bs: ((function(): null)|shim), fdrr: shim, asfs: shim, fw100: shim, bw: ((function(): null)|shim), blc: ((function(): null)|shim), asfe: shim, fw900: shim, b: ((function(): null)|shim), c: ((function(): null)|shim), btw: ((function(): null)|shim), fdc: shim, f: ((function(): null)|shim), h: ((function(): null)|shim), blw: ((function(): null)|shim), l: ((function(): null)|shim), m: ((function(): null)|shim), asa: shim, o: ((function(): null)|shim), asc: shim, p: ((function(): null)|shim), asb: shim, r: ((function(): null)|shim), t: ((function(): null)|shim), fdr: shim, btlr: ((function(): null)|shim), jcsa: shim, w: ((function(): null)|shim), jcsb: shim, jcse: shim, lh: ((function(): null)|shim), acc: shim, ass: shim, fdcr: shim, jcfe: shim, dn: shim, f1: shim, acs: shim, fw600: shim, fw200: shim, mb: ((function(): null)|shim), taa: shim, tac: shim, mh: ((function(): null)|shim), taj: shim, tal: shim, ml: ((function(): null)|shim), tar: shim, mr: ((function(): null)|shim), mt: ((function(): null)|shim), mv: ((function(): null)|shim), bbrr: ((function(): null)|shim), fwb: shim, fwn: shim, ff: shim, aife: shim, fs: ((function(): null)|shim), fw700: shim, fw300: shim, aifs: shim, oh: shim, acsb: shim, acsa: shim, ttc: shim, bblr: ((function(): null)|shim), ttl: shim, ttn: shim, pa: shim, pb: ((function(): null)|shim), ttu: shim, jcfs: shim, ph: ((function(): null)|shim), pl: ((function(): null)|shim), r0: shim}}
 */
/* eslint-disable */
const acssPropTypes = {};
for(let i in styleMap){
  if(styleMap[i] instanceof Array){
    acssPropTypes[i]=PropTypes.bool
  }else{
    acssPropTypes[i]=PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  }
}
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
