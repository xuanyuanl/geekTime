// components/nav-bar/nav-bar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {			// 设置标题
      type: String,
      value: ''
    },
    statusBarColor: {
      type: String,
      value: '#fff'
    },
    navBarColor: {
      type: String,
      value: "#fff"
    },
    titleColor: {
      type: String,
      value: "#000"
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    navBarStyle: "",
    statusBarStyle: "",
    topHeight: 0,
  },


  lifetimes: {
    attached: function () {
      let navBarStyle = `background-color:${this.data.navBarColor};
    height:${wx.db.navBarHeight}px; color:${this.data.titleColor}`
      let statusBarStyle = `background-color:${this.data.statusBarColor};
    height:${wx.db.statusBarHeight}px;`

      let topHeight = wx.db.statusBarHeight + wx.db.navBarHeight
      this.setData({
        navBarStyle, //navBarStyle:navBarStyle
        statusBarStyle,
        topHeight
      })
      wx.setNavigationBarColor({ //设置头部电池时间的字体颜色
        frontColor: '#000000',
        backgroundColor: this.data.navBarColor
      })

    },

  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
