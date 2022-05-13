import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 50px;
`;

export const LogoName = styled.p`
  letter-spacing: 10px;

  span {
    display: inline;
    opacity: 0.8;
  }

  .second-span {
    display: inline;
    opacity: 0.5;
  }
`;
