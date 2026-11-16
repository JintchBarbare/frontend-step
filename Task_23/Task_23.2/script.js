// საკლ. დავალება 3.1
let int1 = 70, int2 = 27;
let result = (int1 / int2).toFixed(3);
alert(result);


// საკლ. დავალება 3.2
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
console.log(fahrenheitToCelsius(77));


// საკლ. დავალება 3.3
function include(str1, str2) {
    let result = str1.includes(str2);
    alert(result);
    return result;
}
include('JavaScript პროგრამირება', 'Script');


// საკლ. დავალება 3.4
function myPow(base, exponent) {
    return base ** exponent;
}
console.log(myPow(2, 4));


// საკლ. დავალება 3.5
const multiplication = (x, y) => x * y;
console.log(multiplication(5, 6));