const router = require("express").Router();

const userController = require("../controllers/userController");
const authController = require("../controllers/authController");

router.post(
  "/generate-token",
  authController.protect,
  userController.generateToken
);


module.exports = router;
