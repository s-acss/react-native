import React from 'react';
import  {
  Text, View, ImageBackground, Image,
} from '../lib/index';
import {shallow,mount} from 'enzyme';

import img from "./assets/1.jpg"

describe("Text",()=>{
    it(`Text正常渲染`,()=>{
        const tmp= shallow(<Text>Hello Again!</Text>)
        expect(tmp.find('Text')).toHaveLength(1);
    })
    it(`Text Acss 样式渲染`,()=>{
        const expectRes={
            fontSize: 40,
            lineHeight: 100,
            textAlign: 'center',
            fontWeight: 'bold',
            color: '#4c5fe2' 
        }
        const tmp= shallow(<Text fs={40} lh={100} tac fwb c="#4c5fe2">Hello Again!</Text>)
        const style=tmp.prop("style")
        for(let i in style){
            expect(style[i]).toBe(expectRes[i])
        }
    })
})

describe("View",()=>{
    it(`View正常渲染`,()=>{
        const tmp= shallow(<View></View>)
        expect(tmp.find('View')).toHaveLength(1);
    })
    it(`View Acss 样式渲染`,()=>{
        const expectRes={
            marginBottom: 16,
            alignItems: 'center'
        }
        const tmp= shallow(<View mb={16} aic></View>)
        const style=tmp.prop("style")
        for(let i in style){
            expect(style[i]).toBe(expectRes[i])
        }
    })
})

describe("ImageBackground",()=>{
    it(`ImageBackground正常渲染`,()=>{
        const tmp= shallow(<ImageBackground></ImageBackground>)
        expect(tmp.find('ImageBackground')).toHaveLength(1);
    })
    it(`ImageBackground Acss 样式渲染`,()=>{
        const expectRes={
            marginBottom: 40
        }
        const tmp= shallow(<ImageBackground source={img} mb={40}></ImageBackground>)
        const style=tmp.prop("style")
        for(let i in style){
            expect(style[i]).toBe(expectRes[i])
        }
    })
})

describe("Image",()=>{
    it(`Image正常渲染`,()=>{
        const tmp= shallow(<Image></Image>)
        expect(tmp.find('Image')).toHaveLength(1);
    })
    it(`Image Acss 样式渲染`,()=>{
        const expectRes={
            borderRadius: 32,
            width:64,
            height:64
        }
        const tmp= shallow(<Image br={32} w={64} h={64} source={img} />)
        const style=tmp.prop("style")
        for(let i in style){
            expect(style[i]).toBe(expectRes[i])
        }
    })
})
