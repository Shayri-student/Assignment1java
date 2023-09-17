// for (var a = 1; a<=55 ; a++){
// document.write('Welcome Sheer khan'+""+ a +"<br/>");
// }
// ******************Table****************************
// var userInput = +prompt("Enter a number to write a table");
// var tableLength = +prompt("Enter table Length");
// for (var i = 1 ; i<= tableLength ;i++){
//     document.write(userInput + " x " + i +" = "+ userInput*i + "<br/>");
// }
// ***********************Array and for*****************
// var userCity = prompt('Enter Your City Name:');
// var arr = ["karachi","lahore","faislabad","peshawar","multan"];
// for (var i = 0 ;i<=arr.length ;i++ ){
//     if (arr[i] === userCity){
//         document.write(userCity + ' is a Cleanest City');
//     }
// }
// **************************Class Task******************
// Q3
// for (var i = 1; i<=10; i++){
//     document.write(i + "<br/>");
// }
// Q4
// var userInput = +prompt("Enter a number to write a table");
// var tableLength = +prompt("Enter table Length");
// for (var i = 1 ; i<= tableLength ;i++){
//     document.write(userInput + " x " + i +" = "+ userInput*i + "<br/>");
// }
// Q5
// var fruits = ["apple","banana","mango","orange","strawberry"]
// for(var i = 0 ; i<fruits.length ;i++){
// document.write(fruits[i]+"<br/>");
// }
// for(var i = 0 ; i<fruits.length ;i++){
// document.write("Elements at index "+ i +" is "+fruits[i]+"<br/>");
// }
// Q6
// a
// for(var i = 1;i<=15;i++){
//     document.write(i+" <br/>");
// }
// b
// for(var i = 10;i>=1;i--){
//     document.write(i+" <br/>");
// }
// c
// for(var e = 0;e<=20;e++ ){
//     if(e%2===0){
//     document.write(e+" <br/>");
//     }   
// }
// // d
// for(var e = 0;e<=20;e++ ){
//     if(e%2==!0){
//     document.write(e+" <br/>");
//     }   
// }
// // e
// for(var e = 0;e<=20;e++ ){
//     if(e%2===0){
//     document.write(e + "k" +" <br/>");
//     }   
// }
// Q7
// var arr = ["cake", "apple pie", "cookie", "chips", "patties"]
// var userInput = prompt("Write Your Item name:");
// for(var i=0; i<=arr.length ; i++){
//     if(userInput === arr[i]){
//         alert( userInput +" is available at index 2 in our bakery");
//     }
//     else if (i === arr.length){
//         alert(  "we are sorry.  " +userInput+ " is not available in our bakery" );   
// }
// }
// Q8
var arr1= [24, 53, 78, 91, 12]
var max = arr1[0]
for(var i=0 ; i<=arr1.length ; i++){
if (arr1[i]>max){
    max = arr1[i]
}
}
alert("The largest Number is " + max);
// Q9 
var arr2= [24, 53, 78, 91, 12]
var min = arr1[0]
for(var i=0 ; i<=arr1.length ; i++){
if (arr1[i]<min){
    min = arr1[i]
}
}
alert("The Smallest Number is " + min);
// Q10
for(var i=1; i<=100 ;i++){
    if(i%5===0){
    document.write(i +", ");
}
    
}







