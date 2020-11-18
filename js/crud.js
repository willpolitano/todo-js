function newTodo(value) {
    
    let line = `<li data-id="${idLine}" class="">
                        <div class="view">
                            <input class="toggle" type="checkbox">
                            <label> ${value} </label>
                            <button class="destroy" onClick="destroyTodo(${idLine})"></button>
                        </div>
                    </li>`

    listTodo.insertAdjacentHTML('beforeend', line)
    
    inputNewTodo.value = ''

    idLine++
}

function destroyTodo (id) {
    document.querySelector("[data-id='" + id + "']").remove()
}