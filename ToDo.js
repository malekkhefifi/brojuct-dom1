//todo list
let todolist = [
    { id: 1, text: "workshop", completed: false },
    { id: 2, text: "lunch", completed: true },
    { id: 3, text: "dinner", completed: false }
]

//function to add a todo
function addTodo() {
    let inputElement = document.getElementById("newTodo")
    let todoText = inputElement.value
    if (todoText.trim() !== "") {
        const newTodo = { id: Date.now(), text: todoText.trim(), completed: false }
        todolist.push(newTodo)
        displayTodo(newTodo)
        console.log(todolist)
        inputElement.value = ""

    }
} addTodo()

//function to display todos
function displayTodo(todo) {
    const todoListElement = document.getElementById("todoList")

    const li = document.createElement("li")
    li.innerHTML = `
    <input taype = "checkbox"${todo.completed ? "checked" : ""} checkbox onclick="toggleCompleted(${todo.id})">
    <span>${todo.text}</spban>
    <button stayle="margin-left: auto" onclick= "deleteTodo(${todo.id})">Delete</button>
    `

    todoListElement.appendChild(li)
}


//function to toggle the completed status
function toggleCompleted(id) {
    let todoToUpdate = {}
    for (let i = 0; i < todolist.length; i++) {
        if (todolist[i].id === id) {
            todoToUpdate = todolist[i]
        }
    }
    if (todoToUpdate) {
        todoToUpdate.completed = !todoToUpdate.completed
        //refresh
        refreshTodoList()
        console.log(todolist)
    }
}


//function to delete a todo
function deleteTodo(id) {
    let index = -1
    for (let i = 0; i < todolist.length; i++) {
        if (todolist[i].id === id) {
            index = i
        }
    }

    if (index !== -1) {
        todolist.splice(index, 1)
        refreshTodoList()
        console.log(todolist)
    }
}

//fuction to refresh the displayed todos after delete
function refreshTodoList() {
    const todoListElement = document.getElementById("todoList")
    todoListElement.innerHTML = ""
    for (let i = 0; i < todolist.length; i++)
        displayTodo(todolist[i])
}