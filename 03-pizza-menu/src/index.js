import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

// Placing all components of the project
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

// creating the header component
function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

// creating the Menu component
function Menu() {
  return (
    <main className="menu">
      <h2> Our Menu </h2>

      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza pizzObj={pizza} key={pizza.name} />
        ))}
      </ul>
      {/* <Pizza
        name="Pizza Spinachi"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={12}
      />

      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mushroom"
        photoName="pizzas/funghi.jpg"
        price={10}
      /> */}
    </main>
  );
}

// creating the Body of Menu() component
function Pizza(props) {
  return (
    <li className="pizza">
      <img src={props.pizzObj.photoName} alt={props.pizzObj.name} />
      <div>
        <h3>{props.pizzObj.name}</h3>
        <p>{props.pizzObj.ingredients}</p>
        <span>{props.pizzObj.price}</span>
      </div>
    </li>
  );
}

// creating the Footer component
function Footer() {
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 22;
  const isOpen = hour <= closeHour && hour >= openHour;
  console.log(isOpen);

  return (
    <footer className="footer">
      {new Date().toLocaleDateString()} We're currently open!
    </footer>
  );
}

// react version 18
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
