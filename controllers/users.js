import db from "../database/index.js";
/**
 * It gets all the users from the database and returns them in a JSON format.
 * @param req - The request object. This contains information about the HTTP request that raised the
 * event.
 * @param res - The response object.
 */
export const getUsers = (req, res) => {
  db.query("SELECT * FROM user", (err, results) => {
    if (err) {
      res.status(500).json({
        message: "Error getting users",
        error: err,
      });
    } else {
      res.status(200).json({
        message: "Successfully got users",
        data: results,
      });
    }
  });
};

/**
 * It takes the name, email and status from the request body, then inserts them into the database.
 * @param req - The request object. This object represents the HTTP request and has properties for the
 * request query string, parameters, body, HTTP headers, and so on.
 * @param res - the response object
 */
export const addUsers = async (req, res) => {
  const { name, email,status } = req.body;
  const query = `INSERT INTO user (name, email, status) VALUES ('${name}', '${email}' , '${status}' )`;
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).json({
        message: "Error adding user",
        error: err,
      });
    } else {
      res.status(201).json({
        message: "Successfully added user",
        data: {
          name,
          email,
          status
        },
      });
    }
  });
};

export const deleteUsers = (req, res) => {
  const { id } = req.body;
  const query = `DELETE FROM user WHERE IdUser = ${id}`;
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).json({
        message: "Error deleting user",
        error: err,
      });
    } else {
      res.status(200).json({
        message: "Successfully deleted user",

      });
    }
  });
};

export const updateUSers = (req, res) => {
  const { id, name, email, status } = req.body;
  const query = `UPDATE user SET name = '${name}', email = '${email}', status = '${status}' WHERE IdUser = ${id}`;
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).json({
        message: "Error updating user",
        error: err,
      });
    } else {
      res.status(200).json({
        message: "Successfully updated user",
        data: {
          name,
          email,
          status
        },
      });
    }
  });
};
