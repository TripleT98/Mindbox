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
  height: 100vh;
`

let StyledHr = styled.hr`
    border: none;
    color: rgb(207, 238, 237);
    background-color: rgb(207, 238, 237);
    height: 2px;
    position: relative;
`

export default function ToDoList(){

  let [todoes, addToDo] = useState([]);

  function addToDoHandler(todo){
    if(checkId(todoes,todo.id)){
      return false;
    }
    addToDo((prev)=>([todo,...prev]));
  }

  function removeToDoHandler(id){
    addToDo((prev)=>prev.filter((e,i)=>e.id == id?false:true));
  }

  function finishTask(id){
    addToDo((prev)=>prev.map((e,i)=>{if(e.id == id){e.isDone = true};return e}));
  }

  return <StyledToDoList>
          <Context.Provider value={{
            addToDo: addToDoHandler,
            removeToDo: removeToDoHandler,
            finish: finishTask
          }}>
            <Header />
            <Inputs/>
            <StyledHr/>
            <List list={todoes}/>
            <Footer />
          </Context.Provider>
         </StyledToDoList>

}
