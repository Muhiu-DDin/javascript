let starthtml = document.getElementById("start"); 
let stophtml = document.getElementById("stop"); 
let resetthtml = document.getElementById("reset"); 

let minhtml = document.querySelector(".min");
let sechtml = document.querySelector(".sec");
let mshtml = document.querySelector(".ms");

let min = 0 ;
let sec = 0 ;
let ms = 0 ;

let set;
starthtml.addEventListener("click" , 
    ()=>{
        set = setInterval(()=>{
            ms++;

            if(ms > 999){
                sec++;
                ms = 0 ;
            }
            if(sec > 59){
                min++;
                sec = 0;
            }
            sechtml.innerHTML = String(sec).padStart(2 , "0");
            minhtml.innerHTML = String(min).padStart(2 , "0");
            mshtml.innerHTML =  ms;
            starthtml.disabled = true;

        } , 1);
    }
);

stophtml.addEventListener("click" , 
    ()=>{
        clearInterval(set);
        starthtml.disabled = false;
    } );

resetthtml.addEventListener("click" , ()=>{
    min = 0;
    sec = 0;
    ms = 0;

    sechtml.innerHTML = String(sec).padStart(2 , "0");
    minhtml.innerHTML = String(min).padStart(2 , "0");
    mshtml.innerHTML = String(ms).padStart(2 , "0");

});
