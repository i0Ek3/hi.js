// 
// this.js
// @ianpasm(kno30826@gmail.com)
// 2018-08-17 08:52:48
//
// this关键字
//
// 由于函数可以在不同的运行环境执行，所以需要有一种机制，能够在函数体内部获得当前的运行环境（context）。所以，this就出现了，它的设计目的就是在函数体内部，指代函数当前的运行环境。
//
// 其主要使用的场景如下：
//      1）全局环境，即顶层对象
//      2）构造函数，即实例对象
//      3）对象的方法，即方法运行时所在的对象
//  
// 但要避免：
//      1）多层this
//      2）数组处理方法中的this
//      3）回调函数中的this，因为其往往会改变指向
//

var person = {
    name: 'aliy',
    describe: function () {
        return 'name: ' + this.name; //this -> person
    }
};

function f() {
    return 'name: ' + this.name;
}

var A = {
    name: 'chou',
    describe: f
};

var B = {
    name: 'lep',
    describe: f
};

A.describe() //this -> A
B.describe() //this -> B
