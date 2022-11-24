import React, {useEffect} from "react"
import {shallowEqual, useDispatch, useSelector} from "react-redux";

import {HomeWrapper} from "./style"
import Banner from "@/view/home/c-cpns/banner/bannner";
import {fetchHomeDataAction} from "@/store/modules/home";
import Section from "@/view/home/c-cpns/section-v1/Section";
import SectionHeader from "@/components/section-header/SectionHeader";
import SectionRooms from "@/components/section-rooms/SectionRooms";
import SectionTabs from "@/components/section-tabs/SectionTabs";

const Home: React.FC = () => {
  /* 从redux中获取数据 */
  const {goodPriceInfo,highScoreInfo,discountInfo} = useSelector((state:any)=>({
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo,
    discountInfo: state.home.discountInfo
  }),shallowEqual)

  /* 数据处理 */
  const tabNames = discountInfo.dest_address?.map((v:any) => v.name)

  /* 派发异步事件 */
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchHomeDataAction())
  },[dispatch])

  return <HomeWrapper>
    <Banner />
    <div className={"content"}>
      {/* 折扣数据 */}
      <div className={"discount"}>
        <SectionHeader title={discountInfo.title} subtitle={discountInfo.subtitle} />
        <SectionTabs tabNames={tabNames} />
        <SectionRooms roomList={discountInfo.dest_list?.["成都"]} itemWidth={"33.3%"}/>
      </div>

      <Section infoData={goodPriceInfo}/>
      <Section infoData={highScoreInfo}/>
    </div>
  </HomeWrapper>;
}
export default Home;