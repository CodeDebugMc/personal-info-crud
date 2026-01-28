import db from "../db.js";

export const getPersons = (req, res) => {
  db.query(`SELECT * FROM persons`, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};

export const addPerson = (req, res) => {
  const { first_name, last_name, email, date_of_birth } = req.body;
  db.query(
    `INSERT INTO persons (first_name, last_name, email, date_of_birth) VALUES (?,?,?,?)`,
    [first_name, last_name, email, date_of_birth],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Person added", id: result.insertId });
    },
  );
};

export const updatePerson = (req, res) => {
  const { id } = req.params;
  const { first_name, last_name, email, date_of_birth } = req.body;

  db.query(
    `UPDATE persons SET first_name = ?, last_name = ?, email = ?, date_of_birth = ? WHERE id = ?`,
    [first_name, last_name, email, date_of_birth, id],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Person updated" });
    },
  );
};

export const deletePerson = (req, res) => {
  const { id } = req.params;
  db.query(`DELETE FROM persons WHERE id = ?`, [id], (err, result) => {
    if (err) res.status(500).json(err);
    res.json({ message: "Person deleted" });
  });
};
