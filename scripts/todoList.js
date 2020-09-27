//delete from the dom
console.log("Program init");

const todoList = document.querySelector('.list-container');

//deleting and checking

todoList.addEventListener('click', (e) => {
    e.preventDefault();
    if(e.target.classList[1] === 'trash') {
        // const listing = e.target.parentElement.parentElement;
        const listing = e.target.parentNode.parentNode;
        console.log(e.target.parentNode.parentNode);
        todoList.removeChild(listing);
    }  
    
    if(e.target.classList[1] === 'circle') {
        
        let newListing = e.target.parentNode.parentNode.parentNode;
        
        if(newListing.classList[1] === 'listing-progress') {
            newListing.classList.toggle('listing-done');
        }

    }

});

//adding
let addBtn = document.querySelector('.page-btn');
const input = document.querySelector('.input-text');

addBtn.addEventListener('click', (e) => {
    if(e.target) {
        e.preventDefault();
        const newTask = input.value;

        if(newTask === "") {
            alert("Weka some task bro!");
        } else {
            addTask(newTask);
            input.value = "";
        }
    }
});

function addTask (task) {

    let newAddition = `<div class="listing-task listing-progress">
        <div class="task">
        <span class="addedTask">
        <img src="./icons/circle.svg" class="icon circle" alt="Circle - new/not completed task">
        </span><p>${task}</p></div><div class="delete">
        <img class="icon trash" src="./icons/trash.svg" alt="Delete button">
        </div></div>`;

       todoList.insertAdjacentHTML('beforeend', newAddition);
    
}