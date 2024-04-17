
let screenX = 0;
let screenY = 0;
const optionMenu = document.querySelector('.option__menu');
const optionMenuContainer = document.querySelector('.option__menu_container');
const btnOptionMenuDone = document.getElementById('btn-option__menu__done');
const btnOptionMenuDelete = document.getElementById('btn-option__menu__delete');
const deleteFormContainer = document.querySelector('.delete_form_container');
const deleteForm = document.querySelector('.delete_form');
let taskId = null;

function setPositionOptionMenu(id) {
    optionMenuContainer.style.display = 'block';
    optionMenu.style.top = screenY + 'px';
    optionMenu.style.left = screenX + 'px';
    taskId = id;
    console.log(taskId);
}

function completeTask() {
    let taskArray = JSON.parse(localStorage.getItem('tasks'));
    taskArray.forEach((element) => {
        if (element.id === taskId) {
            element.isComplete = true;
        }
    });
    localStorage.setItem('tasks', JSON.stringify(taskArray));
    updateTaskArray(taskArray);
    let completedTask = document.getElementById(taskId + '');
    completedTask.remove();
}

function returnTask() {
    let taskArray = JSON.parse(localStorage.getItem('tasks'));
    taskArray.forEach((element) => {
        if (element.id === taskId) {
            element.isComplete = false;
        }
        localStorage.setItem('tasks', JSON.stringify(taskArray));
        updateTaskArray(taskArray);
        let returnedTask = document.getElementById(`${taskId}`);
        if(returnedTask){
            returnedTask.remove();
        }
    })
}

    document.addEventListener("mousemove", (event) => {
        screenX = event.pageX;
        screenY = event.pageY;
    })
    document.addEventListener('keydown', (event) => {
        if (event.key == 'Escape') {
            optionMenuContainer.style.display = 'none';
        }
    })
    optionMenuContainer.addEventListener('click', () => {
        optionMenuContainer.style.display = 'none';
    });

    optionMenu.addEventListener('click', (event) => {
        event.stopPropagation();
    })

    btnOptionMenuDone.addEventListener('click', () => {
        if(mode === 'process'){
            completeTask();
            optionMenuContainer.style.display = 'none';
        } else if (mode === 'completed') {
            console.log('done')
            returnTask();
            optionMenuContainer.style.display = 'none';
        }
    })

    btnOptionMenuDelete.addEventListener('click', () => {
        deleteFormContainer.style.display = 'flex';
        optionMenuContainer.style.display = 'none';
    })

    deleteFormContainer.addEventListener('click', () => {
        deleteFormContainer.style.display = 'none';
    })

    deleteForm.addEventListener('click', (event) => {
        event.stopPropagation();
    })