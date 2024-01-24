import advV from "@/views/adv";
import toastr from "toastr";
// 导入api函数
import { postAdv } from "../api/adv";
//执行广告的添加
const addAdvExec = async (event) => {
  //阻止默认行为
  event.preventDefault();
  //创建FormData对象，以form元素作为参数
  const fd = new FormData(document.addAdvForm);
  //利用纯数组进行判断
  const fdArr = Array.from(fd);
  if (!fdArr.every((item) => item[1])) {
    toastr.error("请将表单填写完整");
    return;
  }
  if (fd.get("advPic").size === 0) {
    toastr.error("请选择要上传的图片！");
    return;
  }
  fd.forEach((item) => {
    console.log(item);
  });

  //使用后端API添加广告
  const res = await postAdv(fd);
  console.log(res);
};
const prevImgExec = (event) => {
  // 在箭头函数中这样拿到file event.target.files[0]
  const file = event.target.files[0];
  //如果没有图片直接返回,就是用户直接点击了取消,只要打开了那个选择框就是一次change,所以需要给他结束
  if (!file) {
    return;
  }
  //实例化FilerReader
  const reader = new FileReader();
  //将文件读取为base64的
  reader.readAsDataURL(file);
  //将预览图放置的位置
  const preImgEle = document.querySelector("#preImg");
  //监听读取完毕
  reader.onload = () => {
    // 将 base64编码的图片作为 src 属性的值
    preImgEle.src = reader.result;
    preImgEle.style.display = "block";
  };
};
export default (req, res) => {
  res.render(advV());
  document.querySelector("#advPic").addEventListener("change", prevImgExec);
  document.addAdvForm.addEventListener("submit", addAdvExec);
};
