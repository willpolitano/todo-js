const listTodo = document.querySelector('.todo-list')

let inputNewTodo = document.querySelector('.new-todo')
let idLine = 1

function validateTodo(event) {
    
    let valueNewTodo = inputNewTodo.value.trim()

    if ( event.keyCode === 13 && valueNewTodo )
        newTodo(valueNewTodo)
}

function completeTodo(id) {

    let lineComplete = document.querySelector("[data-id='" + id + "']")
    let checkBox = document.querySelector('.toggle-all')
    let checkBoxLine = lineComplete.querySelector('.view .toggle')
    let lineAll = document.querySelectorAll('[data-id]')
    let selected = document.querySelector('.selected')
    let action = selected.id

    if( checkBoxLine.checked == true )  
        lineComplete.classList.add('completed')
    else 
        lineComplete.classList.remove('completed')
        checkBox.checked = false

    see(lineAll, action)
    clearCompleted()
}

function completeAll() {

    let lineAll = document.querySelectorAll('[data-id]')
    let checkBoxAll = document.querySelectorAll('.toggle')
    let checkBox = document.querySelector('.toggle-all')
    let selected = document.querySelector('.selected')
    let action = selected.id

    for (i = 0; i < lineAll.length; i++) {

        if ( checkBox.checked == true ) {
            lineAll[i].classList.add('completed')
            checkBoxAll[i].checked = true
        } else { 
            lineAll[i].classList.remove('completed')
            checkBoxAll[i].checked = false
        }
    }

    see(lineAll, action)
    clearCompleted()
}

function selectTodo(elem, e) {
    
    let lineAll = document.querySelectorAll('[data-id]')
    let selected = document.querySelector('.selected')
    let action = elem.id
    
    e.preventDefault()

    selected.classList.remove('selected')
    elem.classList.add('selected')

    see(lineAll, action) 
}

function see(lineAll, action) {

    for (i = 0; i < lineAll.length; i++) {
 
        switch ( action ) {

            case 'all' :
                blockLine(lineAll[i])
                break

            case 'active' : 
                if ( lineAll[i].className === 'completed' ) 
                    noneLine(lineAll[i])
                else 
                    blockLine(lineAll[i])
                break

            case 'completed' : 
                if ( lineAll[i].className !== 'completed' )
                    noneLine(lineAll[i])
                else
                    blockLine(lineAll[i])
                break
        }
    }
    countTodo()
}

function blockLine(line) {
    
    line.style.display = "block"
}

function noneLine(line) {
    
    line.style.display = "none"
}

function clearCompleted()
{
    let lineComplete = document.querySelector('.completed')
    let buttonClearComplete = document.querySelector('.clear-completed')

    if ( lineComplete )
        buttonClearComplete.style.display = "block"
    else 
        buttonClearComplete.style.display = "none"
}

function clearCompletedAll() {

    let lineAll = document.querySelectorAll('[data-id]')

    for (i = 0; i < lineAll.length; i++) {

        if (lineAll[i].className === 'completed')
            destroyTodo(lineAll[i].getAttribute('data-id'))
    }

    clearCompleted()
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