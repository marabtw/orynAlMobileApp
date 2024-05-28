export const NAVIGATIONS = {
  Home: "home",
	Profile: "my-profile",
	Cart: "cart",

	Tab: {
		order: "orderTab"
	},
	
  //profile
  Authorization: {
		login: "login",
    register: "register",
    refresh: "refreshPassword",
  },
	
  //management
  Management: {
		owners: "owners",
    createOwner: "owners/create",
    clients: "clients",
    allRestaurants: "all-restaurants",
    createRestaurant: "all-restaurants/create",
		restaurantServices: "all-services",
  },
	
  //restaurants
  Restaurant: {
    myRestaurants: "my-restaurants",
    updateRestaurant: "my-restaurants/update/:restaurantId",
		favoriteRestaurants: "fovirite-restaurants",
  },

  //table
  RestaurantTable: {
    myRestaurantTables: "my-restaurants/:restaurantId/tables-list",
    createTable: "my-restaurants/:restaurantId/tables-list/create",
    updateTable: "my-restaurants/:restaurantId/tables-list/update/:tableId",
    myRestaurantTable: "my-restaurants/:restaurantId/tables-list/:tableId",
  },

  //menu
  RestaurantMenu: {
    myRestaurantMenu: "my-restaurants/:restaurantId/menu-list",
    createFood: "my-restaurants/:restaurantId/menu-list/create",
    updateFood: "my-restaurants/:restaurantId/menu-list/update/:foodId",
    myRestaurantFood: "my-restaurants/:restaurantId/menu-list/:foodId",
  },

  //orders
  Orders: {
    createOrder: "orders/:restaurantId/create",
    ordersHistory: "orders/history",
    restaurantOrdersHistory: "orders/:restaurantId/history",
    orderDetail: "orders/:orderId",
  },
}
