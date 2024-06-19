let hourhtml = document.querySelector(".hour"); 
let minhtml = document.querySelector(".min"); 
let sechtml = document.querySelector(".sec"); 
let dayhtml = document.querySelector(".day");


function timer (){
    myDate = new Date("8/14/2024");
    let curr =  new Date(); 
    let diff = myDate - curr ;
    
    let currDate =  new Date();   
    let day = diff / 1000 / 60 / 60 / 24 ;
    // let hour = diff / 1000 / 60 / 60 ;
    let hour = 24-currDate.getHours();
    
    // let min = diff / 1000 / 60 ;
    let min = 60 - currDate.getMinutes();
    
    // let sec = diff / 1000 ;
    let sec = 60 - currDate.getSeconds();
    
    
    hourhtml.innerHTML = String(Math.round(hour)).padStart(2 , "0");
    minhtml.innerHTML = String(Math.round(min)).padStart(2 , "0");
    sechtml.innerHTML = String(Math.round(sec)).padStart(2 , "0");
    dayhtml.innerHTML = String(Math.round(day)).padStart(2 , "0");
    }

timer();
setInterval(timer , 1000);


