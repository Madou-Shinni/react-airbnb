import React, {useCallback, useState} from "react"
import { SectionV2Wrapper } from "./style"
import SectionHeader from "@/components/section-header/SectionHeader";
import SectionRooms from "@/components/section-rooms/SectionRooms";
import SectionTabs from "@/components/section-tabs/SectionTabs";
import SectionFooter from "@/components/section-footer/SectionFooter";

type Props = {
  infoData: any
}

const SectionV2: React.FC<Props> = (props) => {
  /* 从props中获取数据 */
  const {infoData} = props

  const initialName = Object.keys(infoData.dest_list)[0]
  const [name, setName] = useState(initialName)
  /* 点击事件处理函数 */
  const tabClickHandle = useCallback((i:number,v:any) => {
    setName(v)
  },[])

  /* 数据处理 */
  const tabNames = infoData.dest_address?.map((v:any) => v.name)

  return <SectionV2Wrapper>
    <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
    <SectionTabs tabNames={tabNames} tabClick={tabClickHandle} />
    <SectionRooms roomList={infoData.dest_list?.[name]} itemWidth={"33.3%"}/>
    <SectionFooter name={name}/>
  </SectionV2Wrapper>;
}

export default SectionV2;