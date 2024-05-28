#!/bin/node
import React from "react";

function Hero(props) {
  return <>
  <div className="card">
  <div className="card-body">
    <img src={props.hero.image} alt={props.hero.name} />
    <h1 className="card-title">{props.hero.name}</h1>
    <p className="card-text">The hero {props.hero.name} is from {props.hero.location}</p>
    <p className="card-text">{props.hero.name}'s nemesis is {props.hero.enemy}</p>
  </div>
</div>
</>;
}

module.exports = Hero;