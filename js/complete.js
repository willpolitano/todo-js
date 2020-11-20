function completeTodo(id) {

    let lineComplete = document.querySelector("[data-id='" + id + "']")
    let checkBox = document.querySelector('.toggle-all')
    let checkBoxLine = lineComplete.querySelector('.view .toggle')
    let lineAll = document.querySelectorAll('[data-id]')
    let action = document.querySelector('.selected').id

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
    let action = document.querySelector('.selected').id

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