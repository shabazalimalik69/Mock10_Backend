const express = require("express");
const { postLoanDetails} = require("../Controllers/loanController");
const { SignIn, SignUp } = require("../Controllers/userController");
const userProfile = require("../Controllers/userProfileController");


const router = express.Router();

router.post("/signup", SignUp);
router.post("/signin", SignIn);
router.get("/userDetails/:id", userProfile);

router.post("/createLoan",postLoanDetails)

module.exports = router;
