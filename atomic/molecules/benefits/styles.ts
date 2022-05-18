import styled from "styled-components";

export const Container = styled.div`
  background-color: #2e2e2b;
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    width: 47%;
    text-align: center;
  }

  button {
    border: none;
    border-radius: 4px;
    height: 60px;
    padding: 10px 20px;
    background-color: #00AA55;
    color: #fff;
    font-size: 22px;
    cursor: pointer;
  }
`;

export const Title = styled.h1`
  font-size: 56px;
  text-align: center;
`;
