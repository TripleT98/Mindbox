import styled,{css, keyframes} from "styled-components";

let StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

let StyledInput = styled.input`
  width: ${({name})=>name == "Title"? "300px":"1000px"};
  height: ${({name})=>name == "Description"?"80px":"30px"};
  border-radius: 30px;
  border: .5px solid rgb(133, 215, 218);
  font-size: ${({name})=>name == "Description"? "25px":"20px"};
  padding: 20px;
  outline: none;
  ${({blur})=>blur && css`
    box-shadow: 0px 0px 5px rgb(133, 215, 218);
  `}
  @media(max-width: 1024px){
    width: ${({name})=>name == "Title"? "300px":"700px"};
    height: ${({name})=>name == "Description"?"70px":"28px"};
  }
  @media(max-width: 900px){
    width: ${({name})=>name == "Title"? "300px":"600px"};
    height: ${({name})=>name == "Description"?"65px":"25px"};
  }
  @media(max-height: 800px){
    font-size: ${({name})=>name == "Description"? "20px":"20px"};
    height: ${({name})=>name == "Description"?"40px":"20px"};
  }
  @media(max-width: 615px){
    width: ${({name})=>name == "Title"? "260px":"530px"};
    height: ${({name})=>name == "Description"?"60px":"20px"};
  }
  @media(max-width: 415px){
    width: ${({name})=>name == "Title"? "250px":"360px"};
    height: ${({name})=>name == "Description"?"55px":"18px"};
  }
  @media(max-width: 415px){
    width: ${({name})=>name == "Title"? "220px":"310px"};
    height: ${({name})=>name == "Description"?"55px":"18px"};
  }
  @media(max-width: 310px){
    width: ${({name})=>name == "Title"? "220px":"310px"};
    height: ${({name})=>name == "Description"?"55px":"18px"};
  }

`

let StyledP = styled.p`
  font-size: 30px;
  text-align: center;
  letter-spacing: 8px;
  @media(max-height: 800px){
    font-size: 25px;
  }
  @media(max-width: 615px){
    font-size: 22px;
  }
  @media(max-width: 415px){
    font-size: 19px;
  }
`

let StyledError = styled.div`
  color: rgb(240, 101, 101);
  height: 20px;
  position: realtive;
  @media(max-height: 800px){
    font-size: 13px;
  }
`

let drop = keyframes`
0%{
  opacity:0;
  top: -20px;
}
99%{
  opacity: 1;
}
100%{
  opacity: 1;
  top: 0px;
}
`

export {
  StyledInput,StyledInputContainer,StyledP,StyledError
}
