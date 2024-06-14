
// function showTime() {
//     var t = new Date;
//     var h = t.getHours();
//     var m = t.getMinutes();
//     var s = t.getSeconds();
//     var session = "AM";

//     if(h < 10){
//         h = "0" + h;
//     }

//     if(m < 10){
//         m = "0" + m;
//     }
//     if(s < 10){
//         s = "0" + s;
//     }
//     if(h > 12){
//        h = h - 12;
//     }

//     if(h >= 12){
//         session = "PM";
//     }

//     var time = h + " : " + m + " : " + s + " " + session ;

//     var object = document.getElementsByClassName("clock")[0];
//     object.innerText = time;
//     setTimeout(showTime , 1000);
// }

// --------------------------


var hour_html = document.getElementById("hour");
var minute_html = document.getElementById("minute");
var second_html = document.getElementById("second");
var session_html = document.getElementById("session");

setInterval(function () {

    var time = new Date();
    var h = time.getHours();
    var m = time.getMinutes();
    var s = time.getSeconds();
    var session = "AM";

    if (h >= 12) {
        session = "PM";
    }

    // this statement is responsible for removing 24 hour format
    if (h > 12) {
        h = h - 12;
    }

    if (h < 10) {
        h = "0" + h;
    }
    if (m < 10) {
        m = "0" + m;
    }
    if (s < 10) {
        s = "0" + s;
    }
   
    hour_html.innerText = h;
    minute_html.innerText = m;
    second_html.innerText = s;
    session_html.innerText = session;

}, 1000)

