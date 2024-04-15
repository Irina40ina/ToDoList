
function taskBeingEdited() {
    let taskArray = JSON.parse(localStorage.getItem('tasks'));
    taskArray.forEach((element) => {
        if (element.id === taskId) {
            console.log(element);
            inputCreating.innerHTML = element.title;
            textareaTask.innerHTML = element.description;
        }
    })
}


function editTask(id){
    let taskArray = JSON.parse(localStorage.getItem('tasks'));
    let selectedTask = taskArray.find(element => element.id == id);
    if(titleTask !== ''){
        selectedTask.title = titleTask;
    }
    if(descriptionTask !== ''){
        selectedTask.description =  descriptionTask;
    }
    localStorage.setItem('tasks', JSON.stringify(taskArray));
}




const btnOptionMenuEdit = document.getElementById('btn-option__menu__edit');
btnOptionMenuEdit.addEventListener('click', (event) => {
    modeCreatEdit = 'edit';
    creatingWindow.style.display = 'flex';
    taskBeingEdited()
})