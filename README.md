# My portfolio!

This is my own, very humble portfolio that I made in React. I am not a very good designer, and this was my biggest struggle, to come up with a visual concept of how I would like the page to look like.

## Demo

[Live demo of the app](https://portfolio-pb.herokuapp.com/#/)

## Technologies used

- React.JS
- CSS
- react-icons
- Typewriter
- Moment.js

## things I learned

-I was having issues with the BrowserRouter and the homepage I set up in package.json, there were some issues with switching between pages. I instead used HashRouter. Maybe this is not the best way to deal with this problem, but it's one more thing I learned about ;)

-When I was finishing up I noticed that in the About section on my iOS device I was getting a NaN instead of the number of days left. I learned how different systems handle timezones. I removed the logic that I wrote, and handled it with Moment.js.
