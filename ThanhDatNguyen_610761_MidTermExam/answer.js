//QUESTION 2A
const Car = {
    make: "default",
    model: "default",
    color: "default",
    drive: function(speed) {
        console.log(`The ${this.color} ${this.make} ${this.model} is driving at ${speed} mph`);
    },
    stop: function() {
        console.log(`The ${this.color} ${this.make} ${this.model} is stopping`);
    },
};

const redHondaAccord = Object.create(Car);
redHondaAccord.color = "red";
redHondaAccord.make = "Honda";
redHondaAccord.model = "Accord";

redHondaAccord.drive(200);
//QUESTION 2B
function car(make, model, color) {
    this.make = make;
    this.model = model;
    this.color = color;
}
car.prototype.drive = function(speed) {
    console.log(`The ${this.color} ${this.make} ${this.model} is driving at ${speed} mph`);
};
car.prototype.stop = function(speed) {
    console.log(`The ${this.color} ${this.make} ${this.model} is stopping`);
};

const RedHondaAccord = new car("Honda", "Accord", "Red");


RedHondaAccord.drive(200);
//QUESTION 3
const arrayUtils = (function() {
    function multiplesCount(nums, b) {
        const multiplesOf = nums.filter(number => number % b === 0);
        return multiplesOf.length;
    }

    function reverseInPlace(nums) {
        return nums.reverse();
    }

    return {
        multiplesCount: multiplesCount,
        reverseInPlace: reverseInPlace
    };
})();
//QUESTION 4
Array.prototype.printTheName = function(name) {
    console.log(name);
};