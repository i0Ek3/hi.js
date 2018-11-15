// 
// prototype.js
// @i0Ek3(kno30826@gmail.com)
// 2018-08-18 10:46:54
// 
// 继承
// 大多数面向对象的编程语言的继承是通过类class来实现的，而JavaScript的继承是通过“原型对象”（prototype）来实现的。
//

fucntion f() {}
typeof f.prototype  // "object"


function Animal(name) {
    this.name = name;
}
Animal.prototype.color = 'black'; //该原型对象的颜色属性由dog1和cat1两个实例对象共享

var dog1 = new Animal('wangzai');
var cat1 = new Animal('huahua');

// they are all black
// 当实例对象本身没有某个属性或方法的时候，它会到原型对象去寻找该属性或方法。
dog1.color 
cat1.color 

// Prototype chain -> Object.prototype -> null
Object.getPrototypeOf(Object.prototype)
