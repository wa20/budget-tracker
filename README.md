![Github license](https://img.shields.io/badge/license-MIT-blue.svg)

# budget-tracker

  ## Description

The key purpose of this APP, is to create a budget tracker that allows user to input and monitor remittance and expenses. Users will be able to input the name and value of the transaction and are presented with both a table and graph of all expenses across a given time period. PWA functionality allows the users to also use the APP offline with data being added to the database once you the user is back online.

The front-end of the app has been built using HTML, CSS and Javascript. While the backend of the app uses node.js, express, Mongoose and Mongodb.

To make this a PWA APP, a service worker, manifest.json and an indexedDB database have been used to allow offline functionality for budget tracker.

The APP has been deployed on Heroku and uses MongoDB Atlas as a database. 


  ## Contents Table
  - [Installation](#Installation)
  - [Usage](#|Usage)
  - [Collaborators](#Collaborators)
  - [License](#License)
  - [Author](#Author)


## Installation
* First clone the repo then open it up on VSCode. 
* Once opened installrelevant NPM Packages by opening the terminal and entering `npm i`. This will insall all the packages you need.
* Finally, after installing all the packages you can enter `npm run start` into the terminal to start up the server. note this will also start nodemon which will auto restart the server when changes are made.


## Usage

* To use the tool, ensure the server is running, and then open up your broweser, (preferbly chrome), and navigate to `http://localhost:3060/`. This will open up the application for you.

* To use offline, navigate to `application` then on click on `servide workers`. There you will be presented with 3 options one of which is `offline`. Ensure that you unregister any exisiting service workers and then check the offline box to use.


## Collaborators
none


## License
- ![Github license](https://img.shields.io/badge/license-MIT-blue.svg)
- [The MIT License](https://opensource.org/licenses/MIT)


## Author
- Wael Ahmed
- Find the repo for this on: [Github Repo](https://github.com/wa20/budget-tracker)
- Find APP deployment on: [Budget-Tracker](https://thebudget-tracker.herokuapp.com)

