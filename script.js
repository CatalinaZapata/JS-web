import checkComplete from "./Component/CheckComplete.js";
import deleteIcon from "./Component/DeleteIcon.js";
const btn = document.querySelector("[data-form-btn]");

const createTask = (evento) => {
    evento.preventDefault();//Ya no refresca pantalla ni borra el texto
    
    const input = document.querySelector("[data-form-input]");//trae lo del input al js
    const value = input.value;//accedo al contenido del input
    const list = document.querySelector("[data-list]");//trae lo del ul al js
    
    const task = document.createElement("li");//Crea el task, pero no lo imprime
    //.querySelector("[data-task]") trae lo del li al js
    task.classList.add("card");//añade una clase al task y con eso el formato, rellenando así la class que estaba enlazada al style.css
    
    const taskContent = document.createElement("div");//extrae el div del hatml de debajo
    
    const titleTask = document.createElement("span");
    titleTask.classList.add("task");
    titleTask.innerText = value;
    
    taskContent.appendChild(checkComplete());//Así el padre taskcontent adopta al hijo checkComplete
    taskContent.appendChild(titleTask);//reemplaza a <span class="task">${value}</span>
    
    task.appendChild(taskContent);// Reemplaza a: task.innerHTML = content;//permite rellenar el li conmás codigo html, así cuando el user ingrese texto se sobrescribe el nuevo texto
    task.appendChild(deleteIcon());//ayuda a que se conecte la funcion de borrar
    list.appendChild(task);//Así el padre list adopta al hijo task y toma toda la tarea desde task a input.value
      
    input.value = "";//deja vacio el input despues de ingresar la frase
}

console.log(btn);
btn.addEventListener("click", createTask);//genera llamado al dar click

