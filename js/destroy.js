function destroyTodo(id) {
    document.querySelector("[data-id='" + id + "']").remove()
    countTodo()
}