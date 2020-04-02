"use strict";
/*jshint esversion: 6 */
/*jslint browser: true */
/*global window */
/*globals $:false */
$(document).ready(function() {
    $('#submit').on('click', function(event) {
        event.preventDefault();
        const email = $("#email").val();
        const password = $("#password").val();
        console.log(email);
        console.log(password);
    });
});