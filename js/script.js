// GET FORM AND TASK LIST FROM THE DOM
let form = document.getElementById('addForm')
let itemList = document.getElementById('items')

// ADD TASK
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault()
    // GET THE VALUE FROM THE TEXT BOX
    let newItem = document.querySelector('#item').value
    // CREATE NEW LI ELEMENT
    let li = document.createElement('li')
    // ADD 'list-group-item' CLASS TO LI ELEMENT
    li.className = 'list-group-item'
    // CREATE TEXT NODE BASED ON INPUT VALUE
    let text = document.createTextNode(newItem)
    // APPEND TEXT NODE TO LIST
    li.appendChild(text)

    // CREATE THE DELETE BUTTON
    let deleteBtn = document.createElement('button')
    // ADD NECESSARY BOOTSTRAP CLASSES FOR BUTTONS
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete'
    // CREATE TEXT NODE, SET IT TO 'X', AND APPEND TO DELETE BUTTON
    let textDelete = document.createTextNode('X')
    deleteBtn.appendChild(textDelete)
    // APPEND DELETE BUTTON TO LIST ITEM
    li.appendChild(deleteBtn)

    // CLEAR THE TEXT BOX
    document.querySelector('#item').value = ''

    // APPEND LI TO LIST
    itemList.appendChild(li)
})

itemList.addEventListener('click', (e) => {
    // CHECK TO SEE IF THE .delete CLASS EXISTS ON LI
    if (e.target.classList.contains('delete')) {
        // CONFIRM THE DELETION
        if (confirm(`Are you sure you want to delete task ${e.target.parentElement.innerText}?`)) {
            // SELECT THE PARENT LI ELEMENT AND THEN DELETE IT
            itemList.removeChild(e.target.parentElement)
        }
    }
})