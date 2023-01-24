const express = require("express")
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

// Setting path for public directory 
const static_path = path.join(__dirname, "frontend");
app.use(express.static(static_path));
app.use(express.urlencoded({ extended: true }));


// Server Setup
app.listen(port, () => {
   console.log(`server is running at ${port}`);
});