# tsdemo

A TypeScript demo with `hitype` script.

## Install TypeScript & Run it

```
$ npm install -g typescript
$ tsc -v

$ tsc xxx.ts # generate js code
$ tsc --target es6 xxx.ts # use es6 to compile
$ node xxx.js # run js code with node

# or run following command:
$ ./hitype filename_with_postfix  # like ./hitype class
```

## YSK

Actually, TypeScript's syntax same with C++/Go, that's really easy.

- basic type
    - any
    - number
    - string
    - boolean
    - enum
    - void
    - null
    - undefined
    - never
- variable
    - var name:type = value
    - var name:type
    - var name = value
- assert
    - <type>value
    - value as type
- condition
    - if...else, if...else if...else
    - switch..case
- loop
    - for
    - for...in
    - for...of: you can iterate Arrays/Strings/Maps/Sets data structure
    - forEach
    - every
    - some
    - while
    - do...while
- function
    - function name(p1:type, p2:type):type {}
    - function name(p1?:type) {} // ? means this parameter is optional
    - function name(p1:type = value) {} // default parameter
    - function name(p1:type, ...p:type[]) {}
    - var name = function(p) {} // anonymous function
        - (function () {//...})() // self calling 
    - construct function 
        - var name = new Function(p1, p2, ..., functionBody) {} 
    - lambda function 
        - (p:type)=> {//...}
- array 
    - var array_name:type[] = [value] // var arr:number[]
    - var array_name:type[][] = [[], []]
- map 
    - let m = new Map([["key"], ["value"]])
    - clear()/set()/get()/has()/delete()/size()/keys()/values()
- tuple
    - var tuple_name = [v1, v2, ..., vn]
    - push()/pop()
- union 
    - type1|type2|type3 // var val:string|number
    - type1[]|type2[]|type3[] // union array 
- interface 
    - interface interface_name {} // same with Go, body split by comma
    - interface extends // interface succeeds, interface A extends B, C {}
- class 
    - class class_name {}
    - public/protected/private
    - implements 
- object: A instance which contains a pair of key/value 
    - var obj_name = { key:value, ...,}
    - duck typing 
- namespace 
    - namespace namespace_name {}
    - export // for external calling use 
    - embedded namespace 
- model: filename same with module name 
    - export interface Module_name {}
    - import alias = require("./Module_name")
- declare
    - declare module Module_name
    - `/// <reference path = "xxx.d.ts" />`
