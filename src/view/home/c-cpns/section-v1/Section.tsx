import React from "react"
import {SectionWrapper} from "@/view/home/c-cpns/section-v1/style";
import SectionHeader from "@/components/section-header/SectionHeader";
import SectionRooms from "@/components/section-rooms/SectionRooms";
import SectionFooter from "@/components/section-footer/SectionFooter";

type Props = {
  infoData: {
    title:string
    subtitle:string
    list:[]
  }
}

const Section: React.FC<Props> = (props) => {
  const { infoData } = props

  return <SectionWrapper>
    <SectionHeader title={infoData.title} subtitle={infoData.subtitle}/>
    <SectionRooms roomList={infoData.list} itemWidth={"25%"}/>
    <SectionFooter />
  </SectionWrapper>;
}

export default Section;