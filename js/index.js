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
    let lineAll = document.querySelectorAll('[data-id]')
    let selected = document.querySelector('.selected')
    let action = selected.id

    if( checkBoxLine.checked == true )  
        lineComplete.classList.add('completed')
    else 
        lineComplete.classList.remove('completed')
        checkBox.checked = false

    see(lineAll, action)
    
}

function completeAll() {
    let lineAll = document.querySelectorAll('[data-id]')
    let checkBoxAll = document.querySelectorAll('.toggle')
    let selected = document.querySelector('.selected')
    let action = selected.id

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

    see(lineAll, action)
}

function selectTodo(elem, e) {
    
    let lineAll = document.querySelectorAll('[data-id]')
    let selected = document.querySelector('.selected')
    let action = elem.id
    
    e.preventDefault()

    selected.classList.remove('selected')
    elem.classList.add('selected')

    see (lineAll, action) 
}

function see(lineAll, action) {

    for (i = 0; i < lineAll.length; i++) {
 
        switch ( action ) {
            case 'all' :

                blockLine(lineAll[i])

            break

            case 'active' : 

                if (lineAll[i].className === 'completed') 
                    noneLine(lineAll[i])
                else 
                    blockLine(lineAll[i])

            break

            case 'completed' : 

                if (lineAll[i].className !== 'completed')
                    noneLine(lineAll[i])
                else
                    blockLine(lineAll[i])

            break
        }
    }
}

function blockLine(line) {
    
    line.style.display = "block"
}

function noneLine(line) {
    
    line.style.display = "none"
}