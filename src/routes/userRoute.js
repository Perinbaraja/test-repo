const express = require("express");

const userModel = require("../model/UserModel");

const router = express.Router();

router.get("/allUser", async (req, res) => {
  // console.log("userid", userID);

  userModel.find({}, null, { sort: { firstname: 1 } }, (err, list) => {
    if (err) {
      res.json({
        msg: err,
      });
    } else {
      res.json({
        success: true,
        users: list,
      });
    }
  });
});

module.exports = router;
