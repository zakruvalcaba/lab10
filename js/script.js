// GET FORM AND TASK LIST FROM THE DOM
let form = document.querySelector('#addForm');
let itemList = document.querySelector('#items');

// ADD TASK
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();
    // GET THE VALUE FROM THE TEXT BOX
    let newItem = document.querySelector('#item').value;
    // CREATE A NEW LI ELEMENT
    let li = document.createElement('li');
    // ADD '.list-group-item' CLASS TO LI
    li.className = 'list-group-item';
    // ADD TEXT NODE AND SET IT TO THE INPUTS VALUE
    li.appendChild(document.createTextNode(newItem));

    // CREATE THE DELETE BUTTON
    let deleteBtn = document.createElement('button');
    // ADD NECESSARY CLASSES TO BUTTON
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    // CREATE TEXT NODE, SET IT TO 'X', AND APPEND TO DELETE BUTTON
    deleteBtn.appendChild(document.createTextNode('X'));
    // APPEND DELETE BUTTON TO THE LI
    li.appendChild(deleteBtn);

    // APPEND NEW LI TO THE LIST
    itemList.appendChild(li);
    // CLEAR THE TEXT BOX
    document.querySelector('#item').value = '';
    // SET FOCUS BACK TO TEXT BOX
    document.querySelector('#item').focus();
});

// DELETE TASK
itemList.addEventListener('click', (e) => {
    // CHECK TO SEE IF THE .delete CLASS EXISTS ON LI
    if (e.target.classList.contains('delete')) {
        // CONFIRM THE DELETE
        if (confirm('Are you sure you want to delete this task?')) {
            // SELECT THE PARENT LI ELEMENT AND THEN DELETE IT
            itemList.removeChild(e.target.parentElement);
        }
    }
});