// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

// INSERCIÓN DE ELEMENTOS EN EL DOM

const testElement = document.getElementById('test');

const titleElement = document.createElement('h1');
titleElement.textContent = 'Título nuevo';

testElement.prepend(titleElement);

console.log(titleElement);

// EJERCICIOS

/* - Usando este HTML, haz que al hacer click en el botón se vayan añadiendo items con el texto Item 1, Item 2, Item 3,... Los item deben llevar el número correspondiente independientemente de con cuántos item empiece la lista- */
