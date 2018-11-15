// 
// series.js
// @i0Ek3(kno30826@gmail.com)
// 2018-08-19 10:28:15
//
// 串行执行--用一个流程控制函数来控制异步任务。
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
    console.log('Finished: ', value);
}

function series(item) {
    if (item) {
        async( item, function(result) {
            results.push(result);
            return series(items.shift());
        });
    } else {
        return final(results[results.length - 1]);
    }
}
 
series(items.shift());
