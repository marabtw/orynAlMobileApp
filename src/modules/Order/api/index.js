import myApi from "@lib/axios"

export const getRestaurantRequest = async ({ restaurantId, cancelToken }) => {
  const response = await myApi.get(`/api/restaurants/${restaurantId}`, {
    cancelToken: cancelToken ? cancelToken.token : undefined,
  })
  return response.data
}

export const getRestaurantReviewsRequest = async ({ restaurantId, cancelToken }) => {
  const response = await myApi.get(`/api/restaurants/${restaurantId}/reviews`, {
    cancelToken: cancelToken ? cancelToken : undefined,
  })
  return response.data
}



export const getAllTablesRequest = async ({
  restaurantId,
  params,
  cancelToken,
}) => {
  const quetyParams = params
    ? {
        page: params.pageIndex,
        limit: params.limit,
        q: params.q,
				date: params.date
      }
    : {}
  const response = await myApi.get(`/api/restaurants/${restaurantId}/tables`, {
    params: quetyParams,
    cancelToken: cancelToken ? cancelToken.token : undefined,
  })
  return response.data
}

export const getTableCategoriesRequest = async ({
  restaurantId,
  cancelToken,
}) => {
  const response = await myApi.get(
    `/api/restaurants/${restaurantId}/tables/categories`,
    {
      cancelToken: cancelToken ? cancelToken.token : undefined,
    }
  )
  return response.data
}



export const getRestaurantMenuRequest = async ({
  restaurantId,
  params,
  cancelToken,
}) => {
  const queryParams = params
    ? {
        page: params.pageIndex,
        limit: params.limit,
        q: params.q,
      }
    : {}
  const response = await myApi.get(`/api/restaurants/${restaurantId}/menu`, {
    params: queryParams,
    cancelToken: cancelToken ? cancelToken.token : undefined,
  })
  return response.data
}

export const getMenuCategoriesRequest = async ({
  restaurantId,
  cancelToken,
}) => {
  const response = await myApi.get(
    `/api/restaurants/${restaurantId}/menu/categories`,
    {
      cancelToken: cancelToken ? cancelToken.token : undefined,
    }
  )
  return response.data
}



export const getByUserAllOrders = async ({ params, cancelToken }) => {
  const queryParams = params
    ? {
        page: params.pageIndex,
        limit: params.limit,
      }
    : {}
  const response = await myApi.get("/api/orders", {
    params: queryParams,
    cancelToken: cancelToken ? cancelToken : undefined,
  })
  return response.data
}

export const getOrder = async ({ orderId, cancelToken }) => {
  const response = await myApi.get(`/api/orders/${orderId}`, {
    cancelToken: cancelToken ? cancelToken : undefined,
  })
  return response.data
}

export const createByUserOrder = async (body) => {
  const response = await myApi.post(`/api/orders/create`, body)
  return response.data
}

export const updateOrder = async ({ orderId, body }) => {
  const response = await myApi.put(`/api/orders/${orderId}`, body)
  return response.data
}

export const createReviewRequest = async ({ restaurantId, body }) => {
  const response = await myApi.post(
    `/api/restaurants/${restaurantId}/reviews`,
    body
  )
  return response.data
}