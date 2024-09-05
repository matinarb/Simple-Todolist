var items = document.querySelector('.items');
var btn = document.querySelector('.submit-button');
var input = document.querySelector('.input');
var editMsg = document.querySelector('.edit-msg-container');
var editBtn = document.querySelector('#edit-btn');
var cancelBtn = document.querySelector('#cancel-btn');
var editInput = document.querySelector('#edit-input');
var msg = document.querySelector('.msg');
var get;

reload()

//add note
btn.addEventListener('click', addNote);
function addNote(e) {
    e.preventDefault()
    let txt = input.value
    input.value = ''

    storeToLocalStorage(txt)

    reload()

}

//store to local storage
function storeToLocalStorage(note) {
    get = JSON.parse(localStorage.getItem('notes'))
    if (get == null) {
        let notes = []
        notes.push(note)
        localStorage.setItem('notes', JSON.stringify(notes))
    }
    else {
        get.push(note)
        localStorage.setItem('notes', JSON.stringify(get))
    }
}

//reload page

function reload() {
    get = JSON.parse(localStorage.getItem('notes'))
    items.innerHTML = '<div class="msg">NO Task</div>'
    msg = document.querySelector('.msg')

    for (i in get) {
        msg.classList.add('no-msg')

        let item = document.createElement('div')
        item.classList.add('item')
        let number = document.createElement('div')
        number.classList.add('number')
        number.innerHTML = `${parseInt(i) + 1}`
        let note = document.createElement('p')
        note.classList.add('note')
        note.innerHTML = `${get[i]}`
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
    }
}

//edit note
let num
items.addEventListener('click', (e) => {
    e.preventDefault()
    if (e.target.className == 'edit') {
        get = JSON.parse(localStorage.getItem('notes'))
        editMsg.style.display = 'flex'
        num = e.target.parentElement.children[0].textContent - 1
        editInput.value = get[num]
    }
})

editBtn.addEventListener('click', (e) => {
    e.preventDefault()
    get[num] = editInput.value
    localStorage.setItem('notes', JSON.stringify(get))
    editMsg.style.display = 'none'
    reload()
})

cancelBtn.addEventListener('click', (e) => {
    e.preventDefault()
    editMsg.style.display = 'none'
})

// delete note
items.addEventListener('click', (e) => {
    if (e.target.className == 'delete') {
        if (confirm('Are You Sure To Delete This Note?')) {

            let num = parseInt(e.target.parentElement.children[0].textContent) - 1
            get.splice(num, 1)
            localStorage.setItem('notes', JSON.stringify(get))

            reload()

            if (items.childElementCount == 1) {
                msg.classList.remove('no-msg')
            }
        }
    }
})

//done note
items.addEventListener('click', (e) => {
    if (e.target.className == 'note') {
        e.target.parentElement.classList.toggle('done')
    }
})