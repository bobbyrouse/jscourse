/*const todoList = [];
const todoList2 = [];
const todoList3 = [];

function addTodo(){
  const InputElement= document.querySelector('.js-name-input');
  const name = InputElement.value;

  todoList.push(name);
  console.log(todoList);

  InputElement.value= '';
}

function addTodo2(){
  const InputElement= document.querySelector('.js-name-input2');
  const name = InputElement.value;

  todoList2.push(name);
  console.log(todoList2);

  InputElement.value= '';
}

function addTodo3(){
  const InputElement= document.querySelector('.js-name-input3');
  const name = InputElement.value;

  todoList3.push(name);
  console.log(todoList3);

  InputElement.value= '';
}

function displayArr(){
  let todoListHTML = '';

  for (let i=0; i < todoList2.length; i++){
    const todo= todoList2[i];
    const html = `<p>${todo}</p>`;
    todoListHTML += html;
  }

  console.log(todoListHTML);

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}




function displayArr3(){
  let todoListHTML3 = '';

  for (let i=0; i < todoList3.length; i++){
    const todo= todoList3[i];
    const html = `
    <p>${todo} 
      <button onclick="
        todoList3.splice(${i}, 1);
        renderDisp3();
        console.log(todoList3);
      ">Delete</button>
    </p>`;
    todoListHTML3 += html;
  }

  console.log(todoListHTML3);

  renderDisp3();
}

function renderDisp3() {
  let todoListHTML3 = '';

  for (let i=0; i < todoList3.length; i++){
    const todo= todoList3[i];
    const html = `
    <p>${todo} 
      <button onclick="
        todoList3.splice(${i}, 1);
        renderDisp3();
        console.log(todoList3);
      ">Delete</button>
    </p>`;
    todoListHTML3 += html;
  }

  console.log(todoListHTML3);

  renderDisp3();

  document.querySelector('.js-todo-list3').innerHTML = inputHTML;
}
*/

const todoList = [{
  name: 'make dinner', 
  dueDate:'2022-12-22'
},{
  name: 'make break', 
  dueDate:'2023-01-22'
}];


function renderTodoList(){
  let todoListHTML = '';

  todoList.forEach((todoObject, index) =>{
    
    const {name, dueDate} = todoObject;
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button onclick="
      todoList.splice(${index},1); 
      renderTodoList();"
      class = "delete-todo-button"
    >Delete</button>
    `;
    
    todoListHTML += html;
  });
/*
  for (let i=0; i < todoList.length; i++){
    const todoObject = todoList[i];
    //const name = todoObject.name;
    const {name, dueDate} = todoObject;
    //const dueDate = todoObject.dueDate;
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button onclick="
      todoList.splice(${i},1); 
      renderTodoList();"
      class = "delete-todo-button"
    >Delete</button>
    `;
    
    todoListHTML += html;
  }*/
  //console.log(todoListHTML);
  
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;

}



function addTodo() {
  const InputElement= document.querySelector('.js-name-input');
  const name = InputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  todoList.push({name, dueDate}); // same as {name: name, dueDate:dueDate}
  //console.log(todoList);

  InputElement.value= '';

  renderTodoList();
}

//delete after
renderTodoList();