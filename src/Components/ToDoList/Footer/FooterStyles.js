import styled from "styled-components";


let StyledFooter = styled.footer`
  width: 100%;
  height: 50px;
  background-color: ${({theme})=>theme == "bright" ? "rgb(207, 238, 237)" : "#222222"};
  transition-duration: .3s;
  position: absolute;
  bottom: 0px;
  display: flex;
  justify-content: center;
  &:before{
    content:'';
    width: 100%;
    height: 20px;
    background-color: aqua;
    position: absolute;
    top: -15px;
    left: 0px;
    background:${({theme})=>theme == "bright" ? "linear-gradient(to top, rgb(207, 238, 237), transparent)" : "linear-gradient(to top, #222222, transparent)"};
  }
  & * {
    fill: white;
    transition-duration: .2s;
  }
  & div:hover * {
    cursor: pointer;
    fill: ${({theme})=>theme == "bright" ? "rgb(72, 163, 228)" : "rgb(246, 55, 55)"};
  }
`

export {
  StyledFooter
}

/*position:sticky;
bottom: 0px;*/
