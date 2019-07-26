
import {acssPropTypes
} from '../lib/index';
import styleMap from "../lib/styleMap";

function getAttr(str){
    if(typeof str==="string"){
        if(/%/.test(str)){
            return str.replace("%","p")
        }else if(parseInt(str)>0){
            return str;
        }else{
            let arr=str.match(/[A-Z]/g);
            if(arr){
                return str[0]+arr.join("").toLowerCase()
            }else{
                return str[0]
            }
        }
    }else{
        return str;
    }
}
describe("Attribute",()=>{
    const arrays={}
    const values={}
    for(let i in styleMap){
        if(typeof styleMap[i] === "string"){
            values[i]= getAttr(styleMap[i])
        }else if(styleMap[i] instanceof Array){
            arrays[i]=styleMap[i].map((s)=>{
                return getAttr(s)
            }).join("")
        }
    }
    for(let i in values){
        it(`${i}`,()=>{
            expect(i).toBe(values[i])
        })
    }
})
describe("map stylemap to proptypes",()=>{
    it("is proptypes sync with stylemap",()=>{
        
        for(let i in styleMap){
            expect(acssPropTypes[i] instanceof Function).toBe(true)
        }

    })
})
