function updateTime(){
    let dateTime=new Date();
    let hours=dateTime.getHours();
    let minute=dateTime.getMinutes();
    let second=dateTime.getSeconds();
    let am_pm=document.getElementById("am-pm");

    // formatting AM PM
    if(hours>=12){
        am_pm.innerHTML="PM";
    }
    else{
        am_pm.innerHTML="AM";
    }

    // Formatting hour 

    if(hours>12){
        hours=hours-12;
    }

    // targetting Element
    document.getElementById("hours").innerHTML=hours;
    document.getElementById("minute").innerHTML=minute;
    document.getElementById("second").innerHTML=second;
}
setInterval(updateTime,1000);