# Frontend Mentor - FAQ accordion solution


## Table of contents

- [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


### The challenge

Users should be able to:

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page


### Links

- Solution URL: [Github](https://github.com/EAguayodev/faq-accordion)
- Live Site URL: [Vercel](https://faq-accordion-umber-beta.vercel.app/)

## My process

### Step 1: Structuring the HTML
I started by outlining the basic structure of the accordion in HTML. Each FAQ entry consists of a button that users can click to toggle the visibility of the answer, which is contained within a div just below the button. I ensured that each button and div pairing was properly structured for accessibility.

### Step 2: Styling with CSS
Next, I added styles to make the accordion visually appealing and intuitive to use. I styled the buttons to change slightly on hover to indicate that they are interactive. I also used CSS to initially hide the content and then to smoothly transition it into view when the corresponding button is clicked.

### Step 3: Adding Interactivity with JavaScript
I wrote a simple JavaScript script to add the dynamic functionality to the accordion. The script listens for clicks on each button, then toggles the visibility of the content area directly following it. I implemented this in a way that each button works independently of the others, allowing multiple sections to be open at the same time.


### Built with

- HTML5
- CSS3
- Javascript
- Desktop-first workflow


### What I learned



To see how you can add code snippets, see below:

```html
 <div class="accordion-questions">
          <div class="question">
            <p>What is Frontend Mentor, and how will it help me? </p>
          </div>
          <div class="accordion__description">
              Frontend Mentor offers realistic coding challenges to help developers improve their
              frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for
              all levels and ideal for portfolio building.
          </div>
          <hr>
```
```css
.accordion-content .accordion-questions::before{
    content: '+';
    color: var(--White);
    background-color: blueviolet;
    position: relative;
    border-radius: 50%;
    padding: 11px;
    top: 1rem;
    left: 30rem;
    font-size: 16px;
    transform: translateY(-50%);
}
```
```js
const proudOfThisFunc = () => {
  console.log('🎉')
}
```

### Continued development

For continued development moving forward, I will be spending time learning and building more projects involving Javascript concepts from for loops, form validation, and using javascript for hamburger menu opnenings and closing.


### Useful resources

- [Google](https://www.google.com) - Typed in a random search on a topic, and common questions diaplyed showed me how to build the structure of the html content fo the accordion.
- [freecodecamp](https://www.freecodecamp.org/news/build-an-accordion-menu-using-html-css-and-javascript/) - This is an amazing article which helped me finally understand how to style the accordions opening tabs for css and javascript. Definitely a simplified down way of understanding how to use javascript for accorion functionality.


## Author

- Website - [Eric Aguayo](https://www.ericaguayo.com)
- Frontend Mentor - [@EAguayodev](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@eric_emaildev](https://www.twitter.com/eric_emaildev)

## Acknowledgments

Give hat out to the freecodecamp writer of the accordion article Kingsley Ubah for breaking down and how to build an accordion with html, css, and javascript.
