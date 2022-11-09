const btn = document.querySelector("[data-form-btn]");

const createTask = (evento) => {
    evento.preventDefault();//Ya no refresca pantalla ni borra el texto
    
    const input = document.querySelector("[data-form-input]");//trae lo del input al js
    const value = input.value;//accedo al contenido del input
    const list = document.querySelector("[data-list]");//trae lo del ul al js
    
    const task = document.createElement("li");//Crea el task, pero no lo imprime
    //.querySelector("[data-task]") trae lo del li al js
    task.classList.add("card");//añade una clase al task y con eso el formato, rellenando así la class que estaba enlazada al style.css
    const content = 
        `<div>
            <i class="far fa-check-square icon"></i>
            <span class="task">${value}</span>
        </div>
        <i class="fas fa-trash-alt trashIcon icon"></i>`;//se corto y pego toda la sintaxis del li del html, para con ello conectar al value del js (con template strings) y así registrar lo que el usuario ingrese al input
    
    task.innerHTML = content;//permite rellenar el li conmás codigo html, así cuando el user ingrese texto se sobrescribe el nuevo texto
    input.value = "";//deja vacio el input despues de ingresar la frase
    
    list.appendChild(task);//Así el padre list adopta al hijo task y toma toda la tarea desde task a input.value
    console.log(content);
}


console.log(btn);

btn.addEventListener("click", createTask);//genera llamado al dar click


