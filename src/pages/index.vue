<template>
    <div>测试</div>
</template>
<script>
import { wxLogin } from "@/utils/wxUtil";

export default {
  //点击获取用户信息接口返回信息
  methods: {
    async login() {
      let code = await wxLogin();
      console.log("wxlogin成功:" + JSON.stringify(code));
      console.log("code:" + JSON.stringify(code));
      // this.$fly
      //   .request({
      //     method: "post", // post/get 请求方式
      //     url: "/wechat/login",
      //     body: { code }
      //   })
      //   .then(res => {
      //     console.log(JSON.stringify(res));
      //   });
    }
  },
  beforeMount() {
    this.login();
  }
};
</script>
<style scoped>
</style>


