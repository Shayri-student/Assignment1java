const firebaseConfig = {
    apiKey: "AIzaSyDXt8dJ1jNxjc-Kul_FdC5cHz6S0gJewHU",
    authDomain: "todoapp-28d1c.firebaseapp.com",
    databaseURL: "https://todoapp-28d1c-default-rtdb.firebaseio.com",
    projectId: "todoapp-28d1c",
    storageBucket: "todoapp-28d1c.appspot.com",
    messagingSenderId: "19652413079",
    appId: "1:19652413079:web:680f505f01316663548bd2"
  };
  
// Initialize Firebase
var app = firebase.initializeApp(firebaseConfig);

var database = firebase.database().ref("inputField");

database.on("child_added", function (snapshot) {
    var data = snapshot.val();

    var liElement = document.createElement("li");
    var liText = document.createTextNode(data.inputvalue);
    liElement.appendChild(liText);

    // Delete Button
    var delbtn = document.createElement("button");
    var delbtnText = document.createTextNode("Delete");
    delbtn.setAttribute("id", data.key);
    delbtn.appendChild(delbtnText);
    liElement.appendChild(delbtn);
    delbtn.setAttribute("onclick", "deleteItems(this)");
    delbtn.setAttribute("class", "button");

    // Edit button
    var editbtn = document.createElement("button");
    var editbtnText = document.createTextNode("Edit");
    editbtn.setAttribute("id", data.key);
    editbtn.appendChild(editbtnText);
    liElement.appendChild(editbtn);
    editbtn.setAttribute("onclick", "editItems(this)");
    editbtn.setAttribute("class", "button");

    var list = document.getElementById("list");
    list.appendChild(liElement);
});

function addtodo() {
    var input = document.getElementById("inputField");
    var key = database.push().key;
    var todoObject = {
        inputvalue: input.value,
        key: key,
    };

    database.child(key).set(todoObject);
    input.value = "";
}

function deleteAll() {
    database.remove();
    list.innerHTML = "";
}

function deleteItems(x) {
    database.child(x.id).remove();
    x.parentNode.remove();
}

function editItems(e) {
    var input = prompt("Enter updated value...");
    if (input !== null) {
        var editTodo = {
            inputvalue: input,
            key: e.id,
        };
        database.child(e.id).set(editTodo);
    }
}
