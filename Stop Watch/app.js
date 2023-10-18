var hourHeading = document.getElementById("hourHeading");
var MinHeading = document.getElementById("MinHeading");
var secHeading = document.getElementById("secHeading");
var msecHeading = document.getElementById("msecHeading");
var hour = 0;
var min = 0;
var sec = 0;
var msec = 0;
var interval ;
function timer(){
    msec++;
    msecHeading.innerHTML = msec;
    if(msec>=100){
        sec++;
    secHeading.innerHTML = sec; 
    msec = 0; 
    }
    else if(sec>=60){
        min++;
    MinHeading.innerHTML = min; 
    sec =0;  
    }
    else if(min>=60){
       hour++;
    hourHeading.innerHTML = hour;
    min = 0;
    }
}
function start(){
var start = document.getElementById("startbtn")
interval =  setInterval(timer,10);
start.disabled = true;
    }
function pause(){
var start = document.getElementById("startbtn")
clearInterval(interval);
start.disabled = false;
}
function reset(){
     hour = 0;
     min = 0;
     sec = 0;
     msec = 0;  
hourHeading.innerHTML = hour;
MinHeading.innerHTML = min;
secHeading.innerHTML = sec;
msecHeading.innerHTML = msec;
pause();

}



