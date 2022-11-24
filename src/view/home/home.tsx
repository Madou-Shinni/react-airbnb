import React, {useEffect} from "react"
import {shallowEqual, useDispatch, useSelector} from "react-redux";

import {HomeWrapper} from "./style"
import Banner from "@/view/home/c-cpns/banner/bannner";
import {fetchHomeDataAction} from "@/store/modules/home";
import Section from "@/view/home/c-cpns/section-v1/Section";

const Home: React.FC = () => {
  /* 从redux中获取数据 */
  const {goodPriceInfo,highScoreInfo} = useSelector((state:any)=>({
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo
  }),shallowEqual)
  /* 派发异步事件 */
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchHomeDataAction())
  },[dispatch])

  return <HomeWrapper>
    <Banner />
    <div className={"content"}>
      <Section infoData={goodPriceInfo}/>
      <Section infoData={highScoreInfo}/>
    </div>
  </HomeWrapper>;
}
export default Home;