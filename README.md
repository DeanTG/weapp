# company weapp
> 公司官网微信小程序


## 技术点
* map组件的controls的position属性只有left和top，把controls定位在右下角的话通过onload的时候getSystemInfo获取windowWidth／windowHeight来setData
* 通过wx.openLocation可以打开内置腾讯地图导航
* 小程序动画：使用css3的动画库[animate.css](https://daneden.github.io/animate.css/)，直接把后缀改了，然后import进来就可以拿来即用
* 路由跳转传参通过getApp()