let hr = document.querySelector(".hour");
let min = document.querySelector(".min");
let sec = document.querySelector(".sec");
let dateElement = document.querySelector(".dateElement");
let sessionElement = document.querySelector(".session");

function updateClock() {
    let date = new Date();
    let hour = String(date.getHours()).padStart(2, '0');
    let minute = String(date.getMinutes()).padStart(2, "0");
    let second = String(date.getSeconds()).padStart(2, "0");
    let session = "AM";
    let options = { year: 'numeric' , weekday: 'long', month: 'long', day: 'numeric' };
    let dateString = date.toLocaleDateString('en-US', options);

    if (hour >= 12) {
        session = "PM";
    }
    if (hour > 12) {
        hour = hour - 12;
    }

    hr.innerHTML = hour;
    min.innerHTML = minute;
    sec.innerHTML = second;
    sessionElement.innerHTML = session;
    dateElement.innerHTML = dateString;
}

updateClock();
setInterval(updateClock, 1000);
