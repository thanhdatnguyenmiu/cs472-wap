/*jshint esversion: 6 */
/*jslint browser: true */
/*global window */
window.onload = (function() {
    "use strict";

    document.getElementById("addNewBook").addEventListener("click", function(event) {
        event.preventDefault();
        const bookTitle = document.getElementById("bookTitle").value;
        const isbn = document.getElementById("isbn").value;
        const feePerDay = document.getElementById("feePerDay").value;
        const publisher = document.getElementById("publisher").value;
        const date = document.getElementById("date").value;
        const data = {
            "title": bookTitle,
            "isbn": isbn,
            "overdueFee": feePerDay,
            "publisher": publisher,
            "datePublished": date
        };
        $.ajax({
            type: 'POST',
            url: 'https://elibraryrestapi.herokuapp.com/elibrary/api/book/add',
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(data),
            beforeSend: function() {
                const loader = document.getElementsByClassName("loader")[0];
                loader.style.display = "block";
            },
        }).done(onClickSuccess).fail(onClickFail);
    });

    function onClickSuccess(response) {
        const loader = document.getElementsByClassName("loader")[0];
        loader.style.display = "none";
        alert('SUCCESS');
    }

    function onClickFail() {
        const loader = document.getElementsByClassName("loader")[0];
        loader.style.display = "none";
        alert("ERROR OCCUR");
    }
})();