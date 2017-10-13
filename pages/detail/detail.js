Page({
  data: {
    caseDate: [
      [
        'http://www.znzkj.com.cn/img/detl_xinyif1.png',
        'http://www.znzkj.com.cn/img/detl_xinyif2.png',
        'http://www.znzkj.com.cn/img/detl_xinyif3.png',
        'http://www.znzkj.com.cn/img/detl_xinyif4.png',
        'http://www.znzkj.com.cn/img/detl_xinyif5.png'
      ],
      [
        'http://www.znzkj.com.cn/img/detl_chaosh1.png',
        'http://www.znzkj.com.cn/img/detl_chaosh2.png',
        'http://www.znzkj.com.cn/img/detl_chaosh3.png',
      ],
      [
        'http://www.znzkj.com.cn/img/detl_haoxs1.png',
        'http://www.znzkj.com.cn/img/detl_haoxs2.png',
        'http://www.znzkj.com.cn/img/detl_haoxs3.png',
        'http://www.znzkj.com.cn/img/detl_haoxs4.png',
      ],
      [
        'http://www.znzkj.com.cn/img/detl_hongj1.png',
        'http://www.znzkj.com.cn/img/detl_hongj2.png',
        'http://www.znzkj.com.cn/img/detl_hongj3.png',
      ],
      [
        'http://www.znzkj.com.cn/img/qijia1.png',
        'http://www.znzkj.com.cn/img/qijia2.png',
        'http://www.znzkj.com.cn/img/qijia3.png',
      ],
      [
        'http://www.znzkj.com.cn/img/zhuangxiu1.png',
        'http://www.znzkj.com.cn/img/zhuangxiu2.png',
      ],
      [
        'http://www.znzkj.com.cn/img/detl_weilai2.png',
        'http://www.znzkj.com.cn/img/detl_weilai1.png',
        'http://www.znzkj.com.cn/img/detl_weilai3.png',
      ],
      [
        'http://www.znzkj.com.cn/img/detl_chye1.png',
        'http://www.znzkj.com.cn/img/detl_chye2.png',
        'http://www.znzkj.com.cn/img/detl_chye3.png',
        'http://www.znzkj.com.cn/img/detl_chye4.png',
      ],
    ],
    imgUrls: [],
    indicatorDots: true,
    vertical: true,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    height: ''
  },
  onLoad() {
    this.setData({
      imgUrls: this.data.caseDate[getApp().caseId - 1]
    })
    wx.getSystemInfo({
      success: res => {
        this.setData({
          height: res.windowHeight + 'px'
        })
      }
    })
  }
})