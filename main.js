const pizzas = [
    {
      id: 1,
      nombre: "Roquefort",
      ingredientes: ["Queso roque", " salsa", " aceitunas", " morron"],
      precio: 500,
    },
    {
      id: 2,
      nombre: "Cordobesa",
      ingredientes: ["Papas fritas", " queso", " jamon", " huevo"],
      precio: 700,
    },
    {
      id: 3,
      nombre: "Mozzarella",
      ingredientes: ["Mozzarella", " salsa", " aceitunas"],
      precio: 400,
    },
    {
      id: 4,
      nombre: "Fugazzeta",
      ingredientes: ["Queso parmesano", " cebolla", " aceitunas", " mozzarella"],
      precio: 600,
    },
    {
      id: 5,
      nombre: "Calabresa",
      ingredientes: ["Calabresa", " aceitunas", " queso", " jamon"],
      precio: 900,
    },
    {
      id: 6,
      nombre: "Mexicana",
      ingredientes: ["Queso", " chile", " ajo", " aguacate", " jamon"],
      precio: 800,
    },
    {
      id:7,
      nombre: "Margarita",
      ingredientes: ["Tomate cherry", " albahaca", " mozzarella", " aceite de oliva"],
      precio: 700,
    },
  ];
  
//a)!!

  console.log("Ejercicio A)");   
  function calcularidimpar() {
    pizzas.filter((pizza) => pizza.id % 2 !== 0
        ? console.log(`Pizzas con ID impar: ${pizza.nombre} - ID:${pizza.id}`) : null
        );
  }
  calcularidimpar();
  
//b)!!

  console.log("Ejercicio B)"); 
  function calcularpreciomenor() {
    pizzas.some((pizza) => {
      pizza.precio < 600
        ? console.log(`Menor precio a $600: ${pizza.nombre}: $${pizza.precio}`)
        : null;
    });
  }
  calcularpreciomenor();
  
  //c)!!

  console.log("Ejercicio C)"); 
  function infodepizza() {
    console.log("Nombre y precio de las pizzas");
    pizzas.map((pizza) => console.log(`Pizza ${pizza.nombre}: $${pizza.precio}`));
  }
  infodepizza();
  
  //d)!!
  
  console.log("Ejercicio D)");
  function infingredientes() {
    pizzas.forEach((pizza) =>
      console.log(`La ${pizza.nombre} lleva estos ingredientes: ${pizza.ingredientes.toString()}`));
  }
  infingredientes();


  const form = document.getElementById("form");
  const idInput = document.getElementById("input_pizza");
  const pizzaName = document.getElementById("pizzaName");
  const pizzaImage = document.getElementById("pizza-image");
  const pizzaImageCenter = document.getElementById("pizzaImage-center");
  
  let lastPizza = JSON.parse(localStorage.getItem("pizza")) || [];
  
  const saveLocalStorage = (item) => {
    return localStorage.setItem("pizza", JSON.stringify(item));
  };
  
  const checkIdInput = () => {
    let valid = false;
  
    const idPizza = idInput.value.trim();
  
    if (isEmpty(idPizza)) {
      showError(idInput, "ERROR: debe completar el campo");
    } else if (!isBetween(idPizza)) {
      showError(idInput, "ERROR: el numero ingresado no es valido");
    } else {
      showSuccsess(idInput);
      valid = true;
    }
    return valid;
  };
  
  const isEmpty = (value) => value === "";
  
  const isBetween = (value) => {
    const existPizza = pizzas.some((pizza) => pizza.id === Number(value));
    return existPizza;
  };
  
  const showError = (input, message) => {
    const formField = input.parentElement;
    const error = formField.querySelector("small");
    error.classList.remove("success");
    error.classList.add("error");
    error.textContent = message;
  };
  
  const showSuccsess = (input, message) => {
    const formField = input.parentElement;
    const error = formField.querySelector("small");
    error.classList.remove("error");
    error.classList.add("success");
    error.textContent = "";
  };
  
  form.addEventListener("submit", (e) => {
    e.preventDefault();
  
    let isIdValid = checkIdInput();
  
    const idPizza = idInput.value.trim();
    const pizza = pizzas.find((e) => e.id == idPizza) || [];
  
    if (isIdValid) {
      saveLocalStorage(pizza);
  
      changePizzaName(pizza, form);
      changePizzaIngredient(pizza, form);
      changePizzaPrice(pizza, form);
      renderPizzaImage(pizza);
    } else {
      saveLocalStorage(pizza);
      deletePizzaName(form);
      deletePizzaIngredient(form);
      deletePizzaPrice(form);
      hidePizzaImage();
    }
  });
  
  const changePizzaName = (pizza, form) => {
    const formField = form.parentElement;
    const name = formField.querySelector("h2");
    name.textContent = pizza.nombre;
  };
  const changePizzaPrice = (pizza, form) => {
    const formField = form.parentElement;
    const name = formField.querySelector("h4");
    name.textContent = "$" + pizza.precio;
  };
  
  const changePizzaIngredient = (pizza, form) => {
    const formField = form.parentElement;
    const name = formField.querySelector("h3");
    name.textContent = pizza.ingredientes.join(", ");
  };
  
  const deletePizzaName = (form) => {
    const formField = form.parentElement;
    const name = formField.querySelector("h2");
    name.textContent = "";
  };
  const deletePizzaPrice = (form) => {
    const formField = form.parentElement;
    const name = formField.querySelector("h4");
    name.textContent = "";
  };
  
  const deletePizzaIngredient = (form) => {
    const formField = form.parentElement;
    const name = formField.querySelector("h3");
    name.textContent = "";
  };
  
  const PizzaImage = (pizza) => {
    const imageName = pizza.nombre;
    return `
              <div class="pizza-image-container" id="pizza-image">
                  <img src="/imgs/${imageName}.png" alt="imagen de pizza" class="pizza-image">
              </div>
              
              `;
  };
  
  const renderPizzaImage = (input) => {
    pizzaImageCenter.innerHTML = PizzaImage(input);
  };
  
  const hidePizzaImage = () => {
    pizzaImageCenter.innerHTML = deletePizzaImage();
  };
  
  const deletePizzaImage = () => {
    return `
              <div class="pizza-image-container" id="pizza-image">
                  
              </div>
              
              `;
  };
  
  document.addEventListener("DOMContentLoaded", () => {
    if (!Array.isArray(lastPizza)) {
      changePizzaName(lastPizza, form);
      changePizzaIngredient(lastPizza, form);
      changePizzaPrice(lastPizza, form);
      renderPizzaImage(lastPizza);
    }
  });