import styled from 'styled-components';

const Container = styled.div`
  background: url(${props => props.backdrop}) center center / cover no-repeat;
  padding-top: 50vh;
  position: relative;
`;

const Info = styled.div`
  background: white;
  display: flex;
  padding: 2rem 10%;
  text-align: left;
  > div {
    margin-left: 20px;
  }
  img {
    position: relative;
    top: -5rem;
  }
`;

export const MovieDetail = {
  Container,
  Info,
};
