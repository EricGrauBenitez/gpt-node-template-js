const { Router } = require("express");
const { readdirSync } = require("fs");

const cleanFileName = (fileName) =>
  fileName.split(".").shift();

const PATH_ROUTER = __dirname;
const router = Router();

readdirSync(PATH_ROUTER).forEach(async (filename) => {
  const cleanName = cleanFileName(filename);
  if (cleanName !== "index") {
    const moduleRouter = await require(`./${cleanName}.routes`);
    router.use(`/api/v1/${cleanName}`, moduleRouter.router);
  }
});

module.exports = router;
