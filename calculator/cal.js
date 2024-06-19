// let btn = document.getElementsByTagName("button");
// let arr = Array.from(btn);
// let Input = document.querySelector("input");
// let output = "";
// arr.forEach((btns) => {
//   btns.addEventListener("click", (evt) => {
//     if (evt.target.innerHTML == "=") {
//       output = eval(output);
//       Input.value = output;
//     } else if (evt.target.innerHTML == "AC") {
//       output = " ";
//       Input.value = output;
//     } else {
//       output = output + evt.target.innerHTML;
//       Input.value = output;
//     }
//   });
// });


// or

let arr = document.querySelectorAll("button");
let inputElement = document.querySelector(".input");
let output = "";

for(let btn of arr){
    btn.addEventListener("click" ,
        ()=>{
            if(btn.innerHTML == "="){
                output = eval(output);
                inputElement.value = output;
            }
            else if(btn.innerHTML == "AC"){
                output = " ";
                inputElement.value = output;
            }
            else{
            output = output + btn.innerHTML;
            inputElement.value = output;
            }
        }
    );
}








































