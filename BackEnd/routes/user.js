

const express = require("express");

const router = express.Router();


router.post("/",require("../controllers/user").addExpanse);

router.get("/",require("../controllers/user").getAllExpanse);

router.get("/:expID",require("../controllers/user").getExpanse);

router.put("/:expID",require("../controllers/user").updateExpanse);

router.delete("/:expID",require("../controllers/user").deleteExpanse);


module.exports = router;

