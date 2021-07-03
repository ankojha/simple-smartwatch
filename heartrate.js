var screenDisplay = document.getElementById('display');
var heart = document.getElementById('features');
var rate = document.getElementById('heartrate');
var timeClock = document.getElementById('timefeatures');


var timer = setInterval(showTime,1000);
function showTime(){
    var currtime = new Date();
    var hour = currtime.getHours();
    var minute = currtime.getMinutes();
    var second = currtime.getSeconds();
    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;
    var samay = hour + ":" + minute + ":" + second;
    screenDisplay.innerHTML = samay;
}

function heartDisplay(){
    clearInterval(timer);
    screenDisplay.innerHTML = '<i id="heartBeat" class="fas fa-heartbeat"></i>'
    rate.style.display = "block";
};

timeClock.addEventListener("click",function(){
    showTime();
    timer = setInterval(showTime,1000);
    rate.style.display = "none";
});

heart.addEventListener('click',function(){
    clearInterval(timer);
    heartDisplay();
})