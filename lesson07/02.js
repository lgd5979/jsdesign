/**
 * 工厂模式
 */


// 真正的工厂
// 工厂是一个将其成员对象的实例化推迟到子类中进行的类

var BicycleShop = function(){};
BicycleShop.prototype = {
    sellBicycle:function(model){
        var bicycle = this.createBicycle(model);
        bicycle.assemble();
        bicycle.wash();

        return bicycle;
    },
    createBicycle:function(model){
        throw new Error('Unsupported operation on an abstract class.');
    }
}
// 现在BicycleShop是一个抽象类，不能被实例化，只能用来派生子类
/**
 * 下面有两个子类，一个代表的商店从Acme公司进货，另一个则是从General Products公司进货
 */
var AcmeBicycleShop = function(){};
extend(AcmeBicycleShop,BicycleShop);
AcmeBicycleShop.prototype.createBicycle = function(model){
    var bicycle;

    switch(model){
        case 'The Speedster':
            bicycle = new Speedster();
            break;
        case 'The Lowrider':
            bicycle = new Lowrider();
            break;
        case 'The Comfort Cruiser':
        default:
            bicycle = new ComfortCruiser();
    }
    Interface.ensureImplements(bicycle,Bicycle);
    return bicycle;
};

var GeneralProductsBicycleShop = function(){};
extend(GeneralProductsBicycleShop,BicycleShop);
GeneralProductsBicycleShop.prototype.createBicycle = function(model){
    var bicycle;

    switch(model){
        case 'The Speedster':
            bicycle = new Speedster();
            break;
        case 'The Lowrider':
            bicycle = new Lowrider();
            break;
        case 'The Comfort Cruiser':
        default:
            bicycle = new ComfortCruiser();
    }
    Interface.ensureImplements(bicycle,Bicycle);
    return bicycle;
};

/* The Bicycle interface */

var Bicycle = new Interface('Bicycle',['assemble','wash','ride','repair']);

/* Speedster class */
var Speedster = function(){

};

Speedster.prototype = {
    assemble:function(){
        console.log("assemble");
    },
    wash:function(){
        console.log("wash");
    },
    ride:function(){

    },
    repair:function(){

    }
};

// 调用方法
var californiaCruisers = new AcmeBicycleShop();
var yourNewBike = californiaCruisers.sellBicycle("The Speedster");
yourNewBike.assemble();