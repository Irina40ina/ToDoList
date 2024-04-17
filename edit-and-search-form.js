const inputForSearch = document.querySelector('.input_for_search');
const btnOptionMenuEdit = document.getElementById('btn-option__menu__edit');

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
        selectedTask.description = descriptionTask;
    }
    localStorage.setItem('tasks', JSON.stringify(taskArray));
}

function searchTaskForProcess(word, array){
    array.forEach(element => {
        let currentTask = document.getElementById(`${element.id}`);
        if(element.title.toLowerCase().includes(word.toLowerCase()) && element.isComplete === false){
            if(!currentTask){
                creatingTaskView(element.id, element.title, element.description);
            }
        } else {
            if(currentTask){
                currentTask.remove();
            }
        };
    })
}

function searchTaskForCompleted(word, array){
    array.forEach(element => {
        let currentTask = document.getElementById(`${element.id}`);
        if(element.title.toLowerCase().includes(word.toLowerCase()) && element.isComplete === true){
            if(!currentTask){
                creatingTaskView(element.id, element.title, element.description);
            }
        } else {
            if(currentTask){
                currentTask.remove();
            }
        };
    })
}

btnOptionMenuEdit.addEventListener('click', (event) => {
    modeCreatEdit = 'edit';
    creatingWindow.style.display = 'flex';
    taskBeingEdited()
})

inputForSearch.addEventListener('input', (event) => {
    taskForSearch = event.target.value;
    let taskArray = JSON.parse(localStorage.getItem('tasks'));
    if(mode === 'process'){
        searchTaskForProcess(taskForSearch, taskArray);
    } else if(mode = 'completed'){
        searchTaskForCompleted(taskForSearch, taskArray);
    }
})
