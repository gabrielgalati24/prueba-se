import db from "../database/index.js";
/**
 * It gets all the orders from the database and returns them in a JSON object.
 * @param req - The request object. This object represents the HTTP request and has properties for the
 * request query string, parameters, body, HTTP headers, and so on.
 * @param res - the response object
 */
export const getOrders = (req, res) => {
  db.query("SELECT * FROM orders", (err, results) => {
    if (err) {
      res.status(500).json({
        message: "Error getting orders",
        error: err,
      });
    } else {
      res.status(200).json({
        message: "Successfully got orders",
        data: results,
      });
    }
  })



};
/**
 * It takes in a product_id, quantity, and user_id from the body of a request, and then inserts those
 * values into the orders table.

 * @param req - request
 * @param res - the response object
 */
export const addOrder = async (req, res) => {

    const {
        providerName,
        orderNumber,
        user_id,
        observation,
        totalValue,
        status
    } = req.body;
    const query = `INSERT INTO orders (ProviderName, OrderNumber, IdUser,Observation,TotalValue,Status) VALUES ('${providerName}', ${orderNumber}, ${user_id}, '${observation}', ${totalValue}, ${status})`;
    db.query(query, (err, results) => {
        if (err) {
        res.status(500).json({
            message: "Error adding order",
            error: err,
        });
        } else {
        res.status(201).json({
            message: "Successfully added order",
            data: results,
        });
        }
    });
}

/**
 * It deletes an order from the database based on the id of the order.
 * @param req - request
 * @param res - response
 */
export const deleteOrder = (req, res) => {

    const {
        id,
    } = req.body;
    const query = `DELETE FROM orders WHERE IdOrder = ${id}`;
    db.query(query, (err, results) => {
        if (err) {
        res.status(500).json({
            message: "Error deleting order",
            error: err,
        });
        } else {
        res.status(200).json({
            message: "Successfully deleted order",
            data: results,
        });
        }
    });
};

/**
 * It updates the order in the database.
 * @param req - request
 * @param res - the response object
 */
export const updateOrder = (req, res) => {

    const {
        id,
        product_id,
        quantity,
        user_id,
    } = req.body;
    const query = `UPDATE orders SET product_id = ${product_id}, quantity = ${quantity}, user_id = ${user_id} WHERE IdOrder = ${id}`;
    db.query(query, (err, results) => {
        if (err) {
        res.status(500).json({
            message: "Error updating order",
            error: err,
        });
        } else {
        res.status(200).json({
            message: "Successfully updated order",
            data: results,
        });
        }
    });
    
};
