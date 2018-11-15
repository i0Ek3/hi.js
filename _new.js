// 
// _new.js
// @ianpasm(kno30826@gmail.com)
// 2018-08-16 10:01:06
// 

function _new(constructor, params) { //构造函数，构造函数参数
    var args = [].slice.call(arguments); //将arguments对象转换为数组
    var constructor = args.shift(); //取出构造函数
    var context = Object.create(constructor.prototype); //创建一个空对象，继承构造函数的prototype属性
    var result = constructor.apply(context, args); //执行构造函数
    return (typeof result === 'object' && result != null) ? result : context; //如果返回结果是对象，就直接返回，否则返回context对象
}

//实例
//var instance = _new(Person, 'Josh', 'male');
