var Person = new Interface("Person", ["setName", "setAge", "getName", "getAge","getCount"]);
var Man = (function () {
    var count = 0;
    return function (newname, newage) {
        var name, age;
        this.setName = function (newname) { name = newname; }
        this.setAge = function (newage) { age = newage; }
        this.getName = function () { return name; }
        this.getAge = function () { return age; }
        this.getCount = function () { return count; }
        this.setAge(newage);
        this.setName(newname);
        count++;
    }
})();
Man.prototype.DisplayAll = function () { return "Name: " + this.getName() + "; Age: " + this.getAge() }
var man1 = new Man("Jimmy", 24);
man1.setName("update");
var man2 = new Man("Jimmy", 24);
console.log("There are "+man1.getCount()+" instances of Man, name = " + man1.getName() );
