const Glossary = require("../models/glossary.model.js");

// Create and Save a new glossary
exports.create = (req, res) => {
  // Validate request
 
  if (!req.body) {
    res.status(400).send({
      message: "Body content can not be empty!"
    });
  }

  // Create a Glossary
  const glossary = new Glossary({
    term: req.body.term,
    definition: req.body.definition
  });


  // Save Glossary in the database
  Glossary.create(glossary, (err, data) => {
	
			
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Glossary."
      });
    else res.send(data);
  });
};

// Retrieve all glossarys from the database (with condition).
exports.findAll = (req, res) => {
  const term = req.query.term;

  Glossary.getAll(term, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving glossarys."
      });
	 
    else{ res.header('Access-Control-Allow-Origin', '*');
	res.send(data);}
  });
};

// Find a single Glossary by Id
exports.findOne = (req, res) => {
  Glossary.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Glossary with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Glossary with id " + req.params.id
        });
      }
	  res.header('Access-Control-Allow-Origin', '*');
    } else res.send(data);
  });
};



// Update a Glossary identified by the id in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }



  Glossary.updateById(
    req.params.id,
    new Glossary(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Glossary with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Glossary with id " + req.params.id
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a Glossary with the specified id in the request
exports.delete = (req, res) => {
  Glossary.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Glossary with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Glossary with id " + req.params.id
        });
      }
    } else res.send({ message: `Glossary was deleted successfully!` });
  });
};

// Delete all Glossary from the database.
exports.deleteAll = (req, res) => {
  Glossary.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all glossarys."
      });
    else res.send({ message: `All Glossary were deleted successfully!` });
  });
};
