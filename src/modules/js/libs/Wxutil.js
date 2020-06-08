import wx from 'weixin-js-sdk'
import { GetFXConfig, AddClicks } from '../api/api'

let isProduction
process.env.NODE_ENV === 'production' ? isProduction = true : isProduction = false
/**
 *分享
 * @param _this
 * @param shareTitle 标题
 * @param shareUrl 链接
 * @param shareImg 图片
 * @param shareDesc 描述
 */
export const WexinShare = (_this, shareTitle, shareUrl, shareImg, shareDesc) => {
  // eslint-disable-next-line no-console
  return new Promise((resolve, reject) => {
    if (isProduction) {
      GetFXConfig().then(res => {
        let data = res.data
        wx.config({
          debug: false,
          appId: data.appId,
          timestamp: data.timestamp,
          nonceStr: data.nonceStr,
          signature: data.signature,
          jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage']
        })
        var shareData = {
          title: shareTitle,
          desc: shareDesc,
          link: shareUrl,
          imgUrl: shareImg,
          success: function() {
            AddClicks()
            resolve({ res, success: true, masges: '分享成功' })
          },
          cancel: function() {
            // 用户取消分享后执行的回调函数
            // eslint-disable-next-line prefer-promise-reject-errors
            reject({ res, success: true, masges: '分享成功' })
          }
        }
        wx.ready(function() {
          wx.onMenuShareTimeline(shareData)
          wx.onMenuShareAppMessage(shareData)
        })
      }).catch(err => {
        // eslint-disable-next-line prefer-promise-reject-errors
        reject({ err, success: false })
      })
    }
  })
}
export const WexinPay = (wexinPayData) => {
  return new Promise((resolve, reject) => {
    GetFXConfig().then(res => {
      let data = res.data.data
      wx.config({
        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: data.appId, // 必填，公众号的唯一标识
        timestamp: data.timestamp, // 必填，生成签名的时间戳
        nonceStr: data.noncestr, // 必填，生成签名的随机串
        signature: data.signature, // 必填，签名，见附录1
        jsApiList: ['chooseWXPay'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
      })
      var WXPayData = {
        timestamp: wexinPayData.timestamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
        nonceStr: wexinPayData.nonceStr, // 支付签名随机串，不长于 32 位
        package: wexinPayData.packages, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）
        signType: wexinPayData.signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
        paySign: wexinPayData.paySign, // 支付签名
        success: function(res) {
          resolve({ res, success: true, masges: '支付成功' })
        },
        fail: function(res) {
          resolve({ res, success: false, masges: '支付失败' })
        }
      }
      wx.ready(function() {
        wx.chooseWXPay(WXPayData)
      })
    }).catch(res => {
      // eslint-disable-next-line prefer-promise-reject-errors
      reject({ res, success: false, masges: '支付失败' })
    })
  })
}
