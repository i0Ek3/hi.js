// 
// parallel.js
// @i0Ek3(kno30826@gmail.com)
// 2018-08-19 10:39:03
//
//
// 并行执行--让所有异步任务同时执行。
//
var items = [ 1, 2, 3, 4, 5, 6 ];
var results = [];

function async(arg, callback) {
    console.log('Argument is ' + arg + ' , return results after 1s.');
    setTimeout(function () {
        callback(arg * 2);
    }, 1000);
}

function final(value) {
    console.log('Finished: ' + value);
}

items.forEach(function(item) {
    async(item, function(result) {
        results.push(result);
        if (results.length === items.length) {
            final(results[results.length - 1]);
        }
    })
});
 
 
