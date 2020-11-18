const listTodo = document.querySelector('.todo-list')

let inputNewTodo = document.querySelector('.new-todo')
let idTemplate = 1

inputNewTodo.addEventListener('keyup', function(event) {

    let valeuNewTodo = inputNewTodo.value.trim()

    if(event.keyCode === 13 && valeuNewTodo) {
        newTodo(valeuNewTodo)
    }
})

function newTodo(value) {
    
    let template = `<li data-id="${idTemplate}" class="">
                        <div class="view">
                            <input class="toggle" type="checkbox">
                            <label> ${value} </label>
                            <button class="destroy" onclick="destroyTodo(${idTemplate})"></button>
                        </div>
                    </li>`

    listTodo.insertAdjacentHTML('beforeend', template)
    
    inputNewTodo.value = ''

    idTemplate++
}

function destroyTodo (id) {
    document.querySelector("[data-id='" + id + "']").remove()
}


