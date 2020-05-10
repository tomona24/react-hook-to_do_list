import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";

const UNDO = 0;
const DONE = 1;

const Cards = (props) => {
  const { tasks } = props;
  console.log(tasks)
  const cards = tasks
    .filter(data => data.status !== DONE)
    .map((data) => {
      return (
        <Card>
          <div>{data.categoly}</div>
          <div>{data.title}</div>
          <div>{data.detail}</div>
          <div>{data.due}</div>
        </Card>
      );
    });
  return cards;
    return(<div></div>)
};

const TaskList = (props) => {
    const {tasks} = props;
  return (
    <DivFlexColumn>
      <Cards tasks={tasks} />
      <Card>
        <div>categoly</div>
        <div>title</div>
        <div>detail</div>
        <div>due</div>
      </Card>
      <Card>
        <div>categoly</div>
        <div>title</div>
        <div>detail</div>
        <div>due</div>
      </Card>
      <Card>
        <div>categoly</div>
        <div>title</div>
        <div>detail</div>
        <div>due</div>
      </Card>
    </DivFlexColumn>
  );
};

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

export default TaskList;
