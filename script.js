const form = document.querySelector("form");
const input = document.querySelector("#txtTaskName");
const btnDeleteAll = document.querySelector("#btnDeleteAll");
const taskList = document.querySelector("#task-list");
//call event listeners
eventListeners();

function eventListeners() {
  //submit event
  form.addEventListener("submit", addNewItem);
  //delete an item-event bubbling
  taskList.addEventListener("click", deleteItem);
  //delete all items
  btnDeleteAll.addEventListener("click", deleteAllItems);
}

//add new item
function addNewItem(e) {
  if (input.value === "") {
    alert("add new ıtem");
  }
  //create li
  const li = document.createElement("li");
  li.className = "list-group-item list-group-item-secondary";
  li.appendChild(document.createTextNode(input.value)); //li nin text node u
  //create a
  const a = document.createElement("a");
  a.classList = "delete-item float-right";
  a.setAttribute("href", "#");
  a.innerHTML = "<i class='fas fa-times'></i>";
  //add a to li
  li.appendChild(a);
  //add to ul
  taskList.appendChild(li);
  //clear input
  input.value = " ";
  e.preventDefault();
}
//delete an item
function deleteItem(e) {
    if(confirm("are you sure")){
        if (e.target.className === "fas fa-times") {
            e.target.parentElement.parentElement.remove();
          }
    }
 
  e.preventDefault();
}
//delete all items
function deleteAllItems(e) {
  if (confirm("are you sure ?")) {
    //taskList.remove();
    //taskList.innerHTML=' ';
    //NodeList-foreach
    taskList.childNodes.forEach(function (item) {
      if (item.nodeType === 1) {
        item.remove();
      }
    });
  }

  e.preventDefault();
}
