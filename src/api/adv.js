//导入实例
import axiosSerive from "../request/advserver";
// 添加广告
export const postAdv = (formData) => {
  return axiosSerive.post("/adv", formData);
};
// 获取广告列表
export const getAdv = (pageNo, pageSize, keyWord) => {
  return axiosSerive.get("/adv", {
    params: {
      pageNo,
      pageSize,
      keyWord,
    },
  });
};
