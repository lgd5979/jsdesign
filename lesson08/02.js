/**
 * 桥接模式
 */

// 使用桥接模式收集某些私用性的信息

var Public = function(){
    var secret = 3;
    this.privilegedGetter = function(){
        return secret;
    }
};

var o = new Public();
var data = o.privilegedGetter();

