const express = require("express");
const usersController = require("./users.controller");
const authMiddleware = require('../../middlewares/auth');

const router = express.Router();

router.get("/", usersController.getAll);
router.get("/:id", usersController.getById);
router.get('/me', authMiddleware.verifyToken, usersController.me);
router.post("/", usersController.create);
router.put("/:id", usersController.update);
router.delete("/:id", usersController.delete);


module.exports = router;
