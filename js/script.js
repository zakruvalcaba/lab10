/*eslint-env browser*/

//GLOBAL VARIABLES
var storage;
var list = "";
var task;
var tasks = [];

//GET DOM ELEMENTS
var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};

//DISPLAY THE TASKS
var displayTaskList = function () {
    "use strict";
    //If there are no tasks in the array
    //Check the storage object
    if (tasks.length === 0) {
        storage = localStorage.getItem("tasks") || "";
        //If the storage object contains tasks
        //Repopulate the tasks array
        if (storage.length > 0) {
            tasks = storage.split("|");
        }
    }
    //If there are tasks in the array
    //Sort them
    //Return a break-delimited string into the list variable
    if (tasks.length > 0) {
        tasks.sort();
        list = tasks.join("\n");
    }
    //Populate the textarea with the list of tasks
    $("tasklist").value = list;
};

//ADD A TASK
var addToTaskList = function () {
    "use strict";
    task = $("task");
    //Check to see if add task text box is empty
    //If it is display an alert
    if (task.value === "") {
        window.alert("Please enter a task.");
    } else {
        tasks.push(task.value);                 //Add task to array
        localStorage.tasks = tasks.join("|");   //Add task to storage object
        task.value = "";                        //Clear task from text box
        displayTaskList();                      //Display task list
    }
};

//CLEAR TASK LIST
var clearTaskList = function () {
    "use strict";
    tasks.length = 0;           //Clear out array
    localStorage.tasks = "";    //Clear out storage object
    $("tasklist").value = "";   //Clear out task list
};


//WIRE UP EVENT HANDLERS AND DISPLAY TASK LIST
window.addEventListener("load", function () {
    "use strict";
    $("addtask").addEventListener("click", addToTaskList);
    $("cleartasks").addEventListener("click", clearTaskList);
    displayTaskList();
});