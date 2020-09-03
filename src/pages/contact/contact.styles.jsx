import styled from "styled-components";

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 400px;

  @media (max-width: 800px) {
    margin: 0 30px;
    max-height: 300px;
  }

  @media (max-width: 450px) {
    margin: 0 30px;
    max-height: 300px;
    align-items: unset;
    justify-content: unset;
  }
`;

export const Services = styled.div`
  display: flex;
  font-weight: bold;
  font-size: 40px;

  @media (max-width: 450px) {
    font-size: 30px;
  }
`;

export const Author = styled.div`
  display: flex;
  font-size: 20px;
  margin-top: 40px;
`;
