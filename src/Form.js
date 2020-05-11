import React, { useState } from "react";
import styled from "styled-components";

const UNDO = 0;
const DONE = 1;

const initialTask = {
  title: null,
  detail: null,
  due: null,
  categoly: null,
  importance: null,
  level: null,
  status: UNDO,
};

const FormArea = (props) => {
  const [newTask, setNewTask] = useState(initialTask);
  const { addTaskList } = props;

  const submitTask = () => {
    addTaskList({newTask});
    setNewTask(initialTask);
  };

  const handleChange = event => {
    const { name, value } = event.target;
    let oldTasks = newTask;
    oldTasks[name] = value;
    setNewTask(oldTasks)
  }

  const { categoly, title, detail, due, importance } = newTask;
  return (
    <Form>
      <form>
        <FormRow>
          <label for="categoly">categoly: </label>
          <input
            type="text"
            id="categoly"
            name="categoly"
            value={categoly}
            onChange={handleChange}
          ></input>
        </FormRow>
        <FormRow>
          <label for="title">Title: </label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={handleChange}
          ></input>
        </FormRow>
        <FormRow>
          <label for="detail">Detail: </label>
          <input
            type="text"
            id="detail"
            name="detail"
            value={detail}
            onChange={handleChange}
          ></input>
        </FormRow>
        <FormRow>
          <label for="due">Due: </label>
          <input
            type="date"
            id="due"
            name="due"
            value={due}
            onChange={handleChange}
          ></input>
        </FormRow>
        <FormRow>
          <label for="importance">Importance: </label>
          <div>
            low
            <input
              type="range"
              id="importance"
              name="importance"
              value={importance}
              onChange={handleChange}
            />
            heigh
          </div>
        </FormRow>
        <FormRow>
          <input type="submit" value="Submit" onClick={submitTask} />
        </FormRow>
      </form>
    </Form>
  );
};

const DivFlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 4px;
`;

const Form = styled(DivFlexColumn)`
  border: 1px solid #ddd;
  width: 300px;
  margin: 8px auto;
`;

const FormRow = styled(DivFlexColumn)`
  flex-content: space-between;
`;

export default FormArea;
