import React from 'react';
import { Text  , View  } from 'react-native';
import widthAcss from '../lib/index';

import {shallow,mount} from 'enzyme';

import img from "./assets/1.jpg"

const CusText = widthAcss(Text);
const CusView = widthAcss(View);

describe("CusText",()=>{
    it(`CusText正常渲染`,()=>{
        const tmp= shallow(<CusText>Hello Again!</CusText>)
        expect(tmp.find('Text')).toHaveLength(1);
    })
    it(`CusText Acss 样式渲染`,()=>{
        const expectRes={
            fontSize: 40,
            lineHeight: 100,
            textAlign: 'center',
            fontWeight: 'bold',
            color: '#4c5fe2' 
        }
        const tmp= shallow(<CusText fs={40} lh={100} tac fwb c="#4c5fe2">Hello Again!</CusText>)
        const style=tmp.prop("style")
        for(let i in style){
            expect(style[i]).toBe(expectRes[i])
        }
    })
})

describe("CusView",()=>{
    it(`CusView正常渲染`,()=>{
        const tmp= shallow(<CusView></CusView>)
        expect(tmp.find('View')).toHaveLength(1);
    })
    it(`CusView Acss 样式渲染`,()=>{
        const expectRes={
            marginBottom: 16,
            alignItems: 'center'
        }
        const tmp= shallow(<CusView mb={16} aic></CusView>)
        const style=tmp.prop("style")
        for(let i in style){
            expect(style[i]).toBe(expectRes[i])
        }
    })
})