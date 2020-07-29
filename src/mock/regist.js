import Mock from "mockjs";

const data1 = {
  status: 1,
  infor: { username: "sb", premission: "common" },
};
//数据模板'name|min-max':value

//定义模拟接口只能接收post请求，定义返回的数据为data1
Mock.mock("/blog/php/hhh", "post", () => Mock.mock(data1));
