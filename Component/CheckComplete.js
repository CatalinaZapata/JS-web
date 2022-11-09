const checkComplete = () => {//cte para el elemento boton
    const i = document.createElement('i');//Crea el elemento i, pero no lo imprime
    i.classList.add('far', "fa-check-square", "icon");//añade las clases que ya estan enlazadas al css
    i.addEventListener("click", completeTask);//enlaza el arrow function a la eccion de clicar
    
    return i;//regresa el elemento i
} //Reemplaza a <i class="far fa-check-square icon"></i>

const completeTask = (event) => {//cte para la funcion ejecutadora
    const element = event.target;//ayuda a delegar el evento a otras funciones
    element.classList.toggle("fas");//añade la clase de la web
    element.classList.toggle("completeIcon");//añade la clase enlazada a css
    element.classList.toggle("far");//quita la clase ya no necesitada
}//arrow function que  ayuda a mostrar evento en el checklist

export default checkComplete