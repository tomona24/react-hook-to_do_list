import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";

const FormArea = (props) => {
  return (
    <Form>
      <form>
        <FormRow>
          <label for="project">categoly: </label>
          <input type="text" id="project" name="project"></input>
        </FormRow>
        <FormRow>
          <label for="title">Title: </label>
          <input type="text" id="title" name="title"></input>
        </FormRow>
        <FormRow>
          <label for="detail">Detail: </label>
          <input type="text" id="detail" name="detail"></input>
        </FormRow>
        <FormRow>
          <label for="due">Due: </label>
          <input type="date" id="due" name="due"></input>
        </FormRow>
        <FormRow>
          <label for="importance">Importance: </label>
          <div>
            low
            <input type="range" id="importance" name="importance" />
            heigh
          </div>
        </FormRow>
        <FormRow>
          <input type="submit" value="Submit" />
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
