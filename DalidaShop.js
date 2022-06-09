// first task
// const prompt = require('prompt-sync')();
//не смог сделать prompt чтобы было как сканнер в джава
const name = 'DalidaShop';
let isOpen = true;

// second task
let menu;
let prices = null;
let yourbusket;
let check;
let timeYouAreIn;
menu = ["tea", "coffee", "lagman", "pureshka", "watermelon"];
prices = [100, 150, 900, 1000, 1000];

//third task
let shop = {
    name: 'Dalida',
    location: "Almaty city, Timiryazeva 55"
}

shop.popularity = "popular";
delete shop.popularity;
shop["popularity"] = "popular";
shop["level"] = "high-level";
let info = function(){
    console.log(shop);
}
shop["info"] = info;

let doesShopHaveName = "name" in shop;
//true
//fourth task

let Menu = ["hi"];

for(let i = 0; i < menu.length; i++){
    Menu[i] = menu[i];
}


for(key in menu){
    menu[key] = menu[key] + " " + prices[key];
}


console.log("\n");
console.log('Welcome to '+shop.name + "'s " + 'store! Have a good shopping');
console.log("\n");
console.log("This is our menu: \n");
console.log(menu);
// let a = prompt('text your message');

//map
menu = menu.map(menu => menu + "  50%off");
console.log(menu);

menu[2] = "coffee 200";

//filter
let lowPrices = prices.filter(prices => prices <= 400)
//150, 100 lowest prices
//spread
console.log(...Menu);


//Rest

function sum(a, b, ...rest){
    return a +b +rest.reduce((a, i) => a + i, 0)
}
console.log(sum(...prices));

//slice

let menuSliced = menu.slice(0, 3);
console.log(menuSliced);

menuSliced = menu.slice(2);
console.log(menuSliced);


if(prices[3] == prices[4]){
    console.log("4th and 5th element's prices are equal");
}

let p = "1000";

if(p == prices[4]){
    console.log("4th and 5th element's prices are equal");
}
if(p === prices[4]){
    console.log("4th and 5th element's prices are equal");
}
//switch

let num = 5;

switch(num){
    case 1: if(num == 1){
        console.log("that's it! 1");
    }break;
    case 2: if(num == 2){
        console.log("that's it! 2");
    }break
    case 3: if(num == 3){
        console.log("that's it! 3");
    }break;
    case 4: if(num == 4){
        console.log("that's it! 4");
    }break;
    case 5: if(num == 5){
        console.log("that's it! 5");
    }break;
    case 6: if(num == 6){
        console.log("that's it! 6");
    }break;
}

//arrow functions

let myFunction = (a, b) => a * b;

let o = 5;
let r = 6;

console.log(myFunction(o, r));

//destructuring

function calculate(a, b) {
    const add = a + b;
    const subtract = a - b;
    const multiply = a * b;
    const divide = a / b;
  
    return [add, subtract, multiply, divide];
  }
  
  const [add ,,, divide] = calculate(4, 7);
  console.log(add, divide);