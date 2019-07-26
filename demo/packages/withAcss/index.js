import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet, View, Text, Image, ImageBackground,
} from 'react-native';
import styleMap from './styleMap';

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
