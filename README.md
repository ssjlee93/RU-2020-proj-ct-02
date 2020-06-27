# RU-2020-proj-ct-02

![MySQL](https://img.shields.io/static/v1?label=SQL&message=MySQL&color=4479a1)
![Heroku](https://img.shields.io/static/v1?label=heroku&message=deployed&color=success)
![Node.js](https://img.shields.io/static/v1?label=Node.&message=js&color=68a063)
![express.js](https://img.shields.io/static/v1?label=express&message=.js&color=68a063)
![Materialize](https://img.shields.io/static/v1?label=Materialize&message=CSS&color=eb7077)

 https://ru-2020-projec-02.herokuapp.com/

## Table of Contents 

* [Collaborators](#Collaborators)
* [Proposal](#Proposal)
* [Title](#My-Personal-Record-Tracker)
* [Technologies](#Potential-new-technologies)
* [Sketch](#Sketch)

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

### Progress 

* Initially, we began with one table with 5 exercises. The original schema as follows: 
``` 
  const PR = sequelize.define("PR", {
    routine_name: {
      type: DataType.STRING,
      allowNull: false
    },
    reps: {
      type: DataType.INT,
      allowNull: false
    },
    exerciseOne: {
      type: DataType.STRING,
      allowNull: false
    },
    exerciseTwo: {
      type: DataType.STRING,
    },
    exerciseThree: {
      type: DataType.STRING,
    },
    exerciseFour: {
      type: DataType.STRING,
    },
    exerciseFive: {
      type: DataType.STRING,
    },
  });
  ```
  Several problems arose with the structure: 
  1. Set number of exercises in a routine 
  2. No customization for reps for each exercise 
  3. No weight specification 
  4. Empty strings will be passed from the client side to the server when no exercise is input for exercises 2~5.

  To reflect more practical user experience, we split the above structure into two tables: routines and exercises.

  * To reflect the new table structure above, client-side needed to dynamically add forms. When adding aroutine, we added a button to add more exercises instead of having a preset form. 

* In the midst of split table structure, we realized that more elements were dynamicaally generated. To avoid errors and complication, we reverted to the original structure mentioned above. 

In order to avoid problems mentioned above, we made the following changes: 
1. all fields are required - users will have to input everything so that no empty string exists. 
2. Added reps for each exercise, but still has set number of exercises and sets 

### Todo
* user_id, user authentication. Refer the week14hw 
* Delete button and styling. 
* dry the code 
* work on the alternative - use sequelize join to account for customizations and updates 
