import React from "react";
// Import Hero here
import Hero from "./components/Hero";
import Title from "./components/Title";
import NavBar from "./components/NavBar";

function App() {
  const superHeros = [
    {
      name: "Batman",
      image: require("./images/Batman.png"),
      location: "Gotham City",
      enemy: "The Joker",
    },
    {
      name: "Flash",
      image: require("./images/Flash.png"),
      location: "Cental City",
      enemy: "Reverse Flash",
    },
    {
      name: "Superman",
      image: require("./images/Superman.png"),
      location: "Metropolis City",
      enemy: "Lex Luthor",
    },
  ];

  return <div className="heroCards">
    <Title />
    {superHeros.map(navBar => <NavBar navBar = {navBar} />)}
    {superHeros.map(hero => <Hero hero = {hero} />)}
  </div>;
}

module.exports = App;