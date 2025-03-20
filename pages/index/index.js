// pages/index/index.js
Page({
    data: {
      searchValue: '', // 搜索关键词
      searchHistory: [] // 搜索历史
    },
  
    // 输入事件处理
    handleInput(e) {
      this.setData({
        searchValue: e.detail.value.trim()
      });
    },
  
    // 执行搜索
    handleSearch() {
      const keyword = this.data.searchValue;
      if (!keyword) {
        wx.showToast({
          title: '请输入搜索内容',
          icon: 'none'
        });
        return;
      }
      
      // 这里添加实际搜索逻辑
      console.log('执行搜索：', keyword);
      
      // 保存搜索记录
      this.setData({
        searchHistory: [keyword, ...this.data.searchHistory.slice(0, 4)]
      });
      
      // 跳转到搜索结果页
      wx.navigateTo({
        url: `/pages/search/search?keyword=${keyword}`
      });
    },
  
    onLoad() {
      // 加载搜索历史
      this.setData({
        searchHistory: wx.getStorageSync('searchHistory') || []
      });
    }
  });