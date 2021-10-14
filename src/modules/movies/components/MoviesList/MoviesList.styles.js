import styled from 'styled-components';

const Container = styled.ul`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(6, 1fr);
  list-style: none;
  padding: 1rem;
`;

export const MoviesList = {
  Container,
};
