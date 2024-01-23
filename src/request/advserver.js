// 导入 axios
import axios from "axios";
import toastr from "toastr";
//创建实例
const axiosSerive = axios.create({
  baseURL: "/api",
  timeout: 5000,
});
//设置相应拦截
axiosSerive.interceptors.response.use(
  (res) => {
    if (res.data.ok !== 1) {
      toastr.error(res.data.msg);
      //返回不改变状态的Promise，执行链结束
      return new Promise(() => {});
    }
    if (res.data.ok === -2) {
      toastr.error(res.data.msg);
      router.go("/login");
      localStorage.clear();
      return new Promise(() => {});
    }
    return res.data;
  },
  (err) => {
    toastr.error("请求错误");
    //返回不改变状态的Promise，执行链结束
    return Promise(() => {});
  }
);
//设置请求拦截
axiosSerive.interceptors.request.use((config) => {
  //如果localStorage中有token，就添加到请求头里面
  if (localStorage.getItem("token")) {
    config.headers.token = localStorage.getItem("token");
  }
  return config;
});

export default axiosSerive;
