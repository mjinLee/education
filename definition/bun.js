//NodeJS. Jest
const tests = Array.from(new Array(100000))

describe('bun jest test',()=>{
    test.each(tests)('jest hehe',()=>{
        expect(true).toBe(true)
    })
})
//time: 34.028 s

//Bun.js
import {test,describe,expect} from "bun:test"

const testss = Array.from(new Array(100000))

describe('bun wiptest',()=>{
    testss.forEach(()=>{
        test(`bun hehe`,()=>{
            expect(true.toBe(true))
        })
    })
})
//time: 2.68s