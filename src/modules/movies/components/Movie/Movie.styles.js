import styled from 'styled-components';

const Container = styled.div`
  transition: transform 0.2s;
  font-size: 14px;

  &:hover {
    transform: translate(0, 3px);

    h3 {
      color: #d9502c;
    }
  }

  a {
    color: black;
    text-decoration: none;
  }
`;

const Title = styled.h3`
  margin-bottom: 6px;
  transition: color 0.2s;
`;

const Date = styled.span`
  color: #777;
`;

const Poster = styled.img`
  box-shadow: 0 0 35px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
`;

export const Movie = {
  Container,
  Poster,
  Title,
  Date,
};
