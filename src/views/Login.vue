<template>
  <div class="themain mt-10">
    <v-card rounded width="fit-content" elevation="6" max-width="100vw">
      <v-tabs centered v-model="tab">
        <v-tab :href="`#tab-tologin`">登录</v-tab>
        <v-tab :href="`#tab-register`">注册</v-tab>
        <v-tab-item :value="`tab-tologin`">
          <v-form v-model="loginValid" ref="loginForm" lazy-validation>
            <v-container>
              <v-row>
                <v-col>
                  <div class="mx-10">
                    <v-text-field
                      v-model="loginPart.username"
                      :rules="nameRules"
                      :counter="15"
                      label="昵称"
                      required
                    ></v-text-field>
                  </div>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <div class="mx-10">
                    <v-text-field
                      v-model="loginPart.password"
                      :rules="passRules"
                      :counter="20"
                      label="密码"
                      type="password"
                      required
                    ></v-text-field>
                  </div>
                </v-col>
              </v-row>
              <v-row align="center" align-content="center" justify="center">
                <v-col></v-col>
                <v-col>
                  <v-btn color="primary" bottom @click="signin" :loading="yetLoad">登录</v-btn>
                </v-col>
                <v-col></v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-tab-item>
        <v-tab-item :value="`tab-register`">
          <v-form v-model="registValid" ref="registForm" lazy-validation>
            <v-container>
              <v-row no-gutters>
                <v-col class="py-0">
                  <div class="mx-10 py-0">
                    <v-text-field
                      v-model="registerPart.username"
                      :rules="nameRules"
                      :counter="15"
                      label="昵称"
                      required
                    ></v-text-field>
                  </div>
                </v-col>
              </v-row>
              <v-row no-gutters>
                <v-col>
                  <div class="mx-10 py-0">
                    <v-text-field
                      v-model="registerPart.password"
                      :rules="passRules"
                      :counter="20"
                      type="password"
                      label="密码"
                      required
                    ></v-text-field>
                  </div>
                </v-col>
              </v-row>
              <v-row no-gutters>
                <v-col>
                  <div class="mx-10 py-0">
                    <v-text-field
                      v-model="registerPart.truename"
                      :rules="truenameRules"
                      :counter="5"
                      label="真实姓名"
                      required
                    ></v-text-field>
                  </div>
                </v-col>
              </v-row>
              <v-row no-gutters>
                <v-col>
                  <div class="mx-10 py-0">
                    <v-text-field
                      v-model="registerPart.passcode"
                      :rules="codeRules"
                      :counter="20"
                      label="注册码"
                      required
                    ></v-text-field>
                  </div>
                </v-col>
              </v-row>
              <v-row align="center" align-content="center" justify="center">
                <v-col></v-col>
                <v-col>
                  <v-btn color="primary" bottom @click="signup">注册</v-btn>
                </v-col>
                <v-col></v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-tab-item>
      </v-tabs>
    </v-card>
    <v-dialog v-model="dialog" persistent max-width="290">
      <v-card>
        <v-card-title class="headline">请确认个人信息</v-card-title>

        <v-card-text>
          <v-list-item>
            <v-list-item-content two-line>
              <v-list-item-title>{{registerPart.username}}</v-list-item-title>
              <v-list-item-subtitle>昵称</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content two-line>
              <v-list-item-title>{{registerPart.password}}</v-list-item-title>
              <v-list-item-subtitle>密码</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content two-line>
              <v-list-item-title>{{registerPart.truename}}</v-list-item-title>
              <v-list-item-subtitle>姓名</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">取消</v-btn>

          <v-btn color="blue darken-1" text @click="sumbit" :loading="loading">提交</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="alert.isShow" persistent max-width="290">
      <v-card>
        <v-card-title class="headline">提示</v-card-title>
        <v-card-text>{{alert.text}}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="alert.isShow = false">确定</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import md5 from "js-md5";
import { request } from "~network/index";

export default {
  name: "Login",
  components: {},
  data() {
    return {
      alert: {
        text: "",
        isShow: false
      },
      dialog: false,
      loading: false,
      yetLoad: false,
      tab: ["tologin", "register"],
      loginValid: false,
      registValid: false,
      loginPart: {
        username: "",
        password: ""
      },
      registerPart: {
        username: "",
        password: "",
        passcode: "",
        truename: ""
      },
      nameRules: [
        v => !!v || "请填写昵称",
        v => v.length <= 15 || "昵称应该少于15个字符"
      ],
      truenameRules: [
        v => !!v || "请填写真实姓名",
        v => v.length <= 5 || "姓名应该少于5个字符"
      ],
      passRules: [
        v => !!v || "请填写密码",
        v => v.length <= 20 || "密码长度小于20个字符"
      ],
      codeRules: [
        v => !!v || "请填写注册码",
        v => v.length === 20 || "注册码长度为20",
        v => md5(v) === md5("11111111111111111111") || "注册码错误"
      ]
    };
  },
  methods: {
    loginSuccess(meta) {
      this.$store.commit("loginBy", meta);
      if (!this.$route.query.fromwhere) {
        this.$router.push({ path: "/home" });
      } else {
        const fromwhere = this.$route.query.fromwhere;
        this.$router.push({ path: fromwhere });
      }
    },
    signin() {
      const isValid = this.$refs.loginForm.validate();
      if (isValid) {
        this.yetLoad = true;
        request({
          url: "/api/me",
          method: "post",
          data: {
            type: "login",
            username: this.loginPart.username,
            password: md5(this.loginPart.password)
          }
        })
          .then(res => {
            console.log(res);
            this.yetLoad = false;
            if (res.data.status === 1) {
              this.alert.text = "该用户不存在";
              this.alert.isShow = true;
            } else if (res.data.status === 2) {
              this.alert.text = "密码错误";
              this.alert.isShow = true;
            } else {
              this.loginSuccess(res.data.meta);
            }
          })
          .catch(err => {
            console.log(err);
            this.yetLoad = false;
            this.alert.text = "网络异常，请检查网络状态";
            this.alert.isShow = true;
          });
      }
    },
    signup() {
      const isValid = this.$refs.registForm.validate();
      if (isValid) {
        this.dialog = true;
      }
    },
    sumbit() {
      this.loading = true;
      request({
        url: "/api/me",
        method: "post",
        data: {
          type: "register",
          username: this.registerPart.username,
          password: md5(this.registerPart.password),
          truename: this.registerPart.truename
        }
      })
        .then(res => {
          console.log(res);
          this.dialog = false;
          this.loading = false;
          if (res.data.status === 1) {
            this.alert.text = "该用户已存在";
            this.alert.isShow = true;
          } else {
            this.loginSuccess(res.data.meta);
          }
        })
        .catch(err => {
          console.log(err);
          this.dialog = false;
          this.loading = false;
          this.alert.text = "网络异常，请检查网络状态";
          this.alert.isShow = true;
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.themain {
  margin: 0 auto;
  width: fit-content;
}
</style>