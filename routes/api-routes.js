const db = require("../models");

module.exports = function(app) {
    // Find all Authors and return them to the user with res.json
    app.get("/api/authors", async function(req, res) {
      // 1. Add a join to include all of each Author's Posts
      const dbAuthor = await db.Author.findAll({ include: db.Post})
      res.json(dbAuthor);
    });

};