const zcoze_apikey = 'cvkh92qh1u3c25s943l0';
function createConversationRequest() {
    return new Promise((resolve, reject) => {
      wx.request({
        url: 'https://coze.nankai.edu.cn/api/proxy/api/v1/create_conversation',
        method: 'POST',
        header: {
          'Apikey': zcoze_apikey,
          'content-type': 'application/json'
        },
        data: {
          AppKey: zcoze_apikey,
          Inputs: { var: 'variable' },
          UserID: '321'
        },
        success(res) {
          if (res.statusCode === 200) {
            console.log(res.data);
            resolve(res.data.Conversation.AppConversationID);
          } else {
            console.log(`请求失败，状态码：${res.statusCode}`);
            reject(new Error('Failed to create conversation'));
          }
        },
        fail(err) {
          reject(err);
        }
      });
    });
  }
// pages/DIY/DIY.js
Page({
  data: {
    messages: [],    // 消息数组
    inputValue: '',  // 输入内容
    isSending: false, // 发送状态
    conversation_id: ''
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
  onLoad: function() {
    createConversationRequest().then(conversation_id => {
      this.setData({ conversation_id: conversation_id });
      console.log(conversation_id)
      // 这里可以继续进行聊天操作
    }).catch(err => {
      console.error(err);
    });
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

  async sendMessage () {
    const { inputValue, isSending } = this.data
    const content = inputValue.trim()
    const newMessage = {
              role: 'user',
              content: content,
              time: this.formatTime(new Date())
            }
    return new Promise((resolve, reject) => {
      let add_response = '';
      wx.request({
        url: 'https://coze.nankai.edu.cn/api/proxy/api/v1/chat_query',
        method: 'POST',
        header: {
          'Apikey': zcoze_apikey,
          'content-type': 'application/json'
        },
        data: JSON.stringify({
          Query: content,
          AppConversationID: this.conversation_id,
          AppKey: zcoze_apikey,
          ResponseMode: 'streaming',
          UserID: '321'
        }),
        success(res) {
          if (res.statusCode === 200) {
            add_response += res.data.answer;
            console.log(add_response)
            resolve(add_response);
          } else {
            console.log(`请求失败，状态码：${res.statusCode}`);
            reject(new Error('Failed to chat'));
          }
        },
        fail(err) {
          reject(err);
        }
      });
    });
  }

  // 发送消息（整合AI交互）
//   async sendMessage() {
//     const { inputValue, isSending } = this.data
//     const content = inputValue.trim()
//     const api_url = 'https://coze.nankai.edu.cn/api/proxy/api/v1';
//     const access_token = 'cvkh92qh1u3c25s943l0'; // 请替换为你的access_token
//     const bot_id = 'cvfv66jkphnujaq177ng'; // 请替换为你的bot_id
//     const user_id = 'personal-4808'; // 请替换为你的user_id

// // 构建请求的headers和body
// const headers = {
//   'Authorization': access_token,
//   'Content-Type': 'application/json'
// };

// const body = {
//   "APPID": bot_id,
//   "user_id": user_id,
//   "stream": true,
//   "auto_save_history": !true, // 根据要求，当stream为true时，auto_save_history必须为false
//   "additional_messages": this.messages
// };

//     // 添加用户消息
//     const newMessage = {
//       role: 'user',
//       content: content,
//       time: this.formatTime(new Date())
//     }

//     this.setData({
//       messages: [...this.data.messages, newMessage],
//       inputValue: '',
//       isSending: true
//     })

//     wx.request({
//         url: api_url,
//         method: 'POST',
//         header: headers,
//         data: body,
//         success: function(res) {
//           // 请求成功的处理逻辑
//           console.log('请求成功', res.data);
//         },
//         fail: function(err) {
//           // 请求失败的处理逻辑
//           console.error('请求失败', err);
//         }
//     })

// //     try {
// //       // 这里替换为你的真实AI接口
// //       const response = await this.getDIYResponse(content)
      
// //       this.setData({
// //         messages: [
// //           ...this.data.messages,
// //           {
// //             role: 'ai',
// //             content: response,
// //             time: this.formatTime(new Date())
// //           }
// //         ]
// //       })
// //     } catch (error) {
// //       console.error('交互失败:', error)
// //       wx.showToast({ title: '交互异常', icon: 'none' })
// //     }

// //     this.setData({ isSending: false })
// //  },

//   // 模拟DIY互动响应（开发时替换为真实接口）
// //   getDIYResponse(content) {
// //     return new Promise(resolve => {
// //       setTimeout(() => {
// //         resolve(`收到创意：${content}（正在生成设计方案...）`)
// //       }, 800)
// //     })
// //   }
// }
})