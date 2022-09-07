const express = require("express");
const router = express.Router();
const { Applied } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddleware");

router.post("/", validateToken, async (req, res) => {
  const { PostId } = req.body;
  const UserId = req.user.id;

  const found = await Likes.findOne({
    where: { PostId: PostId, UserId: UserId },
  });
  if (!found) {
    await Likes.create({ PostId: PostId, UserId: UserId });
    res.json({ Applied: true });
  } else {
    await Likes.destroy({
      where: { PostId: PostId, UserId: UserId },
    });
    res.json({ Applied: false });
  }
});

module.exports = router;
