var Person = /** @class */ (function () {
    function Person(name, job) {
        this.name = name;
        this.job = job;
    }
    Person.prototype.introduce = function () {
        return this.name + "\u306F" + this.job;
    };
    return Person;
}());
console.log(Person)
var tom = new Person('tom', 'エンジニア');
console.log(tom);
console.log(tom.__proto__);
console.log(tom.introduce());
// tom.introduce = function () {
//     return '上書き';
// };
// console.log(tom.introduce());
