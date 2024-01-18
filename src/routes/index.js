//导入控制器
import IndexContraller from "@/controllers/index";
import AdminContraller from "@/controllers/admin";
import AdvContraller from "@/controllers/adv";
import LoginContraller from "@/controllers/login";
export default [
  {
    path: "/index",
    element: IndexContraller,
  },
  {
    path: "/index/admin",
    element: AdminContraller,
  },
  {
    path: "/index/adv",
    element: AdvContraller,
  },
  {
    path: "/login",
    element: LoginContraller,
  },
];
