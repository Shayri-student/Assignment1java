function Value(button){
    var val = document.getElementById("input");
    val.value += button.innerHTML;
}
function calculate(){
    var cal = document.getElementById("input");
    try {
        var Result = eval(cal.value);
        if(isNaN(Result)||!isFinite(Result)){
            cal.value = "Error";
        }
        else{
            cal.value = Result;
        }
    }
    catch (error){
        cal.value = "Error";

    }
}
function clear(){
    var clear = document.getElementById("input");
    clear.value = clear.value.slice(0,-1);
}
function clearwhole(){
    var clearwhole = document.getElementById("input");
    clearwhole.value = "";
}