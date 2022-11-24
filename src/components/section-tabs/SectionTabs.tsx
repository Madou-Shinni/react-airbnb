import React, {useState} from "react"
import { SectionTabsWrapper } from "./style";
import classNames from "classnames";

type Props = {
  tabNames: []
}

const SectionTabs: React.FC<Props> = (props) => {
  const {tabNames = [] } = props
  const [currentIndex, setCurrentIndex] = useState(0)

  const itemClickHandle = (i:number) => {
    setCurrentIndex(i)
  }

  return <SectionTabsWrapper>
    {
      tabNames.map((v,i) => (
        <div
          key={i}
          className={classNames("item",{active:i === currentIndex})}
          onClick={e => itemClickHandle(i)}
        >
          {v}
        </div>
      ))
    }
  </SectionTabsWrapper>;
}

export default SectionTabs;