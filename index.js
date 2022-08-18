const pizzas = [
    {
      id: 0,
      nombre: "roquefort",
      ingredientes: ["queso roque", " salsa", " aceitunas", " morron"],
      precio: 500,
    },
    {
      id: 1,
      nombre: "cordobesa",
      ingredientes: ["papas fritas", " queso", " jamon", " huevo"],
      precio: 700,
    },
    {
      id: 2,
      nombre: "mozzarella",
      ingredientes: ["mozzarella", " salsa", " aceitunas"],
      precio: 400,
    },
    {
      id: 3,
      nombre: "fugazzeta",
      ingredientes: ["queso parmesano", " cebolla", " aceitunas", " mozzarella"],
      precio: 600,
    },
    {
      id: 4,
      nombre: "Calabresa",
      ingredientes: ["calabresa", " aceitunas", " queso", " jamon"],
      precio: 900,
    },
    {
      id: 5,
      nombre: "mexicana",
      ingredientes: ["queso", " chile", " ajo", " aguacate", " jamon"],
      precio: 800,
    },
    {
      id:6,
      nombre: "margarita",
      ingredientes: ["tomate cherry", " albahaca", " mozzarella", " aceite de oliva"],
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