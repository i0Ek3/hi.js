var Hi = /** @class */ (function () {
    function Hi() {
    }
    Hi.prototype.hi = function () {
        console.log("hi TypeScript");
    };
    return Hi;
}());
var obj = new Hi();
obj.hi();
