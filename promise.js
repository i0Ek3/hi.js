// 
// promise.js
// @i0Ek3(kno30826@gmail.com)
// 2018-08-20 09:09:13
// 
// Promise have 3 status: pending, fulfilled, rejected.
// Promise 的优点在于，让回调函数变成了规范的链式写法，程序流程可以看得很清楚。无论何时为 Promise 实例添加回调函数，该函数都能正确执行。
// Promise 的缺点是，编写的难度比传统写法高，而且阅读代码也不是一眼可以看懂。
//
 
// promise constructor
var promise = new Promise(function (resolve, reject) {

    if (/* async process fulfilled */) {
        resolve(value); //pending -> fulfilled
    } else {
        reject(new Error()); //pending -> rejected
    } 

}); 
