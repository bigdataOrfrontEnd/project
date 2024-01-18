//导入路由
import SMERouter from "sme-router";
//导入控制器
import IndexContraller from "@/controllers/index";
import AdminContraller from "@/controllers/admin";
import AdvContraller from "@/controllers/adv";
import LoginContraller from "@/controllers/login";
//创建实例
const router = new SMERouter("app");
//添加路由信息
router.route("/index", IndexContraller);
router.route("/index/admin", AdminContraller);

router.route("/index/adv", AdvContraller);
router.route("/login", LoginContraller);

router.route("*", (req, res) => {
  res.redirect("/index/admin");
});
