const express = require("express");
const router = express.Router();
const { candidates } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddleware");

router.get("/:postId", async (req, res) => {
  const postId = req.params.postId;
  const candidates = await Comments.findAll({ where: { PostId: postId } });
  res.json(candidates);
});

router.post("/", validateToken, async (req, res) => {
  const candidates = req.body;
  const username = req.user.username;
  candidates.username = username;
  await candidates.create(candidates);
  res.json(candidates);
});

router.delete("/:commentId", validateToken, async (req, res) => {
  const candidateId = req.params.commentId;

  await candidates.destroy({
    where: {
      id: candidatetId,
    },
  });

  res.json("DELETED SUCCESSFULLY");
});

module.exports = router;
