import styled from 'styled-components';

const Container = styled.div`
  padding: 1rem;

  h1 {
    color: #032541;
  }
`;

const List = styled.ul`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(6, 1fr);
  list-style: none;
  padding: 1rem 0;
`;

export const MoviesList = {
  Container,
  List,
};
