const listTodo = document.querySelector('.todo-list')

let inputNewTodo = document.querySelector('.new-todo')
let idLine = 1

inputNewTodo.addEventListener('keyup', function(event) {

    let valueNewTodo = inputNewTodo.value.trim()

    if(event.keyCode === 13 && valueNewTodo) {
        newTodo(valueNewTodo)
    }

})
