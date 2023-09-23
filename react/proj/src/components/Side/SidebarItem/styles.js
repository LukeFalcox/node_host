import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  aling-items: center;
  background-color: #231f20;
  fontt-size: 20px;
  color: white;
  padding: 10px;
  cursor: pointer;
  border-radius: 10px;
  margin: 0 15px 20px;
  > svg {
    margin: 0 20px;
  }

  &:hover {
    color: #ffbb33;
    background-color: black;
  }
`;
