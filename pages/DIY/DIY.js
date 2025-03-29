// // pages/DIY/DIY.js
// Page({

//   /**
//    * 页面的初始数据
//    */
//   data: {

//   },

//   /**
//    * 生命周期函数--监听页面加载
//    */
//   onLoad(options) {

//   },

//   /**
//    * 生命周期函数--监听页面初次渲染完成
//    */
//   onReady() {

//   },

//   /**
//    * 生命周期函数--监听页面显示
//    */
//   onShow() {

//   },

//   /**
//    * 生命周期函数--监听页面隐藏
//    */
//   onHide() {

//   },

//   /**
//    * 生命周期函数--监听页面卸载
//    */
//   onUnload() {

//   },

//   /**
//    * 页面相关事件处理函数--监听用户下拉动作
//    */
//   onPullDownRefresh() {

//   },

//   /**
//    * 页面上拉触底事件的处理函数
//    */
//   onReachBottom() {

//   },

//   /**
//    * 用户点击右上角分享
//    */
//   onShareAppMessage() {

//   }
// })

// pages/DIY/DIY.js
Page({
  data: {
    messages: [],    // 消息数组
    inputValue: '',  // 输入内容
    isSending: false // 发送状态
  },

  // 初始化数据（建议放在生命周期函数前）
  formatTime(date) {
    const h = date.getHours().toString().padStart(2, '0')
    const m = date.getMinutes().toString().padStart(2, '0')
    return `${h}:${m}`
  },

  onLoad() {
    this.initChat()
  },

  // 初始化聊天
  initChat() {
    this.setData({
      messages: [{
        role: 'ai',
        content: '你好！我是DIY助手，开始创作吧！',
        time: this.formatTime(new Date())
      }]
    })
  },

  // 输入处理
  onInput(e) {
    this.setData({ inputValue: e.detail.value })
  },

  // 发送消息（整合AI交互）
  async sendMessage() {
    const { inputValue, isSending } = this.data
    const content = inputValue.trim()
    
    if (!content || isSending) return

    // 添加用户消息
    const newMessage = {
      role: 'user',
      content: content,
      time: this.formatTime(new Date())
    }

    this.setData({
      messages: [...this.data.messages, newMessage],
      inputValue: '',
      isSending: true
    })

    try {
      // 这里替换为你的真实AI接口
      const response = await this.getDIYResponse(content)
      
      this.setData({
        messages: [
          ...this.data.messages,
          {
            role: 'ai',
            content: response,
            time: this.formatTime(new Date())
          }
        ]
      })
    } catch (error) {
      console.error('交互失败:', error)
      wx.showToast({ title: '交互异常', icon: 'none' })
    }

    this.setData({ isSending: false })
  },

  // 模拟DIY互动响应（开发时替换为真实接口）
  getDIYResponse(content) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(`收到创意：${content}（正在生成设计方案...）`)
      }, 800)
    })
  }
})