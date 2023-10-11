const Router = require("express");
const taskRoute = require("./taskRoute");

const router = Router();

router.use((req, res, next) => {
  console.log("Time: ", Date.now());
  next();
});

router.use("/tasks", taskRoute);

module.exports = router;
