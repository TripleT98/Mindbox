import styled from "styled-components";
//components
import Header from "./Header/Header";
import Inputs from "./Inputs/Inputs";
import List from "./List/List";
import Footer from "./Footer/Footer";
//react hooks
import {useState} from "react";
//Context
import Context from "./context";


let initialToDoes = [{
  title: "Do it",
  text: "Just Do it",
  isDone: false,
  id: 0,
},
{
  title: "La la la",
  text: "Sing a song",
  isDone: false,
  id: 1,
},
{
  title: "Pump muscles",
  text: "Dirty deeds done dirt cheap",
  isDone: false,
  id: 2,
}]

let StyledToDoList = styled.div`
  width: 70%;
  height: 100px;
  background-color: rgb(179, 177, 122);
`

export default function ToDoList(){

  let [todoes, addToDo] = useState(initialToDoes);

  function addToDoHandler(todo){
    addToDo((prev)=>([...prev,todo]));
  }

  return <StyledToDoList>
          <Context.Provider value={{
            addToDo: addToDoHandler
          }}>
            <Header />
            <Inputs/>
            <List list={todoes}/>
            <Footer />
          </Context.Provider>
         </StyledToDoList>

}
