/* Gets task from input*/
function get_todos() {
    /* Creates array from inputed tasks */
    var todos = new Array;
    /* Pull array information from browser memory */
    var todos_str = localStorage.getItem('todo');
    /* If todo array is not empty, make it a JS object */
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}

/* Adds inputed task to get_todos function array */
function add() {
    /* Take inputed task and create a var */
    var task = document.getElementById('task').value;

    var todos = get_todos();
    /* Add new task to end of array */
    todos.push(task);
    /* Convert the task inmput to a JSON string */
    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById("task").value= "";
    show();

    return false;
}

/* Keeps taks perminantly displayed on the screen */
function show() {
    /* Set task retrived as variable */
    var todos = get_todos();

    /* setup each task as un order list */
    var html = '<ul>';
    /* This displays a task to the list in the order that it is inputed */
    for (var i = 0; i < todos.length; i++) {
        /* this also displays the task as a list and creates the button with the "x" */
        html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">x</button></li>';
    };
    /* This displays the task as a list */
    html += '</ul>';

    
    document.getElementById('todos').innerHTML = html;
    var buttons = document.getElementsByClassName('remove');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    };
}

/* Display inputed task when the add item button is clicked */
document.getElementById('add').addEventListener('click', add);
/* keep inputs displayed on screen at all times */
show();

function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();

    todos.splice(id, 1);

    localStorage.setItem('todo', JSON.stringify(todos));
    show();

    return false;
}