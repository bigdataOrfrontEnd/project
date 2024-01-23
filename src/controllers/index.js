//引入模版
import indexV from "@/views/index";
import routers from "../routes";
//导入组件
import HeaderComponent from "@/components/Header";
import SiderComponent from "@/components/Sider";
import FooterComponent from "@/components/Footer";
import ContentComponent from "@/components/Content";
export default (req, res, next) => {
  // req.url会出现当前的路由
  // res.render(indexV({ title: "Shirly", message: "锄禾日当午" }));
  next(
    indexV({
      Header: HeaderComponent(),
      Sider: SiderComponent({ url: req.url, routers: routers }),
      Content: ContentComponent({
        title: routers.find((item) => item.path == req.url).title,
        subRouteContent: res.subRoute(),
      }),
      Footer: FooterComponent(),
    })
  );

  //点击退出按钮退出
  document.querySelector("#logoutBtn").addEventListener("click", () => {
    // 清空 localStorage
    localStorage.clear();
    // 跳转到登录页面
    window.router.go("/login");
  });
};
