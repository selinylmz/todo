const form=document.querySelector('form');
const input=document.querySelector('#txtTaskName');
const btnDeleteAll=document.querySelector('#btnDeleteAll');
const taskList=document.querySelector('#task-list');
//call event listeners
eventListeners();

function eventListeners(){
    //submit event
    form.addEventListener('submit',addNewItem);
}

//add new item
function addNewItem(e){
    debugger;
if(input.value===''){
    alert('add new ıtem');
}
//create li
const li=document.createElement('li');
li.className="list-group-item list-group-item-secondary";
li.appendChild(document.createTextNode(input.value));//li nin text node u 
//create a
const a=document.createElement('a');
a.classList="delete-item float-right";
a.setAttribute('href',"#");
a.innerHTML="<i class='fas fa-times'></i>";
//add a to li
li.appendChild(a);
//add to ul
taskList.appendChild(li)
//clear input
input.value=" ";
    e.preventDefault();
}