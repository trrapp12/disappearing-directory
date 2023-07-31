# Stoic Search Directory


##### Contributors: Trevor Rapp

---
<br>

https://user-images.githubusercontent.com/11747875/179346114-9049742d-f13f-49ab-a5a1-07a1158b7674.mp4

<br>

[![View Project](https://user-images.githubusercontent.com/11747875/141705232-471a0b9c-ca45-4540-a1b6-740c5e1becbe.png)](https://trrapp12.github.io/disappearing-directory/)

<br>

---

<img align="left" alt="HTML5" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" />
<img align="left" alt="CSS3" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" />
<img align="left" alt="JavaScript" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" />
<img align="left" alt="Git" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png" />
<img align="left" alt="GitHub" width="26px" src="https://raw.githubusercontent.com/github/explore/78df643247d429f6cc873026c0622819ad797942/topics/github/github.png" />
<img align="left" alt="Terminal" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/terminal/terminal.png" />

<br>
<br>

---

### Description:

>“External things are not the problem. It’s your assessment of them. Which you can erase right now.”
>
>– Marcus Aurelius

This project is a nod to Ryan Holiday's "The Obstacle is the Way" and all Stoic philosophers.  Also a chance to practice JavaScript.  

Demonstrates a search bar that uses key-up event listeners and logic comparisons to decide which entries to show or hide based on user input.

<br/>
<br/>

---

### QUICKSTART GUIDE: 

To use the app simply click on the ```View Project``` button or visit <a href="https://trrapp12.github.io/disappearing-directory/">https://trrapp12.github.io/disappearing-directory/</a>. 

---

### CHALLENGES I OVERCAME...

* This was my first time in quite a while connecting to a Firebase database.  I had to reacquaint myself with it.  The process wasn't necessarily very hard, but it was probably the area I experienced the most growth as I had little exprience in it before.

* In the original instructions they created an eventlistener on a single dynamically created element so that when you double clicked on a list item it removed it from the list and the database.  For the sake of practice I decided to extend the process by adding a check mark which would have to detect the click, do a logic comparison to see if it's checked, and then remove the item.  While the logic isn't hard, it did require me to dynamically make a nested group of elements, along with dynamically assigning them id's and attributes and classes and then append an eventlistener onto them.  This added a few more steps of complexity than what hte original tutorial demanded.

```javascript  

function createList (el, value, id) {
    let newDiv = document.createElement('div');

    let newCheckBox = document.createElement('input')
    newCheckBox.setAttribute('type', 'checkbox')
    newCheckBox.setAttribute('id', `${id}`)

    let newItemListItem = document.createElement('li');
    let itemText = value
    newItemListItem.textContent = itemText;

    newDiv.append(newCheckBox)
    newDiv.classList.add('list-div')
    newDiv.append(newItemListItem)
    el.append(newDiv)

    newCheckBox.addEventListener('click', (event) => {
        if(event.currentTarget.checked) {
            console.log('checked', event.currentTarget)
            let refLocationDB = ref(database, `items/${id}`);
            remove(refLocationDB)
        } else {
            console.log('item is not checked')
        }
    })
}
    
```

* setting up an eventlistener that resembles a hover on a button, but that increases the scale of a background image to make it appear to "pop" out at you.  Normally the hover would be a simple ```:hover``` in CSS.  But to listen to something on element "A" that effects element "B" can't be accomplished by CSS.  But Javascript doesn't have a "hover" event.  Enter "mouseenter" and "mouseleave".  And how do you make sure the listener is applied after all elements are on the page?  I had to wrap it in another load eventlistener on the window object.

```javascript

window.addEventListener('load', () => {

    const playingCardDiv = document.querySelector('.playing-card')
    const addButton = document.querySelector('#add-button')

    addButton.addEventListener('mouseover', () => {
        playingCardDiv.style.transform = 'scale(1.02)'
    })

    addButton.addEventListener('mouseleave', () => {
        playingCardDiv.style.transform = 'scale(1.0)'
    })
})

```

---

---

### THIS PROJECT DEMONSTRATES:


- [X] <em>User Story 1: </em> User should be able to input search terms into the input.
- [X] <em>User Story 2: </em> User should be able to see a list of possible Stoic Philosophers.
- [X] <em>User Story 3: </em> User should be able to see non-applicable results get filtered out while typing.
- [X] <em>User Story 4: </em> User should be able to utilize this on desktop and mobile.

---


### More Information:
---

\**For more information see my [LinkedIn](https://www.linkedin.com/in/trevor-rapp-042a1037) or return to my [Github](https://github.com/trrapp12)*

