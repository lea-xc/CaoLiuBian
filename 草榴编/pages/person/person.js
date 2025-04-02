// page.js
Page({
    data: {
      userInfo: {} // 初始化用户信息
    },
    onLoad: function () {
      // 页面加载时，尝试从全局数据获取用户信息
      const app = getApp();
      this.setData({
        userInfo: app.globalData.userInfo
      });
    },
    onAvatarTap: function () {
      // 调用 app.js 中定义的 login 方法
      const app = getApp();
      app.login();
    }
  });
  