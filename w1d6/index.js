/*jshint esversion: 6 */
/*jslint browser: true */
/*global window */
const pageLoad = () => {
    "use strict";
    document.getElementById("biggerDecorations").onclick = submit;
    document.getElementById("bling").onchange = checkBoxOnChange;
    document.getElementById("pig-latin").onclick = changePigLatin;
    document.getElementById("malkovitch").onclick = changeMalkovitch;
};

const submit = () => {
    "use strict";
    setInterval(changeFontSize, 500);
};

const changeFontSize = () => {
    "use strict";
    const fontSize = window.getComputedStyle(document.getElementById("textArea")).getPropertyValue("font-size");
    const currentSize = parseInt(fontSize) * 0.75;
    document.getElementById("textArea").style.fontSize = (parseInt(currentSize) + 2) + "pt";
};

const changePigLatin = () => {
    "use strict";
    let texts = document.getElementById("textArea").value.split(" ");
    const consonantRegex = /^[^aeiou]+/;
    const newTexts = texts.map((text) => {
        let consonant = text.match(consonantRegex);
        return consonant !== null && text.replace(consonantRegex, "").concat(consonant).concat("ay");
    });

    document.getElementById("textArea").value = newTexts.join(" ");
};

const changeMalkovitch = () => {
    "use strict";
    const text = document.getElementById("textArea").value;
    if (text.length >= 5) {
        document.getElementById("textArea").value = "Malkovitch";
    }
};

const checkBoxOnChange = (event) => {
    "use strict";
    const isCheck = event.target.checked;
    if (isCheck) {
        document.getElementById("textArea").style.fontFamily = "Bold";
        document.getElementById("textArea").style.color = "green";
        document.getElementById("textArea").style.textDecoration = "underline";
        document.body.style.backgroundImage = "url(../images/hundred-dollar-bill.jpg)";
    } else {
        document.getElementById("textArea").style.fontFamily = "";
        document.getElementById("textArea").style.color = "";
        document.getElementById("textArea").style.textDecoration = "";
        document.body.style.backgroundImage = "";
    }
};

window.onload = pageLoad;