var inputhtml = document.querySelector(".input");
var listhtml = document.querySelector(".list");
var btnhtml = document.querySelector(".btn");
var delbtn = document.querySelector(".del-btn");
// var edithtml = document.querySelectorAll(".edit");
// var delhtml = document.querySelectorAll(".del");

btnhtml.addEventListener("click" , 
    ()=>{
        var inputValue = inputhtml.value;
        if(!inputhtml.value){
            return;
        }
        listhtml.innerHTML += 

        `<li>
        <span>${inputValue}</span> 
        <button onclick="editing(this)" class="edit">Edit</button>
        <button class="del">Del</button>
        </li>`
        inputhtml.value = "";

        // updataing NodeList
        var delhtml = document.querySelectorAll(".del")

        delhtml.forEach(
            (del)=>{
                del.addEventListener("click" , 
                    (evt)=>{
                        evt.target.parentElement.remove();
                    }
                )
            }
        
        );

        var edithtml = document.querySelectorAll(".edit");
        edithtml.forEach(
        (edt)=>{
            edt.addEventListener("click" , 
                (evt)=>{
                    var valueBefore = evt.target.previousElementSibling.innerHTML;
                    var valueAfter = prompt("enter new value" , valueBefore);
                    evt.target.previousElementSibling.innerHTML = valueAfter;
                }
            );
        }
);
}
);

delbtn.addEventListener("click" , 
    ()=>{
        listhtml.remove();
    }
)

