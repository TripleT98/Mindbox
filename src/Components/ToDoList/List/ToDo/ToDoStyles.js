import styled,{css, keyframes} from "styled-components";

let drop = keyframes`
0%{
  height: 0px;
  opacity: 0;
}
70%{
  height: 70px;
  opacity: 0;
}
100%{
  height: 70px;
  opacity: 1;
}
`

let lift = keyframes`
0%{
  height: 70px;
  opacity: 1;
}
30%{
  opacity: 0;
  height: 70px;
}
100%{
  height: 0px;
}
`

let fade = keyframes`
0%{
  opacity: 0;
}
100%{
  opacity: 1;
}
`
let StyledToDo = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  margin: 10px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 20px;
  font-size: 20px;
  ${({isDone})=>isDone && css`
    color: rgb(185, 185, 185);
    background-color: rgb(219, 219, 219);
    transition-duration: .3s;
  `}
  animation: ${fade} linear forwards .5s;
  @media(max-height: 800px){
    height: 63px;
    border-radius: 13px;
  }
  position: relative;
`

let StyledBlock = styled.div`
  width: ${({width})=>width + "%"};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
`

let StyledMain = styled.div`
  display: flex;
  width: 100%;
`

let StyledDate = styled.div`
  grid-area: date;
  text-align: center;
  ${({isDone})=>isDone && css`
    text-decoration: line-through;
  `}
`

let StyledTitle = styled.div`
  grid-area: title;
  text-align: center;
  width: min-content;
  ${({isDone})=>isDone && css`
    text-decoration: line-through;
  `}
`

let StyledDescription = styled.div`
  width: 100%;
  opacity: 0;
  padding-left: 10px;
  height: 0px;
  ${({isOpen})=>{if(isOpen === true){
    return css`
      animation: ${drop} .3s linear forwards;
    `
  }else if(isOpen === false){
    return css`
      animation: ${lift} .3s linear forwards;
    `}}}
`

/*
isOpen?css`
  animation: ${drop} .3s linear forwards;
`:css`
  animation: ${lift} .3s linear forwards;
`

if(isOpen === true){
  return css`
    animation: ${drop} .3s linear forwards;
  `
}else if(isOpen === false){
  return css`
    animation: ${lift} .3s linear forwards;
  `
}*/

export {
  StyledToDo,StyledTitle,StyledDate,StyledBlock,StyledMain,StyledDescription
}
