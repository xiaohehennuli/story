let titleTime, OriginTitile = document.title;
document.addEventListener("visibilitychange", (function () {
  document.hidden ? (document.title = "w(ﾟДﾟ)w 小白别走！再看看嘛！", clearTimeout(titleTime)) : (document.title = "♪(^∇^*)欢迎小白！", titleTime = setTimeout((function () {
    document.title = OriginTitile
  }), 2e3))
}));
