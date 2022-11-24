import apiRequest from ".."

export const getHomeGoodsPriceData = ()=>{
  return apiRequest.get({
    url: "/home/goodprice"
  })
}

export const getHomeHighScoreData = ()=>{
  return apiRequest.get({
    url: "/home/highscore"
  })
}

export const getHomeDiscountData = ()=>{
  return apiRequest.get({
    url: "/home/discount"
  })
}