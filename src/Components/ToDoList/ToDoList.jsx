import styled from "styled-components";
//components
import Header from "./Header/Header";
import Inputs from "./Inputs/Inputs";
import List from "./List/List";
import Footer from "./Footer/Footer";


let StyledToDoList = styled.div`
  width: 70%;
  height: 100px;
  background-color: rgb(179, 177, 122);
`

export default function ToDoList(){

  return <StyledToDoList>
            <Header />
            <Inputs />
            <List />
            <Footer />
         </StyledToDoList>

}
