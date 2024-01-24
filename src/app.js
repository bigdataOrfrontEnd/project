//导入路由
import SMERouter from "sme-router";
import routers from "./routes";
//导入样式
import "./assets/less/main.less";
//创建实例
const router = new SMERouter("app", "html5");
//将router暴露在全局，在html中使用
window.router = router;
// 如果拿不到用户信息，就证明用户没有登录，直接跳转到登录页面
// if (!window.localStorage.getItem("adminName")) {
//   router.go("/login");
// }
//添加路由信息
routers.forEach((routerItem) => {
  router.route(routerItem.path, routerItem.element);
});
