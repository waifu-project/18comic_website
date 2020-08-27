const Vm = new Vue({
  el: "#app",
  data: {
    appName: "禁漫天堂",
    logoSrc: "https://cdn.jsdelivr.net/gh/waifu-project/18comic/app.png",
    copyRightText: "copyright by 陈大大哦了",
    isScreenhots: false,
    screenshots: [
      {
        pic: "https://cdn.jsdelivr.net/gh/waifu-project/18comic-live/previews/首页.png",
        txt: "首页"
      },
      {
        pic: "https://cdn.jsdelivr.net/gh/waifu-project/18comic-live/previews/主题.png",
        txt: "主题"
      },
      {
        pic: "https://cdn.jsdelivr.net/gh/waifu-project/18comic-live/previews/我的.png",
        txt: "我的"
      },
      {
        pic: "https://cdn.jsdelivr.net/gh/waifu-project/18comic-live/previews/漫画详情.png",
        txt: "详情"
      },
      {
        pic: "https://cdn.jsdelivr.net/gh/waifu-project/18comic-live/previews/阅读器.png",
        txt: "阅读器"
      },
      {
        pic: "https://cdn.jsdelivr.net/gh/waifu-project/18comic-live/previews/分流切换.png",
        txt: "分流切换"
      },
      {
        pic: "https://cdn.jsdelivr.net/gh/waifu-project/18comic-live/previews/搜索.png",
        txt: "搜索"
      },
      {
        pic: "https://cdn.jsdelivr.net/gh/waifu-project/18comic-live/previews/留言区.png",
        txt: "留言区"
      },
      {
        pic: "https://cdn.jsdelivr.net/gh/waifu-project/18comic-live/previews/设置.png",
        txt: "设置"
      }
    ]
  },
  methods: {
    openGithub() {
      window.open("https://github.com/waifu-project/18comic", "_blank")
    },
    openDownloadLink() {
      window.open("https://github.com/waifu-project/18comic/releases", "_blank")
    }
  }
})