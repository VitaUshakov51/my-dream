const myTasks = [
  {
    tittleTask: "Выучить массивы",
    completed: true,
  },
  {
    tittleTask: "Поехать на тренировку",
    completed: true,
  },
  {
    tittleTask: "Поспать",
    completed: false,
  },
];

const inputTitle = document.getElementById("title");
const submitBtn = document.getElementById("create");
const listTask = document.getElementById("list");

renderTasks();

function renderTasks() {
  listTask.innerHTML = "";

  if (myTasks.length === 0) {
    listTask.innerHTML = `<h1>Список задач пустой</h1>`;
  }

  createTaskElement();

}

function createTaskElement () {
myTasks.forEach((item, index) => {
    const task = document.createElement("li"); // создание элемента таски
    task.classList.add(
      // добавление классов
      "list-group-item",
      "d-flex",
      "justify-content-between",
      "align-items-center"
    );
    const nameTask = document.createElement("span"); //создание спана для имени таски
    nameTask.textContent = item.tittleTask;

    item.completed ? nameTask.classList.add("text-decoration-line-through") : nameTask.classList.add("text-decoration-line-inherit");

    const innerBtn = document.createElement("span");
    const btnSuccess = document.createElement("span");
    btnSuccess.classList.add(
      "btn",
      "btn-small",
      `btn-${item.completed ? "warning" : "success"}`
    );
    btnSuccess.setAttribute("id", "success");
    btnSuccess.setAttribute("data-index", index);
    btnSuccess.setAttribute("data-type", "toggle");

    btnSuccess.style.marginRight = "5px";

    btnSuccess.innerHTML = "&check;";

    const btnDelete = document.createElement("span");
    btnDelete.classList.add("btn", "btn-small", "btn-danger");
    btnDelete.setAttribute("id", "delete");
    btnDelete.setAttribute("data-index", index);
    btnDelete.setAttribute("data-type", "remove");
    btnDelete.innerHTML = "&times;";

    innerBtn.appendChild(btnSuccess);
    innerBtn.appendChild(btnDelete);

    task.appendChild(nameTask);
    task.appendChild(innerBtn);
    listTask.appendChild(task);
  });
  
}

function addNewTask () {
  if (inputTitle.value === "") {
    return;
  }
  const newTask = {
    tittleTask: inputTitle.value,
    completed: false,
  };
  myTasks.push(newTask);
  renderTasks();
  inputTitle.value = '';
}

submitBtn.addEventListener('click', addNewTask);

listTask.onclick = function (event) {
  if (event.target.dataset.index) {
    const index = parseInt(event.target.dataset.index);
    const type = event.target.dataset.type;

    if (type === "toggle") {
      myTasks[index].completed = !myTasks[index].completed;
    } else if (type === "remove") {
      myTasks.splice(index, 1);
    }
    renderTasks();
  }
};
