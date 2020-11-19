const listTodo = document.querySelector('.todo-list')
const checkBox = document.querySelector('.toggle-all')
let inputNewTodo = document.querySelector('.new-todo')
let idLine = 1

function validateTodo(event) {
    
    let valueNewTodo = inputNewTodo.value.trim()

    if ( event.keyCode === 13 && valueNewTodo )
        newTodo(valueNewTodo)
}

function completeTodo(id) {

    let lineComplete = document.querySelector("[data-id='" + id + "']")
    let checkBoxLine = lineComplete.querySelector('.view .toggle')

    if( checkBoxLine.checked == true )  
        lineComplete.classList.add('completed')
    else 
        lineComplete.classList.remove('completed')
        checkBox.checked = false
    
}

function completeAll() {
    let lineAll = document.querySelectorAll('[data-id]')
    let checkBoxAll = document.querySelectorAll('.toggle')

    if( checkBox.checked == true ) 

        for (i = 0; i < lineAll.length; i++) {
            lineAll[i].classList.add('completed')
            checkBoxAll[i].checked = true;
        }

    else 

        for (i = 0; i < lineAll.length; i++) {
            lineAll[i].classList.remove('completed')
            checkBoxAll[i].checked = false;
        }
}
