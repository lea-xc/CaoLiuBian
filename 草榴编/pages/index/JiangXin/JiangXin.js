// pages/gallery/gallery.js
Page({
    data: {
      imageList: [] // 初始化图片数组
    },
    onLoad: function() {
      var app = getApp(); // 获取app实例
      // 假设你的url是固定的或者有某种逻辑来生成，这里只是示例
      var updatedImageList = app.globalData.products.map(function(item) {
        if(item.id>7){
            return;
        }
        
        return {
          id: item.id,
          image: item.image,
          url: '/pages/index/JiangXin/Cao_item/Cao_item?index=' + item.id // 假设这是详情页的路径，并传递id
        };
      });
      this.setData({
        imageList: updatedImageList.slice(0, 8) // 将处理后的数组赋值给页面数据
      });
    }
  });
  