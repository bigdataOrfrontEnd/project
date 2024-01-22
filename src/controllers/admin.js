import toastr from "toastr";
import "../../node_modules/toastr/build/toastr.css";
import adminV from "@/views/admin";
import AdminTable from "../components/AdminTable";
import { postAdmin, getAdmin } from "../api/admin";
// 执行添加管理员账户
const addAdminExec = (e) => {
  // 获取输入框的数据
  const adminForm = document.adminForm; // 获取表单元素
  const adminName = adminForm.adminName.value.trim(); // 获取管理员账号的值
  const passWord = adminForm.passWord.value.trim(); // 获取管理员密码的值
  const rePassWord = adminForm.rePassWord.value.trim(); // 获取重复密码的值
  console.log(adminName, passWord, rePassWord, e);
  //对输入的信息进行校验
  if (adminName.search(/^[a-zA-Z]+$/) == -1) {
    toastr.error("管理员账号只能由英文字母组成！");
    return;
  }
  // 密码是6-18位的数字、字母、下划线 ^\w{6,18}$
  if (passWord.search(/^\w{6,18}$/) === -1) {
    toastr.error("密码必须由6到18位数字、字母、下划线组成");
    return;
  }
  // 确认密码
  if (passWord !== rePassWord) {
    toastr.error("两次密码不一致");
    return;
  }
  //使用axios发送请求
  postAdmin({
    adminName,
    passWord,
  })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
//获取用户列表
const getAdminExec = () => {
  getAdmin().then((res) => {
    console.log(res.data);
    document.querySelector("#amdinListBox").innerHTML = AdminTable({
      table: res.data,
    });
  });
};
export default (req, res) => {
  res.render(adminV());
  // 监听点击事件
  getAdminExec();
  document
    .querySelector("#addAdminBtn")
    .addEventListener("click", addAdminExec);
};
