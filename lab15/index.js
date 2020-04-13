/*jshint esversion: 6 */
/*jslint browser: true */
/*global window */
window.onload = (function() {
    "use strict";
    const pageUrl = document.getElementById("changePage").href;
    document.getElementById("changePage").addEventListener("click", function(event) {
        event.preventDefault();
        $.ajax({
            type: 'GET',
            url: `${pageUrl}`,
            dataType: 'text',
            beforeSend: function() {
                const loader = document.getElementsByClassName("loader")[0];
                loader.style.display = "block";
            },
        }).done(onSuccess).fail(onFail);
    });

    function onSuccess(response) {
        console.log(typeof response);
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

    function onFail() {
        const loader = document.getElementsByClassName("loader")[0];
        loader.style.display = "none";
        alert("ERROR OCCUR");
    }
})();