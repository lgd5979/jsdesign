/**
 * 工厂模式
 */

/*
var BicycleShop = function(){};
BicycleShop.prototype = {
    sellBicycle:function(model){
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
        bicycle.assemble();
        bicycle.wash();

        return bicycle;
    }
}
*/

// 简单的工厂
var BicycleFactory = {
    createBicycle:function(model){
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
    }
};
var BicycleShop = function(){};
BicycleShop.prototype = {
    sellBicycle:function(model){
        var bicycle = BicycleFactory.createBicycle(model);
        bicycle.assemble();
        bicycle.wash();

        return bicycle;
    }
}

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
var californiaCruisers = new BicycleShop();
var yourNewBike = californiaCruisers.sellBicycle("The Speedster");
yourNewBike.assemble();