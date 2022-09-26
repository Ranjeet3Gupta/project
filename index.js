console.log("Hello World")
const _=require('lodash');
const arr=[1,[2,[3,[4,[5]]]]]
const ne =_.flattenDeep(arr)
console.log(ne)