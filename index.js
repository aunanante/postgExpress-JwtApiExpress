const express = require("express");
const cors = require('cors');
// const { init } = require("./dbconfig")

require("dotenv").config()

const app = express();

const { registerValidator } = require("./validators/registerValidator");
const { HomeController } = require("./controllers/HomeController");
const { loginValidator } = require("./validators/loginValidator");

const userRouter = require("./routes/userroutes")
// const teamRouter = require("./routes/teamroutes")
// const projectRouter = require("./routes/projectroutes");

const villeRouter = require("./routes/villeroutes");
const commerceRouter = require("./routes/commerceroutes");
const productscategoryRouter = require("./routes/productscategoryroutes");
const productRouter = require("./routes/productroutes");

const { JWTController } = require("./controllers/JWTController");

// init()
app.use(cors());
app.use(express.json());
app.use("/user" , JWTController.verifyAccessToken.bind(JWTController), userRouter)
app.use("/ville" , JWTController.verifyAccessToken.bind(JWTController), villeRouter)
app.use("/commerce" , JWTController.verifyAccessToken.bind(JWTController), commerceRouter)
app.use("/productscategory" , JWTController.verifyAccessToken.bind(JWTController), productscategoryRouter)
app.use("/product" , JWTController.verifyAccessToken.bind(JWTController), productRouter)

// app.use("/project" , JWTController.verifyAccessToken.bind(JWTController), projectRouter)
// app.use("/team" , JWTController.verifyAccessToken.bind(JWTController), teamRouter)

app.get("/", (req, res) => {
  res.send({ message: "Hello you are all the best people" });
});

app.post(
  "/register",
  registerValidator,
  HomeController.register
);
app.post(
    "/login",
    loginValidator,
    HomeController.login
  );
  

app.get("/new_access_token", JWTController.grantNewAccessToken.bind(JWTController))

app.listen(5000, () => {
  console.log("server running great!");
});

// npm run start