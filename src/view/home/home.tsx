import React, {useEffect} from "react"
import {shallowEqual, useDispatch, useSelector} from "react-redux";

import {HomeWrapper} from "./style"
import Banner from "@/view/home/c-cpns/banner/bannner";
import {fetchHomeDataAction} from "@/store/modules/home";
import SectionHeader from "@/components/section-header/SectionHeader";
import RoomItem from "@/components/room-item/RoomItem";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const Home: React.FC = () => {
  /* 从redux中获取数据 */
  const {goodPriceInfo} = useSelector((state:any)=>({
    goodPriceInfo: state.home.goodPriceInfo
  }),shallowEqual)
  /* 派发异步事件 */
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchHomeDataAction())
  },[dispatch])

  return <HomeWrapper>
    <Banner />
    <div className={"content"}>
      <div className={"good-price"}>
        <SectionHeader title={goodPriceInfo.title} subtitle={goodPriceInfo.subtitle}/>
        <ul className={"room-list"}>
          {
            goodPriceInfo.list?.slice(0,8).map((v:any)=>(
              <RoomItem itemData={v} key={v.id} />
            ))
          }
        </ul>
      </div>
    </div>
  </HomeWrapper>;
}
export default Home;