import apiRequest from "@/api";

export const getEntireRoomList = (offset=0, size=20)=>{
  return apiRequest.get({
    url: "/entire/list",
    params: {
      offset,
      size
    }
  })
}