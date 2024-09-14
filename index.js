const pizzas = [
  {
    id: 1,
    nombre: "Pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "Pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "Pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "Pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "Pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];

const searchForm = document.getElementById('search-form');
const dataContainer = document.getElementById('data-container');

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const pizzaId = document.getElementById('pizza-id').value;
  if (!pizzaId) {
    resultContainer.innerHTML = 'Por favor, ingrese un número';
    return;
  }
  const pizzaFound = pizzas.find((pizza) => pizza.id === parseInt(pizzaId));
  if (!pizzaFound) {
    dataContainer.innerHTML = 'No se encontró la pizza con ese ID';
    return;
  }
  dataContainer.innerHTML = `
    <div class="pizza-card">
      <img src="${pizzaFound.imagen}" alt="${pizzaFound.nombre}">
      <h2>${pizzaFound.nombre}</h2>
      <p>Precio: $${pizzaFound.precio}</p>
      <p>Ingredientes: ${pizzaFound.ingredientes.join(', ')}</p>
    </div>
  `;
  
  localStorage.setItem('UltimaPizza', JSON.stringify(pizzaFound));
});


const UltimaPizza = localStorage.getItem('UltimaPizza');
if (UltimaPizza) {
  const pizzaData = JSON.parse(UltimaPizza);
  dataContainer.innerHTML = `
    <div class="pizza-card">
      <img src="${pizzaData.imagen}" alt="${pizzaData.nombre}">
      <h2>${pizzaData.nombre}</h2>
      <p>Precio: $${pizzaData.precio}</p>
      <p>Ingredientes: ${pizzaData.ingredientes.join(', ')}</p>
    </div>
  `;
}