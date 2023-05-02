import styled from '@emotion/styled';

export const Wrap = styled.div`
  display: flex;
  gap: 20px;
`;

export const Button = styled.button`
  height: 30px;
  font-weight: bold;
  text-transform: capitalize;
  transition: transform 250ms linear;

  &:hover {
    transform: scale(1.1);
  }
`;
