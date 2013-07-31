/**
 *  常量
 */

var Class = (function(){
    var UPPER_BOUND = 100;
    var ctor = function(constructorArgument){

    };
    ctor.getUPPER_BOUND = function(){
        return UPPER_BOUND;
    };
    return ctor;
})();

////////////////////
var Class = (function(){
    var constants = {
        UPPER_BOUND:100,
        LOWER_BOUND:-100
    };
    var ctor = function(constructorArgument){

    };
    ctor.getConstant = function(name){
        return constants[name];
    };
    return ctor;
})();
Class.getConstant("UPPER_BOUND");


