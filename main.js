const todoList = [{
  todoName : '',
  dueDate : ''
}];

const addtodoButton = document.querySelector('.addTodo') ;
addtodoButton.addEventListener ('click' , function (){
  const todoName = document.querySelector('.todoName');
  const toDo =  todoName.value ;
  const dueDate = document.querySelector('.dueDate');
  const date = dueDate.value ;

  todoList.push({
    todoName : toDo,
    dueDate : date 
  }) ;

  rendertoDoList();

  todoName.value = '';
  dueDate.value = '';
} )


function rendertoDoList (){
  let toDoHTML = '' ;
    for(i = 1 ; i < todoList.length ; i++){
      const todoObject = todoList[i];
      const todoName = todoObject.todoName ;
      const dueDate = todoObject.dueDate ;

      if(todoName=== '' && dueDate===''){
        alert('Please fill up the Fields!')

      }else{
      
      const html = `<div class = 'todoList'><p>${todoName}</p><p> ${dueDate}</p> <button class= 'remove' onclick = 'todoList.splice(${i} ,1) ; rendertoDoList() ; '>remove</button></div> `;
      toDoHTML += html ;
      }
     
    }
  document.querySelector('.showTodo').innerHTML = toDoHTML ;
}







