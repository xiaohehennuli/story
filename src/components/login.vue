<template>
  <div class="login-container">
    <div class="background-swiper"></div>

    <el-card class="login-card">
      <div class="login-header">
        <img
          class="avatar"
          src="https://xiaoheimg-1259001954.cos.ap-nanjing.myqcloud.com/touxiang.jpeg"
          alt="Avatar"
        />
      </div>
      <el-form
        class="login-form"
        :model="loginForm"
        :rules="rules"
        ref="loginForm"
      >
        <el-form-item prop="password">
          <el-input
            show-password
            v-model="loginForm.password"
            type="password"
            placeholder="请输入暗号"
          />
        </el-form-item>
        <div class="el-button-box">
          <el-button type="primary" @click="handleLogin" :loading="loading"
            >登录</el-button
          >
        </div>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  components: {},
  mounted() {
  },
  data() {
    return {
      backgroundImages: [
        "https://xiaoheimg-1259001954.cos.ap-nanjing.myqcloud.com/line_bg.jpeg",
        "https://xiaoheimg-1259001954.cos.ap-nanjing.myqcloud.com/line_bg.jpeg",
        "https://xiaoheimg-1259001954.cos.ap-nanjing.myqcloud.com/line_bg.jpeg",
      ],
      loginForm: {
        password: "",
      },
      rules: {
        password: [{ required: true, message: "请输入暗号", trigger: "blur" }],
      },
      loading: false,
    };
  },
  methods: {
    handleLogin() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.loading = true;
          // 在这里添加登录逻辑
          setTimeout(() => {
            this.loading = false;
            // 登录成功后的操作
            if (this.loginForm.password === "20230903") {
              this.$message({
                message: "暗号正确！欢迎小白~",
                type: "success",
                duration: 1000,
                onClose: () => {
                  this.$router.push("/email");
                },
              });
            } else {
              this.$message.error("再想想密码哦~");
            }
          }, 1000);
        }
      });
    },
  },
};
</script>

<style>

.my-custom-class {
  display: none;
}

.login-container {
  position: relative;
  height: 100vh;
  overflow: hidden;
}
.toolbar-content  {
  display: none;
}

.el-message--success {
  background-color: #67C23A;
  color: #fff;
}

.el-button-box {
  display: flex;
  align-items: center;
  justify-content: center;
}

.background-swiper {
  position: absolute;
  background: url("https://xiaoheimg-1259001954.cos.ap-nanjing.myqcloud.com/line_bg.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.bg-image {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
}

.el-card {
  border: none;
  background-color: none;
}

.login-card {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  padding: 30px;
  backdrop-filter: blur(10px);
}

.login-header {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}

.login-form {
  margin-top: 20px;
}
</style>
