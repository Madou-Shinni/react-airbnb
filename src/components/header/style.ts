import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  border-bottom: 1px solid #eee;
  padding: 0 30px;
  background-color: #fff;;
  
  &.fixed {
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
    right: 0;
  }
`