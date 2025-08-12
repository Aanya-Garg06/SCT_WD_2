const startBtn=document.getElementById('startBtn');
const stopBtn=document.getElementById('stopBtn');
const lapBtn=document.getElementById('lapBtn');
const timer=document.getElementById('timer');
const lapList=document.getElementById('lapList');

let startTime=0;
let elapsedTime=0;
let intervalId=0;
let isRunning=false;

startBtn.addEventListener('click',()=>{
    if (!isRunning){
        isRunning=true;
        startTime=Date.now()-elapsedTime;

        intervalId=setInterval(()=>{
            elapsedTime=Date.now()-startTime;
            timer.textContent=formatTime(elapsedTime);
        }, 75);
    }
});

function formatTime(ms){
    let milliseconds=Math.floor((ms%1000)/10);
    let seconds=Math.floor((ms/1000)%60);
    let minutes=Math.floor(ms/(1000*60*60));
    let hours=Math.floor((ms/(1000*60))%60);

    return(
        String(hours).padStart(2,'0')+':'+
        String(minutes).padStart(2,'0')+':'+
        String(seconds).padStart(2,'0')+'.'+
        String(milliseconds).padStart(2,'0')
    );
}

stopBtn.addEventListener('click',()=>{
    if (isRunning){
    clearInterval(intervalId);
    isRunning=false;
    stopBtn.textContent='Resume';
    } else {
        isRunning=true;
        startTime=Date.now()-elapsedTime;
        intervalId=setInterval(()=>{
            elapsedTime=Date.now()-startTime;
            timer.textContent=formatTime(elapsedTime);
        }, 75);
        stopBtn.textContent='stop';
    }
    
});