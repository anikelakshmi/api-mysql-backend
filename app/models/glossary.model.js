const sql = require("./db.js");

// constructor
const Glossary = function(glossary) {
  this.term = glossary.term;
  this.definition = glossary.definition;
 
};

Glossary.create = (newglossary, result) => {
	
  sql.query("INSERT INTO glossaries SET ?", newglossary, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created Glossary: ", { id: res.insertId, ...newglossary });
    result(null, { id: res.insertId, ...newglossary });
  });
};

Glossary.findById = (id, result) => {
  sql.query(`SELECT * FROM glossaries WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found Glossary: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Glossary with the id
    result({ kind: "not_found" }, null);
  });
};

Glossary.getAll = (term, result) => {
  let query = "SELECT * FROM glossaries";

  if (term) {
    query += ` WHERE term LIKE '%${term}%'`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

   
    result(null, res);
  });
};



Glossary.updateById = (id, glossary, result) => {
  sql.query(
    "UPDATE glossaries SET term = ?, definition = ? WHERE id = ?",
    [glossary.term, glossary.definition, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found glossary with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated glossary: ", { id: id, ...glossary });
      result(null, { id: id, ...glossary });
    }
  );
};

Glossary.remove = (id, result) => {
  sql.query("DELETE FROM glossaries WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Glossary with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted Glossary with id: ", id);
    result(null, res);
  });
};

Glossary.removeAll = result => {
  sql.query("DELETE FROM glossaries", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} glossary`);
    result(null, res);
  });
};

module.exports = Glossary;
