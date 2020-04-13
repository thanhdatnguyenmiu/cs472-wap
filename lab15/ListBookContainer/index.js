/*jshint esversion: 6 */
/*jslint browser: true */
/*global window */
window.onload = (function() {
    "use strict";
    const pageUrl = "../AddBookComponent/AddBookForm.html";
    $.ajax({
        type: 'GET',
        url: "https://elibraryrestapi.herokuapp.com/elibrary/api/book/list ",
        dataType: 'json',
        beforeSend: function() {
            const loader = document.getElementsByClassName("loader")[0];
            loader.style.display = "block";
        },
    }).done(onSuccess).fail(onFail);

    function onSuccess(response) {

        const tableRef = document.getElementById('myTable').getElementsByTagName('tbody')[0];
        let id = 1;
        response.forEach(book => {
            const element = document.createElement("tr");
            element.innerHTML = `<td>${id}</td>
            <td>${book.isbn}</td>
            <td>${book.title}</td>
            <td>${book.overdueFee}</td>
            <td>${book.publisher}</td>
            <td>${book.datePublished}</td>`;
            tableRef.appendChild(element);
            id++;
        });
        const loader = document.getElementsByClassName("loader")[0];
        loader.style.display = "none";
    }

    function onFail() {
        const loader = document.getElementsByClassName("loader")[0];
        loader.style.display = "none";
        alert("ERROR OCCUR");
    }

    document.getElementById("addBookForm").addEventListener("click", function(event) {
        event.preventDefault();
        $.ajax({
            type: 'GET',
            url: `${pageUrl}`,
            dataType: 'text',
            beforeSend: function() {
                const loader = document.getElementsByClassName("loader")[0];
                loader.style.display = "block";
            },
        }).done(onClickSuccess).fail(onClickFail);
    });

    function onClickSuccess(response) {
        const loader = document.getElementsByClassName("loader")[0];
        const container = document.getElementById("root-app");
        container.innerHTML = response;
        window.history.pushState(null, null, pageUrl);
        loader.style.display = "none";

        const head = document.getElementsByTagName("head")[0];
        const newScript = document.createElement('script');
        newScript.type = 'text/javascript';
        newScript.src = './index.js';
        head.appendChild(newScript);
    }

    function onClickFail() {
        const loader = document.getElementsByClassName("loader")[0];
        loader.style.display = "none";
        alert("ERROR OCCUR");
    }
})();