import styled from "styled-components";

export const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  /* 水平方向上出现在右边 */
  justify-content: flex-end;
  /* 垂直方向居中 */
  align-items: center;
  
  color: ${props => props.theme.text.color.primary};
  font-size: 14px;
  font-weight: 600;
  
  .btns {
    display: flex;
    
    .btn {
      height: 18px;
      line-height: 18px;
      padding: 12px 15px;
      cursor: pointer;
      border-radius: 22px;
      &:hover {
        background-color: #f5f5f5;
      }
    }
  }
  
  .profile {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 77px;
    height: 42px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 25px;
    background-color: #fff;
    cursor: pointer;
    
    ${props => props.theme.mixin.boxShadow};
  }
`