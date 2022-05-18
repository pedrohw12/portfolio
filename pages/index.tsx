import type { NextPage } from "next";
import { Container } from "../styles/Home";
import Header from "../atomic/molecules/header";
import FirstSection from "../atomic/molecules/first-section";
import Services from "../atomic/molecules/services";

const Home: NextPage = () => {
  return (
    <Container>
      <Header />
      <FirstSection />
      <Services />
    </Container>
  );
};

export default Home;
