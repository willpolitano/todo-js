const listTodo = document.querySelector('.todo-list')

let inputNewTodo = document.querySelector('.new-todo')
let idLine = 1

function validateTodo(event) {
    
    let valueNewTodo = inputNewTodo.value.trim()

    if ( event.keyCode === 13 && valueNewTodo )
        newTodo(valueNewTodo)
}

function blockLine(line) {
    
    line.style.display = "block"
}

function noneLine(line) {
    
    line.style.display = "none"
}

function countTodo() {

    let span = document.querySelector('.todo-count')
    let action = document.querySelector('.selected').id
    let count = 0

    if ( action === 'all' ) {

        count = document.querySelectorAll('[data-id]').length

    } else if ( action === 'active' ) {
        
        let lineAll = document.querySelectorAll('[data-id]')
        
        for (i = 0; i < lineAll.length; i++) {
            if ( lineAll[i].className !== 'completed' )
                count++
        }

    } else {
        count = document.querySelectorAll('.completed').length
    }

    span.innerHTML = `${count} item left`
}