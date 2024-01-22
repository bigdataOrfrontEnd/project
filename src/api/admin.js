// 二次封装相应的接口
//导入实例
import axiosSerive from "../request/advserver";
//添加管理员
export const postAdmin = (data) => {
  return axiosSerive.post("/admin", data);
};
// 获取管理员
export const getAdmin = () => {
  return axiosSerive.get("/admin");
};
// 删除指定id的管理员
export const deletAdmin = (id) => {
  return axiosSerive.delete("/admin" + id);
};
// 修改密码
export const changePassword = (body) => {
  return advServer.patch("/changpwd", body);
};
