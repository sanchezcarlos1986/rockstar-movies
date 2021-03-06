import styled from 'styled-components';

const Container = styled.header`
  align-items: center;
  background: #032541;
  display: flex;
  justify-content: space-between;
  min-height: 120px;
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
