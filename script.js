const inputEl = document.getElementById("input-el");
const addBtn = document.getElementById("add-btn");
const listContainer = document.getElementById("list-container");
const pendingEl = document.getElementById("pending-el");
;

addBtn.addEventListener("click", ()=> {
    if(inputEl.value === ""){
        alert("please add your text!")
    }else{
        const li = document.createElement("li");
        li.classList.add("li");
        li.innerHTML = inputEl.value;
        listContainer.appendChild(li);

        const span = document.createElement("span");
        span.innerHTML ="Del"
        span.classList.add("span");
        li.appendChild(span);
        inputEl.value = "";
        pendingIn();
        saveData();
    }
    
})

listContainer.addEventListener("click", (e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        pendingIn();
        saveData();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        pendingIn();
        saveData();
    }
})
function clearBtn(){
    listContainer.innerHTML = "";
    pendingIn();
    saveData();
}

function pendingIn(){
    const totalTask = document.querySelectorAll("li");
    const checkedTask = document.querySelectorAll("li.checked")
    let pendingTask = totalTask.length - checkedTask.length;

    if(totalTask.length === 0){
        pendingEl.innerHTML = "";
    }else{
        pendingEl.innerHTML = `You have ${pendingTask} pending task`;
    }
    
}
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showData(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showData();

const totalTask = document.querySelectorAll("li");
const checkedTask = document.querySelectorAll("li.checked")
let pendingTask = totalTask.length - checkedTask.length;

if(totalTask.length === 0){
    pendingEl.innerHTML = "";
}else{
    pendingEl.innerHTML = `You have ${pendingTask} pending task`;
}
