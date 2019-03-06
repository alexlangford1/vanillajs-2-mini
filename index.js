


function addTodo(event) {
    event.preventDefault();
    let list = document.querySelector("ul");
    let item = document.createElement("li");
    let text = document.getElementById("item").value;
    item.innerText = text;
    item.addEventListener('click', toggleTodo)
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'X';
    deleteBtn.addEventListener('click', removeTodo)
    list.appendChild(item);

    document.getElementById('item').value = '';
    item.appendChild(deleteBtn);
}


function removeTodo(event) {
    event.target.parentNode.remove()
}

function toggleTodo(event) {
    let value = event.target.getAttribute('aria-checked')
    if (value !== 'true') {
        event.target.setAttribute('aria-checked', 'true')
        let message = document.querySelector('#completed-message')
        message.style.visibility = 'visible';

    } else {
        event.target.setAttribute('aria-checked', 'false')
    }
}

document.querySelector("button").addEventListener("click", addTodo)