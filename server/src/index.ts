import express from "express";

// CONFIGURATION
const app = express();

// MIDDLEWARES
app.use(express.json());

// SERVER RUNNING
const port = process.env.PORT || 5001;
app.listen(port, () => console.log(`Server listing to the port ${port}`));
