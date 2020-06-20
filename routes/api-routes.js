const db = require("../models");

module.exports = function(app) {
    // Find all Authors and return them to the user with res.json
    app.get("/pr", async function(req, res) {
      // 1. Add a join to include all of each Author's Posts
      const dbPR = await db.PR.findAll({})
      res.json(dbPR);
    });

    app.post("/pr", async function(req, res) {
      // 1. Add a join to include all of each Author's Posts
      const dbPR = await db.PR.create(req.body)
      res.json(dbPR);
    });

    app.put("/pr/:id", async function(req, res) {
      // 1. Add a join to include all of each Author's Posts
      const {}
      
      const dbPR = await db.PR.update({ 
        routine_name: routine_name, 
        reps: req.body.reps,
        exercise_one: req.body.exercise_one, 
        exercise_one: req.body.exercise_one, 
      }, {
        where: {
          id: req.params.id
        }
      })
      res.json(dbPR);
    });

    app.delete("/pr/:id", async function (req, res) {
      const dbPR = await db.PR.destroy({
          where: {
            id: req.params.id
          }
        })
        res.json(dbPR);
  });

};