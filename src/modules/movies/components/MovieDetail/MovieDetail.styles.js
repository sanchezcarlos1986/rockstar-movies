import styled from 'styled-components';

const Container = styled.div`
  background: url(${props => props.backdrop}) center center / cover no-repeat;
  padding-top: 50vh;
  position: relative;

  a {
    background: white;
    border-radius: 10px;
    box-shadow: 5px 5px;
    color: #d9502c;
    left: 1rem;
    padding: 10px;
    position: absolute;
    top: 1rem;
    transition: all 0.2s;

    &:hover {
      background: whitesmoke;
      box-shadow: 5px 5px 0 black;
    }
  }
`;

const TitleContainer = styled.div`
  align-items: center;
  display: flex;
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

const Rate = styled.div`
  background: black;
  border-radius: 50%;
  border: 3px solid #01b4e4;
  color: white;
  margin-left: 1rem;
  padding: 10px;
`;

const Date = styled.span`
  color: #777;
`;

export const MovieDetail = {
  Container,
  TitleContainer,
  Info,
  Rate,
  Date,
};
