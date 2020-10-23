let nodeList = document.getElementsByTagName('LI');
let close = document.getElementsByClassName("close");
let list = document.querySelector('ul');


for (let i=0; i < nodeList.length; i++){
    let span = document.createElement("SPAN");
    const txt = document.createTextNode("\u00D7");

    span.className = "close";
    span.appendChild(txt);
    nodeList[i].appendChild(span);
}

for (let i=0; i < close.length; i++){
    close[i].onclick = function () {
        const div = this.parentElement;
        div.style.display = "none";
    }
}

list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
},false);

function newElement() {
    const li = document.createElement("li");
    const inputValue = document.getElementById("myInput").value;
    const t = document.createTextNode(inputValue);
    
    li.appendChild(t);
    
    if (inputValue === ''){
        alert("Привет ,привет JS!");
    }else {
        document.getElementById("myUL").appendChild(li);
    }
    
    document.getElementById("myInput").value = "";

    const span = document.createElement("SPAN");
    const txt = document.createTextNode("\u00D7");
    
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            const div = this.parentElement;
            div.style.display = "none";
        }
    }
}
