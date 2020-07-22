import Mock from "mockjs";

const data1 = {
  status: 3,
  meta: {
    token: "bbnb",
  },
};
//数据模板'name|min-max':value

//定义模拟接口只能接收post请求，定义返回的数据为data1
Mock.mock("/api/me", "post", () => Mock.mock(data1));
