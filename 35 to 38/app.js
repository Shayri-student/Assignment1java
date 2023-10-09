// **************1******************
// function todaydate(){
// console.log(new Date ());    
// }
// todaydate();
// **************2******************
// function fullName(firstName,lastName){
//     console.log("Hello! Mr.", firstName,lastName)
// }
// var firstName =prompt("Enter Your First Name:");
// var lastName = prompt("Enter Your last Name:");
// fullName(firstName,lastName);
// **************3******************
// function cal(num1,num2){
//     return num1+num2;
// }
// var num1 = +prompt("Enter first number");
// var num2 = +prompt("Enter second number");

// var res = cal(num1,num2);
// console.log(res);
// **************4******************
// function cal(n1,opr,n2){
// if(opr=== "+"){
//     return n1 + n2;
// }
// else if (opr === "*"){
//     return n1*n2;
// }
// else if (opr === "-"){
//     return n1-n2;
// }
// else if (opr === "/"){
//     return n1/n2;
// }
// }
// var n1 = +prompt("Enter first value");
// var opr = prompt("Enter operator");
// var n2 = +prompt("Enter second value");

// var res = cal(n1,opr,n2);
// console.log(res);

// **************5******************
// function square(a){
//     return a * a ;
// }
// var a = +prompt("Enter any number");
// var res = square(a);
// console.log(res);
// **************6******************
// function factorial(num){
//     var res = 1;
//     for(var i=num;i>=1;i--){
//       res = res *i;
//     }
//     return res;
// }
// var inputNumber = +prompt("Enter number for factorial")
// var res1 = factorial(inputNumber);
// console.log(res1);
// **************7******************
// function count(n1,n2){
// for(var i=n1;i<=n2;i++){
//     document.write(i,"<br/>");
// }
// }
// var n1 = +prompt("Enter first number ");
// var n2 = +prompt("Enter End number ");

// count(n1,n2);
// **************8******************

function calculateSquare(){
    var perp = +prompt("Enter perpendicular");
    var base = +prompt("Enter Base");
    return (perp*perp) + (base*base);  
}

var hypSquare = calculateSquare();
console.log(hypSquare); 
// *****************9****************






