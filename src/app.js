//导入路由
import SMERouter from "sme-router";
//引入模版
import indexV from "@/views/index";
import adminV from "@/views/admin";
import advV from "@/views/adv";
import loginV from "@/views/login";

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
