//导入控制器
import IndexContraller from "@/controllers/index";
import JsxContraller from "@/controllers/jsxdemo";
import AdminContraller from "@/controllers/admin";
import AdvContraller from "@/controllers/adv";
import LoginContraller from "@/controllers/login";
export default [
  {
    path: "/index",
    element: IndexContraller,
    isNav: false,
    title: "首页",
    icon: "fa-home",
  },
  {
    path: "/react",
    element: JsxContraller,
    isNav: true,
    title: "react测试案例",
    icon: "fa-home",
  },

  {
    path: "/index/admin",
    element: AdminContraller,
    isNav: true,
    title: "管理员列表",
    icon: "fa-user",
  },
  {
    path: "/index/adv",
    element: AdvContraller,
    isNav: true,
    title: "广告列表",
    icon: "fa-audio-description",
  },
  {
    path: "/login",
    element: LoginContraller,
    isNav: false,
  },
  {
    path: "*",
    element: (req, res) => {
      res.redirect("/index/admin");
    },
    isNav: false,
  },
];
