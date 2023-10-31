const btn = document.querySelector(".btn");
const container = document.querySelector(".text-white");
const input = document.querySelector(".form-control");
const button=document.querySelector(".btn")
const dark=document.querySelector(".cursor");
const div=document.querySelector("Div")
const ans=document.querySelector("#answer");
const moon=document.querySelector('i');
let i=0;
console.log(div);

button.addEventListener("click", () => {
    console.log(input.value);
    const newTodo = document.createElement("li");
    const newTodoText = document.createTextNode(input.value);
    newTodo.append(newTodoText);
    container.append(newTodo);
    input.value="";
    var allList=document.querySelectorAll("li");
    for(var i=0;i<allList.length;i++){
        allList[i].onclick=function(){
            this.remove();
        }
    }
})

dark.addEventListener("click",()=>{
    if(i%2==0){
    button.classList.remove("btn-outline-primary");
    button.classList.add("btn-outline-dark");
    div.classList.remove("bg-primary");
    div.classList.add("bg-dark");
    ans.classList.remove("bg-primary");
    ans.classList.add("bg-dark");
    moon.classList.remove("fa-regular"),
    moon.classList.add("fa-duotone");
    i++;
    }
    else{
        button.classList.remove("btn-outline-dark");
        button.classList.add("btn-outline-primary");
        div.classList.remove("bg-dark");
        div.classList.add("bg-primary");
        ans.classList.remove("bg-dark");
        ans.classList.add("bg-primary");
        moon.classList.remove("fa-duotone"),
        moon.classList.add("fa-regular");
        i++;
    }
})