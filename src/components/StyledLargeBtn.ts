import styled from "styled-components";
import { devices } from "../utils/styledUtils";

const StyledLargeBtn = styled.button`
  border: 0;
  border-radius: 5px;
  color: #fff;
  width: 90%;
  height: 50px;
  display: block;
  margin: 0 auto;
  background: #eb6259;
  transition: 0.1s;

  &:hover {
    cursor: pointer;
    transform: translateY(2px);
  }

  &:active {
    transform: translateY(4px);
    background: #2a628f;
  }

  ${devices.md`
    width: 60%;
    position: relative;
    top: 60%;
  `};
`;

export default StyledLargeBtn;
