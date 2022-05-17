import type { NextPage } from "next";
import { Container } from "../styles/Home";
import Header from "../atomic/molecules/header";
import FirstSection from "../atomic/molecules/first-section";
import Portfolio from "../atomic/molecules/portfolio";

const Home: NextPage = () => {
  return (
    <Container>
      <Header />
      <FirstSection />
      <Portfolio />
    </Container>
  );
};

export default Home;
