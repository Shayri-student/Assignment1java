var questions = [
    {
        question:"1. What do you understand by HTML?",
        option1:"HTML describes the structure of a webpage",
        option2:"HTML is the standard markup language mainly used to create web pages",
        option3:"HTML consists of a set of elements that helps the browser how to view the content",
        option4:"All of the above",
        correctAns:"All of the above"
    },
    {
        question:"2. Who is the father of HTML?",
        option1:"Rasmus Lerdorf",
        option2:"Tim Berners-Lee",
        option3:"Brendan Eich",
        option4:"Sergey Brin",
        correctAns:"Tim Berners-Lee"
    },
    {
        question:"3. HTML stands for ___",
        option1:"HyperText Markup Language",
        option2:"HyperText Machine Language",
        option3:"HyperText Marking Language",
        option4:"HighText Marking Language",
        correctAns:"HyperText Markup Language"
    },
    {
        question:"4. Which is used to read an HTML page and render it?",
        option1:"Web server",
        option2:"Web network",
        option3:"Web browser",
        option4:"Web matrix",
        correctAns:"Web browser"
    },
    {
        question:"5. Which tag is used for inserting the largest heading in HTML?",
        option1:"head",
        option2:"<h1>",
        option3:"<h6>",
        option4:"heading",
        correctAns:"<h1>"
    },
    {
        question:"6. Which is used to create Web Pages ?",
        option1:"C++",
        option2:"Java",
        option3:"HTML",
        option4:"JVM",
        correctAns:"HTML"
    }
]
var para = document.getElementById("ques");
var opt1 = document.getElementById("Opt1");
var opt2 = document.getElementById("Opt2");
var opt3 = document.getElementById("Opt3");
var opt4 = document.getElementById("Opt4");
var button = document.getElementById("btn");
var timer = document.getElementById("timer")
var index = 0;
var score = 0;
var min = 1;
var sec = 59;

setInterval(function(){
    timer.innerHTML = `${min}:${sec}`;
    sec--;
    if(sec<0){
        min--;
        sec=59;
    }
    if(min<0){
        min = 1;
        sec = 59;
        nextQuestion();
    }
},1000)

function nextQuestion(){
    var getOption = document.getElementsByName("options");
    for(var i = 0 ;i<getOption.length;i++){
        if(getOption[i].checked){
            var selectedValue = getOption[i].value;
            var selectedQues = questions[index -1]["question"];
            var selectedAns = questions[index-1][`option${selectedValue}`];
            var correctAns = questions[index-1]["correctAns"];
            if(selectedAns== correctAns){
                score++;
            }
        }
        getOption[i].checked = false;
    }
    button.disabled = true;

    if(index >= questions.length -1){
        Swal.fire(
            'Good job!',
        `Your percentage is ${((score / questions.length)*100).toFixed(2)}`,
            'success'
          )
    }
    else{

    para.innerHTML= questions[index].question;
    opt1.innerText= questions[index].option1;
    opt2.innerText= questions[index].option2;
    opt3.innerText= questions[index].option3;
    opt4.innerText= questions[index].option4;
    index++; 
    }
min = 1;
sec =59;   
    
}
function clicked(){
    button.disabled = false;
}