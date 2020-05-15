import React, { useState, useEffect } from "react";
import styled from "styled-components";
import FormArea from "./Form";
import TaskList from "./TaskList";
import Header from "./Header";

const UNDO = 0;
const DONE = 1;

function App() {
  const [tasks, setTasks] = useState([]);

  const addTaskList = (newTask) => {
    const task = Object.assign({}, newTask);
    task.no = tasks.length;
    setTasks(tasks.concat(task));
  };

  // const doneTask = (no) => {
  //   const doneList = tasks.map((data) => {
  //     if (data.no === no) {
  //       return {
  //         ...data,
  //         status: DONE,
  //       };
  //     }
  //     return data;
  //   });
  //   setTasks(doneList);
  // };

  const doneTask = (no) => {
    const doneList = tasks.map((data) => {
      if (data.no === no) {
        data.status = DONE;
      }
      return data;
    });
    setTasks(doneList)
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