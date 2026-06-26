const inputBox = document.querySelector('#input-box')
const listContainer = document.querySelector('#list-container')

function addTask() {
    if (inputBox.value === '') {
        alert('you must write something!')
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li); // display under listContainer

        // add cross icon
        let span = document.createElement('span');
        span.innerHTML = "\u00d7"; // cross icon-code
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData(); // save the updated content
}

// click function 
listContainer.addEventListener('click', function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle('checked');
        saveData(); // save the updated content
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData(); // save the updated content
    }
}, false)


// save tasks to local storage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML)
}

// display data, to new screen session 
function showTask() {
    listContainer.innerHTML = localStorage.getItem('data')
}
showTask();