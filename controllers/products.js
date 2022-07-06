import db from "../database/index.js";

/**
 * It gets all the products from the database and returns them in a JSON format.
 * @param req - request
 * @param res - the response object
 */
export const getProducts = (req, res) => {
    db.query("SELECT * FROM ordersproducts", (err, results) => {
        if (err) {
            res.status(500).json({
                message: "Error getting products",
                error: err,
            });
        } else {
            res.status(200).json({
                message: "Successfully got products",
                data: results,
            });
        }
    })
}
  
  export const addProduct = async (req, res) => {
    const {
        idOrder,
        valueUnit,
        unit,
        description,
        SKU,
        quantity,
        QtyBox,
        Weight,
        Volumen,
        Mark
    } = req.body;
    const query = `INSERT INTO ordersproducts (IdOrder, ValueUnit, Unit,Description,SKU,Quantity,QtyBox,Weight,Volumen,Mark) VALUES ('${idOrder}', '${valueUnit}' , '${unit}' , '${description}' , '${SKU}' , '${quantity}' , '${QtyBox}' , '${Weight}' , '${Volumen}' , '${Mark}' )`;
    db.query(query, (err, results) => {
        if (err) {
            res.status(500).json({
                message: "Error adding product",
                error: err,
            });
        } else {
            res.status(201).json({
                message: "Successfully added product",
  
            });
        }
    });

  };
  
  
  export const deleteProduct = (req, res) => {
    const {
        id,
    } = req.body;
    const query = `DELETE FROM ordersproducts WHERE IdOrdersProducts = ${id}`;
    db.query(query, (err, results) => {
        if (err) {
            res.status(500).json({
                message: "Error deleting product",
                error: err,
            });
        } else {
            res.status(200).json({
                message: "Successfully deleted product",
                data: results,
            });
        }
    });
  }
  
  export const updateProduct = (req, res) => {
    const {
        id,
        idOrder,
        valueUnit,
        unit,
        description,
        SKU,
        quantity,
        QtyBox,
        Weight,
        Volumen,
        Mark
    } = req.body;
    const query = `UPDATE ordersproducts SET  IdOrder = '${idOrder}', ValueUnit = '${valueUnit}', Unit = '${unit}',Description = '${description}',SKU = '${SKU}',Quantity = '${quantity}',QtyBox = '${QtyBox}',Weight = '${Weight}',Volumen = '${Volumen}',Mark = '${Mark}' WHERE IdOrdersProducts = ${id}`;
    db.query(query, (err, results) => {
        if (err) {
            res.status(500).json({
                message: "Error updating product",
                error: err,
            });
        } else {
            res.status(200).json({
                message: "Successfully updated product",
                data: results,
            });
        }
    });
  }