import { Container, Services, Service } from "./styles";

const ServicesSection: React.FC = () => (
  <Container>
    <Services>
      <Service>
        <h2>Websites and mobile apps</h2>
        <p style={{ opacity: 0.8 }}>
          Desde landing pages e páginas de vendas, à websites completos e
          aplicativos de celular para IOS e Android.
        </p>
      </Service>
      <Service>
        <h2>Analytics</h2>
        <p style={{ opacity: 0.8 }}>
          Implemente as melhores ferramentas para entender o público que acessa
          sua página web, aumente as conversões e crie ofertas baseadas em
          segmentos de público.
        </p>
      </Service>
      <Service>
        <h2>Softwares</h2>
        <p style={{ opacity: 0.8 }}>
          Softwares como dashboards administrativos, sistemas para lojas e
          restaurantes, entre outras funcionalidades.
        </p>
      </Service>
    </Services>
  </Container>
);

export default ServicesSection;
