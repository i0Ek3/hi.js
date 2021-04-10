// 
// main.test.js
// @ianpasm(kno30826@gmail.com)
// 2018-08-09 15:59:13
// 

var main = require('../main.js');
var should = require('should');

describe('test/main.test.js', function () {
    it('should equal 0 when n === 0', function () {
        main.fibonacci(0).should.equal(0);
    });
    it('should equal 1 when n === 1', function () {
        main.fibonacci(1).should.equal(1);
    });
    it('should equal 55 when n === 10', function () {
        main.fibonacci(10).should.equal(55);
    });
    it('should throw when n > 10', function () {
        (function () {
            main.fibonacci(11);
        }).should.throw('n should <= 10');
    });
    it('should throw when n < 0', function () {
        (function () {
            main.fibonacci(-1);
        }).should.throw('n should >= 0');
    });
    it('should throw when n isnt a Number', function () {
        (function () {
            main.fibonacci('No way!');
        }).should.throw('n should be a Number');
    });
});
