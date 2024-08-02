import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { pizzaData } from "./data";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {pizzaData.map(({ pizzaName, ingredients, price, photoName }) => (
        <Pizza
          pizzaName={pizzaName}
          price={price}
          ingredients={ingredients}
          photoName={photoName}
        />
      ))}
    </main>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()}. We are currently
      {isOpen ? " open" : " closed"}.
    </footer>
  );
}

function Pizza({ pizzaName, ingredients, price, photoName }) {
  return (
    <div className="pizza">
      <img src={photoName} alt="pizza spinachi" />
      <h3>{pizzaName}</h3>
      <p>{ingredients}</p>
      <span>${Number(price) + 2}</span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
