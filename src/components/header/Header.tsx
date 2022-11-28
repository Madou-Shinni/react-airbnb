import React from "react"
import {HeaderWrapper} from "@/components/header/style";
import Left from "@/components/header/c-cpns/left/left";
import Right from "@/components/header/c-cpns/right/right";
import Center from "@/components/header/c-cpns/center/center";
import {shallowEqual, useSelector} from "react-redux";
import classNames from "classnames";

const Header: React.FC = () => {
  const { headerConfig } = useSelector((state:any) => ({
    headerConfig: state.main.headerConfig
  }),shallowEqual)

  const {isFixed} = headerConfig

  return <HeaderWrapper className={classNames({fixed: isFixed})}>
    <div className={"content"}>
      <div className={"top"}>
        <Left />
        <Center />
        <Right />
      </div>
      {/*<div className={"search-area"}>*/}
      {/*</div>*/}
    </div>

    {/*<div className={"cover"}></div>*/}
  </HeaderWrapper>;
}

export default Header;