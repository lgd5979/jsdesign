// JavaScript中的对象是易变的
// 使用对象的易变性为函数添加属性

function displayError(msg){
    displayError.numTimesExcuted++;
    console.log(msg);
}
displayError.numTimesExcuted = 1;
displayError("console a error message");
console.log(displayError.numTimesExcuted);

// 对先前定义的类和实例化的对象进行修改
/**
 * Class Person
 */
function Person(name, age){
    this.name = name;
    this.age = age;
}
Person.prototype = {
    getName : function(){
        return this.name;
    },
    getAge:function(){
        return this.age;
    }
}
/**
 * 实例化对象
 */
var allen = new Person('Allen',33);
var jimmy = new Person('Jimmy',24);


/* 对类进行修改 */
Person.prototype.getGreeting = function(){
    return 'Hi ' + this.getName() + '!';
}

/* 对实例化的对象进行修改 */
allen.displayGreeting = function(){
    console.log(this.getGreeting());
}

console.log(jimmy.getGreeting());
allen.displayGreeting();