"use strict"
//Question 1
const max = function(a, b) {
    return a > b ? a : b;
}

//Question 2
const maxOfThree = function(a, b, c) {
    let max = a;
    if (b > max) {
        max = b;
    }
    if (c > max) {
        max = c;
    }
    return max;
}

//Question 3
const isVowel = function(a) {
        return a.length === 1 && true;
    }
    //Question 4
const sum1 = function(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

const multiply1 = function(numbers) {
    let multiply = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum *= numbers[i];
    }
    return multiply;
}

//Question 5
const reverse = function(word) {
    return word.split("").reverse().join("");
}

//Question 6
const findLongestWord = function(words) {
    return words.reduce(function(firstWord, secondWord) {
        return firstWord.length > secondWord.length ? firstWord : secondWord;
    })
}

//Question 7
const filterLongWords = function(words, i) {
    return words.filter(function(word) {
        return word.length > i;
    })
}

//Question 8
const computeSumOfSquares = function(numbers) {
    return numbers.map(function(number) { return number * number; }).reduce(function(accum, current) { return accum + current; })
}

//Question 9
const printOddNumberOnly = function(numbers) {
    return numbers.filter(function(number) { return number % 2 != 0 }).map(function(item) { console.log(item); })
}

//Question 10
const computeSumOfSquaresOnly = function(numbers) {
    const evenArray = numbers.filter(function(number) { return number % 2 != 0 });
    const sumOfSquares = computeSumOfSquares(evenArray);
    return sumOfSquares;
}

//Question 11
const sum = function(numbers) {
    return numbers.reduce(function(accumylator, current) { return accumylator + current })
}

const multiply = function(numbers) {
    return numbers.reduce((accumylator, current) => (accumylator * current))
}

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
}

//Question 13
const printFibo = (n, a, b) => {
    let fiboArray = [];
    fiboArray.push(a);
    fiboArray.push(b);
    for (let i = 2; i < n; i++) {
        fiboArray.push(fiboArray[i - 2] + fiboArray[i - 1])
    }
    return fiboArray.forEach(item => console.log(item))
}