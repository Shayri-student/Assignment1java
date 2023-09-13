// ***********************Question no 1*******************************
// var userInput = prompt('Enter any Input :');
// var charCode = userInput.charCodeAt(0);
// if (charCode >= 48 && charCode <= 57){
//     alert('The Input is a Number');
// }
// else if (charCode>= 65 && charCode <= 90){
//     alert('The Input is an Uppercase');
// }
// else if (charCode >= 97 && charCode <= 122){
//     alert('The Input is a lowercase');
// }
// ***********************Question no 2*******************************
// var firstInteger = parseInt(prompt('Enter First Integer'));
// var secondInteger = parseInt(prompt('Enter Second Integer'));
// if (firstInteger === secondInteger) {
//     alert("Both integers are equal.");
//   } 
// else if (firstInteger > secondInteger) {
//     alert("The first integer (" + firstInteger + ") is larger.");
//   } 
// else {
//     alert("The second integer (" + secondInteger + ") is larger.");
//   }
// ***********************Question no 3*******************************
// var num = +prompt('Enter any number');
// if (num === 0){
//     alert('The Input is 0');
// }
// else if (num > 0){
//     alert('The Input is positive');
// }
// else if (num < 0){
//     alert('The Input is Negative');
// }
// ***********************Question no 4*******************************
// var character = prompt('Enter any single character').toLowerCase();
// if (character.length === 1 && /[aieou]/.test(character)){
//     alert('The character "' + character + '"  is a vowel.');
// }
// else {
//     alert('The character "' + character + '" is not a vowel.');
// }
// ***********************Question no 5*******************************
// var correctPassward = "345678";
// var passward = prompt('Enter Your Passward');
// if (passward === null || passward === "" ){
//     alert('“ Please enter your password”');
// }
// else if (correctPassward === passward){
//     alert('“Correct! The password you entered matches the original password”');
// }
// else {
//     alert('“Incorrect password”')
// }
// ***********************Question no 6*******************************
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// alert(greeting);}
// else {
//     greeting = "Good evening";
//     alert(greeting);
// }
// ***********************Question no 7*******************************
var time = +prompt('Enter Time in 24hr format: ');
if (time >= 0 && time < 1200 ){
alert('Good Morning');
}
else if (time >= 1200 && time < 1700 ){
    alert('Good afternoon');
}
else if (time >= 1700 && time < 2100 ){
 alert('Good evening');
}
else if (time >= 2100 && time < 2359 ){
    alert('Good Night');
}
else{
    alert('Enter Correct Time');
}


