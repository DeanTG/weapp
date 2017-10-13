Page({
  data: {
    latitude: 32.151892,
    longitude: 118.710759,
    mapWidth: '100%',
    mapHeight: '250',
    scale: 14,
    markers: [{
      iconPath: "../../assets/image/location.png",
      id: 0,
      title: '南京指南针科技有限公司',
      latitude: 32.151892,
      longitude: 118.710759,
      width: 20,
      height: 20
    }]
  },
  onLoad() {
    wx.getSystemInfo({
      success: res => {
        this.setData({
          mapWidth: res.windowWidth,
          controls: [{
              id: 0,
              iconPath: "../../assets/image/small.png",
              position: {
                left: res.windowWidth - 30,
                top: this.data.mapHeight - 30,
                width: 20,
                height: 20
              },
              clickable: true
            },
            {
              id: 1,
              iconPath: "../../assets/image/big.png",
              position: {
                left: res.windowWidth - 30,
                top: this.data.mapHeight - 55,
                width: 20,
                height: 20
              },
              clickable: true
            },
            {
              id: 2,
              iconPath: "../../assets/image/znzlogo.png",
              position: {
                left: 10,
                top: this.data.mapHeight - 30,
                width: 20,
                height: 15
              },
              clickable: true
            },
            {
              id: 3,
              iconPath: "../../assets/image/target.png",
              position: {
                left: 10,
                top: this.data.mapHeight - 55,
                width: 20,
                height: 20
              },
              clickable: true
            }
          ]
        })
      }
    })
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    switch (e.controlId) {
      case 0:
        this.setData({
          scale: --this.data.scale < 5 ? 5 : --this.data.scale
        })
        break;
      case 1:
        this.setData({
          scale: ++this.data.scale > 18 ? 18 : ++this.data.scale
        })
        break;
      case 2:
        wx.openLocation({
          latitude: this.data.latitude,
          longitude: this.data.longitude,
          scale: 14,
          name: '南京指南针科技有限公司',
          address: '东大路2号东大科技园A308'
        })
        break;
      case 3:
        wx.getLocation({
          type: 'gcj02',
          success: res => {
            console.log(res)
            this.setData({
              latitude: res.latitude,
              longitude: res.longitude,
              scale: 14
            })
          }
        })
        break;
      default:
        break;
    }
  },
  phone() {
    wx.makePhoneCall({
      phoneNumber: '18616363466'
    })
  }
})