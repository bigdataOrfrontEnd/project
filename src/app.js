//导入路由
import SMERouter from "sme-router";
//引入模版
import indexV from "./views/index.ejs";
import adminV from "./views/admin.ejs";
import advV from "./views/adv.ejs";
import loginV from "./views/login.ejs";

//创建实例
const router = new SMERouter("app");
//添加路由信息
router.route("/index", (req, res) => {
  res.render(indexV({ title: "Shirly", message: "锄禾日当午" }));
});

router.route("/admin", (req, res) => {
  res.render(adminV());
});

router.route("/adv", (req, res) => {
  res.render(advV);
});
router.route("/login", (req, res) => {
  res.render(loginV);
});

router.route("*", (req, res) => {
  res.redirect("/index");
});
