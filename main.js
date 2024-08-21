var items = document.querySelector('.items')
var btn = document.querySelector('.submit-button');
var input = document.querySelector('.input')
var editMsg = document.querySelector('.edit-msg-container')
var editBtn = document.querySelector('#edit-btn')
var cancelBtn = document.querySelector('#cancel-btn')
var editInput = document.querySelector('#edit-input')
var msg = document.querySelector('.msg')

//add note
btn.addEventListener('click', addNote);
function addNote(e) {
    e.preventDefault()
    let count = rank()
    let txt = input.value

    msg.classList.add('no-msg')

    let item = document.createElement('div')
    item.classList.add('item')
    let number = document.createElement('div')
    number.classList.add('number')
    number.innerHTML = `${count}`
    let note = document.createElement('p')
    note.classList.add('note')
    note.innerHTML = `${txt}`
    let edit = document.createElement('button')
    edit.classList.add('edit')
    edit.innerHTML = 'edit'
    let dbtn = document.createElement('button')
    dbtn.classList.add('delete')
    dbtn.innerHTML = 'X'
    item.appendChild(number)
    item.appendChild(note)
    item.appendChild(edit)
    item.appendChild(dbtn)
    items.appendChild(item)

    input.value = ''
}

//edit note
items.addEventListener('click', (e) => {
    if (e.target.className == 'edit') {
        editMsg.style.display = 'flex'
        let firstNote = e.target.parentElement.children[1]
        editInput.value = firstNote.textContent
        editBtn.addEventListener('click', (e) => {
            firstNote.innerHTML = editInput.value
            firstNote =''
            editMsg.style.display = 'none'
        })
        cancelBtn.addEventListener('click', (e) => {
            firstNote =''
            editMsg.style.display = 'none'
        })
    }
})

// delete note
items.addEventListener('click', (e) => {
    if (e.target.className == 'delete') {
        if (confirm('Are You Sure To Delete This Note?')) {
            e.target.parentElement.remove()
            if (items.childElementCount == 1) {
                msg.classList.remove('no-msg')
            }
        }
        else{

        }

    }
})

//done note
items.addEventListener('click', (e) => {
    if (e.target.className == 'note') {
        e.target.parentElement.classList.toggle('done')
    }
})

// ranking
function rank() {
    let count = items.childElementCount
    return count
}

