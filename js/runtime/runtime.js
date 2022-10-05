var now = new Date();
function createtime() {
  var grt = new Date("10/04/2022 00:00:00");
  now.setTime(now.getTime() + 250);
  var days = (now - grt) / 1e3 / 60 / 60 / 24,
    dnum = Math.floor(days),
    hours = (now - grt) / 1e3 / 60 / 60 - 24 * dnum,
    hnum = Math.floor(hours);
  1 == String(hnum).length && (hnum = "0" + hnum);
  var minutes = (now - grt) / 1e3 / 60 - 1440 * dnum - 60 * hnum,
    mnum = Math.floor(minutes);
  1 == String(mnum).length && (mnum = "0" + mnum);
  var seconds = (now - grt) / 1e3 - 86400 * dnum - 3600 * hnum - 60 * mnum,
    snum = Math.round(seconds);
  1 == String(snum).length && (snum = "0" + snum);
  let currentTimeHtml = "";
  (currentTimeHtml =
    hnum < 18 && hnum >= 9
      ? `<img class='boardsign' src='https://shields.io/badge/%E5%8D%91%E5%BE%AE%E5%B0%8F%E9%99%88-%E5%9C%A8%E7%BA%BF%E5%AD%A6%E4%B9%A0ing-green?logo=appveyor&style=social' title='距离月入25k也就还差一个大佬带我~'><span class='textTip'> <br> 本站居然运行了 ${dnum} 天</span><span id='runtime'> ${hnum} 小时 ${mnum} 分 ${snum} 秒 </span> <i class='fas fa-heartbeat' style='color:red'></i>`
      : `<img class='boardsign' src='https://shields.io/badge/%E5%8D%91%E5%BE%AE%E5%B0%8F%E9%99%88-%E7%9D%A1%E5%A4%A7%E8%A7%89ing-green?logo=appveyor&style=social' title='下班了就该开开心心的玩耍，嘿嘿~'><span class='textTip'> <br> 本站居然运行了 ${dnum} 天</span><span id='runtime'> ${hnum} 小时 ${mnum} 分 ${snum} 秒 </span> <i class='fas fa-heartbeat' style='color:red'></i>`),
    document.getElementById("workboard") &&
      (document.getElementById("workboard").innerHTML = currentTimeHtml);
}
setInterval(() => {
  createtime();
}, 250);
