let form = document.getElementById('addForm');
let itemList = document.getElementById('items');

// ADD TASK
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();
    // GET THE VALUE FROM THE TEXT BOX
    let newItem = document.getElementById('item').value;
    // CREATE A NEW LI ELEMENT
    let li = document.createElement('li');
    // ADD THE .list-group-item CLASS TO THE LI
    li.className = 'list-group-item';
    // ADD A TEXT NODE AND SET IT TO THE INPUT'S VALUE
    li.appendChild(document.createTextNode(newItem));

    // CREATE THE DELETE BUTTON
    let deleteBtn = document.createElement('button');
    // ADD THE NECESSARY CLASSES TO THE DELETE BUTTON
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    // APPEND THE 'X' TEXT TO THE DELETE BUTTON
    deleteBtn.appendChild(document.createTextNode('X'));
    // APPEND THE DELETE BUTTON TO THE LI
    li.appendChild(deleteBtn);

    // APPEND THE LI TO THE LIST
    itemList.appendChild(li);
});

// REMOVE ITEM
itemList.addEventListener('click', (e) => {
    // CHECK TO SEE IF .delete CLASS EXISTS ON LI
    if (e.target.classList.contains('delete')) {
        // CONFIRM THE DELETION
        if (confirm('Are you sure?')) {
            // DELETE THE LI
            itemList.removeChild(e.target.parentElement);
        }
    }
});