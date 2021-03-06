import React, { useState } from "react";
import styled from "styled-components";

const UNDO = 0;
const DONE = 1;

const initialTask = {
  no: null,
  title: "",
  detail: "",
  due: "",
  category: "",
  importance: 50,
  status: UNDO,
};

const FormArea = (props) => {
  const { addTaskList } = props;

  const [newTask, setNewTask] = useState(initialTask);

  const submitTask = () => {
    if (newTask.due === "" || !newTask.importance  === "" || !newTask.title  === "") {
      return;
    }
    addTaskList(newTask);
    setNewTask(initialTask);
  };

  console.log(newTask);

  const handleChange = (event) => {
    const { name, value } = event.target;
    let task = {...newTask}
    task[name] = value;
    setNewTask(task);
  };

  const { category, title, detail, due, importance } = newTask;

  return (
    <Form>
      <form>
        <FormRow>
          <label htmlFor="category">Category : </label>
          <input
            type="text"
            id="category"
            name="category"
            value={category}
            onChange={handleChange}
          ></input>
        </FormRow>
        <FormRow>
          <label htmlFor="title">Title : </label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={handleChange}
          ></input>
        </FormRow>
        <FormRow>
          <label htmlFor="detail">Detail : </label>
          <input
            type="text"
            id="detail"
            name="detail"
            value={detail}
            onChange={handleChange}
          ></input>
        </FormRow>
        <FormRow>
          <label htmlFor="due">Due : </label>
          <input
            type="date"
            id="due"
            name="due"
            value={due}
            onChange={handleChange}
          ></input>
        </FormRow>
        <FormRow>
          <label htmlFor="importance">Importance : </label>
          <Importance>
            low
            <ImportanceVar
              type="range"
              id="importance"
              name="importance"
              value={importance}
              onChange={handleChange}
            />
            heigh
          </Importance>
        </FormRow>
        <FormRow>
          <Submit type="button" value="Submit" onClick={submitTask} />
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

const Importance = styled.div`
  text-align: center;
  font-size: 0.9em;
  margin: 4px 0;
`;
const ImportanceVar = styled.input`
  width: 200px;
  vertical-align: text-top;
`;

const Submit = styled.input`
  padding: 4px 8px;
  width: 100%;
  border: 1px solid #CCC;
  font-size: .8em;
  font-weight: 800;
  color: #444;
`;

export default FormArea;

// const [title, setTitle] = useState();
// const [detail, setDetail] = useState();
// const [due, setDue] = useState();
// const [category, setCategory] = useState();
// const [importance, setImportance] = useState();

// const submitTask = () => {
//   addTaskList({
//     'title': title,
//     'detail': detail,
//     'due': due,
//     'category': category,
//     'importance': importance,
//     status: UNDO,
//     level: null,
//   });
// };

// const handleChange = event => {
//   const { name, value } = event.target;
//   switch (name) {
//     case "title":
//       setTitle(value);
//       break;
//     case "detail":
//       setDetail(value);
//       break;
//     case "due":
//       setDue(value);
//       break;
//     case "category":
//       setCategory(value);
//       break;
//     case "importance":
//       setImportance(value);
//       break;
//     default:
//       return;
//   }
// }
