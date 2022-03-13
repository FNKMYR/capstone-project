import styled from 'styled-components';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function Header({ headerText, backButtonVisibility }) {
  return (
    <StyledHeader>
      <StyledButton as={Link} to="/" visibility={backButtonVisibility}>
        Back
      </StyledButton>
      <h1>{headerText}</h1>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  border: 1px solid black;

  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;

  & > * {
    display: flex;
    justify-content: center;
  }
`;

const StyledButton = styled(Button)`
  visibility: ${props => props.visibility};
  height: 3rem;
  width: 3rem;
  margin: 8px auto auto 8px;

  border: 5px solid black;
  border-radius: 2rem;
  font-size: 0.8rem;
  font-weight: bold;
  text-decoration: none;
  color: black;

  display: flex;
  align-items: center;
  justify-content: center;
`;
