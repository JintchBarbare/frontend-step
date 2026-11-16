// დავალება 5.1
let sqrtResult = Math.round(Math.sqrt(127));
console.log(sqrtResult);


// დავალება 5.2
let randomNum = Math.floor(Math.random() * 50) + 1;
alert(randomNum);


// დავალება 5.3
let powResult = Math.trunc(Math.pow(56.23, 2));
alert(powResult);


// დავალება 5.4
let BigNum = 98;
let isBig = BigNum > 100 ? true : false;
console.log(isBig);


// დავალება 5.5
let num = 5;
let notBetween = (num < 10 || num > 50) ? true : false;
console.log(notBetween);


// დავალება 5.6
let gender = 'female';
if (gender === 'female') {
    alert('მდედრობითი სქესი');
} else if (gender === 'male') {
    alert('მამრობითი სქესი');
} else {
    alert('გაურკვეველი სქესი');
}


// დავალება 5.7
let animal = 'სპილო';
if (animal !== 'სპილო') {
    alert('ეს ცხოველი სპილო არაა');
} else {
    alert('ეს ცხოველი სპილოა');
}


// დავალება 5.8
let num1 = 99;
let num2 = 19;
if (num1 > num2) {
    console.log('num1 მეტია num2-ზე');
} else if (num1 < num2) {
    console.log('num1 ნაკლებია num2-ზე');
} else {
    console.log('num1 ტოლია num2-ის');
}


// დავალება 5.9
let month = 4;
if ((month > 0 && month < 3) || month === 12) {
    alert('ზამთარია');
} else if (month >= 3 && month <= 5) {
    alert('გაზაფხულია');
} else if (month >= 6 && month <= 8) {
    alert('ზაფხულია');
} else if (month >= 9 && month <= 11) {
    alert('შემოდგომაა');
} else {
    alert('არასწორი თვე');
}


// დავალება 5.10
let season = 'winter';
switch (season) {
    case 'winter':
        console.log('ზამთარია');
        break;
    case 'spring':
        console.log('გაზაფხულია');
        break;
    case 'summer':
        console.log('ზაფხულია');
        break;
    case 'autumn':
        console.log('შემოდგომაა');
        break;
    default:
        console.log('წლის პერიოდი არაა განსაზღვრული');
}


// დავალება 5.11 (შეცდომა იყო ცვლადის ხილვადობის არეალში - block scope)
let clock = 23;
let dayPeriod;

if (clock >= 0 && clock < 12) {
    dayPeriod = 'AM - დღე-ღამის პირველი პერიოდია';
} else {
    dayPeriod = 'PM - დღე-ღამის მეორე პერიოდია';
}

console.log(dayPeriod);


// დავალება 5.12
let clock2 = 23;
let dayPeriod2 = (clock2 >= 0 && clock2 < 12) 
    ? 'AM - დღე-ღამის პირველი პერიოდია' 
    : 'PM - დღე-ღამის მეორე პერიოდია';

console.log(dayPeriod2);


// დავალება 5.13
let string = 'ტესტური ტექსტი';
if (string.length > 100) {
    alert('ტექსტის სიგრძე აჭარბებს დაშვებულ ნორმას');
} else {
    alert('ტექსტის სიგრძე დაშვებული ნორმის ფარგლებშია');
}


// დავალება 5.14
let arr = [-7, 55.4, 33, 102];
if (arr.length > 10) {
    alert('ეს მასივი ვერ დამუშავდება, მისი სიგრძე აჭარბებს დაშვებულ ნორმას');
} else {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    alert(sum);
}


// დავალება 5.15
let phone = '+995 551 169 534';
if (phone.slice(0, 4) === '+995') {
    alert('ეს ქართული ტელეფონის ნომერია');
} else {
    alert('ეს არ არის ქართული ტელეფონის ნომერი');
}


// დავალება 5.16
let myPhone = '551 169 534';
let myPhoneIndex = myPhone.slice(0, 3);
let indexOfBeeline = ['568', '571', '574', '579', '592', '597'];

if (indexOfBeeline.includes(myPhoneIndex)) {
    alert(`${myPhone} - ბილაინის ნომერი`);
} else {
    alert(`${myPhone} - გაურკვეველი ოპერატორის ნომერი`);
}


// დავალება 5.17
let indexOfMagti = ['599', '511', '551', '591', '595', '596', '598'];
let indexOfSilknet = ['577', '593', '555', '557', '558', '514', '570'];
let indexOfBeelineAll = ['568', '571', '574', '579', '592', '597'];

let userPhone = prompt('შეიყვანეთ მობილურის ნომერი (მაგ: 551 169 534):');
if (userPhone) {
    let userPrefix = userPhone.trim().slice(0, 3);
    if (indexOfMagti.includes(userPrefix)) {
        alert(`${userPhone} - მაგთის ნომერი`);
    } else if (indexOfSilknet.includes(userPrefix)) {
        alert(`${userPhone} - სილქნეტის (ჯეოსელის) ნომერი`);
    } else if (indexOfBeelineAll.includes(userPrefix)) {
        alert(`${userPhone} - ბილაინის ნომერი`);
    } else {
        alert(`${userPhone} - გაურკვეველი ოპერატორის ნომერი`);
    }
}


// დავალება 5.18
const delayedNotification = () => {
    setTimeout(() => {
        console.log('თქვენი შეკვეთა შესრულებულია');
    }, 2000);
};
delayedNotification();


// დავალება 5.19
let timerId = setInterval(() => alert('პროცესი ჯერ არ დასრულებულა'), 1000);
setTimeout(() => {
    clearInterval(timerId);
    alert('პროცესი დასრულებულია');
}, 10000);


// დავალება 5.20
function myTimer() {
    const date = new Date();
    document.getElementById("demo").innerHTML = date.toLocaleTimeString();
}
myTimer();
setInterval(myTimer, 1000);