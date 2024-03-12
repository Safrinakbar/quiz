

const addBtn= document.querySelector(".add");

const input = document.querySelector(".inp-group");



function removeInput()
{
    this.placeholder.remove();
}

function addInput(){
    const name = document.createElement("input");
    name.type="text";
    name.placeholder = "Enter your name";

    const email= document.createElement("input");
    email.type="email";
    email.placeholder="Eneter your email";


    const btn=document.createElement("a");
    btn.className = "delete";
    btn.innerHTML="&times";

    btn.addEventListener("click",removeInput);

    const felx=documnet.createElement("div");
    felx.className="flex";

    input.appendChild(flex);
    flex.appendChild(name);
    flex.appendChild(email);
    flex.appendChild(btn);
}




addBtn.addEventListener("click",addInput)