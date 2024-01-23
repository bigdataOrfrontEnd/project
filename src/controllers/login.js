import loginV from "@/views/login";
import { Postlogin } from "@/api/login";
import toastr from "toastr";
const postLoginExec = (event) => {
  //阻止默认行为
  event.preventDefault();
  //获取表单元素
  const adminName = document.loginForm.adminName.value.trim();
  const passWord = document.loginForm.passWord.value.trim();
  if (adminName.length === 0) {
    toastr.error("账号不能为空");
    return;
  }
  if (passWord.length === 0) {
    toastr.error("密码不能为空");
    return;
  }
  //向后端发送数据
  Postlogin({
    adminName,
    passWord,
  }).then((res) => {
    console.log(res);
    //将登录的用户存入到本地
    window.localStorage.setItem("adminName", adminName);
    window.localStorage.setItem("token", res.token);
    //跳转到首页
    window.router.go("/index/admin");
  });
};
export default (req, res) => {
  res.render(loginV());
  // 给表单监听提交事件
  document.loginForm.addEventListener("submit", postLoginExec);
};
