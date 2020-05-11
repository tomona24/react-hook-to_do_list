import React, { useState } from "react";
import styled from "styled-components";
import FormArea from "./Form";
import TaskList from "./TaskList";
import Header from "./Header";

const UNDO = 0;
const DONE = 1;

function App() {
  const [tasks, setTasks] = useState([
    {
      no: 0,
      title: "起きる",
      detail: "がんばろう",
      due: "2020-5-30",
      category: "Routine",
      importance: 88.8,
      status: UNDO,
    },
    {
      no: 1,
      title: "歯を磨く",
      detail: "毎食後",
      due: "2020-5-15",
      category: "Routine",
      importance: 52.8,
      status: UNDO,
    },
    {
      no: 2,
      title: "寝る",
      detail: "7時間睡眠！",
      due: "2020-5-15",
      category: "Routine",
      importance: 20.8,
      status: UNDO,
    },
    {
      no: 3,
      title: "ご飯食べる",
      detail: "一汁三菜",
      due: "2020-5-10",
      category: "Routine",
      importance: 20.8,
      status: DONE,
    },
  ]);

  const addTaskList = (newTask) => {
    newTask.no = tasks.length;
    setTasks(tasks.concat(newTask));
  };

  const doneTask = (no) => {
    const doneList = tasks.map((data) => {
      if (data.no === no) {
        data.status = DONE;
      }
      return data;
    });
    setTasks(doneList);
  };

  return (
    <Div>
      <Header />
      <FormArea addTaskList={addTaskList} />
      <TaskList tasks={tasks} doneTask={doneTask} />
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
  width: 316px;
`;

export default App;
