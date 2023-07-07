const { Router } = require("express");
const { handleGptAnswer } = require("../controllers");

const router = Router();

router.post("/", handleGptAnswer);

module.exports = { router };
