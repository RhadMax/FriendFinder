# FriendFinder
---

### Description
A UCSD Extension Coding Bootcamp homework assignment using NodeJS, the ExpressJS framework, and Heroku as a deployment platform.

---

### Purpose
This is our first activity in the bootcamp where we deploy our application to be hosted online, in this case via Heroku. This serves as a good reference for working with route manipulation and both POSTing and GETting data from a hosted server through a web browser and exposes us as students to the merits of a persistent application.

---

### Overview
In this assignment we use raw html files as opposed to a template or building the html in our script files, but the focus of the exercise is to practice making use of nodeJS and expressJS to build a web based application through the backend, and just sending the html files to the front via a GET request with an express.app.res.sendFile method. The result is an interface where the user can both send and receive data from the server using only their browser. The data being sent is also evaluated using logic in javascript to return dynamic results depending on what the user inputs.

---

### Usage
The usage for this application is very straightforward. A user need only navigate to the URL for the deployed application [here](https://friendfinder-max.herokuapp.com/), and then follow the on screen instructions. Upon navigating to the survey route and inputting values into the responses for the questions, their inputted data will be compared to the other users stored in the application and a pop-up will inform them what other user in the database answered most similarly to their answers. The user's inputted data is then added to the data collected from any other users on the site and in future searches that new data will also be evaluated and may come back as the response if the new user chooses similar answers! (As this is hosted on Heroku, that data will be reset if the Heroku servers go down for maintenance or any other such instance)

---

### Technologies
This application makes use of the following technologies:

1. Javascript
2. NodeJS
3. GitHub
4. Heroku Cloud Hosting Platform
5. npmJS Packages
    * expressJS

---

### Credits
This application was developed by me, Max Patten. I made use of skills and references taught to and provided to me by the UCSD Extension Full Stack Coding Bootcamp. The description of its intended functionality were provided to me by the Bootcamp along with reference material to be used specific to this assignment and an example for the HTML files needed which were used as starting code. 