import express from "express";

const app = express();

console.log("Changed");
app.listen(3000, () => {
  console.log("Server is running!");
});
