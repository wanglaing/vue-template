export default {
  state: {
    /**
        * @description 用户资料Nav菜单
        */
    MemberInfoNav: [
      { Title: '会员姓名', Etitle: 'Member Information', Path: '/user/MemberInfo' },
      { Title: '会员权益', Etitle: 'Member Rights', Path: '/user/MemberRights' },
      { Title: '会员福利', Etitle: 'Membership Benefits', Path: '/user/Membership' }
    ],
    /**
        * @description 积分管理Nav菜单
        */
    IntegralNav: [
      { Title: '积分明细', Etitle: 'Integral detail', Path: '/user/Integral' }
    ],
    /**
        * @description 订单管理Nav菜单
        */
    OrderNav: [
      { Title: '订单管理', Etitle: 'Booking', Path: '/user/Order/Booking' },
      { Title: '待完成订单', Etitle: 'Pending order', Path: '/user/Order/PendingOrder' },
      { Title: '历史订单', Etitle: 'Historcal order', Path: '/user/Order/HistorcalOrder' }
    ]
  },
  mutations: {

  },
  getters: {

  },
  actions: {

  }
}
