import React, { useState } from "react";
import styled from "styled-components";

const UNDO = 0;
const DONE = 1;

const Cards = (props) => {
  const { tasks, doneTask } = props;

  const doneList = tasks
    .filter((data) => data.status !== DONE)
    .sort((a, b) => {
      const aDue = a.due.toString();
      const bDue = b.due.toString();
      const aIm = a.importance.toString();
      const bIm = b.importance.toString();
      if (aDue < bDue) {
        return -1;
      }
      if (aDue > bDue) {
        return 1;
      }
      if (aIm > bIm) {
        return -1;
      }
      if (aIm < bIm) {
        return 1;
      }
      return 0;
    });
    
  const cards = doneList.map((data) => {
    return (
      <Card >
        <DivFlex>
          <Category>{data.category}</Category>
          <Due>Due: {data.due}</Due>
        </DivFlex>

        <Title>{data.title}</Title>
        <Detail>{data.detail}</Detail>
      </Card>
    );
  });
  return cards;
};

const TaskList = (props) => {
  const { tasks, doneTask } = props;
  return (
    <DivFlexColumn>
      <Cards tasks={tasks} doneTask={doneTask} />
    </DivFlexColumn>
  );
};

const DivFlex = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Category = styled.div`
  color: #666;
  font-size: 0.8em;
  padding: 4px 8px;
`;

const Due = styled.div`
  font-size: 0.8em;
  color: #751b08;
  padding: 4px 8px;
`;

const Title = styled.div`
  font-wieght: 800;
  font-size: 1.1em;
  background: #ddd;
  padding: 4px 8px;
`;

const Detail = styled.div`
  color: #444;
  font-size: 0.9em;
  padding: 4px 8px;
  height: 50px;
`;

const DivFlexColumn = styled(DivFlex)`
  flex-direction: column;
  padding: 8px 4px;
`;

const Card = styled(DivFlexColumn)`
  border: 1px solid #ddd;
  width: 300px;
  margin: 8px auto;
  padding: 0;
`;

export default TaskList;
