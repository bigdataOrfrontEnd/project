//导入实例
import axiosSerive from "../request/advserver";
// 添加广告
export const postAdv = (formData) => {
  return axiosSerive.post("/adv", formData);
};
