import styled from '@emotion/styled';

export const Wrap = styled.div`
  display: flex;
  gap: 20px;
`;

export const Button = styled.button`
  height: 30px;
  font-weight: bold;
  text-transform: capitalize;
  border: 1px solid grey;
  border-radius: 4px;
  outline: none;
  transition: transform 250ms linear;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    background-color: teal;
  }
`;
