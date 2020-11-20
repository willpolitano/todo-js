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

