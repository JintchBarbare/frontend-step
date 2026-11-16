// საკლასო 6.1
for (let i = 10; i <= 120; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}


// საკლასო 6.2
let arr = [2, 2, 3, 4, 5];
for (let item of arr) {
    if (item % 2 !== 0) {
        console.log(item);
    }
}


// საკლასო 6.3
let oddSum = 0;
for (let i = 20; i <= 90; i++) {
    if (i % 2 !== 0) {
        oddSum += i;
    }
}
console.log(oddSum);


// საკლასო 6.4
let arr2 = [10, 200, 3, 40, 50];
for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] > 30) {
        console.log(arr2[i]);
    }
}


// საკლასო 6.5
let names = ['ხვიჩა', 'გოგა', 'მაკა', 'ანა', 'ინა'];
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}


// საკლასო 6.6
let now = new Date();
console.log(now.getDate());
console.log(now.getMonth() + 1);
console.log(now.getFullYear());


// საკლასო 6.7
let days = [
    'კვირა', 'ორშაბათი', 'სამშაბათი', 'ოთხშაბათი', 'ხუთშაბათი',
    'პარასკევი', 'შაბათი'
];

let birthday = new Date('2005-07-12');
let dayIndex = birthday.getDay();
alert(days[dayIndex]);