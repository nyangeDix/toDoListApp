let listParent = document.querySelector('.list-container');
let listItem = document.querySelector('.list-item');
let taskInput = document.querySelector('.input-text');
let taskBtn = document.querySelector('.page-btn');
// let content = document.querySelector('.listing-task p');

let completed = 'listing-done';
let inprogress = 'listing-progress';

//add data
taskBtn.addEventListener('click', (e) => {

    let newTask = taskInput.value;
    e.preventDefault();
    if(newTask === "") {
        alert("Enter task bro!");
    } else {
        addList(newTask, false);
        taskInput.value = "";
    }

});

function addList(task, completed_status) {

    let PROGRESS_STATUS = completed_status ? completed : inprogress;

    let newAddition = `<div class="listing-task ${PROGRESS_STATUS}">
        <div class="task">
        <span class="addedTask">
        <img src="./icons/circle.svg" class="icon circle" alt="Circle - new/not completed task">
        </span><p>${task}</p></div><div class="delete">
        <img class="icon trash" src="./icons/trash.svg" alt="Delete button">
        </div></div>`;

    listParent.insertAdjacentHTML('beforeend', newAddition);
}

let list = document.querySelector('.list-container');
list.addEventListener('click', (e)=>{
    console.log(e.target);
    if(e.target.classList[0] === 'trash') {
        console.log(e.target.parentNode.parentNode);
    }
})
    
const el = document.querySelector('.list-container');
const taskStatus = document.querySelector('.listing-task');

el.addEventListener('click', (e) => {
    //
    let taskStatus = document.querySelector('.listing-task');

    if(e.target.classList.contains('circle')) {
        console.log(e.target.classList[1]);
        console.log("this is the correctly clicked item");

    } else {
        console.log(e.target.classList[1]);
        console.log("Wrong click bro");
    }
});

taskStatus.addEventListener('click', (e) => {
    if(e.target) {
        if(taskStatus.classList.contains('listing-progress'))
            taskStatus.classList.toggle('listing-done');
    } else if(taskStatus.classList.contains('listing-done')) {
        taskStatus.classList.toggle('listing-progress');
    } else {
        console.log("nothing happens");
    }
    
});