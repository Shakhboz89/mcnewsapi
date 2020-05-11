const express = require("express");
const router = express.Router();
const {
  create,
  list,
  listAllNewsCategoriesTags,
  read,
  remove,
  update,
  photo,
  listRelated,
} = require("../controllers/news");
const { requireSignin, adminMiddleware } = require("../controllers/auth");

router.post("/news", requireSignin, adminMiddleware, create);
router.get("/allnews", list);
router.post("/allnews-categories-tags", listAllNewsCategoriesTags);
router.get("/news/:slug", read);
router.delete("/news/:slug", requireSignin, adminMiddleware, remove);
router.put("/news/:slug", requireSignin, adminMiddleware, update);
router.get("/news/photo/:slug", photo);
router.post("/allnews/related", listRelated);

module.exports = router;
