import express from "express";
import cors from "cors";

//import databse
import db from "./database/index.js";
import {createTablesSeed} from "./database/seeds.js";	
// import routes 
import orders from "./routes/orders.js";
import products from "./routes/products.js";
import users from "./routes/users.js";
const app = express();

app.use(cors({
    methods: ["GET", "POST", "DELETE", "PATCH"],
}))

app.use(express.json());
app.use(express.urlencoded({extended: false}));



app.use('/api/v1/orders', orders);
app.use('/api/v1/products', products);
app.use('/api/v1/users', users);
app.use('/seed', (req, res) => {
    createTablesSeed();
    res.send("seeded");
})

const port = process.env.PORT || 5000;
export const server = app.listen(port, () =>
  console.log(`
🔥 Server ready at: http://localhost:${port}`),
)
