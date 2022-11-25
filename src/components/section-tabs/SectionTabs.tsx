import React, {useState} from "react"
import { SectionTabsWrapper } from "./style";
import classNames from "classnames";
import ScrollView from "@/base-ui/scroll-view/ScrollView";

interface Props {
  tabNames: []
  tabClick: (i:number,v:any) => void
}

const SectionTabs: React.FC<Props> = (props) => {
  const {tabNames = [], tabClick } = props
  const [currentIndex, setCurrentIndex] = useState(0)

  const itemClickHandle = (i:number,v:any) => {
    setCurrentIndex(i)
    tabClick(i, v);
  }

  return <SectionTabsWrapper>
    <ScrollView >
      {
        tabNames.map((v,i) => (
          <div
            key={i}
            className={classNames("item",{active:i === currentIndex})}
            onClick={e => itemClickHandle(i,v)}
          >
            {v}
          </div>
        ))
      }
    </ScrollView>
  </SectionTabsWrapper>;
}

export default SectionTabs;