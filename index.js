"use strict";
//Question 1
const max = (a, b) => {
    return a > b ? a : b;
};

//Question 2
const maxOfThree = (a, b, c) => {
    let max = a;
    if (b > max) {
        max = b;
    }
    if (c > max) {
        max = c;
    }
    return max;
};

//Question 3
const isVowel = (a) => {
    return a.length === 1 && true;
};
//Question 4
const sum1 = (numbers) => {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
};

const multiply1 = (numbers) => {
    let multiply = 0;
    for (let i = 0; i < numbers.length; i++) {
        multiply *= numbers[i];
    }
    return multiply;
};

//Question 5
const reverse = (word) => {
    return word.split("").reverse().join("");
};

//Question 6
const findLongestWord = (words) => {
    return words.reduce((firstWord, secondWord) => {
        return firstWord.length > secondWord.length ? firstWord : secondWord;
    });
};

//Question 7
const filterLongWords = (words, i) => {
    return words.filter((word) => {
        return word.length > i;
    });
};

//Question 8
const computeSumOfSquares = (numbers) => {
    return numbers.map((number) => number * number).reduce((accum, current) => accum + current);
};

//Question 9
const printOddNumberOnly = (numbers) => {
    return numbers.filter((number) => number % 2 != 0).map((item) => { console.log(item); });
};

//Question 10
const computeSumOfSquaresOnly = (numbers) => {
    const evenArray = numbers.filter((number) => number % 2 != 0);
    const sumOfSquares = computeSumOfSquares(evenArray);
    return sumOfSquares;
};

//Question 11
const sum = (numbers) => {
    return numbers.reduce((accumylator, current) => accumylator + current);
};

const multiply = (numbers) => {
    return numbers.reduce((accumylator, current) => (accumylator * current));
};

//Question 12
const findSecondBiggest = (numbers) => {
    let firstMax = numbers[0];
    let secondMax = numbers[1];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > firstMax) {
            firstMax = numbers[i];
        }
        if (numbers[i] < firstMax && numbers[i] > secondMax) {
            secondMax = numbers[i];
        }
    }
    return secondMax;
};

//Question 13
const printFibo = (n, a, b) => {
    let fiboArray = [];
    fiboArray.push(a);
    fiboArray.push(b);
    for (let i = 2; i < n; i++) {
        fiboArray.push(fiboArray[i - 2] + fiboArray[i - 1]);
    }
    return fiboArray.forEach(item => console.log(item));
};