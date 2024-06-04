export const NAVIGATIONS = {
  Tab: {
    main: "mainTab",
    cart: "cart",
    ordersHistory: "orders/orderHistory",
    profile: "profileTab",
  },

  Main: {
		HomeStack: {
			root: "mainStack",
      home: "home",
      homeSearch: "home/search",
    },
    OrdersStack: {
			root: "ordersStack",
      createOrder: "orders/create",
      orderDetail: "orders/detail",
    },
  },

  Profile: {
    myProfile: "profile/myProfile",
    AuthStack: {
			root: "auth",
      login: "auth/login",
      register: "auth/register",
      refresh: "auth/refreshPassword",
    },
  },
}
