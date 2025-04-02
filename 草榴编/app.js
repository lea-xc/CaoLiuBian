// app.js
App({
    onLaunch: function () {
      // 展示本地存储能力
      const logs = wx.getStorageSync('logs') || [];
      logs.unshift(Date.now());
      wx.setStorageSync('logs', logs);
  
      // 登录
      this.login();
    },
    globalData: {
      userInfo: null,
      products: [
        {
          id: 0,
          title: "水葱墩子",
          image: "http://127.0.0.1:5000/images/product/水葱墩子2.png",
          description: "取材黄河滩头三年生水葱，经匠人阴干、熏蒸后，以十字绞编法层层盘筑成型。每一圈纬线需保持3.2mm等距收口，方能使墩面承重达200kg不塌陷，暗藏二十四节气编纹于侧壁。",
          scenes: [
            "客厅角落作天然脚凳，赤足触感如踏初生苇草",
            "书房置古籍为矮几，草木清香伴墨韵",
            "户外庭院作花器基座，与藤蔓共生"
          ]
        },
        {
          id: 1,
          title: "汉文坐垫",
          image: "http://127.0.0.1:5000/images/product/汉文坐垫2.png",
          description: "复原汉代合角编技艺，用沂蒙山红柳皮染线，在经纬交织中嵌入篆书“安”字纹。内芯填充48根弹性藤条，需匠人徒手弯折168次达成坐面微凹的人体工学曲面",
          scenes: [
            "茶室榻榻米核心位，久坐不闷汗",
            "飘窗阅读角铺陈，柳条托腰护脊",
            "作为中式餐椅软垫，宴客时暗藏文化彩蛋"
          ]
        },
        {
            id: 2,
            title: "草编椅子",
            image: "http://127.0.0.1:5000/images/product/草编椅子2.png",
            description: "椅架采用泰山野生紫穗槐，经火烤定型成流线椅背。独创空气层编织术，双层灯芯草交错形成透气网，坐面温度比常规藤椅低5℃。",
            scenes: [
              "阳台晨读专座，晨露未晞时感受草木呼吸",
              "搭配原木书桌成办公椅，久坐不粘肤",
              "户外露营时作生态座椅，与山野浑然一体"
            ]
          },
          {
            id: 3,
            title: "草编茶几",
            image: "http://127.0.0.1:5000/images/product/草编茶几2.png",
            description: "传统柳编+碳纤维骨架，承重好，采用博兴自研草木固色技术，色牢度达4-5级。",
            scenes: [
              "客厅中央置茶器，茶水倾洒即渗不留痕",
              "民宿庭院作冰饮台，天然材质抗曝晒",
              "儿童房摆放绘本，圆角设计防磕碰"
            ]
          },
          {
            id: 4,
            title: "蒲草花边",
            image: "http://127.0.0.1:5000/images/product/蒲草花边2.png",
            description: "野生蒲草，经熏蒸固色工艺处理，使用博兴非遗绞股螺旋编法，单件作品需穿插1200+次纬线，可弯曲成直径15-50cm圆弧，适配多种曲面造型",
            scenes: [
              " 新中式窗帘穗头装饰",
              "茶室屏风格栅点缀",
              "婚礼背景墙生态纹样"
            ]
          },
          {
            id: 5,
            title: "钢墩",
            image: "http://127.0.0.1:5000/images/product/钢墩2.png",
            description: "304不锈钢骨架+博兴草编包覆层，防动态冲击，​使用立体绞接编法，柳条与钢构间隙≤1.5mm防尘设计",
            scenes: [
              "美术馆展台基座",
              "LOFT空间工业风坐具",
              "商业空间可移动隔断"
            ]
          },
          {
            id: 6,
            title: "草编包",
            image: "http://127.0.0.1:5000/images/product/草编包2.png",
            description: "芦苇皮+亚麻混编技术",
            scenes: [
              "森系穿搭核心配饰",
              "超市环保购物袋替代",
              "亲子研学手作教具"
            ]
          },
          {
            id: 7,
            title: "草编凳子",
            image: "http://127.0.0.1:5000/images/product/草编凳子2.png",
            description: "选博兴三年生凤尾竹，经180天自然晾晒，取竹青层劈出0.3mm匀薄篾片。老匠人指尖的温度渗入16道手工工序——从人字编承重骨架的经纬咬合，到六角孔坐面的弹性矩阵，每寸曲面都藏着祖辈的力学密码。最后以山茶油浸润竹纹，让时光在藤条间沉淀出琥珀光泽。",
            scenes: [
              "🌿 ​阳台阅读角\n晨光穿过藤条缝隙，在书本上织出斑驳花影，天然竹香与咖啡气息共舞",
              "🛋️ ​客厅混搭术\n北欧极简沙发旁斜放藤椅，粗陶花器与羊毛毯随意搭扶手上，秒变ins博主同款角落",
              "🍵 ​新中式茶空间\n配岩板茶台+汝窑茶具，藤椅弧线应和茶筅划出的水波纹，演绎宋代点茶美学",
            ]
          },
          {
            id: 8,
            title: "凤栖梧",
            image: "http://127.0.0.1:5000/images/product/凤栖梧.png",
            description: "造型取法《宋徽宗瑞鹤图》与博兴三弯柳编绝技，凤凰昂首曲颈呈29°仰角，暗合百鸟朝凤礼制。尾羽七层递进式编织，采用挑三压二六角孔编法，2134根染色蒲草构建空气动力学曲面，静置时亦存展翅欲飞的势能。",
          },
          {
            id: 9,
            title: "经纬流年",
            image: "http://127.0.0.1:5000/images/product/经纬流年.png",
            description: "篮体取天圆地方古制，直径38cm暗合黄道周天度数，金属骨采用鲁班锁榫接环抱工艺，实现360°无焊点闭合。底部九宫承重编法源自博兴渔民船篓技艺，六层加密纬线可承载8kg动态负荷。内置LED柔光模块启动时，流苏化作星宿图谱",
          },
          {
            id: 10,
            title: "藤铃和音",
            image: "http://127.0.0.1:5000/images/product/藤铃和音.png",
            description: "锥形编织体以螺旋上升的几何形态暗合道家“道生一，一生三”的宇宙生成论，柳条的经纬交错构成生生不息的动态平衡。底部铃铛实为“动静相生”的东方美学实践——静默的编织体与跃动的声波形成太极阴阳式的互补结构，使传统器物突破视觉维度，成为可聆听的雕塑。",
          },
          {
            id: 11,
            title: "吧唧包",
            image: "http://127.0.0.1:5000/images/product/吧唧包.png",
            description: "用非欧几里得曲面编织法，在传统八字编基础上植入分形算法，形成可自组织的星云状编织肌理。每平方厘米内置0.5mm荧光纤维，夜间呈现《赛博朋克2077》霓虹管既视感。",
          },
          {
            id: 12,
            title: "青络心墟",
            image: "http://127.0.0.1:5000/images/product/青络心墟.png",
            description: "心形标签构成德勒兹式的情动装置，将《LOVE YOU》文字符码转译为光合作用般的能量交换系统。植物叶片的光泽表面实为情感反射镜，其叶脉分形结构在微观尺度复刻编织花篮的经纬秩序，形成细胞层面的工艺回",
          },
          {
            id: 13,
            title: "熵彩结穹",
            image: "http://127.0.0.1:5000/images/product/熵彩结穹.png",
            description: "命名融合热力学第二定律的“熵”概念与编织工艺的“结”构美学，“穹”既指代帽体的弧形空间，亦隐喻文化基因的拓扑延展。英文译名Chromato-Entropy Crown揭示色彩弥散与秩序重构的量子博弈，暗藏混沌与结构共生的后现代叙事。",
          },
          {
            id: 14,
            title: "鎏光织语",
            image: "http://127.0.0.1:5000/images/product/鎏光织语.png",
            description: "命将藤格纹的秩序感转化为可触摸的视觉韵律，鎏金配件则如散落其间的标点符号，共同构建出流动的材质诗篇。以立体派手法重构新古典主义精神，在材质褶皱间藏匿流动的时间史诗，让每个编织节点都成为法兰西工艺美学的微型纪念碑。",
          },
          {
            id: 15,
            title: "青山入怀",
            image: "http://127.0.0.1:5000/images/product/青山入怀.png",
            description: "采用六角编法的立体成型技术，经纬交错形成0.3mm精度的曲面，展现竹材柔韧性与结构刚性的完美平衡。器物直径约30cm的规整圆周，暗合《周髀算经》“圆出于方”的造物智慧，竹篾弧线精确遵循圆周率π的曲率变化。",
          },
      ]
    },
    login: function () {
      let that = this;
      wx.login({
        success: res => {
          // 发送 res.code 到后台换取 openId, sessionKey, unionId
          if (res.code) {
            // 这里是调用后台API换取用户信息的示例，您需要替换为您的实际API
            wx.request({
              url: 'http://0.0.0.0:8000/login', // 替换为您的登录API
              method: 'POST',
              data: {
                code: res.code
              },
              success: function (response) {
                // 假设返回的数据格式为 { openid: 'xxx', session_key: 'xxx' }
                // 这里需要根据实际返回的数据结构来处理
                that.globalData.userInfo = response.data.userInfo;
                // 可以在这里处理其他登录成功的逻辑
              },
              fail: function (error) {
                // 处理登录失败
                console.error('登录失败:', error);
              }
            });
          } else {
            console.log('登录失败！' + res.errMsg);
          }
        }
      });
    }
  });
  