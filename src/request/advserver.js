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
    return res.data;
  },
  (err) => {
    toastr.error("请求错误");
    //返回不改变状态的Promise，执行链结束
    return Promise(() => {});
  }
);
export default axiosSerive;
