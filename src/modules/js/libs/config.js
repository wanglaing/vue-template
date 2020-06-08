export default {
  m_JSName: '花样年会员系统',
  // m_JSNumber:'XunZLGZQWRUser',
  /**
   * @description 配置显示在浏览器标签的title
   */
  title: '花漾锦江',
  /**
   * @description token在Cookie中存储的天数，默认1天
   */
  cookieExpires: 7,
  /**
  * @description 静态资源请求域名
  */
  staticUrl: 'http://hyjj.1uhouse.com/',
  /**
  * @description api请求基础路径
  */
  baseUrl: {
    dev: 'http://hyjj.1uhouse.com/',
    pro: 'http://hyjj.1uhouse.com/'
  },
  m_opid: 0,
  /**
   * @description 默认打开的首页的路由name值，默认为home
   */
  homeName: 'home',
  /**
   * @description 不需要加载中提示的接口名
   */
  NoLoding: ['GetFXConfig', 'DJAdd', 'VerificationCode', 'GetSysUser']
}
