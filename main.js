var items = document.querySelector('.items')
var btn = document.querySelector('.submit-button');
var input = document.querySelector('.input')

btn.addEventListener('click', addNote);
function addNote(e) {
    e.preventDefault()
    let count = rank()
    let txt=input.value

    let msg = document.querySelector('.msg')
    msg.classList.add('no-msg')

    let item = document.createElement('div')
    item.classList.add('item')
    let number = document.createElement('div')
    number.classList.add('number')
    number.innerHTML=`${count}`
    let note = document.createElement('p')
    note.classList.add('note')
    note.innerHTML=`${txt}`
    let dbtn = document.createElement('button')
    dbtn.classList.add('delete')
    dbtn.innerHTML='X'
    item.appendChild(number)
    item.appendChild(note)
    item.appendChild(dbtn)
    items.appendChild(item)

    input.value=''

    note.addEventListener('click', done)
    function done(){
        item.classList.toggle('done')
    }

    
    dbtn.addEventListener('click', remove)
    function remove(){
        let deletedItem= dbtn.parentElement
        items.removeChild(deletedItem)
        if(rank()==1){
            msg.classList.remove('no-msg')
        }
    }
}
function rank() {
    let count = items.childElementCount
    return count
}

