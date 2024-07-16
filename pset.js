// //                           practse set                   
// // Q1:  what will the following print in javascript?
var myName = "Fatima\""; // escape squence add "1" number
console.log(myName.length);
// // Q2: explore the includes, start with ends with function of a string
var sentence = 'I am coder.';
var word = 'fatima';
console.log("The word \"".concat(word, "\" ").concat(sentence.includes(word) ? 'is' : 'is not', " in the sentence"));
// // Q3:  write a program to convert a given string into lowercase?
var myName1 = "Fatima";
console.log(myName1.toLowerCase());
// //  Q4:  extract the amount out of this string "Please give Rs 1000"
var str = "Please give Rs 1000";
console.log('Please give Rs'.length);
// Q5:  try to change 4th character of a given string were you able to do it?
var fr = "Mahabeer";
fr[4] = "i";
console.log(fr); //friend is not changed because string is immutable (change nhi hoti string )
