import styled from 'styled-components';

const Container = styled.div`
  background: url(${props => props.backdrop}) center center / cover no-repeat;
  padding-top: 50vh;
  position: relative;

  @media screen and (max-width: 480px) {
    background-position: top;
    background-repeat: initial;
    background-size: contain;
    padding-top: 210px;
  }

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

  @media screen and (max-width: 480px) {
    display: block;
  }
`;

const Info = styled.div`
  background: white;
  display: flex;
  padding: 2rem 10%;
  text-align: left;

  @media screen and (max-width: 480px) {
    flex-direction: column;
  }

  > div {
  }
  img {
    position: relative;
    top: -5rem;
  }
`;

const Details = styled.div`
  margin-top: -3rem;

  @media screen and (min-width: 480px) {
    margin-left: 20px;
    margin-top: 0;
  }
`;

const Rate = styled.div`
  align-items: center;
  background: black;
  border-radius: 50%;
  border: 3px solid #01b4e4;
  color: white;
  display: flex;
  flex-shrink: 0;
  height: 44px;
  justify-content: center;
  margin-left: 1rem;
  width: 44px;

  @media screen and (max-width: 480px) {
    margin-bottom: 1rem;
    margin-left: 0;
  }
`;

const Date = styled.span`
  color: #777;
`;

export const MovieDetail = {
  Container,
  TitleContainer,
  Details,
  Info,
  Rate,
  Date,
};
