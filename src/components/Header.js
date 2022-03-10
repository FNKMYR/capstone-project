import styled from 'styled-components';

export default function Header() {
  return (
    <StyledHeader>
      <h1>SplitPal</h1>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
`;
