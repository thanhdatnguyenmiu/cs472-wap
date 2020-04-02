//QUESTION 6
var count = (function() {
    var counter = 0;
    var add = function(number = 1) {
        counter += number;
    };
    var reset = function() {
        counter = 0;
    };
    var getCounter = function() {
        return counter;
    };
    return {
        add: add,
        reset: reset,
        make_adder: make_adder,
        getCounter: getCounter
    };
})();

//QUESTION 8
var make_adder = function(inc) {
    return count.add(inc);
};

var add5 = make_adder.bind(null, 5);

//QUESTION 7
// Free variable is variable not locally declared or passed as parameter
// In closure it is a variable function take it from parent scope.For example in add module counter is a free variable so count count.add can get counter
// variable and counter not declare in count.add.

//QUESTION 9
// using module pattern,or IIFE

//QUESTION 10
const Employee = (function() {
    let name;
    let age;
    let salary;
    const setAge = (newAge) => {
        age = newAge;
        console.log(age);
    };

    const setSalary = function(newSalary) {
        salary = newSalary;
    };

    const setName = function(newName) {
        name = newName;
    };

    const getName = function() {
        return age;
    };

    const getSalary = function() {
        return salary;
    };

    const getAge = function() {
        return age;
    };

    const increaseSalary = function(percentage) {
        getSalary();
    };

    const incrementAge = function() {
        getAge();
    };

    return {
        setAge: setAge,
        setName: setName,
        setSalary: setSalary,
        increaseSalary: increaseSalary,
        incrementAge: incrementAge
    };
})();
//QUESTION 11
Employee.address = "";
Employee.setAddress = function(address) { this.address = address; };
Employee.getAddress = function() { return this.address; };