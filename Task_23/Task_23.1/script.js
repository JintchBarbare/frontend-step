// დავალება 3.1
let num1 = 7.45, num2 = '13.56';
let convertedNum2 = Number(num2);
let result1 = Math.round(num1) * Math.round(convertedNum2);
document.write(result1 + '<br>');


// დავალება 3.2
let num3 = 20.3;
let num4 = 27.2;
let result2 = (num3 + num4).toFixed(2);
alert(result2);


// დავალება 3.3
let num5 = 77;
let result3 = Math.sqrt(num5).toFixed(1);
console.log(result3);


// დავალება 3.4
let num6 = 3.55;
let result4 = Math.pow(num6, 3).toFixed(2);
console.log(result4);


// დავალება 3.5
function info(str) {
    alert(str);
}
info('გამარჯობა!');


// დავალება 3.6
function exponentiation(a, b) {
    let res = a ** b;
    alert(res);
    return res;
}
exponentiation(2, 3);


// დავალება 3.7
function isEven(number) {
    return number % 2 === 0;
}
console.log(isEven(4));
console.log(isEven(7));


// დავალება 3.8
function getSubstring(text, count) {
    return text.slice(0, count);
}
console.log(getSubstring('JavaScript', 4));


// დავალება 3.9
function address(addr) {
    const p = document.getElementById('my-Address');
    p.innerHTML += '<br>' + addr;
}

let userAddress = prompt('შეიყვანეთ თქვენი მისამართი:');
if (userAddress) {
    address(userAddress);
}


// დავალება 3.10
function roundProduct(a, b) {
    let product = a * b;
    return {
        tenths: Number(product.toFixed(1)),
        units: Math.round(product),
        hundredths: Number(product.toFixed(2))
    };
}
console.log(roundProduct(3.456, 2.12));


// დავალება 3.11
function filterHtml(str) {
    return str.replaceAll('HTML', '').replace(/\s+/g, ' ').trim();
}
console.log(filterHtml('მე ვსწავლობ HTML და CSS ენებს'));


// დავალება 3.12
const squared = (num) => num ** 2;
console.log(squared(5));