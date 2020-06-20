const db = require("../models");

module.exports = function(app) {
    // Find all Authors and return them to the user with res.json
    app.get("/pr", async function(req, res) {
      // 1. Add a join to include all of each Author's Posts
      const dbPR = await db.PR.findAll({})
      res.json(dbPR);
    });

    app.get("/pr/:name", async function(req, res) {
      // 1. Add a join to include all of each Author's Posts
      const dbPR = await db.PR.findOne({ 
        where: {
        routine_name: req.params.name
      }
    })
      res.json(dbPR);
    });

    app.post("/pr", async function(req, res) {
      // 1. Add a join to include all of each Author's Posts
      const dbPR = await db.PR.create(req.body)
      res.json(dbPR);
    });

    app.put("/pr/:id", async function(req, res) {
      // 1. Add a join to include all of each Author's Posts
      const dbPR = await db.PR.update(req.body, {
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