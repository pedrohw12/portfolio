import type { NextPage } from "next";
import { Container } from '../styles/Home';
import Header from "../atomic/molecules/header";
import FirstSection from "../atomic/molecules/first-section";

const Home: NextPage = () => {
  return (
    <Container>
      <Header />
      <FirstSection />
    </Container>
  );
};

export default Home;
