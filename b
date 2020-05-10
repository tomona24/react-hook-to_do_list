
import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import FormArea from "./Form";
import TaskList from "./TaskList";

const UNDO = 0;
const DONE = 1;

function App() {

  const [ tasks, setTasks ] = useState(
    [
      {
        title: "起きる",
        detail: "がんばろう",
        due: "2020/5/8",
        categoly: "Routine",
        importance: 88.8,
        status: UNDO,
      },
      {
        title: "歯を磨く",
        detail: "毎食後",
        due: "2020/5/15",
        categoly: "Routine",
        importance: 52.8,
        status: UNDO,
      },
      {
        title: "寝る",
        detail: "7時間睡眠！",
        due: "2020/5/10",
        categoly: "Routine",
        importance: 20.8,
        status: UNDO,
      },
      {
        title: "ご飯食べる",
        detail: "一汁三菜",
        due: "2020/5/10",
        categoly: "Routine",
        importance: 20.8,
        status: DONE,
      },
    ]
  )

  return (
    <Div>
      <FormArea />
      <TaskList tasks={tasks}/>      
    </Div>
  );
}

const DivFlex = styled.div`
  display: flex;
`;

const DivFlexColumn = styled(DivFlex)`
  flex-direction: column;
  padding: 8px 4px;
`;

const Card = styled(DivFlexColumn)`
  border: 1px solid #ddd;
  width: 300px;
  margin: 8px auto;
`;

const Div = styled.div`
  margin: 8px auto;
`;

export default App;
