import styled from "styled-components";

export const Button = styled.button`
  margin-top: 2em;
  font-size: x-large;
  margin-bottom: 2em;
  border: 1px solid #616a94;
  border-radius: 50px;
  padding: 15px 30px;
  text-decoration: none;
  color: #616a94;
  background-color: #161a31;
  transition: 0.3s;
  cursor: pointer;
  outline: none;
  &:hover {
    color: white;
    background-color: #616a94;
  }
`;

export default Button;
