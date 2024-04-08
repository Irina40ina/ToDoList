// ====================================  DATA  ====================================
const creatingWindow = document.querySelector('.creating__window');
const btnOpenCreating = document.getElementById('btn-creating');
const creationWindowClose = document.querySelector('.creation__window_close');
const inputCreating = document.querySelector('.input_tytle_of_task');
const textareaTask = document.getElementById('task_description');
const btnCreatingSave = document.querySelector('.creating__window_save');
const tasksContainer = document.querySelector('.tasks__container');
let titleTask = '';
let descriptionTask = '';
let taskArray = [];


// ====================================  METHODS  ====================================


function creatingTaskView(id, title, description) {
    const taskBox = document.createElement('div');
    taskBox.id = id;
    taskBox.classList.add('task__box');

    const boxInformation = document.createElement('div');
    boxInformation.classList.add('box__information');
    // Title
    const boxInformationTytle = document.createElement('div');
    boxInformationTytle.classList.add('box__information__tytle');
    boxInformationTytle.innerHTML = title;
    // Description
    const boxInformationDescription = document.createElement('div');
    boxInformationDescription.classList.add('box__information__description');
    boxInformationDescription.innerHTML = description;
    // Options
    const options = document.createElement('div');
    options.classList.add('options');
    const optionsBtn = document.createElement('button');
    optionsBtn.classList.add('options__btn');

    taskBox.appendChild(boxInformation);
    boxInformation.appendChild(boxInformationTytle);
    boxInformation.appendChild(boxInformationDescription);
    taskBox.appendChild(options);
    options.appendChild(optionsBtn);
    tasksContainer.appendChild(taskBox);

    options.addEventListener('click', () => {
        setPositionOptionMenu();
    })
}
function creatingTaskServer(id, title, description) {
    let taskObject = {
        id: id,
        title: title,
        description: description,
        isComplete: false,
    }
    taskArray.push(taskObject)
    localStorage.setItem('tasks', JSON.stringify(taskArray));
}

function mountedTasks() {
    let taskArrayString = localStorage.getItem('tasks');
    if (taskArrayString) {
        let taskArrayDB = JSON.parse(taskArrayString);
        if (Array.isArray(taskArrayDB)) {
            taskArray = taskArrayDB;
            taskArrayDB.forEach((element) => {
                creatingTaskView(element.id, element.title, element.description);
            });
        }
    } else {
        localStorage.setItem('tasks', JSON.stringify([]));
        return;
    }

}

function creatingTask() {
    let newId = Date.now();
    creatingTaskServer(newId, titleTask, descriptionTask);
    creatingTaskView(newId, titleTask, descriptionTask);
}

// ====================================  MOUNTED  ====================================

btnOpenCreating.addEventListener('click', () => {
    creatingWindow.style.display = 'flex';
})
creationWindowClose.addEventListener('click', (event) => {
    event.preventDefault();
    creatingWindow.style.display = 'none';
})
inputCreating.addEventListener('input', (event) => {
    titleTask = event.target.value;
})
textareaTask.addEventListener('input', (event) => {
    descriptionTask = event.target.value;
})
btnCreatingSave.addEventListener('click', (event) => {
    event.preventDefault();
    creatingTask();
})

// Монтируем список задач
mountedTasks();
