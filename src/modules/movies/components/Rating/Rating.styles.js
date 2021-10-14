import styled from 'styled-components';

const Container = styled.ul`
  list-style: none;

  button {
    background: none;
    border: 0;
    cursor: pointer;

    &:hover {
      span {
        color: #d9502c;
      }
    }
  }

  .checked {
    color: orange;
  }
`;

export const Rating = {
  Container,
};
