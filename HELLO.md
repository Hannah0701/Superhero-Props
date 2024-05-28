# Superhero Props

## Activity Directions
**GOAL**: Use React props to dynamically render a list of superhero objects.

**In** `App.js`:
1. Import the `Hero` component at the top of the file.
2. An array of `superHeros` has been created for you. Use `.map()` to iterate through the `superHeros` array and return a `Hero` component.
3. For each `Hero` component that is returned, give it a prop of `hero` and pass the entire object as a property.

**In** `Hero.js`:
1. Add `props` as a parameter for the `Hero` function.
2. Return the following card component:

```javascript
<div className="card">
  <div className="card-body">
    <h1 className="card-title">HERO NAME</h1>
    <p className="card-text">HERO LOCATION</p>
    <p className="card-text">HERO NEMESIS</p>
  </div>
</div>
```

3. The `Hero` component should return:
    - An `h1` displaying the `name` of each hero in the list of hero objects.
    - A `p` element displaying a sentence that says `The hero {insert hero name} is from {insert hero location}`
    - A `p` element displaying a sentence that says `{The hero name}'s nemesis is {the hero enemy}`

4. Run your code.
5. View your application using the URL in the Sphere console.
6. Test your code.

## Extensions
- Create two more components for your page and render them in App.js:
    - A Title component that will contain your page title.
    - A NavBar component that will render a navigation bar for your page.
- Go locate an image for each superhero. Render an image of each superhero in each Hero card.
- Add several more superheros to the superHeros array to render more card.
- Create a button in the Hero component that links to the Wikipedia page that provides more information about that superhero.