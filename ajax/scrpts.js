
const boton= document.getElementById('fetchPersonajes');
let person =document.getElementById('personaje');


/*fetch('https://rickandmortyapi.com/api/character')
.then(response => response.json())
.then(data => {
    boton.addEventListener('click',() =>{
        renderCharacters(personaje =data.results);
        });
    })*/
boton.addEventListener('click', () => {
    fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then((data) => renderCharacters(data.results));
});
function renderCharacters(personaje) {
    personaje.forEach(element => {
        person.innerHTML += `<div class="imgg"<p>${element.name}</p><img src= "${element.image}"></div>`;    
    });
}



/*function renderCharacters(personaje) {
    personaje.forEach((element, index) => {
        // crea un elemento <p> con el nombre del personaje
        const name = document.createElement('p');
        name.textContent = element.name;
        name.classList.add(`character-name-${index}`);

        // crea un elemento <img> con la imagen del personaje
        const image = document.createElement('img');
        image.src = element.image;
        image.classList.add(`character-image-${index}`);

        // agrega los elementos al contenedor
        person.appendChild(name);
        person.appendChild(image);

        // agrega el evento de click a cada elemento
        name.addEventListener('click', () => {
            console.log(`Haz hecho click en el personaje ${element.name}`);
        });
        image.addEventListener('click', () => {
            console.log(`Haz hecho click en la imagen de ${element.name}`);
        });
    });
}*/

/*function renderCharacters(personaje) {
    const images = [];
    let index = 0;

    personaje.forEach(element => {
        // crea un elemento <p> con el nombre del personaje
        const name = document.createElement('p');
        name.textContent = element.name;

        const image = document.getElementById('imagen');

        // agrega los elementos al contenedor
        person.appendChild(name);
        person.appendChild(image);

        // agrega el evento de click a la imagen
        image.addEventListener('click', () => {
            images.push(element.image);
            index++;
            if (index > images.length - 1) {
                index = 0;
            }
            displayImage(images[index]);
        });
    });

    function displayImage(imageSrc) {
        const container = document.createElement('div');
        container.classList.add('image-container');
        const image = document.createElement('img');
        image.src = imageSrc;
        container.appendChild(image);
        document.body.appendChild(container);
    }
}*/