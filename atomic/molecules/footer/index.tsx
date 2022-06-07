import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 60px;
  padding: 20px;
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: #000; */
`;

const Footer: React.FC = () => (
  <Container>
    <p>Copyright | @Pedro Wanderley</p>
  </Container>
);

export default Footer;
