import apiRequest from ".."

export const getHomeGoodsPriceData = ()=>{
  return apiRequest.get({
    url: "/home/goodprice"
  })
}