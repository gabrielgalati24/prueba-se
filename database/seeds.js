import db from './index.js';

export function createTablesSeed (){
    const createTableOrders = ` CREATE TABLE IF NOT EXISTS orders (
        IdOrder INT AUTO_INCREMENT PRIMARY KEY,
        IdUser INT,
        OrderNumber INT,
        DateTime DATETIME,
        ProviderName VARCHAR(255),
        DateCreated DATETIME,
        Observation VARCHAR(255),
        TotalValue FLOAT,
        Status VARCHAR(1)
    )`;
    
    
    const createTableOrdersProducts = ` CREATE TABLE IF NOT EXISTS ordersproducts (
        IdOrdersProducts INT AUTO_INCREMENT PRIMARY KEY,
        IdOrder INT,
        ValueUnit FLOAT,
        Unit VARCHAR(255),
        Description VARCHAR(255),
        SKU VARCHAR(255),
        Quantity INT,
        QtyBox INT,
        Weight FLOAT,
        Volumen FLOAT,
        Mark VARCHAR(255)
    )`;
    
    
    const createTableUser = ` CREATE TABLE IF NOT EXISTS user (
        IdUser  INT AUTO_INCREMENT PRIMARY KEY,
        Name VARCHAR(255),
        Email VARCHAR(255),
        Status INT
    )`;
    
    //execute querys
    db.query(createTableOrders, (err, result) => {
        if (err) throw err;
        console.log('Table orders created');
    });
    
    
    db.query(createTableOrdersProducts, (err, result) => {
        if (err) throw err;
        console.log('Table orders created');
    });
    
    db.query(createTableUser, (err, result) => {
        if (err) throw err;
        console.log('Table orders created');
    });
    
    //insert data
    const insertUser = `INSERT INTO user (Name, Email, Status) VALUES ('Robert', 'robert@gamil.com', 1)`;

    const inserOrder = `INSERT INTO orders (IdUser, OrderNumber, DateTime, ProviderName, DateCreated, Observation, TotalValue, Status) VALUES (1, 1, '2020-01-01', 'ProviderName', '2020-01-01', 'Observation', 1, 'A')`;

    const insertOrderProducts = `INSERT INTO ordersproducts (IdOrder, ValueUnit, Unit, Description, SKU, Quantity, QtyBox, Weight, Volumen, Mark) VALUES (1, 1, 'Unit', 'Description', 'SKU', 1, 1, 1, 1, 'Mark')`;

    db.query(insertUser, (err, result) => {
        if (err) throw err;
        console.log('User inserted');
    });

    db.query(inserOrder, (err, result) => {

        if (err) throw err;
        console.log('User inserted');
    });
    db.query(insertOrderProducts, (err, result) => {

        if (err) throw err;
        console.log('User inserted');
    });
}


