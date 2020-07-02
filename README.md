# RU-2020-proj-ct-02

![MySQL](https://img.shields.io/static/v1?label=SQL&message=MySQL&color=4479a1)
![Heroku](https://img.shields.io/static/v1?label=heroku&message=deployed&color=430098)
![Node.js](https://img.shields.io/static/v1?label=Node.&message=js&color=68a063)
![express.js](https://img.shields.io/static/v1?label=express&message=.js&color=68a063)
![Materialize](https://img.shields.io/static/v1?label=Materialize&message=CSS&color=eb7077)
![JawsDB](https://img.shields.io/static/v1?label=JawsDB&message=MySQL&color=2cb9ff)

 https://ru-2020-proj-ct-02.herokuapp.com/

## Table of Contents 

* [Collaborators](#Collaborators)
* [Proposal](#Proposal)
* [Title](#My-Personal-Record-Tracker)
* [Technologies](#Potential-new-technologies)
* [Sketch](#Sketch)
* [Progress](#Progress)
* [Development](#Complication-ideas)

### Collaborators 
* Erica Cannedy - backend: Sequelize main;
* Kobe Matias - new technology development and frontend: HTML, CSS;
* Jenny Yoon - presentation and frontend: JavaScript main;
* Steve Lee - backend and debugging;

## Proposal 
Original proposal of this projəct

### My Personal Record Tracker 

This full-stack application allows users to create, read, update, and delete an exercise routine.

### Potential new technologies
*	Material Design Components – mobile design CSS framework;
*	Anime.js;
*	ClearDB – JawsDB alternative;
*	Materialize;
*	Foundation;

### Sketch
Wireframe of our PR Tracker 

![Wireframe](/wireframe.jpg)

## Progress 

##### Single table
* Initially, we began with one table with 5 exercises. 
* Columns: Routine name, sets, exercise 1, reps 1, ... exercise 5, reps 5

  Several problems arose with the structure: 
  1. Set number of exercises in a routine 
  2. No customization for reps for each exercise 
  3. No weight specification 
  4. Empty strings will be passed from the client side to the server when no exercise is input for exercises 2~5.

  To reflect more practical user experience, we split the above structure into two tables: routines and exercises.

##### Join Table
* Routines table: routine name, sets 
* Exercises table: exercise, reps, weight (not null), foreign key to routines id 

* To reflect the new table structure above, client-side needed to dynamically add forms. When adding a routine, we added a button to add more exercises instead of having a preset form. 

* In the midst of split table structure, we realized that more elements were dynamicaally generated. To avoid errors and complication, we reverted to the original structure mentioned above. 

##### Single table
* Columns: Routine name, sets, exercise 1, reps 1, ... exercise 3, reps 3

In order to avoid problems mentioned above, we made the following changes: 
1. all fields are required - users will have to input everything so that no empty string exists. 
2. Added reps for each exercise, but still has set number of exercises and sets 

* In the edit button, we added the initial values for each field. 

## Complication ideas
* user_id, user authentication. Refer the week14hw 
* dry the code 
* use sequelize join to account for customizations and updates 

