"use strict";
/*jshint esversion: 6 */
/*jslint browser: true */
/*global window */
/*globals $:false */
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
//QUESTION 4A
$(document).ready(function() {
    $('#submit').on('click', function(event) {
        event.preventDefault();
        const email = $("#email").val();
        const password = $("#password").val();
        console.log(email);
        console.log(password);
    });
});

//QUESTION 4B
$(document).ready(function() {
    $('#btnSubmit').on('click', function(event) {
        event.preventDefault();
        const productNumber = $("#productNumber").val();
        const name = $("#name").val();
        const unitPirce = $("#unitPirce").val();
        const url = $("#url").val();
        const quantity = $("#quantity").val();
        const supplier = $("#supplier").val();
        const date = $("#date").val();
        const html = `<p>Product Name:${productNumber}</p>
        <p>Name:${name}</p>
        <p>Unit Price:${unitPirce}</p>
        <p>URL:${url}</p>
        <p>Quantitu:${quantity}</p>
        <p>Supplier:${supplier}</p>
        <p>Date:${date}</p>`;
        $('.information').append(html);
    });
});