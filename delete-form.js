// ====================================  DATA  ====================================
const deleteConfirm = document.getElementById('delete_confirm');


// ====================================  METHODS  ====================================
function deleteTask(id){
    let taskArray = JSON.parse(localStorage.getItem('tasks'));
    let selectedTaskIndex = taskArray.findIndex(element => element.id == id);
    taskArray.splice(selectedTaskIndex, 1);
    localStorage.setItem('tasks', JSON.stringify(taskArray));
    let selectedTask = document.getElementById(`${id}`);
    if(selectedTask){
        selectedTask.remove();
    }
}


// ====================================  MOUNTED  ====================================
deleteConfirm.addEventListener('click', () => {
    deleteTask(taskId);
    deleteFormContainer.style.display = 'none';
})
