//导入路由
import SMERouter from "sme-router";
import routers from "./routes";
//创建实例
const router = new SMERouter("app");
//将router暴露在全局，在html中使用
window.router = router;
//添加路由信息
routers.forEach((routerItem) => {
  router.route(routerItem.path, routerItem.element);
});
