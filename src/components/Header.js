import styled from 'styled-components';

export default function Header({ headerText }) {
  return (
    <StyledHeader>
      <h1>{headerText}</h1>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
`;
