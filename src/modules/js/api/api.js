import axios from '../libs/api.request'
import config from '../libs/config'
/**
 * 微信分享接口
 */
export const GetFXConfig = () => {
  const params = {
    Action: 'GetFXConfig',
    Loc: location.href.split('#')[0]
  }
  return axios.request({
    url: '/WXAJAX.ashx',
    params,
    method: 'get'
  })
}
/**
 * 点击量接口
 */
export const AddClicks = () => {
  const params = {
    Action: 'DJAdd',
    Name: config.m_JSName,
    Number: config.m_JSNumber,
    Type: 'friend',
    OpId: config.m_opid
  }
  return axios.request({
    url: '/WXAJAX.ashx',
    params,
    method: 'get'
  })
}
