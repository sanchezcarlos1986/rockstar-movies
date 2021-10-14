import styled from 'styled-components';

const Container = styled.div`
  box-shadow: 0 0 35px rgba(0, 0, 0, 0.2);
`;

const TextInput = styled.input`
  background: white;
  border-radius: 20px;
  border: 0;
  padding: 10px;
  transition: background 0.2s;

  &:hover {
    background: whitesmoke;
  }
`;

export const SearchBar = {
  Container,
  TextInput,
};
