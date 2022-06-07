import type { NextPage } from "next";
import { Container } from "../styles/Home";
import Header from "../atomic/molecules/header";
import FirstSection from "../atomic/molecules/first-section";
import Services from "../atomic/molecules/services";
import Benefits from "../atomic/molecules/benefits";
import MyWork from "../atomic/molecules/my-work";
import Footer from "../atomic/molecules/footer";

const Home: NextPage = () => {
  return (
    <Container>
      <Header />
      <FirstSection />
      <Services />
      <Benefits />
      {/* <MyWork /> */}
      <Footer />
    </Container>
  );
};

export default Home;
