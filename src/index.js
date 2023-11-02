const input = document.getElementById('input-box')
const listContainer = document.getElementById('list-container')
const addBtn = document.getElementById('addBtn')

addBtn.onclick = function () {
    if(input.value === '') {
        alert('You must write something!')
    } else {
        let li = document.createElement('li')
        li.innerHTML = input.value
        li.title = input.value
        listContainer.appendChild(li)
        let span = document.createElement('span')
        span.title = 'delete task'
        span.innerHTML = '\u00d7'
        li.appendChild(span)
    }
    input.value = ''
    saveData()
}

listContainer.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle('checked')
        saveData()
    } else if (event.target.tagName === "SPAN") {
        event.target.parentElement.remove()
        saveData()
    }
}, false)

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML)
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data")
}
showTask()