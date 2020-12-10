import styled from "styled-components";

const StyledContainer = styled.div`
  background: ${(props) => props.theme.primaryBg};
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  &:before {
    //<--------- used to reference the parent element 'StyledContainer' itself
    content: "NETFLIXY";
    position: fixed;
    top: 10vh;
    left: 10vw;
    font-size: 9vw;
    color: rgba(255, 255, 255, 0.03);
  }
`;

export default StyledContainer;
