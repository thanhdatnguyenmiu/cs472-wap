/*jshint esversion: 6 */
/*jslint browser: true */
/*global window */
window.onload = function() {
    "use strict";
    const accounts = [{ "Account Number": "01-123-2333", "Account Name": "Thanh Dat", "Account Type": "Loan" }];
    loadData();
    this.document.getElementById('form').addEventListener("submit", function(event) {
        event.preventDefault();
        const accountNo = document.getElementById("accountNo").value;
        const name = document.getElementById("name").value;
        const selectBox = document.getElementById("type");
        const accountType = selectBox.options[selectBox.selectedIndex].value;
        const listInfo = document.querySelector(".list-group");
        const element = document.createElement("li");
        const account = {
            "Account Number": accountNo,
            "Account Name": name,
            "Account Type": accountType
        };
        if (!checkAccountNo(accountNo)) {
            accounts.push(account);
            element.className = "list-group-item";
            element.innerHTML = `${accountNo} | ${name} | ${accountType}`;
            listInfo.appendChild(element);
        } else {
            alert("Account Number already exist");
        }

    });

    function checkAccountNo(accountNo) {
        const isExist = accounts.filter((account) => account["Account Number"] === accountNo).length > 0;
        return isExist;
    }

    function loadData() {
        const listInfo = document.querySelector(".list-group");
        if (accounts.length > 0) {
            accounts.forEach(item => {
                const element = document.createElement("li");
                element.className = "list-group-item";
                element.innerHTML = `${item["Account Number"]} | ${item["Account Name"]} | ${item["Account Type"]}`;
                listInfo.appendChild(element);
            });
        }
    }
};