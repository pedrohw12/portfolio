import { Container, Title, Subtitle, SectionTextContainer } from "./styles";

const FirstSection: React.FC = () => (
  <Container>
    <SectionTextContainer>
      <Title>
        Eu crio sites inteligentes e<br /> de impacto que funcionam.
      </Title>
      <div style={{ height: 35 }} />
      <Subtitle>
        Nos últimos anos foquei bastante no estudo e desenvolvimento de websites
        e aplicativos de smartphone, adquirindo ampla experiência nos mais
        diversos tipos de websites, voltados para diferentes interesses, nas
        empresas que trabalhei, desde o Brasil até Estados Unidos e Canadá.
      </Subtitle>
      <div style={{ height: 35 }} />
      <p>Veja meu trabalho</p>
    </SectionTextContainer>
  </Container>
);

export default FirstSection;
