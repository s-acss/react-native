import React from 'react';
import  {
  Text, View, ImageBackground, Image,
} from '../lib/index';
import {shallow,mount} from 'enzyme';

/** 
 * 此处测试方法的属性
*/
describe("function attribute",()=>{
    it("p padding四个方向",()=>{
        const expectRes={
            paddingTop:40,
            paddingLeft:40,
            paddingBottom:40,
            paddingRight:40
        }
        const tmp=shallow(<View p={40}></View>)
        const style=tmp.prop("style")
        for(let i in style){
            expect(style[i]).toBe(expectRes[i])
        }
    })
    it("m margin4个方法向",()=>{
        const expectRes={
            marginTop:40,
            marginLeft:40,
            marginBottom:40,
            marginRight:40
        }
        const tmp=shallow(<View m={40}></View>)
        const style=tmp.prop("style")
        for(let i in style){
            expect(style[i]).toBe(expectRes[i])
        }
    })
    it("pr 两种可能 —— position:relative",()=>{
        const expectRes={
            position:"relative"
        }
        const tmp=shallow(<View pr></View>)
        const style=tmp.prop("style")
        for(let i in style){
            expect(style[i]).toBe(expectRes[i])
        }
    })
    it("pr 两种可能 —— padding-right",()=>{
        const expectRes={
            paddingRight:40
        }
        const tmp=shallow(<View pr={40}></View>)
        const style=tmp.prop("style")
        for(let i in style){
            expect(style[i]).toBe(expectRes[i])
        }
    })
})