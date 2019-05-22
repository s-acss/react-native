import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";
import {View, Text, Image, ImageBackground} from "react-native";

const Acss = props => `
    ${props.ac && `align-content: ${props.ac};`};
    ${props.acs && `align-content: stretch;`};
    ${props.acc && `align-content: center;`};
    ${props.acfs && `align-content: flex-start;`};
    ${props.acfe && `align-content: flex-end;`};
    ${props.acsb && `align-content: space-between;`};
    ${props.acsa && `align-content: space-around;`};        
    ${props.ai && `align-items: ${props.ai};`};
    ${props.ais && `align-items: stretch;`};
    ${props.aib && `align-items: baseline;`};
    ${props.aic && `align-items: center;`};
    ${props.aifs && `align-items: flex-start;`};
    ${props.aife && `align-items: flex-end;`};    
    ${props.as && `align-self: ${props.as};`};
    ${props.asa && `align-self: auto;`};
    ${props.ass && `align-self: stretch;`};
    ${props.asb && `align-self: baseline;`};
    ${props.asc && `align-self: center;`};
    ${props.asfs && `align-self: flex-start;`};
    ${props.asfe && `align-self: flex-end;`};
    ${props.bc && `background-color:${props.bc};`};
    ${props.br && `border-radius:${props.br};`};
    ${props.bw && `border-width:${props.bw};`};
    ${props.bs && `border-style:${props.bs};`};
    ${props.btw && `border-top-width:${props.btw};`};
    ${props.btc && `border-top-color:${props.btc};`};
    ${props.brw && `border-right-width:${props.brw};`};
    ${props.brc && `border-right-color:${props.brc};`};
    ${props.bbw && `border-bottom-width:${props.bbw};`};
    ${props.bbc && `border-bottom-color:${props.bbc};`};
    ${props.blw && `border-left-width:${props.blw};`};
    ${props.blc && `border-left-color:${props.blc};`};
    ${props.btrr && `border-top-right-radius:${props.btrr};`};
    ${props.btlr && `border-top-left-radius:${props.btlr};`};
    ${props.bbrr && `border-bottom-right-radius:${props.bbrr};`};
    ${props.bblr && `border-bottom-left-radius:${props.bblr};`};
    ${props.b && `bottom:${props.b};`};
    ${props.b0 && `bottom:${props.b0};`};
    ${props.c && `color: ${props.c};`};
    ${props.dn && `display: none;`};
    ${props.f && `flex:${props.f};`};
    ${props.f1 && `flex:1;`};
    ${props.fdr && `flex-direction: row;`};
    ${props.fdrr && `flex-direction: row-reverse;`};
    ${props.fdc && `flex-direction: column;`};    
    ${props.fdcr && `flex-direction: column-reverse;`};
    ${props.fwn && `flex-wrap: nowrap;`};    
    ${props.fwb && `font-weight:bold;`};    
    ${props.fw100 && `font-weight:100;`};
    ${props.fw100 && `font-weight:200;`};
    ${props.fw300 && `font-weight:300;`};
    ${props.fw400 && `font-weight:400;`};
    ${props.fw500 && `font-weight:500;`};
    ${props.fw600 && `font-weight:600;`};
    ${props.fw700 && `font-weight:700;`};
    ${props.fw800 && `font-weight:800;`};
    ${props.fw900 && `font-weight:900;`};
    ${props.fs && `font-size: ${props.fs};`};
    ${props.ff && `font-family: ${props.ff};`};
    ${props.fsn && `font-style:normal;`};
    ${props.fsi && `font-style:italic;`};
    ${props.h && `height:${props.h};`}; 
    ${props.jcc && `justify-content: center;`};
    ${props.jcsb && `justify-content: space-between;`};
    ${props.jcfs && `justify-content: flex-start;`};
    ${props.jcfe && `justify-content: flex-end;`};
    ${props.jcsa && `justify-content: space-around;`};
    ${props.l && `left:${props.l};`};
    ${props.l0 && `left:${props.l0};`};
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
    ${props.pr === true && `position:relative;`};
    ${props.pt && `padding-top:${props.pt};`};
    ${props.pr && props.pr > 0 && `padding-right:${props.pr};`};
    ${props.pb && `padding-bottom:${props.pb};`};
    ${props.pl && `padding-left:${props.pl};`};
    ${props.r && `right:${props.r};`};
    ${props.r0 && `right:${props.r0};`};
    ${props.t && `top:${props.t};`};
    ${props.t0 && `top:${props.t0};`};
    ${props.tac && `text-align:center;`};
    ${props.tar && `text-align:right;`};
    ${props.taa && `text-align:auto;`};
    ${props.tal && `text-align:left;`};
    ${props.taj && `text-align:justify;`};
    ${props.ttu && `text-transform: uppercase;`};
    ${props.ttc && `text-transform: capitalize;`}; 
    ${props.ttn && `text-transform: none;`};
    ${props.ttl && `text-transform: lowercase;`};     
    ${props.w && `width:${props.w};`};
    ${props.zi && `z-index:${props.zi};`};
`;

const V = styled(View)`${props => Acss(props)}`;
const T = styled(Text)`${props => Acss(props)}`;
const ImgBg = styled(ImageBackground)`${props => Acss(props)}`;
const Img = styled(Image)`${props => Acss(props)}`;

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
    jcc: PropTypes.bool,
    jcsb: PropTypes.bool,
    jcfs: PropTypes.bool,
    jcfe: PropTypes.bool,
    jcsa: PropTypes.bool,
    l: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    l0: PropTypes.bool,
    lh: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    m: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    mt: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    mr: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    mb: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    ml: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    o: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    oh: PropTypes.bool,
    p: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    pa: PropTypes.bool,
    pr: PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string]),
    pt: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    pb: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    pl: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
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
    zi: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Acss.propTypes = acssPropTypes;
V.propTypes = acssPropTypes;
T.propTypes = acssPropTypes;
ImgBg.propTypes = acssPropTypes;
Img.propTypes = acssPropTypes;

export default Acss;
export {V as View, T as Text, Img as Image, ImgBg as ImageBackground, Acss, acssPropTypes};
