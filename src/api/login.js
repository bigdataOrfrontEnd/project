//导入实例
import axiosSerive from "../request/advserver";
//登录
export const Postlogin = (data) => {
  return axiosSerive.post("/login", data);
};
