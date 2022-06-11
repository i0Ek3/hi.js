var Hi

(function(Hi) {
    var Hitype = (function() {
        function Hitype() {}
    })
    
    Hitype.prototype.hitype = function (hi) {
        return hi
    }

    Hi.Hitype = Hitype
    return Hitype
})(Hi || (Hi = {}))

var test = new Hi.Hitype()
