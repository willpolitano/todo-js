function newTodo(value) {

    let action = document.querySelector('.selected').id
    actionClass = action == 'completed' ? 'none' : 'block'

    let line = `<li data-id="${idLine}" class="" style="display:${actionClass};">
                    <div class="view">
                        <input class="toggle" type="checkbox" onClick="completeTodo(${idLine})">
                        <label> ${value} </label>
                        <button class="destroy" onClick="destroyTodo(${idLine})"></button>
                    </div>
                </li>`

    listTodo.insertAdjacentHTML('beforeend', line)
    
    inputNewTodo.value = ''

    idLine++

    countTodo()
}