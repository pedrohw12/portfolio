import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-left: 100px;
  padding-right: 100px;
  background-color: #2e2e2b;
`;

export const Services = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(350px,1fr));
  grid-gap: 10px;
`

export const Service = styled.div`
  border-radius: 10px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;

  p { 
    text-align: center;
  }
`