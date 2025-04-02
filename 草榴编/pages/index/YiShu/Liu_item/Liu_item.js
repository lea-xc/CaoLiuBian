// pages/YiShu/Liu_item/Liu_item.js

Page({
  data: {
    artwork: null,
    isExpanded: false,
    imageRotate: -1.5,
  },

  onLoad(options) {
    const artData = getApp().globalData.products[options.index]
    artData.pinyin = this.generatePinyin(artData.title)
    this.setData({ artwork: artData })
    
    // 初始化动态效果
    this.startImageDrift()
  },

  generatePinyin(title) {
    // 实际应接入拼音转换库
    return title.split('').map(c => c.toUpperCase()).join(' ')
  },

  startImageDrift() {
    let rotate = this.data.imageRotate
    setInterval(() => {
      rotate = Math.sin(Date.now()/1800) * 1.5
      this.setData({ imageRotate: rotate.toFixed(2) })
    }, 50)
  },

  toggleExpand() {
    this.setData({ isExpanded: !this.data.isExpanded })
  },
})

