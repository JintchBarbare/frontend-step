// 1
const numbers = [4, 8, 15, 16, 23, 42];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log("ჯამი:", sum);

// 2
const todoList = ["დავალების გაკეთება", "საჭმლის მომზადება"];

todoList.push("სპორტ დარბაზში წასვლა"); 
console.log(todoList);

const finishedTask = todoList.pop(); 
console.log("დასრულდა:", finishedTask);
console.log(todoList);

// 3
const prices = [100, 250, 40, 600];
const discounted = prices.map(price => price * 0.9);

console.log("ორიგინალი:", prices);
console.log("ფასდაკლებით:", discounted);

// 4
const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evens = numbers1.filter(num => num % 2 === 0);

console.log("ლუწი რიცხვები:", evens);

// 5
const products = [
  { title: "მაუსი", price: 45 },
  { title: "კლავიატურა", price: 120 },
  { title: "მონიტორი", price: 350 },
];

const expensive = products.find(p => p.price > 100);
console.log("პირველი ძვირი პროდუქტი:", expensive);

// 6
const cart = [
  { title: "პური", price: 3 },
  { title: "რძე", price: 5 },
  { title: "ყველი", price: 12 },
];

const total = cart.reduce((sum, item) => sum + item.price, 0);
console.log("ჯამური ღირებულება:", total);

// 7
const names = ["გიორგი", "ანა", "დავითი", "ბექა"];
names.sort(); 

const numbers2 = [40, 1, 200, 21, 3];
numbers2.sort((a, b) => a - b); 

console.log("სახელები:", names);
console.log("რიცხვები:", numbers2);

// 8
const letters = ["a", "b", "c", "d"];
letters.reverse();

console.log(letters);

// 9
const cartItems = ["პური", "რძე", "ყველი"];

console.log(cartItems.includes("რძე"));   
console.log(cartItems.includes("ხორცი")); 
console.log(cartItems.indexOf("ყველი"));  
console.log(cartItems.indexOf("ხორცი"));

// 10
const products1 = [
  { title: "მაუსი", inStock: true },
  { title: "კლავიატურა", inStock: false },
  { title: "მონიტორი", inStock: true },
];

const hasOutOfStock = products1.some(p => !p.inStock);
const allInStock = products1.every(p => p.inStock);

console.log("გვაქვს ამოწურული პროდუქტი?", hasOutOfStock); 
console.log("ყველა მარაგშია?", allInStock); 

//11
const queue = ["ნინო", "გიორგი", "ლუკა", "სანდრო"];

queue.splice(1, 1); 
console.log("წაშლის შემდეგ:", queue);

queue.splice(1, 0, "თამარი"); 
console.log("ჩამატების შემდეგ:", queue);

// 12
const categories = [
  ["ხილი", "ბოსტნეული"],
  ["რძის პროდუქტი"],
  ["სასმელი", "შესანახი"],
];

const flatList = categories.flat();
console.log("გაერთიანებული სია:", flatList);

const sentences = ["გამარჯობა მსოფლიო", "კარგი დღეა"];
const allWords = sentences.flatMap(sentence => sentence.split(" "));
console.log("ცალკეული სიტყვები:", allWords);

// 13
const ingredients = ["პომიდორი", "ხახვი", "ნივრი", "ზეთისხილი"];
const recipeLine = ingredients.join(", ");

console.log(recipeLine); 

// 14
const range = Array.from({ length: 10 }, (_, index) => index + 1);
console.log("1-დან 10-მდე:", range);

const doubledRange = Array.from({ length: 5 }, (_, index) => (index + 1) * 2);
console.log("ლუწი რიცხვები:", doubledRange);
