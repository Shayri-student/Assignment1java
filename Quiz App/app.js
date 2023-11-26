var firebaseConfig = {
    apiKey: "AIzaSyDJ9Fys7_jqsVT5-zB3pjPcYD-QP1Zxmc0",
    authDomain: "quizapp-24547.firebaseapp.com",
    databaseURL: "https://quizapp-24547-default-rtdb.firebaseio.com",
    projectId: "quizapp-24547",
    storageBucket: "quizapp-24547.appspot.com",
    messagingSenderId: "195884022240",
    appId: "1:195884022240:web:900c747bfaf4db69c6d385"
};

// Initialize Firebase
var app = firebase.initializeApp(firebaseConfig);
var auth = firebase.auth(); // Initialize Firebase Authentication

function signUp() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            var user = userCredential.user;
            console.log('User signed up:', user);

            // Send email verification
            user.sendEmailVerification()
                .then(() => {
                    console.log('Email verification sent!');
                    // Save user details to the database
                    saveUserDetails(user.uid, firstName, lastName, email);
                    // Proceed to start the quiz or redirect to the quiz page
                    startQuiz();
                })
                .catch((error) => {
                    console.error('Error sending email verification:', error.message);
                });
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.error('Sign-up error:', errorMessage);
        });
}

function startQuiz() {
    console.log('Starting quiz...');
    // Redirect to the quiz page or perform any actions to start the quiz
    window.location.href = "./startquiz.html";
}
    // ****************Quiz***********

    var questions = [
        {
            question: "1. What do you understand by HTML?",
            option1: "HTML describes the structure of a webpage",
            option2: "HTML is the standard markup language mainly used to create web pages",
            option3: "HTML consists of a set of elements that helps the browser how to view the content",
            option4: "All of the above",
            correctAns: "All of the above"
        },
        {
            question: "2. Who is the father of HTML?",
            option1: "Rasmus Lerdorf",
            option2: "Tim Berners-Lee",
            option3: "Brendan Eich",
            option4: "Sergey Brin",
            correctAns: "Tim Berners-Lee"
        },
        {
            question: "3. HTML stands for ___",
            option1: "HyperText Markup Language",
            option2: "HyperText Machine Language",
            option3: "HyperText Marking Language",
            option4: "HighText Marking Language",
            correctAns: "HyperText Markup Language"
        },
        {
            question: "4. Which is used to read an HTML page and render it?",
            option1: "Web server",
            option2: "Web network",
            option3: "Web browser",
            option4: "Web matrix",
            correctAns: "Web browser"
        },
        {
            question: "5. Which tag is used for inserting the largest heading in HTML?",
            option1: "head",
            option2: "<h1>",
            option3: "<h6>",
            option4: "heading",
            correctAns: "<h1>"
        },
        {
            question: "6. Which is used to create Web Pages ?",
            option1: "C++",
            option2: "Java",
            option3: "HTML",
            option4: "JVM",
            correctAns: "HTML"
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
    var intervalId; // Declare the intervalId variable
    setInterval(function () {
        timer.innerHTML = `${min}:${sec}`;
        sec--;
        if (sec < 0) {
            min--;
            sec = 59;
        }
        if (min < 0) {
            min = 1;
            sec = 59;
            clearInterval(intervalId); // Clear the interval when quiz is completed
            nextQuestion();
        }
    }, 1000)

    function nextQuestion() {
        var getOption = document.getElementsByName("options");
        for (var i = 0; i < getOption.length; i++) {
            if (getOption[i].checked) {
                var selectedValue = getOption[i].value;
                var selectedQues = questions[index - 1]["question"];
                var selectedAns = questions[index - 1][`option${selectedValue}`];
                var correctAns = questions[index - 1]["correctAns"];
                if (selectedAns == correctAns) {
                    score++;
                }
            }
            getOption[i].checked = false;
        }
        button.disabled = true;

        if (index >= questions.length) {
            Swal.fire(
                'Good job!',
                `Your percentage is ${((score / questions.length) * 100).toFixed(2)}`,
                'success'
            )
            // Save the score to the Firebase database
            saveScoreToFirebase(score);
        }
        else {

            para.innerHTML = questions[index].question;
            opt1.innerText = questions[index].option1;
            opt2.innerText = questions[index].option2;
            opt3.innerText = questions[index].option3;
            opt4.innerText = questions[index].option4;
            index++;
        }
        min = 1;
        sec = 59;

    }
    function clicked() {
        button.disabled = false;
    }
    // Function to save the score to Firebase
    function saveUserDetails(userId, firstName, lastName, email) {
        var database = firebase.database();
        var userRef = database.ref('users/' + userId);

        // Save user details to the 'details' node
        userRef.child('details').set({
            firstName: firstName,
            lastName: lastName,
            email: email,
        });
    }

    function saveScoreToFirebase(score) {
        var user = firebase.auth().currentUser;
        console.log("currentUser", user);
        console.log('Score:', score);
        if (user) {
            // If the user is authenticated, save the score to the database
            var userId = user.uid;
            var database = firebase.database();
            var userRef = database.ref('users/' + userId);

            // Assuming you have a 'scores' node for each user
            var scoresRef = userRef.child('scores');

            // Push the score to the database
            scoresRef.push({
                score: score,
                timestamp: firebase.database.ServerValue.TIMESTAMP,
            });
        } else {
            // Handle the case when the user is not authenticated
            console.log('User is not authenticated. Score not saved.');
        }
    }
