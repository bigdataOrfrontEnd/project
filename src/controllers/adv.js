import advV from "@/views/adv";
const prevImgExec = (event) => {
  // 在箭头函数中这样拿到file event.target.files[0]
  const file = event.target.files[0];
  //如果没有图片直接返回
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
};
