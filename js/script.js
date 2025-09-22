let addBtn = document.getElementById("enter");
let usrInp = document.getElementById("userInput");
let ul = document.querySelector("ul");

function inputLength() {
    return usrInp.value.length;
}

function createListElement() {
    let li = document.createElement("li");
    let liText = document.createTextNode(usrInp.value);
    let delBtn = document.createElement("button");
    let delBtnText = document.createTextNode("X");

    li.appendChild(liText);
    delBtn.appendChild(delBtnText);
    li.appendChild(delBtn);
    ul.appendChild(li);

    delBtn.addEventListener('click', function(){
        li.classList.toggle('delete');
    });
    li.addEventListener('click', function(){
        li.classList.toggle('done');
    });
      
   usrInp.value = '';
}

function additemafterclick() {
    if (inputLength() > 0) {
        createListElement();
    }
}
function additemafterkeypress(e) {
    if (inputLength() > 0 && e.key === 'Enter') {
        createListElement();
    }
}

addBtn.addEventListener('click', additemafterclick);
usrInp.addEventListener('keypress', additemafterkeypress);
