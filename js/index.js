const listTodo = document.querySelector('.todo-list')

let inputNewTodo = document.querySelector('.new-todo')
let idLine = 1

inputNewTodo.addEventListener('keyup', function(e) {

    let valueNewTodo = inputNewTodo.value.trim()

    if ( e.keyCode === 13 && valueNewTodo )
        newTodo(valueNewTodo)
})

function completeTodo(id) {

    let lineCompleted = document.querySelector("[data-id='" + id + "']")
    let checkBox = lineCompleted.querySelector('.view .toggle')

    if( checkBox.checked == true ) 
        lineCompleted.classList.add('completed');
    else 
        lineCompleted.classList.remove('completed');
}
