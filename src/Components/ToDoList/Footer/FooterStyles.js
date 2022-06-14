import styled from "styled-components";


let StyledFooter = styled.footer`
  width: 100%;
  height: 70px;
  background-color: rgb(207, 238, 237);
  position: relative;
  display: flex;
  justify-content: center;
  &:before{
    content:'';
    width: 100%;
    height: 20px;
    background-color: aqua;
    position: absolute;
    top: -20px;
    left: 0px;
    background:linear-gradient(to top, rgb(207, 238, 237), transparent);
  }
  & * {
    fill: white;
    transition-duration: .2s;
  }
  & *:hover {
    cursor: pointer;
    fill: rgb(72, 163, 228);
  }
`

export {
  StyledFooter
}

/*position:sticky;
bottom: 0px;*/
