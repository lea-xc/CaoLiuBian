// pages/road/road.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 初始坐标
    latitude: 37.1500,
    longitude: 118.1200,
    // 其他数据
    scale: 14,
    normalTourismIcon: "/images/tourism.png",
    normalGrassIcon: "/images/grass_icon.png",
    // 标注点
    markers: [
      {
        id: 1,
        latitude: 37.1528,
        longitude: 118.1289,
        iconPath: "/images/tourism.png",
        width: 40,
        height: 40,
      },
      {
        id: 2,
        latitude: 37.1531,
        longitude: 118.1222,
        iconPath: "/images/tourism.png",
        width: 40,
        height: 40,
        animation: 'none'
      },
      {
        id: 3,
        latitude: 37.1455,
        longitude: 118.1301,
        iconPath: "/images/tourism.png",
        width: 40,
        height: 40,
      },
      {
        id: 4,
        latitude: 37.1650,
        longitude: 118.1355,
        iconPath: "/images/tourism.png",
        width: 40,
        height: 40,
      },
      {
        id: 5,
        latitude: 37.1600,
        longitude: 118.1100,
        iconPath: "/images/grass_icon.png",
        width: 40,
        height: 40,
      },
      {
        id: 6,
        latitude: 37.1550,
        longitude: 118.1122,
        iconPath: "/images/grass_icon.png",
        width: 40,
        height: 40,
      },
      {
        id: 7,
        latitude: 37.1575,
        longitude: 118.1255,
        iconPath: "/images/grass_icon.png",
        width: 40,
        height: 40,
      },
      {
        id: 8,
        latitude: 37.1588,
        longitude: 118.1277,
        iconPath: "/images/grass_icon.png",
        width: 40,
        height: 40,
      }
    ],
    // 详细信息绑定
    locationInfo: [
      {
        id: 1,
        name: "麻大湖景区",
        desc: "博兴县著名自然景区，以湖泊风光和生态旅游闻名。适合游客休闲观光，感受博兴的自然之美。",
        img: "/images/madahuhu_small.jpg",
        detailPage: "/pages/detail/madahu/madahu"
      },
      {
        id: 2,
        name: "博兴县博物馆",
        desc: "展示博兴历史文化，包括草柳编的发展历程。可设置草柳编专题展区，吸引文化爱好者。",
        img: "/images/bowuguan_small.jpg",
        detailPage: "/pages/detail/bowuguan/bowuguan"
      },
      {
        id: 3,
        name: "兴国寺",
        desc: "历史悠久的佛教寺庙，具有深厚的文化底蕴。可作为文化旅游的一部分，吸引对宗教文化感兴趣的游客",
        img: "/images/xingguosi_small.jpg",
        detailPage: "/pages/detail/xingguosi/xingguosi"
      },
      {
        id: 4,
        name: "打渔张森林公园",
        desc: "以森林景观和休闲活动为主，适合家庭游和户外爱好者。",
        img: "/images/senlingongyuan_small.jpg",
        detailPage: "/pages/detail/senlingongyuan/senlingongyuan"
      },
      {
        id: 5,
        name: "博兴草柳编文化产业园",
        desc: "核心展示区，集中展示草柳编的历史、技艺和产品。提供草柳编制作体验活动，游客可亲手参与编织。",
        img: "/images/wenhuachanyeyuan_small.jpg",
        detailPage: "/pages/detail/wenhuachanyeyuan/wenhuachanyeyuan"
      },
      {
        id: 6,
        name: "草柳编工坊聚集地",
        desc: "博兴县草柳编的主要生产地，聚集了大量手工艺人和工坊。游客可参观工坊，观看草柳编制作过程，并与传承人交流。",
        img: "/images/gongfang_small.jpg",
        detailPage: "/pages/detail/gongfang/gongfang"
      },
      {
        id: 7,
        name: "草柳编非遗传承基地",
        desc: "由政府或企业支持的非遗传承基地，定期举办草柳编技艺培训和文化活动。游客可预约参与草编DIY体验课程。",
        img: "/images/jidi_small.jpg",
        detailPage: "/pages/detail/jidi/jidi"
      },
      {
        id: 8,
        name: "草柳编市集",
        desc: "定期举办的草柳编产品市集，游客可购买手工艺品。市集还可展示草柳编的制作过程，吸引游客互动。",
        img: "/images/shiji_small.jpg",
        detailPage: "/pages/detail/shiji/shiji"
      }
    ],

    showPopup: false,
    currentLocation: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    const that = this;
    wx.getLocation({
      type: 'gcj02',
      success(res) {
        that.setData({
          latitude: res.latitude,
          longitude: res.longitude,
        });
      },
      fail() {
        wx.showToast({
          title: '获取位置失败',
          icon: 'none'
        });
      }
    });
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

  /**
   * 监听marker点击事件
   */
  onMarkerTap(e) {
    const markerId = e.markerId;
    const marker = this.data.markers.find(m => m.id === markerId);
    const location = this.data.locationInfo.find(l => l.id === markerId);
    if (!marker || !location) return;

    // 计算距离
    const current = this.data.latitude && this.data.longitude
      ? { latitude: this.data.latitude, longitude: this.data.longitude }
      : null;

    if (current) {
      const distance = this.getDistance(
        current.latitude, current.longitude,
        marker.latitude, marker.longitude
      );
      location.distance = distance.toFixed(2);
    }

    // 模拟地图平滑移动（插值过渡）
    const steps = 3;
    const stepLat = (marker.latitude - this.data.latitude) / steps;
    const stepLng = (marker.longitude - this.data.longitude) / steps;
    let i = 0;

    const interval = setInterval(() => {
      if (i < steps) {
        this.setData({
          latitude: this.data.latitude + stepLat,
          longitude: this.data.longitude + stepLng
        });
        i++;
      } else {
        clearInterval(interval);

        const updatedMarkers = this.data.markers.map(m => {
          const isSelected = m.id === markerId;
          const locationItem = this.data.locationInfo.find(loc => loc.id === m.id);
        
          return Object.assign({}, m, {});
          
        });
        
        // 设置最终数据 & 弹窗延迟出现
        this.setData({
          latitude: marker.latitude,
          longitude: marker.longitude,
          markers: updatedMarkers,
          currentLocation: location
        });

        setTimeout(() => {
          this.setData({
            showPopup: true
          }, this.showPopupAnimation);
        }, 200); // 延迟弹窗出现，更自然
      }
    }, 60);
  },
  
  getDistance(lat1, lon1, lat2, lon2) {
    const rad = deg => deg * Math.PI / 180;
    const R = 6371;
    const dLat = rad(lat2 - lat1);
    const dLon = rad(lon2 - lon1);
    const a = Math.sin(dLat / 2) ** 2 +
              Math.cos(rad(lat1)) * Math.cos(rad(lat2)) * Math.sin(dLon / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  },
  

  /**
   * 弹窗动画
   */
  showPopupAnimation() {
    const animation = wx.createAnimation({
      duration: 300,
      timingFunction: 'ease-out'
    });
    animation.translateY(0).step();
    this.setData({
      popupAnimation: animation.export()
    });
  },

  /**
   * 监听弹窗关闭事件
   */
  closePopup() {
    const animation = wx.createAnimation({
      duration: 300,
      timingFunction: 'ease-in'
    });
    animation.translateY(500).step();
    this.setData({
      popupAnimation: animation.export()
    });
    setTimeout(() => {
      this.setData({
        showPopup: false,
        currentLocation: null
      });
    }, 300);
  },
  
  /**
   * 监听弹窗跳转事件
   */
  goToDetail() {
    const page = this.data.currentLocation.detailPage;
    wx.navigateTo({
      url: page
    });
  },
  
})