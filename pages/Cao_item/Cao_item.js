const app = getApp();

Page({
  data: {
    product: {}
  },

  onLoad: function (options) {
    const index = options.index; // 获取传递的数组下标
    //const index = 7;
    this.setData({
      product: app.globalData.products[index]
    });
  },

  // 点赞
  likeProduct() {
    wx.showToast({ title: "点赞成功", icon: "success" });
  },

  // 收藏
  collectProduct() {
    wx.showToast({ title: "已收藏", icon: "success" });
  },

  // 发表评论
  commentProduct() {
    wx.navigateTo({
      url: "/pages/comment/comment"
    });
  },

  // 立即购买
  buyNow() {
    wx.showToast({ title: "购买成功", icon: "success" });
  },

  // 加入购物车
  addToCart() {
    wx.showToast({ title: "已加入购物车", icon: "success" });
  }
});
