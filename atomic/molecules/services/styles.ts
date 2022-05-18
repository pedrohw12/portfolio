import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-left: 100px;
  padding-right: 100px;
  background-color: #2e2e2b;
`;

export const Services = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Service = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;

  p {
    text-align: center;
  }
`;
