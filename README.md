# What is Happy Fridge?

With Happy Fridge, you can do your part in helping to reduce the environmental impact that food waste has on our climate. Happy Fridge provides a solution to reducing food waste by offering over 5000 recipes to its users. Just enter the ingredients you have on hand and we'll do the rest!

## How to run locally
### Configuration 
To run Happy Fridge locally, fork and clone this repository to your own local directory.

You will need to use [Spoonacular API] (https://spoonacular.com/food-api/console#Dashboard) to generate a private key. After signing, find your API key in your console and insert private key in config.js file.

### Start the server
To start the server, run:
```bash
npm install
npm start
npm build
```

## Navigating the Application
In the center of the page, choose all the ingredients you have on hand with the exception of pantry items. There are different categories of ingredients. When you have made your selection, click the Submit button. 

Based on the ingredients you have chosen, you will be given a list of recipes in order of the least additional ingredients needed. Click the show more button on the bottom to see additional recipes.



