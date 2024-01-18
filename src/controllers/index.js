//引入模版
import indexV from "@/views/index";
//导入组件
import HeaderComponent from "@/components/Header";
import SiderComponent from "@/components/Sider";
import FooterComponent from "@/components/Footer";
import ContentComponent from "@/components/Content";
export default (req, res, next) => {
  // res.render(indexV({ title: "Shirly", message: "锄禾日当午" }));
  next(
    indexV({
      Header: HeaderComponent(),
      Sider: SiderComponent(),
      Content: ContentComponent({
        subRouteContent: res.subRoute(),
      }),
      Footer: FooterComponent(),
    })
  );
};
