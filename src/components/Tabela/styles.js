import styled from "styled-components";

export const ButtonAdd = styled.button`
  border-radius: 4px;
  width: 7vw;
  font-weight: 700;
  height: 5vh;
  background: #cfe2ff;
  border: 1px solid black;
  color: #000;
  margin-top: 1vh;
  cursor: pointer;
  box-shadow: 2px 2px black;
  align-self: center;
  &:hover {
      background-color: #eee;
  }
  &:active {
    box-shadow: none;
  }
`;