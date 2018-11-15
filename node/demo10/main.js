// 
// main.js
// @ianpasm(kno30826@gmail.com)
// 2018-08-13 14:12:31
// 
var Benchmark = require('benchmark');
//var suite = require('suite');
var suite = new Benchmark.Suite;

var int1 = function (str) {
    return +str;
};

var int2 = function (str) {
    return parseInt(str, 10);
};

var int3 = function (str) {
    return Number(str);
};

//benchmark suite
var number = '100';

//add test
suite
    .add('+', function() {
        int1(number);
    })
    .add('parseInt', function() {
        int2(number);
    })
    .add('Number', function() {
        int3(number);
    })
    .on('cycle', function(event) {
        console.log(String(event.target));
    })
    .on('complete', function() {
        console.log('Fastest is ' + this.filter('fastest').pluck('name'));
    })
    .run({ 'asyn': true });
