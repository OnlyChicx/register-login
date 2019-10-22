$(function() {


  // 判断数字是否两位，不足补‘0’
  function doubleNum(num) {
    num = num.toString()
    if (num[1] === undefined) {
      num = '0' + num
    }
    return num
  }

  // 自定义剩余时间
  /* function changeTime() {
    let hour = Number($('.timeTitle .hour').text())
    let minute = Number($('.timeTitle .minute').text())
    let second = Number($('.timeTitle .second').text())
    if (second === 0) {
      second = 59
      if (minute === 0) {
        minute = 59
        if (hour === 0) {
          hour = 23
        } else {
          hour -= 1
        }
        $('.timeTitle .hour').text(doubleNum(hour))
      } else {
        minute -= 1
      }
      $('.timeTitle .minute').text(doubleNum(minute))
    } else {
      second -= 1
    }
    $('.timeTitle .second').text(doubleNum(second))
  } */


  // 自动判断距离下一天的时间,以00:00为界限
  function changeTime2() {

    let time = new Date()
    let hour = 24 - time.getHours()
    let minute = 60 - time.getMinutes()
    let second = 60 - time.getSeconds()

    if (second === 60) {
      second = 0
    }
    if (minute === 60) {
      minute = 0
    }
    if (hour === 24) {
      hour = 0
    }
    $('.timeTitle .minute').text(doubleNum(minute))
    $('.timeTitle .hour').text(doubleNum(hour))
    $('.timeTitle .second').text(doubleNum(second))
  }

  // 计时器执行
  setInterval(changeTime2, 1000)

  // 点击跳转分类
  $('.type').click(function() {
    // location.href = ''
  })

  // 点击跳转发现
  $('.find').click(function() {
    // location.href = ''
  })

  // 点击跳转购物车
  $('.shopcar').click(function() {
    // location.href = ''
  })

  // 点击跳转我的
  $('.mine').click(function() {
    // location.href = ''
  })




})