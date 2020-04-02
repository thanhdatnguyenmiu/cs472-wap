"use strict";
//Question 1
const person = {
    name: "",
    dateOfBirth: "",
    getName: function() {
        return this.name;
    },
    setName: function(name) { this.name = name; }
};

const person1 = Object.create(person, { name: { value: "John" } });
console.log(`This person's name is ${person1.getName()}`);
console.log(`John was born on 1999-12-10`);

//Question 2
const employee = Object.create(person, { name: { value: "Anna" }, salary: { value: 0 }, hireDate: { value: new Date() } });
employee.doJob = (jobTitle) => { console.log(`${employee.getName()} is a ${jobTitle} who earn ${employee.salary}`); };
employee.doJob("SWE");

//Question 3
function Person(name, dateOfBirth) {
    this.name = name;
    this.dateOfBirth = dateOfBirth;
    this.toString = function() {
        return `Name:${this.name}, DateOfBirth:${this.dateOfBirth}`;
    };
}

const Peter = new Person("Peter", "November 10,1985");
Peter.toString();