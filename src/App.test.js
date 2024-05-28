import React from "react";
import renderer from "react-test-renderer";
import App from "./App";
import Hero from "./components/Hero";

test("Hero renders {name} in h1 and location data in p", () => {
  const { root: blackPanther } = renderer.create(
    <Hero
      hero={{
        name: "The Black Panther",
        location: "Wakanda",
        enemy: "Erik Killmonger",
      }}
    />
  );

  expect(blackPanther.findByType("h1").children.join("")).toBe(
    "The Black Panther"
  );

  const [firstSentence, secondSentence] = blackPanther.findAllByType("p");
  expect(firstSentence.children.join("")).toEqual(
    "The hero The Black Panther is from Wakanda"
  );
  expect(secondSentence.children.join("")).toEqual(
    "The Black Panther's nemesis is Erik Killmonger"
  );
});

test("App component - Renders Welcome and Body components", () => {
  const component = renderer.create(<App />);
  const instance = component.root;

  // expect component to be rendered in App 3 times
  expect(instance.findAllByType(Hero).length).toBe(3);
  expect(instance.findAllByType(Hero)[0].props.hero.name).toBe("Batman");
});