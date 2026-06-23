// require("dotenv").config();



// const app = require("./app");
// console.log("MONGO_URI=", process.env.MONGO_URI);
// const connectDB =
//  require("./config/mongo");

// const PORT =
//  process.env.PORT || 5000;

// connectDB();

// app.listen(PORT, () => {

//  console.log(
//    `Server Running On Port ${PORT}`
//  );
// });



require("dotenv").config();

const app = require("./app");

const connectDB =
 require("./config/mongo");

const PORT =
 process.env.PORT || 5000;

connectDB();

app.listen(PORT, () => {

 console.log(
   `Server Running On Port ${PORT}`
 );
});

