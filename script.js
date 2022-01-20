function clock() {
    var hours=document.getElementById("hours");
    var minutes=document.getElementById("minutes");
    var seconds=document.getElementById("seconds");
    var am_pm =document.getElementById("am-pm"); 

    var time = new Date();
    var hour = time.getHours();
    var ampm = hour >= 12 ? "PM" : "AM";
    var minute = time.getMinutes();
    var second = time.getSeconds();
    
    am_pm.innerHTML = ampm;
    hour = hour%12;
    hour = hour ? hour:12;
    if(hour<10){
        hour = "0"+hour;
    }
    hours.innerHTML = hour;
    if(minute<10){
        minute = "0"+minute;
    }
    minutes.innerHTML = minute;
    if(second<10){
        second = "0" + second;
    }
    seconds.innerHTML = second;
    
}

setInterval(clock,1000);

function makeDive() {
    var container = document.createElement('div');
    container.className="grid-item";
    container.id="dynamic-block";
    document.getElementById("grid-container1").appendChild(container);

    var invalue = document.getElementById("wakeup-time-selector");
    var invalue1 = document.getElementById("lunch-time-selector");
    var invalue2 = document.getElementById("nap-time-selector");
    var value = invalue.options[invalue.selectedIndex].text;
    document.getElementById("dynamic-block").innerHTML=" Your Breakfast Time is "+ value+"<br/>Your Lunch Time is  "+ invalue1.options[invalue1.selectedIndex].text+" <br/> Your Nap Time is  "+ invalue2.options[invalue2.selectedIndex].text;
    }


function settime() {
    var a = document.getElementById("wakeup-time-selector").value;
    var b = document.getElementById("lunch-time-selector").value;
    var c = document.getElementById("nap-time-selector").value;
    var hourr = new Date().getHours();
    if(a==hourr){
        document.getElementById("right-container-image").style.backgroundImage="url(Images/wakeup_image.svg)";
        document.getElementById("right-container-text").innerHTML="Breakfast Time!"
        div_var1 =1;
    }
    else if(b==hourr){
        document.getElementById("right-container-image").style.backgroundImage="url(Images/lunch_image.svg)";
        document.getElementById("right-container-text").innerHTML="Lunch Time!"
        div_var2 =1;
    }
    else if(c==hourr){
        document.getElementById("right-container-image").style.backgroundImage="url(Images/goodnight_image.svg)";
        document.getElementById("right-container-text").innerHTML="Nap Time!"
        div_var3 = 1;
    }
    makeDive();
}