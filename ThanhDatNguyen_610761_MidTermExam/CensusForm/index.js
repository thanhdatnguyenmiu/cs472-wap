/*jshint esversion: 6 */
/*jslint browser: true */
/*global window */
window.onload = function() {
    "use strict";
    this.document.getElementById('form').addEventListener("submit", function(event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const citizenId = document.getElementById("citizenID").value;
        const ssn = document.getElementById("ssn").value;
        const selectBox = document.getElementById("sel1");
        const state = selectBox.options[selectBox.selectedIndex].value;
        const sCitizen = document.getElementsByName('sCitizenradio');
        let radioValue;
        for (var i = 0, length = sCitizen.length; i < length; i++) {
            if (sCitizen[i].checked) {
                radioValue = sCitizen[i].value;
                break;
            }
        }
        const tableRef = document.getElementById('myTable').getElementsByTagName('tbody')[0];
        const element = document.createElement("tr");
        element.innerHTML = `<td>${citizenId}</td>
        <td>${ssn}</td>
        <td>${name}</td>
        <td>${state}</td>
        <td>${radioValue}</td>`;
        tableRef.appendChild(element);
    });
};