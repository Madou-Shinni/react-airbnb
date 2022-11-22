import React, {useEffect, useState} from "react"
import apiRequest from "@/api";

const Home: React.FC = () => {
  // 定义状态
  const [highScore,setHighScore] = useState({})
  // 网络请求
  useEffect(()=>{
    apiRequest.get({url:"/home/highscore"}).then(res=>{
      console.log(res);
      setHighScore(res)
    })
  },[])

  return <div>Home</div>;
}
export default Home;