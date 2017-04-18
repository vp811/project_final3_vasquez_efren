# Final Project - Part 3

## Links
* [GitHub Repo](https://github.com/vp811/project_final3_vasquez_efren.git)


* [WebHost](http://efrenvasquez.com/chalmunscantina/)


* HTML5 Outliner
    * [Home Screen](https://gsnedders.html5.org/outliner/process.py?url=http%3A%2F%2Fefrenvasquez.com%2Fchalmunscantina%2F)
    *  [Contact Screen](https://gsnedders.html5.org/outliner/process.py?url=http%3A%2F%2Fefrenvasquez.com%2Fchalmunscantina%2Fcontact.html)
    *  [Menu Screen](https://gsnedders.html5.org/outliner/process.py?url=http%3A%2F%2Fefrenvasquez.com%2Fchalmunscantina%2Fmenu.html)
    *  [Promos Screen](https://gsnedders.html5.org/outliner/process.py?url=http%3A%2F%2Fefrenvasquez.com%2Fchalmunscantina%2Fpromos.html)
    *  [Awards Screen](https://gsnedders.html5.org/outliner/process.py?url=http%3A%2F%2Fefrenvasquez.com%2Fchalmunscantina%2Fawards.html)
    *  [Events Screen](https://gsnedders.html5.org/outliner/process.py?url=http%3A%2F%2Fefrenvasquez.com%2Fchalmunscantina%2Fevents.html)


* CSS Validator - Not sure what this error means but it has to do with the jQuery plugin for the menu.
    * [Home Screen](https://jigsaw.w3.org/css-validator/validator?uri=http%3A%2F%2Fefrenvasquez.com%2Fchalmunscantina%2Findex.html&profile=css3&usermedium=all&warning=1&vextwarning=&lang=en)
    *  [Contact Screen](https://jigsaw.w3.org/css-validator/validator?uri=http%3A%2F%2Fefrenvasquez.com%2Fchalmunscantina%2Fcontact.html&profile=css3&usermedium=all&warning=1&vextwarning=&lang=en)
    *  [Menu Screen](https://jigsaw.w3.org/css-validator/validator?uri=http%3A%2F%2Fefrenvasquez.com%2Fchalmunscantina%2Fmenu.html&profile=css3&usermedium=all&warning=1&vextwarning=&lang=en)
    *  [Promos Screen](https://jigsaw.w3.org/css-validator/validator?uri=http%3A%2F%2Fefrenvasquez.com%2Fchalmunscantina%2Fpromos.html&profile=css3&usermedium=all&warning=1&vextwarning=&lang=en)
    *  [Awards Screen](https://jigsaw.w3.org/css-validator/validator?uri=http%3A%2F%2Fefrenvasquez.com%2Fchalmunscantina%2Fawards.html&profile=css3&usermedium=all&warning=1&vextwarning=&lang=en)
    *  [Events Screen](https://jigsaw.w3.org/css-validator/validator?uri=http%3A%2F%2Fefrenvasquez.com%2Fchalmunscantina%2Fevents.html&profile=css3&usermedium=all&warning=1&vextwarning=&lang=en)


* HTML Validator
    * [Home Screen](https://validator.w3.org/nu/?doc=http%3A%2F%2Fefrenvasquez.com%2Fchalmunscantina)
    *  [Contact Screen](https://validator.w3.org/nu/?doc=http%3A%2F%2Fefrenvasquez.com%2Fchalmunscantina%2Fcontact.html)
    *  [Menu Screen](https://validator.w3.org/nu/?doc=http%3A%2F%2Fefrenvasquez.com%2Fchalmunscantina%2Fmenu.html)
    *  [Awards Screen](https://validator.w3.org/nu/?doc=http%3A%2F%2Fefrenvasquez.com%2Fchalmunscantina%2Fawards.html)
    *  [Events Screen](https://validator.w3.org/nu/?doc=http%3A%2F%2Fefrenvasquez.com%2Fchalmunscantina%2Fevents.html)

## Resources
* I used the visuallyhidden class from boilerplate that was discussed in one of our lectures. [HTML5 Boilerplate](https://github.com/h5bp/html5-boilerplate/blob/master/src/css/main.css#L107-L169)

```css
.visuallyhidden {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
    white-space: nowrap; /* 1 */
}
```
* I used the jQuery website to learn about the slideToggle effect. [jQuery Site](http://api.jquery.com/slideToggle/).

* The gif of BB8 on the menu page was from this [page](https://medium.com/the-mvp/animating-bb-8-star-wars-b5ca738c28ea).

* I was having issues getting errors on the console because there was no ID on the page by the name it was looking for. I used this [site](http://stackoverflow.com/questions/26107125/cannot-read-property-addeventlistener-of-null) to learn about the if statement I could use.

* Information about Chalmun's Cantina was taken from [here](http://starwars.wikia.com/wiki/Chalmun%27s_Spaceport_Cantina).

* [Animsition](http://git.blivesta.com/animsition/) - jQuery Plugin that is used on ever page. You can see it in action when you transition from page to page.
* [bigSlide.js](http://ascott1.github.io/bigSlide.js/) - jQuery Plugin that is used for the menu to slide in and out.

## Deductions
* I reviewed the list of deductions for this project and in the syllabus

## Comments

* Custom JavaScript #1 -
    * Can be found in the "Awards" page. When you click on the "Do not Click here", content will be added saying that you are a rebel and you should join the rebellion.

* Custom JavaScript #2 -
    * Can be found in the "Promos" page. When you Double Click on the target image, the text will change saying that you are not a Stormtrooper because you actually hit the target.

* Custom JavaScript #3 -
    * Can be found in the "About" page. Click the "translate" button to change the text to alien language.

* jQuery Custom Code -
    * Can be found in the "Menu" page. When clicking on the down arrow on the screen, the food options will appear.
