btnhtml = document.querySelectorAll(".btn");
parahtml = document.querySelector(".para");

btnhtml.forEach( (element) => {
    element.addEventListener("click" , 
        ()=>{
            switch(element.innerHTML){

                case "Bold":
                   if(parahtml.style.fontWeight == "bold"){
                    parahtml.style.fontWeight = "";
                   }
                   else{
                    parahtml.style.fontWeight = "bold";
                   }
                    break;

                case "Italic":
                    if(parahtml.style.fontStyle == "italic"){
                        parahtml.style.fontStyle = "";
                       }
                       else{
                        parahtml.style.fontStyle = "italic";
                       }
                    break;

                case "Underline":
                    if(parahtml.style.textDecoration == "underline"){
                        parahtml.style.textDecoration = "";
                       }
                    else{
                        parahtml.style.textDecoration = "underline";
                       }
                    break;
    
                case "Left":
                    if(parahtml.style.textAlign == "left"){
                        parahtml.style.textAlign = "";
                       }
                    else{
                        parahtml.style.textAlign = "left";
                       }
                    break;
                    
                case "Right":
                    if(parahtml.style.textAlign == "right"){
                        parahtml.style.textAlign = "";
                        }
                    else{
                        parahtml.style.textAlign = "right";
                        }
                    break;

                default:
                    console.log("invalid");
            }
    });
}
);