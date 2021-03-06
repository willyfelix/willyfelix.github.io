// SOLID
// Princípios de boas práticas de programação.
// S - SRP - Single Responsibility Principle
// Princípio da Responsabilidade Única.
//Funções bem escritas, devem mantidas simples, curtas e realizando um objetivo.
//quando precisamos acessar uma função em outro arquivo, é necessário exportá-la.
//CRUD - Create Read Update Delete
export function addTask(db, title = "") {
//criando uma nova tarefa
  const task = document.createElement("div");
  //const id = Number(db.length) + 1;
  task.classList.add("task");
  task.setAttribute("id", db.id);
  
  const taskBody = `
    <div> <input type="checkbox" id="check_${db.id}" /></div>
      <div>
        <div><span class="tittle-task">${title?title:db.title}</span></div>
        <div>Star</div>
      </div>
    `;

  task.innerHTML = taskBody;
  document.querySelector(".tasks").appendChild(task);
}
export function removeTask() {
  alert("Removendo uma nova tarefa");
}
export function updateTask() {
  alert("Alterando uma nova tarefa");
}
  //alert("Listando todas tarefas");
  //chocolate apenas pra explicar que pode ser qualquer nome
  //forEach pra passar por cada elemento.
export function getAllTasks(chocolate) {
  chocolate.forEach((item) => {
    addTask(item);
  });
}
export function getTaskById() {
  alert("Exibindo uma tarefa");
}
  //quando for importar do arquivo domFunctions. o JS não sabe quantas funções estão disponíveis.
  // Quando eu preciso extrair qualquer recurso, usando a desestruturação. Destructuring
  //import { addTask } from './domFunctions.js';