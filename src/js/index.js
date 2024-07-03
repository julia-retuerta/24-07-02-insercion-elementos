// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

// INSERCIÓN DE ELEMENTOS EN EL DOM

// const testElement = document.getElementById('test');

// const titleElement = document.createElement('h1');
// titleElement.textContent = 'Título nuevo';

// testElement.prepend(titleElement);

// console.log(titleElement);

//
//
//

// INSERCIÓN MÚLTIPLE

// const numbers = [1, 2, 3, 4, 5];

// const generateNumbers = () => {
//   const fragment = document.createDocumentFragment();

//   numbers.forEach(number => {
//     const newH2 = document.createElement('h2');
//     newH2.textContent = number;
//     //document.body.append(newH2);
//     fragment.append(newH2);
//   });

//   document.body.append(fragment);
// };

// generateNumbers();

//
//
//

// EJERCICIOS

/* - Usando este HTML, haz que al hacer click en el botón se vayan añadiendo items con el texto Item 1, Item 2, Item 3,... Los item deben llevar el número correspondiente independientemente de con cuántos item empiece la lista. */

const buttonListElement = document.getElementById('button-list');
const ulElement = document.getElementById('list');
let itemCount = ulElement.children.length;

const addItem = () => {
  itemCount++;

  const newItem = document.createElement('li');
  newItem.textContent = `Item ${itemCount}`;
  ulElement.append(newItem);
};

buttonListElement.addEventListener('click', addItem);

//
//
//

/* - Usando el input range que te doy, haz un generador de encabezados. El input te permite seleccionar un número del 1 al 6, en función de cuál elijas se generará un encabezado con la etiqueta correspondiente. Si eliges un 3, al hacer click en el botón se generará un h3 con el texto "soy un h3", si eliges un 5, un h5 con el texto "soy un h5" y así para todos. */

const rangeContainerElement = document.getElementById('range-container');
const labelRangeElement = document.getElementById('label-range');
const rangeElement = document.getElementById('range');
const buttonGenerateHeaderElement = document.getElementById('button-generate-header');

const updateRange = () => {
  labelRangeElement.textContent = rangeElement.value;
};

rangeElement.addEventListener('input', updateRange);

const generateHeader = () => {
  const newHeader = document.createElement(`h${rangeElement.value}`);
  newHeader.textContent = `Soy un h${rangeElement.value}`;
  rangeContainerElement.prepend(newHeader);
};

buttonGenerateHeaderElement.addEventListener('click', generateHeader);

//
//
//

/* - Haz un simulador de posts, con este HTML tienes que conseguir que se añada un post con su autor y el texto que hayas escrito dentro del contenedor de posts. Cada post debe ir dentro de un div independiente. */

const postsContainerElement = document.getElementById('posts-container');
const inputAuthorElement = document.getElementById('input-author');
const textareaMessageElement = document.getElementById('textarea-message');
const buttonSendPostElement = document.getElementById('button-send-post');

const sendNewPost = event => {
  event.preventDefault();

  const newPost = document.createElement('div');
  const newAuthor = document.createElement('span');
  const newMessage = document.createElement('p');

  newAuthor.textContent = `Author: ${inputAuthorElement.value}`;
  newMessage.textContent = `Message: ${textareaMessageElement.value}`;

  newPost.append(newAuthor, newMessage);
  postsContainerElement.append(newPost);
};

buttonSendPostElement.addEventListener('click', sendNewPost);

//
//
//

/* - Crea una función que cree un div con dos botones dentro. Un botón tendrá el texto 'red' y el otro el texto 'green', al hacer click en los botones debe cambiar el background-color del div al color que corresponda. */

const createButtons = () => {
  const newDiv = document.createElement('div');
  const buttonRed = document.createElement('button');
  const buttonGreen = document.createElement('button');

  buttonRed.textContent = 'Red';
  buttonGreen.textContent = 'Green';

  newDiv.append(buttonRed, buttonGreen);
  document.body.append(newDiv);

  const rootStyles = document.documentElement.style;

  newDiv.classList.add('div-bg-color');

  const divBackgroundColorRed = () => {
    rootStyles.setProperty('--div-bg-color', 'var(--red-color)');
  };

  const divBackgroundColorGreen = () => {
    rootStyles.setProperty('--div-bg-color', 'var(--green-color)');
  };

  buttonRed.addEventListener('click', divBackgroundColorRed);
  buttonGreen.addEventListener('click', divBackgroundColorGreen);
};

createButtons();

//
//
//

// INSERCIÓN MÚLTIPLE

/* - Crea una función que sea capaz de generar 25 números aleatorios y los devuelva. */

const generate25RandomNumbers = () => {
  const randomNumbers = [];
  for (let i = 0; i < 25; i++) {
    const randomNumber = Math.floor(Math.random() * 50);
    randomNumbers.push(randomNumber);
  }

  return randomNumbers;
};

//
//
//

/* - Crea una función que reciba los 25 números aleatorios que has creado en el ejercicio anterior y genere e inserte en el DOM 2 listas, una con números pares y otra con números impares. */

const evenOddLists = () => {
  const fragment = document.createDocumentFragment();
  const oddList = document.createElement('ul');
  const evenList = document.createElement('ul');
  const numbers = generate25RandomNumbers();

  for (const number of numbers) {
    const newLi = document.createElement('li');
    newLi.textContent = number;
    if (number % 2 === 0) {
      evenList.append(newLi);
    } else {
      oddList.append(newLi);
    }
  }

  fragment.append(evenList, oddList);

  document.body.append(fragment);
};

/* - Con esta estructura, crea una función que, a medida que vayas escribiendo, te ponga dentro de la lista:
  - El texto tiene X caracteres.
  - El texto tiene X vocales.
  - El texto tiene X consonantes.
  - Has introducido X espacios

```html
<div>
  <input type="text" />
  <ul></ul>
</div>
``` */

// const listOneElement = document.getElementById('list-one');
// const inputTextElement = document.getElementById('input-text');

// const analizeInput = value => {
//   const vowels = 'aeiouáéíóú';
//   const numberOfCharacters = value.length;
//   let numberOfvowels = 0;
//   let numberOfConsonants = 0;
//   let numberOfSpaces = 0;

//   for (const letter of value) {
//     if (vowels.includes(letter)) {
//       numberOfvowels++;
//     } else if (letter === ' ') {
//       numberOfSpaces++;
//     } else {
//       numberOfConsonants++;
//     }
//   }

//   const fragment = document.createDocumentFragment();

//   const newLiCharacters =
// };
