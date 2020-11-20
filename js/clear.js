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