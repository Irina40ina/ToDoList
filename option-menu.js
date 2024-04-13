let screenX = 0;
let screenY = 0;
const optionMenu = document.querySelector('.option__menu');
const optionMenuContainer = document.querySelector('.option__menu_container');
const btnOptionMenuDone = document.getElementById('btn-option__menu__done');
let taskId = null;

function setPositionOptionMenu(id) {
    optionMenuContainer.style.display = 'block';
    optionMenu.style.top = screenY + 'px';
    optionMenu.style.left = screenX + 'px';
    taskId = id;
    console.log(taskId);
}

function completeTask(){
    let taskArray = JSON.parse(localStorage.getItem('tasks'));
    taskArray.forEach((element) => {
        if(element.id === taskId){
            element.isComplete = true;
        }
    });
    localStorage.setItem('tasks', JSON.stringify(taskArray));
    updateTaskArray(taskArray);
    let completedTask = document.getElementById(taskId + '');
    completedTask.remove();
}

document.addEventListener("mousemove", (event) => {
    screenX = event.pageX;
    screenY = event.pageY;
});
document.addEventListener('keydown', (event) => {
    if(event.key == 'Escape'){
        optionMenuContainer.style.display = 'none';
    }
})
optionMenuContainer.addEventListener('click', () => {
    optionMenuContainer.style.display = 'none';
});
btnOptionMenuDone.addEventListener('click', () => {
    completeTask();
})