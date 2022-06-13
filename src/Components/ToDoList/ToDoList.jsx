import styled from "styled-components";
//components
import Header from "./Header/Header";
import Inputs from "./Inputs/Inputs";
import List from "./List/List";
import Footer from "./Footer/Footer";
//react hooks
import {useState, useMemo} from "react";
//Context
import Context from "./context";
//utils
import {checkId} from "./../../utils";


let StyledToDoList = styled.div`
  width: 1300px;
  height: 100px;
  background-color: rgb(179, 177, 122);
`

export default function ToDoList(){

  let [todoes, addToDo] = useState([]);

  function addToDoHandler(todo){
    if(checkId(todoes,todo.id)){
      return false;
    }
    addToDo((prev)=>([...prev,todo]));
  }

  function removeToDoHandler(id){
    addToDo((prev)=>prev.filter((e,i)=>e.id == id?false:true));
  }

  return <StyledToDoList>
          <Context.Provider value={{
            addToDo: addToDoHandler,
            removeToDo: removeToDoHandler,
          }}>
            <Header />
            <Inputs/>
            <hr/>
            <List list={todoes}/>
            <Footer />
          </Context.Provider>
         </StyledToDoList>

}
