// 1
let n = 9875;
while (n >= 10) {
    let sum = 0;
    let current = n;
    while (current > 0) {
        sum += current % 10;  
        current = Math.floor(current / 10); 
    }
    n = sum;
}
console.log(n); 

// 2
for (let i = 20; i >= 0; i--) {
    if (i === 0) {
        console.log("Liftoff! 🚀");
    } else if (i % 3 === 0) {
        continue;
    } else {
        console.log(i);
    }
}

//3
const text = "programming is fun";
const vowels = "aeiou";
let result = "";

for (const letter of text) {
    if (!vowels.includes(letter)) {
        result += letter;
    }
}

console.log(result);

// 4
let balance = 1000;
let months = 0;

while (balance < 5000) {
    balance = balance * 1.02 + 150;
    months++;
}

console.log(months, balance.toFixed(2));

// 5 
const temps = [18, 22, 25, 21, 19, 23, 24, 26, 22, 17];
let current = 0;
let longest = 0;

for (const t of temps) {
    if (t > 20) {
        current++;
        if (current > longest) longest = current;
    } else {
        current = 0; 
    }
}

console.log(longest);

// 6
const text1 = "aaabbbbcd";
let result1 = "";
let count = 1;

for (let i = 0; i < text1.length; i++) {
    if (text1[i] === text1[i + 1]) {
        count++; 
    } else {
        result1 += text1[i] + count;
        count = 1;
    }
}

console.log(result);

// 7
let m = 27;
let steps = 0;

while (m !== 1) {
    if (m % 2 === 0) {
        m = m / 2;
    } else {
        m = m * 3 + 1;
    }
    steps++;
}

console.log(steps);

// 8
let rolls = 0;
let die1, die2;

do {
    die1 = Math.floor(Math.random() * 6) + 1;
    die2 = Math.floor(Math.random() * 6) + 1;
    rolls++;
} while (die1 !== 6 || die2 !== 6);

console.log(`ორმაგი ექვსიანი ${rolls} გაგორებაზე!`);

// 9
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const word = "hello";
const shift = 3;
let encrypted = "";

for (const letter of word) {
    const index = alphabet.indexOf(letter);
    const newIndex = (index + shift) % 26; 
    encrypted += alphabet[newIndex];
}

console.log(encrypted);

// 10
const text2 = "me love loops really I";
const words = text.split(" ");
let result2 = "";

for (let i = words.length - 1; i >= 0; i--) {
    result2 += words[i];
    if (i > 0) result2 += " "; 
}

console.log(result2);


// 11
const votes = ["👍", "❤️", "👍", "😂", "👍", "❤️", "😂", "👍"];
const counts = {};

for (const vote of votes) {
    if (counts[vote] === undefined) {
        counts[vote] = 1;
    } else {
        counts[vote]++;
    }
}


let winner = "";
let max = 0;
for (const emoji in counts) {
    if (counts[emoji] > max) {
        max = counts[emoji];
        winner = emoji;
    }
}

console.log(counts);  // { "👍": 4, "❤️": 2, "😂": 2 }
console.log(winner);  // "👍"

// 12
const card = "79927398713";
let sum = 0;
let position = 0; 

for (let i = card.length - 1; i >= 0; i--) {
    let digit = Number(card[i]);

    if (position % 2 === 1) { 
        digit = digit * 2;
        if (digit > 9) digit -= 9;
    }

    sum += digit;
    position++;
}

console.log(sum % 10 === 0 ? "ვალიდურია ✅" : "არავალიდურია ❌");

// 13
for (let n = 2; n <= 10000; n++) {
    let divisorSum = 0;

    for (let d = 1; d < n; d++) {
        if (n % d === 0) {
            divisorSum += d;
        }
    }

    if (divisorSum === n) {
        console.log(n); 
    }
}

// 14
const people = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let index = 0;

while (people.length > 1) {
    index = (index + 2) % people.length;
    console.log(`გავიდა: ${people[index]}`);
    people.splice(index, 1);
}

console.log(`გადარჩა: ${people[0]}`);
