const deleteIcon = () => {//reemplza a const content = `<i class="fas fa-trash-alt trashIcon icon"></i>`;//se corto y pego toda la sintaxis del li del html, para con ello conectar al value del js (con template strings) y así registrar lo que el usuario ingrese al input. activa el coloreado del basurero
    //const content = `<i class="fas fa-trash-alt trashIcon icon"></i>`;
    const i = document.createElement("i");
    i.classList.add("fas", "fa-trash-alt", "trashIcon", "icon")
    i.addEventListener("click", deleteTask);
    return i;
}

const deleteTask = (event) => {//borra la tarea
    const parent = event.target.parentElement;
    parent.remove();
}

export default deleteIcon