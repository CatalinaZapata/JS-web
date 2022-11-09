( () => {const btn = document.querySelector("[data-form-btn]");

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
    
    const content = `
        <i class="fas fa-trash-alt trashIcon icon"></i>`;//se corto y pego toda la sintaxis del li del html, para con ello conectar al value del js (con template strings) y así registrar lo que el usuario ingrese al input
    
    task.appendChild(taskContent);// Reemplaza a: task.innerHTML = content;//permite rellenar el li conmás codigo html, así cuando el user ingrese texto se sobrescribe el nuevo texto
    list.appendChild(task);//Así el padre list adopta al hijo task y toma toda la tarea desde task a input.value
      
    input.value = "";//deja vacio el input despues de ingresar la frase
}

console.log(btn);
btn.addEventListener("click", createTask);//genera llamado al dar click

const checkComplete = () => {
    const i = document.createElement('i');//Crea el elemento i, pero no lo imprime
    i.classList.add('far', "fa-check-square", "icon");//añade las clases que ya estan enlazadas al css
    i.addEventListener("click", completeTask);//enlaza el arrow function a la eccion de clicar
    
    return i;//regresa el elemento i
} //Reemplaza a <i class="far fa-check-square icon"></i>

const completeTask = (event) => {
    const element = event.target;//ayuda a delegar el evento a otras funciones
    element.classList.toggle("fas");//añade la clase de la web
    element.classList.toggle("completeIcon");//añade la clase enlazada a css
    element.classList.toggle("far");//quita la clase ya no necesitada
}//arrow function que  ayuda a mostrar evento en el checklist

})();