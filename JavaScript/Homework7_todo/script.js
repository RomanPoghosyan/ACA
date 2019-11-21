const input = document.getElementById("add");
const container = document.getElementById("tasks");
const button = document.getElementById("button");

function addTask(){
    let div = document.createElement("div");
    div.className = "task";
    let value = input.value;
    input.value = "";
    div.innerHTML = `<div class="alert alert-warning alert-dismissible fade show pr-3" role="alert">
                      <span class="body">${value}</span>
                      <span class="remove">&times;</span>
                    </div>`
    container.append(div);
}

function clickHendler(event){
    if(event.target.classList.contains("body")){
        event.target.classList.toggle("lineThrough");
    }else if(event.target.className == "remove"){
        event.target.closest(".task").remove();
    }
}

function enterHendler(event){
    if(event.which == "13"){
        addTask();
    }
}

container.addEventListener("click", clickHendler);
button.addEventListener("click", addTask);
input.addEventListener("keydown", enterHendler)
