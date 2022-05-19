module.exports = app => {
  const glossarys = require("../controllers/glossary.controller.js");

  var router = require("express").Router();

  // Create a new glossary
  router.post("/", glossarys.create);

  // Retrieve all glossary
  router.get("/", glossarys.findAll);

  // Retrieve a single glossary with id
  router.get("/:id", glossarys.findOne);

  // Update a glossary with id
  router.put("/:id", glossarys.update);

  // Delete a glossary with id
  router.delete("/:id", glossarys.delete);

  app.use('/api/glossarys', router);
};
