// pages/shop/components/flash-sale-bar/flash-sale-bar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    hour:"00",
    minute:"00",
    second:"00",
    millisecond:"00",
    list: []
  },

  lifetimes: {
    attached() {
      let finishTime = new Date("2020-4-13 23:59:59").getTime()
      let nowTime = new Date().getTime()
      let time = finishTime - nowTime
      console.log(time)
      let hour = Math.floor(time / (3600 * 1000))
      time = time % (3600 * 1000)
      let minute = Math.floor(time / (60 * 1000))
      time = time % (60 * 1000)
      let second = Math.floor(time / 1000)
      let millisecond = Math.floor((time % 1000) / 10)
      console.log(millisecond)
      let isFinish = false
      const id = setInterval(()=> {
        millisecond -= 1000
        if (millisecond < 0) {
          millisecond += 100
          if (--second < 0) {
            second += 60
            if (--minute < 0) {
              minute += 60
              if (--hour < 0) {
                isFinish = true
              }
            }
          }
        }
        if (isFinish) {
          this.setData({
            hour: "00",
            minute: "00",
            second: "00",
            millisecond: "00"
          })
          clearInterval(id)
        } else {
          this.setData({
            hour: (hour < 10 ? "0" + hour : hour),
            minute: (minute < 10 ? "0" + minute : minute),
            second: (second < 10 ? "0" + second : second),
            millisecond: "00"
          })
        }
      }, 1000)
      let list = []

      for (let i = 0; i < 10; i++) {
        list.push({
          id: 12580
        })
      }
      this.setData({
        list
      })
    }

  },

  /**
   * 组件的方法列表
   */
  methods: {
    
  }
})
