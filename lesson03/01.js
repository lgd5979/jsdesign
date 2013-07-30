function foo(){
    var a = 10;
    function bar(){
        a *= 2;
        return console.log(a);
    }
    return bar;
}

var baz = foo();
baz();// 20
baz();// 40
baz();// 80

var blat = foo();
blat();//20

