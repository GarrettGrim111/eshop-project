import styled from "styled-components";

export const SignInContainer = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  @media (max-width: 450px) {
    width: 250px;
  }
`;

export const TitleContainer = styled.h2`
  margin: 10px 0;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 450px) {
    display: flex;
    flex-direction: column;
    button {
      width: 93px;
      height: 50px;
      margin-top: 10px;
    }
  }
`;
