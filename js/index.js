let inputNewTodo = document.querySelector('.new-todo')
const listTodo = document.querySelector('.todo-list')
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
                            <button class="destroy"></button>
                        </div>
                    </li>`

    listTodo.insertAdjacentHTML('beforeend', template)
    
    inputNewTodo.value = ''

    idTemplate++

}


