import styled from 'styled-components';

const Container = styled.header`
  align-items: center;
  background: black;
  display: flex;
  justify-content: space-between;
  padding: 1rem;

  img {
    height: auto;
    width: 120px;
  }

  a {
    text-decoration: none;
  }
`;

export const Header = {
  Container,
};
