// pages/YiShu/YiShu.js
Page({
  data: {
    artList: []
  },
  
  onLoad() {
    const app = getApp()
    this.setData({
      artList: app.globalData.products
        .filter(item => item.id >= 8 && item.id <= 15)
        .map(item => ({
          id: item.id,
          image: item.image,
          title: item.title,
          url: `/pages/index/YiShu/Liu_item/Liu_item?index=${item.id}`
        }))
    })
  }
});