//导入路由
import SMERouter from "sme-router";
//创建实例
const router = new SMERouter("app");
//添加路由信息
router.route("/index", (req, res) => {
  res.render("<h1>首页</h1>");
});

router.route("/admin", (req, res) => {
  res.render("管理员列表");
});

router.route("/adv", (req, res) => {
  res.render("广告列表");
});
router.route("/login", (req, res) => {
  res.render("登录");
});

router.route("*", (req, res) => {
  res.redirect("/index");
});
