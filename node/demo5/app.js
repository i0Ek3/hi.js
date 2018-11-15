// 
// app.js
// @ianpasm(kno30826@gmail.com)
// 2018-08-06 20:42:28
// 
 

//fetchUrl('http://www.google.com', function (err, content) {
    //fuck Baidu
    //<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/lurongkai/anti-baidu/js/anti-baidu-latest.min.js" charset="UTF-8"></script>
//});

var async = require('async');

var concurrencyCount = 0;
var fetchUrl = function (url, callback) {
    var delay = parseInt((Math.random() * 10000000) % 2000, 10);
    concurrencyCount++;
    console.log('The concurrency count is', concurrencyCount, ', fetching ', url, '..., need time ' + delay + 'ms');
    setTimeout(function () {
        concurrencyCount--;
        callback(null, url + ' html content');
    }, delay);
};

var urls = [];
for (var i = 0; i < 30; i++) {
    urls.push('http://fuckBaidu+' + i + 'times');
}

async.mapLimit(urls, 10, function (url, callback) {
    fetchUrl(url, callback);
}, function (err, result) {
    console.log('final:');
    console.log(result);
});


