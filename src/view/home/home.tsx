import React, {useEffect} from "react"
import {shallowEqual, useDispatch, useSelector} from "react-redux";

import {HomeWrapper} from "./style"
import Banner from "@/view/home/c-cpns/banner/bannner";
import {fetchHomeDataAction} from "@/store/modules/home";
import SectionHeader from "@/components/section-header/SectionHeader";

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
        <ul>
          {
            goodPriceInfo.list.map((v:any)=>(
              <li key={v.id}>{v.name}</li>
            ))
          }
        </ul>
      </div>
    </div>
  </HomeWrapper>;
}
export default Home;