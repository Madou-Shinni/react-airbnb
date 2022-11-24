import React, {useEffect} from "react"
import {shallowEqual, useDispatch, useSelector} from "react-redux";

import {HomeWrapper} from "./style"
import Banner from "@/view/home/c-cpns/banner/bannner";
import {fetchHomeDataAction} from "@/store/modules/home";
import Section from "@/view/home/c-cpns/section-v1/Section";
import SectionV2 from "@/view/home/c-cpns/section-v2/SectionV2";

const Home: React.FC = () => {
  /* 从redux中获取数据 */
  const {goodPriceInfo,highScoreInfo,discountInfo} = useSelector((state:any)=>({
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo,
    discountInfo: state.home.discountInfo
  }),shallowEqual)

  /* 派发异步事件 */
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchHomeDataAction())
  },[dispatch])

  return <HomeWrapper>
    <Banner />
    <div className={"content"}>
      {/* 折扣数据 */}
      {/*<div className={"discount"}>*/}
      {/*  <SectionHeader title={discountInfo.title} subtitle={discountInfo.subtitle} />*/}
      {/*  <SectionTabs tabNames={tabNames} tabClick={tabClickHandle} />*/}
      {/*  <SectionRooms roomList={discountInfo.dest_list?.[name]} itemWidth={"33.3%"}/>*/}
      {/*</div>*/}
      { Object.keys(discountInfo).length && <SectionV2 infoData={discountInfo} />}

      { Object.keys(discountInfo).length && <Section infoData={goodPriceInfo}/>}
      { Object.keys(discountInfo).length && <Section infoData={highScoreInfo}/>}
    </div>
  </HomeWrapper>;
}
export default Home;