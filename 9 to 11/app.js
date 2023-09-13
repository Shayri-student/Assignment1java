// *********************Question no 1 **********************************
var city = prompt('Enter city name');
if (city === 'karachi'){
    console.log('“Welcome to city of lights”');
}
// *********************Question no 2 **********************************
var gender = prompt('Enter Your Gender');
if (gender === 'male'){
    console.log('Good Morning Sir');
}
if (gender === 'female'){
    console.log('Good Morning Maam');
}
// *********************Question no 3 **********************************
var signal = prompt('Enter Signal color')
if (signal ==='red'){
    console.log('Must Stop')
}
if (signal ==='yellow'){
    console.log('Ready to move')
}
if (signal ==='Green'){
    console.log('Move Now')
}
// *********************Question no 4 **********************************
var fuel = +prompt('Enter Remaining Fuel in liter')
if (fuel < 0.25 ){
    console.log(' “Please refill the fuel in your car” ')
}
// *********************Question no 5 **********************************
(a)
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
// alert is displayed
(b)
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
// alert is not displayed 
(c)
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
// condition 2 and 4 is True
(d)
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
// Ans : The cost eqals   
(e)
if (true){
    alert("True");
    }
    if (false){
    alert("False");
    }
Ans : True
(f)
if("car" < "cat"){
    alert("car is smaller than cat");
    }
// Ans : alert displayed 
// *********************Question no 6 **********************************
var eng = +prompt('Enter English obtained Marks');
var urdu = +prompt('Enter Urdu obtained Marks');
var math = +prompt('Enter Marks obtained in maths');
var totalMarks = +prompt('Enter Total Marks');
var obtainedMarks = eng + urdu + math ;
var percentage = (eng + urdu + math)*100/ totalMarks;
if (percentage >= 80){
    alert('Total marks :'+ totalMarks +'\n Marks Obtained :'+ obtainedMarks + '\n Percentage :'+ percentage + '\n Grade : A-one \n Remarks: Excellent'  );
}
if (percentage >= 70){
    alert('Total marks :'+ totalMarks +'\n Marks Obtained :'+ obtainedMarks + '\n Percentage :'+ percentage +'%'+ '\n Grade : A \n Remarks: Good'  );
}
if (percentage >= 60){
    alert('Total marks :'+ totalMarks +'\n Marks Obtained :'+ obtainedMarks + '\n Percentage :'+ percentage +'%'+ '\n Grade : B \n Remarks: You need to improve'  );
}
if (percentage < 60){
    alert('Total marks :'+ totalMarks +'\n Marks Obtained :'+ obtainedMarks + '\n Percentage :'+ percentage +'%' + '\n Grade : Fail \n Remarks: Sorry'  );
}
// *********************Question no 7 **********************************
var secretNumber = 7;
var guessNumber = +prompt('Guess Secret Number');
if (guessNumber === secretNumber){
    alert('Bingo! Correct Answer');
}
if (guessNumber === ++secretNumber){
alert('“Close enough to the correct answer”')
}
// *********************Question no 8 **********************************
var num = +prompt('Enter Number');
if (num % 3 === 0){
    alert (num + ' is divisible by 3');
}
if (num % 3 !== 0){
    alert (num + ' is not divisible by 3');
}
// *********************Question no 9 **********************************
var num = +prompt('Enter Number');
if (num % 2 === 0){
    alert (num + ' is even number ');
}
if (num % 2 !== 0){
    alert (num + ' is odd number');
}
// *********************Question no 10 **********************************
var Temp = +prompt('Enter Temperature');
if (Temp > 40 ){
    alert('"Its too hot outside"');
}
else if (Temp > 30 ){
    alert('“The Weather today is Normal."');
}
else if (Temp > 20 ){
    alert('"Today’s Weather is cool."');
}
else if (Temp > 10 ){
    alert('"OMG! Today’s weather is so Cool."');
}
// *********************Question no 11 **********************************
var num1 = +prompt('Enter First Number');
var num2 = +prompt('Second Number');
var operator = prompt('Enter Operator');
if (operator ==='+'){
    alert(num1 + num2);
} 
if (operator ==='-'){
    alert(num1 - num2);
} 
if (operator ==='*'){
    alert(num1 * num2);
} 
if (operator ==='/'){
    alert(num1 / num2);
} 
if (operator ==='%'){
    alert(num1 % num2);
} 