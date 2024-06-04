import myApi from "@lib/axios"

export const getAllRestaurantsRequest = async ({ params, cancelToken }) => {
  const queryParams = params
    ? {
        page: params.pageIndex,
        limit: params.limit,
      }
    : {}
  const response = await myApi.get(`/api/restaurants`, {
    params: queryParams,
    cancelToken: cancelToken ? cancelToken : undefined,
  })
  return response.data
}

export const getAllPopularRestaurantsRequest = async () => {
  const response = await myApi.get(`/api/restaurants/popular`)
  return response.data
}

export const searchRestaurants = async ({ searchParams, cancelToken }) => {
  const queryParams = searchParams
    ? {
        q: searchParams.q,
      }
    : {}
  const response = await myApi.get(`/api/restaurants`, {
    params: queryParams,
    cancelToken: cancelToken ? cancelToken : undefined,
  })
  return response.data
}

export const getStatisctics = async ({ cancelToken }) => {
  const response = await myApi.get(`/api/restaurants/statistics`, {
    cancelToken: cancelToken ? cancelToken : undefined,
  })
  return response.data
}
