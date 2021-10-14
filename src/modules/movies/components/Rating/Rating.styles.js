import styled from 'styled-components';

const Container = styled.ul`
  list-style: none;

  button {
    background: none;
    border: 0;
    cursor: pointer;

    span {
      color: white;
      font-size: 1rem;
      transition: color 0.2s;
    }

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
