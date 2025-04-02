// pages/shop/shop.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentIndex: 1,
    imageList: [
      { color: "#8BC34A" }, // 浅绿色
      { color: "black" }, // 主绿色
      { color: "#388E3C" }  // 深绿色
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },

  filters: {
    getTransform:function (index) {
        const diff = (index - this.data.currentIndex + 3) % 3
        switch(diff) {
          case 0: // 当前选中
            return 'translateX(0) scale(1)'
          case 1: // 右侧图片
            return 'translateX(40%) scale(0.7)'
          case 2: // 左侧图片
            return 'translateX(-40%) scale(0.7)'
        }
      }
  },

  switchImage(e) {
    const newIndex = parseInt(e.currentTarget.dataset.index)
    this.setData({ currentIndex: newIndex })
  }
})