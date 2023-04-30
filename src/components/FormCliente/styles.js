import styled from "styled-components";

export const ContainerForm = styled.div`
  background: #fff;
  height: 100vh;
  width: auto;
  display: flex;
  flex-direction: column;
  color: #000;
  justify-content: center;
  align-items: center;
`;
export const Main = styled.main`
  height: auto;
  display: flex;
  flex-direction: column;
  color: #000;
  justify-content: start;
  align-items: center;
`;

export const Form = styled.form`

  padding: 19vw;
  display: flex;
  height: 60vh;
  border-radius: 12px;
  width: 30vw;
  background-color: #cfe2ff;
  box-shadow:
  5px 4px 20px 6px rgba(0, 0, 0, 0.1), 5px 6px 20px 5px rgba(0, 0, 0, 0.1);
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  flex-direction: column;
`;

export const Input = styled.input`
  color: #000c;
  background: #ffffff;
  outline: none;
  border-radius: 3px;
  height: 5vh;
  width: 15vw;
  border: none;
  padding: 0.7rem;
  font-weight: 500;
  &:focus {
    border: 1px solid black;
  }
`;

export const Label = styled.label`
  font-weight: bold;
  margin: 0.4rem 0 0.4rem 0;
  align-self: start;
`;

export const Title = styled.h1`
  font-weight: bolder;
  font-size: 2rem;
  align-self: center;
  text-shadow: 2px 2px #cfe2ff;
`;

export const Button = styled.button`
  /* text-transform: uppercase; */
  border-radius: 4px;
  width: 7vw;
  font-weight: 700;
  height: 5vh;
  background: #fff;
  border: 1px solid black;
  color: #000;
  margin-top: 3vh;
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
