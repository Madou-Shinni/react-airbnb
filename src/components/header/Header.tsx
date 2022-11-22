import React from "react"
import {HeaderWrapper} from "@/components/header/style";
import Left from "@/components/header/c-cpns/left/left";
import Right from "@/components/header/c-cpns/right/right";
import Center from "@/components/header/c-cpns/center/center";

const Header: React.FC = () => {
  return <HeaderWrapper>
    <Left />
    <Center />
    <Right />
  </HeaderWrapper>;
}

export default Header;