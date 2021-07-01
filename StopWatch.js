//initialising every value to 0
var msec=0;
var sec=0;
var min=0;
var d=0; //for hour
var e=0;//for minute
var z=0;//for second
var check=true;
var clear=0;
var stopwatch=document.getElementById('display'); //unique 
stopwatch.innerHTML='00:00:00'; //start form this point


//initalise()
function initiate(){
    if(check===true){
        check=false;
        clear=setInterval(start,10);
    }
}
//start ()
function start(){
    msec=addZeroMsec(msec+1);
    if(msec>99){
        sec=addZeroSec(sec+1);
        msec=addZeroMsec(0);
    }
    if(sec>59){
        sec=addZeroSec(0);
        msec=addZeroMsec(0);
        min=addZeroMin(min+1);
    }
    stopwatch.innerHTML=''+z+min+':'+e+sec+':'+d+msec;
}
//stop()
function stop(){
    check=true;
    clearInterval(clear);
}
//reset()
function reset(){
    msec=0;
    sec=0;
    min=0;
    check=true;
    clearInterval(clear);
    stopwatch.innerHTML='00:00:00';
}



//for hour 'd'
function addZeroMsec(time){
    var length= time.toString().length;
    if(length<2){
        d=0;
    }
    else{
        d='';
    }
    return time;
}
//for minute 'e
function addZeroSec(time){
    var length=time.toString().length;
    if(length<2){
        e=0;
    }
    else{
        e='';
    }
    return time;
}
//for second 'z
function addZeroMin(time){
    var length=time.toString().length;
    if(length<2){
        z=0;
    }
    else{
        z='';
    }
    return time;
}