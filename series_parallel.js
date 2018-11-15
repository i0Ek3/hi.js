// 
// series_parallel.js
// @i0Ek3(kno30826@gmail.com)
// 2018-08-19 10:50:17
//
// 并行和串行的结合，可以避免过分占用系统资源。
// 

var items = [ 1, 2, 3, 4, 5, 6 ];
var results = [];
var running = 0;
var limit = 2; //set a limit to async tasks which only can run 2 async in one time

function async(arg, callback) {
    console.log('Argument is ' + arg + ' , return results after 1s.');
    setTimeout(function () {
        callback(arg * 2);
    }, 1000);
}

function final(value) {
    console.log('Finished: ', value);
}

function launcher() {
    while (running < limit && items.length > 0) {
        var item = items.shift();
        async(item, function(result) {
            results.push(result);
            running--;
            if (items.length > 0) {
                launcher();
            } else if (running == 0) {
                final(results);
            }
        });
        running++;
    }
}
 
launcher();
