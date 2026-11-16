// დავალება 6.1
for (let i = 55; i <= 77; i++) {
    console.log(i);
}


// დავალება 6.2
for (let i = 10; i <= 120; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}


// დავალება 6.3
for (let i = 110; i >= 90; i--) {
    console.log(i);
}


// დავალება 6.4
let toys = ['ოვერბორდი', 'პაზლი', 'Lego', 'Yo-yo'];
for (let i = 1; i < toys.length - 1; i++) {
    console.log(toys[i]);
}


// დავალება 6.5 (შეცდომა იყო i <= toys.length, რადგან ბოლო ინდექსია length - 1)
let toys2 = ['ოვერბორდი', 'პაზლი', 'Lego', 'Yo-yo'];
for (let i = 0; i < toys2.length; i++) {
    console.log(toys2[i]);
}


// დავალება 6.6
let arr = [2, 2, 3, 4, 5];
for (let item of arr) {
    console.log(item);
}


// დავალება 6.7
let num7 = 10;
while (num7 <= 30) {
    console.log(num7);
    num7++;
}


// დავალება 6.8
let num8 = 1;
while (num8 <= 10) {
    console.log(num8 ** 2);
    num8++;
}


// დავალება 6.9
let arr9 = [2, 2, 3, 4, 5];
for (let item of arr9) {
    if (item % 2 === 0) {
        console.log(item);
    }
}


// დავალება 6.10
let arr10 = [1, 77, 9, 17, 4, 3, 9, 8, 20];
for (let item of arr10) {
    if (item > 5 && item < 10) {
        console.log(item);
    }
}


// დავალება 6.11
let object = {a: 7, b: 8, c: 15, d: 20, e: 55};
for (let key in object) {
    if (object[key] % 2 === 0) {
        console.log(object[key]);
    }
}


// დავალება 6.12
let evenSum = 0;
for (let i = 10; i <= 80; i++) {
    if (i % 2 === 0) {
        evenSum += i;
    }
}
console.log(evenSum);


// დავალება 6.13
let product = 1;
for (let i = 5; i <= 30; i++) {
    product *= i;
}
console.log(product);


// დავალება 6.14
let str14 = '';
for (let i = 2; i <= 14; i += 2) {
    str14 += i;
}
console.log(str14);


// დავალება 6.15
let str15 = '-';
for (let i = 11; i >= 3; i--) {
    str15 += i + '-';
}
console.log(str15);


// დავალება 6.16
for (let i = 50; i <= 500; i++) {
    let s = String(i);
    if (Number(s[0]) + Number(s[1]) === 4) {
        console.log(i);
    }
}


// დავალება 6.17
let arr17 = [10.8, 7.227, 9, 17.34, 10.34, 3, 7.9, -8, 20, 100, 77, 345.67];
let sum17 = 0;
for (let item of arr17) {
    if (item < 0) {
        break;
    }
    sum17 += item;
}
console.log(sum17);


// დავალება 5.18
let names = ['ხვიჩა', 'გოგა', 'მაკა', 'ანა', 'ინა', 'მაიკლი', 'ფანტომასი', 'ბონდო', 'ობამა', 'მესი', 'მარადონა'];
let pos = names.indexOf('ფანტომასი');
console.log(pos);


// დავალება 5.19
let sum19 = 0;
let count19 = 0;
while (sum19 <= 200) {
    count19++;
    sum19 += count19;
}
console.log(count19);




// დავალება 5.21
let matr = [
    [128, 52, 6, 76, 200],
    [95, 36, 2, 44, 300],
    [2, 4, 7, 9, 2]
];
let rowSums = [];
for (let row of matr) {
    let rowSum = 0;
    for (let num of row) {
        rowSum += num;
    }
    rowSums.push(rowSum);
}
console.log(rowSums);


// დავალება 5.22
// პასუხი: კონსოლზე გამოვა ReferenceError: num is not defined (რადგან let num გამოცხადებულია for ციკლის ბლოკის შიგნით და გარეთ არ ჩანს)


// დავალება 5.23
let arr23 = [];
for (let i = 20; i <= 40; i++) {
    arr23.push(i);
}
console.log(arr23);


// დავალება 5.24
let arr24 = [1, -77, 9, 17, -4, 3, 9, -8, 20];
let positiveArr = [];
for (let item of arr24) {
    if (item > 0) {
        positiveArr.push(item);
    }
}
console.log(positiveArr);


// დავალება 5.25
let arr25 = [10.8, 7.227, 9, 17.34, 10.34, 3, 7.9, -8, 20, 100, 77, 345.67];
for (let i = 0; i < arr25.length; i++) {
    arr25[i] = arr25[i] ** 2;
}
console.log(arr25);


// დავალება 5.26
let obj = {};
let keys = ['ორ.', 'სამშ.', 'ოთხ.', 'ხუთ.', 'პარ.', 'შაბ.', 'კვ.'];
let values = [1, 2, 3, 4, 5, 6, 7];

for (let i = 0; i < keys.length; i++) {
    obj[keys[i]] = values[i];
}
console.log(obj);


// დავალება 5.27
let cars = {
    BMW: 'შავი',
    Mercedes: 'ვერცხლისფერი',
    Nissan: 'შავი',
    Ford: 'წითელი',
    Toyota: 'შავი'
};
let blackCars = {};
for (let brand in cars) {
    if (cars[brand] === 'შავი') {
        blackCars[brand] = cars[brand];
    }
}
console.log(blackCars);


// დავალება 5.28
let weekDays = ['კვირა', 'ორშაბათი', 'სამშაბათი', 'ოთხშაბათი', 'ხუთშაბათი', 'პარასკევი', 'შაბათი'];
let todayIndex = new Date().getDay();
let dayType = (todayIndex === 0 || todayIndex === 6) ? 'დასვენების დღე' : 'სამუშაო დღე';
document.getElementById('task-28').textContent = `${weekDays[todayIndex]} - ${dayType}`;


// დავალება 5.29
let months = [
    'იანვარი', 'თებერვალი', 'მარტი', 'აპრილი', 'მაისი', 'ივნისი',
    'ივლისი', 'აგვისტო', 'სექტემბერი', 'ოქტომბერი', 'ნოემბერი', 'დეკემბერი'
];
let currentMonthIndex = new Date().getMonth();
alert(months[currentMonthIndex]);