import { Container, Services, Service } from "./styles";

const ServicesSection: React.FC = () => (
  <Container>
    <Services>
      <Service>
        <h2>Websites and mobile apps</h2>
        <p>
          Webbee is built to make your life easier. Variables, build tooling,
          documentation, and reusable components.
        </p>
      </Service>
      <Service>
        <h2>Analytics</h2>
        <p>
          Designed with the latest design trends in mind. Webbee feels modern,
          minimal, and beautiful.
        </p>
      </Service>
      <Service>
        <h2>Softwares</h2>
        <p>
          We have written extensive documentation for components and tools, so you
          never have to reverse engineer anything.
        </p>
      </Service>
    </Services>
  </Container>
);

export default ServicesSection;
