
export default {
  state: {
    avatarImgPath: '', // 微信头像
    CodeImg: '', // 会员二维码
    UserName: '代用名（测试）', // 会员名字
    UserTel: '18200008888', // 会员电话号码
    UserType: '钻石会员', // 会员类型
    UserCode: '006425', // 会员邀请码
    UserIntegral: '4888', // 会员总积分
    UserDueTime: '365', // 会员到期时间
    BindingMember: 0, // 微信是否绑定会员
    hasGetInfo: true
  },
  mutations: {
    setAvatar(state, avatarPath) {
      state.avatarImgPath = avatarPath
    },
    setCodeImg(state, name) {
      state.userId = name
    },
    setUserName(state, name) {
      state.UserName = name
    },
    setUserTel(state, name) {
      state.UserTel = name
    },
    setUserType(state, name) {
      state.UserType = name
    },
    setUserCode(state, name) {
      state.UserCode = name
    },
    setHasGetInfo(state, name) {
      state.hasGetInfo = name
    },
    setUserIntegral(state, name) {
      state.UserIntegral = name
    },
    setUserDueTime(state, name) {
      state.UserDueTime = name
    },
    setBindingMember(state, name) {
      state.BindingMember = name
    }
  },
  getters: {

  },
  actions: {
  }
}
