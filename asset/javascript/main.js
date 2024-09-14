// let bouton = document.getElementById("bouton")
// let chaisi = document.getElementById("chaisi")
// let lesTaches = document.getElementById("list-des-taches")
// bouton.addEventListener("click", () => {
//     if(chaisi.value === ""){
//         alert("Entrée une tache !")
//     }else{
//     let li = document.createElement("li")
//     li.innerHTML = chaisi.value
//     lesTaches.appendChild(li)
//     let checkbox = document.createElement("span")
//     li.appendChild(checkbox)
//     checkbox.addEventListener("click", () => {
//         checkbox.style.backgroundColor = "green"
//     })
//     let buttonSup = document.createElement("button")
//     buttonSup.innerText = "X"
//     li.appendChild(buttonSup)
//     buttonSup.addEventListener("click", () => {
//         li.remove()
//     })}
//     chaisi.value = ""
   
// })
document.addEventListener('DOMContentLoaded', function () {
    
    // C’est ici que nous allons coder notre logique
const taskForm = document.getElementById('bouton');
const taskInput = document.getElementById('chaisi');
const taskList = document.getElementById('list-des-taches');// balise ul

taskForm.addEventListener('click', function (event) {
    event.preventDefault();
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
    //    alert(taskText) // vous permettra de voir 😂

        // à compléter (tu vas te débrouiller pour appeler la fonction
        //addTask() qu’on va déclarer en bas pour ajouter une tâche
        addTask(taskText)
        taskInput.value = ''; // Réinitialiser le champ de texte
    }
});

function addTask(taskText) {
    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;

    const checkbox = document.createElement("span")
    taskItem.appendChild(checkbox)

    const buttonSup = document.createElement("button")
    //buttonSup.textContent = "X"
    taskItem.appendChild(buttonSup)
    taskList.appendChild(taskItem);
    
    checkbox.addEventListener("click", () => {
    checkbox.style.backgroundColor = "green"
    })
   // Tu devras appeler ici la fonction saveTasksToLocalStorage() pour sauvegarder localement :: bon courage 🥰
   saveTasksToLocalStorage()
}

function saveTasksToLocalStorage() {
    const tasks = Array.from(taskList.children).map(task => task.textContent);
    localStorage.setItem('tasks', JSON.stringify(tasks));

}
//Récupérez les tâches depuis le localStorage
const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
savedTasks.forEach(taskText => addTask(taskText));
});



