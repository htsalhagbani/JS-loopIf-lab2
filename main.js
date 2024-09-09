//Q1
let numbers = [1, 5, 3, 8, 2,4,6,7,9,10];
//psrt1
let asc=numbers.sort((a, b) => a - b);
console.log("asc order :"+asc);
//part2
let square= numbers.map(x => x * x);
console.log("square :"+square);
//part3
let numb = [1, 5, 3, 8, 2,4,6,7,9,10,30];
let num=numb.find(x => x > 25);
console.log("first number gather than 25 :"+num);
//part4
const check = numbers.map(x => x > 5);
console.log("check all number in array > five : "+check.every(value => value === true));
//part5
console.log("includeNum3 :"+numbers.includes(3));
//part6
let even=numbers.filter(x => x % 2 === 0);
console.log("even number array :"+even);
//part7
const midle = Math.floor(numbers.length / 2);
const first = midle - 1;
const secound = midle + 1;
console.log("whithout delete :"+numbers);

let test=numbers.slice(0, first).concat(numbers.slice(secound));
console.log("with delete :"+test);

//part8
let total =1 ; 

    numbers.forEach(num => {
        total *= num; 
    });
    console.log("total * :"+total);

 //part9
  let Number = [1, 5, 3, 8, 2,4,6,7,9,10];

 console.log("first number > 5 :  "+ Number.findIndex(x => x > 5));

 //part 10 
 console.log("delete last number : "+numbers.pop());

 //part11
 numbers.push(100);
 console.log("after add 100 in last : "+numbers);

 //Q2
 //Part1
 let names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];

 let text=names.filter(item => item.toLowerCase().includes('a'));
 console.log(text);
 
 //part2
 console.log(names.join(" - "));

 //Q3
 //part1
 let fruits = ['apple', 'banana', 'cherry', 'date','elephant', 'bird', 'lion'];

let checkB= fruits.some(item => item.toLowerCase().startsWith('b'));
console.log("check starts with b : "+checkB);

//part2
let array=fruits.slice(1, 4);
console.log("new array : "+array);

//part3
fruits.unshift("yellow");
console.log("array add yellow first : "+fruits);


//Q3
//Part1
let words = ['hello', 'world', 'javascript', 'array', 'function'];
let lengthword=words.map(item => item.length);
console.log(lengthword);

 
//part2
if (words.includes('javascript')) {
    console.log('javascript');
} else {
    console.log(`javascript does not exist in the array.`);
}

 
//Lab3 Function

//add
function add(num1,num2){
    return num1+num2;
}

console.log("add number : "+ add(2,2));

//sub
function sub(num1,num2){
    return num1-num2;
}

console.log("sub number : "+ sub(5,2));


//multi
function multi(num1,num2){
    return num1*num2;
}

console.log("multi number : "+ multi(5,2));



//divider
function divider(num1,num2){
    return num1/num2;
}

console.log("divider number : "+ divider(6,2));

//reminder
function reminder(num1,num2){
    return num1%num2;
}

console.log("reminder number : "+ reminder(7,2));



