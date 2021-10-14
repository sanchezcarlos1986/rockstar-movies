import styled from 'styled-components';

const Container = styled.footer`
  align-items: center;
  background: #032541;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 1rem;

  img {
    height: auto;
    width: 80px;
  }

  a {
    text-decoration: none;
  }
`;

export const Footer = {
  Container,
};
