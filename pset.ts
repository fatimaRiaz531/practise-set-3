// //                           practse set                   

// // Q1:  what will the following print in javascript?

let myName: string= "Fatima\"";                     // escape squence add "1" number
console.log(myName.length);

// // Q2: explore the includes, start with ends with function of a string

const sentence= 'I am coder.'
const word='fatima';
console.log(`The word "${word}" ${sentence.includes(word)?'is': 'is not'} in the sentence`);


// // Q3:  write a program to convert a given string into lowercase?

let myName1: string= "Fatima"; 
console.log(myName1.toLowerCase());

// //  Q4:  extract the amount out of this string "Please give Rs 1000"


let str="Please give Rs 1000";
console.log('Please give Rs'.length);

// Q5:  try to change 4th character of a given string were you able to do it?

let fr: string= "Mahabeer";
fr[4] ="i";
console.log(fr);  //friend is not changed because string is immutable (change nhi hoti string )