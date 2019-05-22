import React from "react";
import styled from "styled-components";
import {View, Text, Image, ImageBackground, Platform} from "react-native";

/** 封装Style
 * @param component 如View，Text
 */
const withAcss = (component) => styled(component)`${props => Acss(props)}`;


//主要样式
const Acss = props => `
    ${props.aic && `align-items: center;`};
    ${props.aifs && `align-items: flex-start;`};
    ${props.asfe && `align-self: flex-end;`};
    ${props.br && `border-radius:${props.br};`};
    ${props.bbw && `border-bottom-width:${props.bbw};`};
    ${props.bbc && `border-bottom-color:${props.bbc};`};
    ${props.bg && `background:${props.bg};`};
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

/**
 * 首字母大写
 * @param str
 * @returns {string}
 */
const titleCase = function (str) {
    return str.toLowerCase().replace(/( |^)[a-z]/g, L => L.toUpperCase());
};

/**
 * Text的封装
 * 安卓对于 text-transform:uppercase & text-transform: capitalize 支持不佳，使用js强行转换
 * @param {*} props
 */

const V = withAcss(View);

const Txt = styled(Text)`${props => Acss(props)}`;
const T = ({ttu, ttc, ttl, children, ...otherProps}) => {
    let text = children;

    // 安卓设置了这个属性文字直接就不显示了
    let isAndriod = Platform.OS !== "ios" ? true : false;
    if (ttu && isAndriod) {
        text = text.toUpperCase();
    } else if (ttc && isAndriod) {
        text = titleCase(text);
    } else if (ttl && isAndriod) {
        text = text.toLowerCase();
    }
    return (
        <Txt
            ttu={isAndriod ? false : ttu}
            ttc={isAndriod ? false : ttc}
            ttl={isAndriod ? false : ttl}
            {...otherProps}
        >
            {text}
        </Txt>
    );
};


const ImageBg = styled(ImageBackground)`
  ${props => Acss(props)};
`;
const ImgBg = ({br, children, ...otherProps}) => {
    return (
        <ImageBg br={br} imageStyle={{borderRadius: br}} {...otherProps}>
            {children}
        </ImageBg>
    );
};

const Img = withAcss(Image);
export default withAcss;
export {V as View, T as Text, Img as Image, ImgBg as ImageBackground, withAcss, Acss};
