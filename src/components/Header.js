import styled from 'styled-components';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { ReactComponent as BackButtonSvg } from '../images/backButton.svg';

export default function Header({ headerText, backButtonVisibility }) {
  return (
    <StyledHeader>
      <ButtonContainer>
        <StyledButton as={Link} to="/" visibility={backButtonVisibility}>
          <BackButtonSvg />
        </StyledButton>
      </ButtonContainer>
      <HeaderContainer>
        <StyledH1>{headerText}</StyledH1>
      </HeaderContainer>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background: ${props => props.theme.color.gradientSecondaryDark};
  height: 7.5rem;
  width: 100%;
  position: relative;
  top: 0;
`;

const HeaderContainer = styled.div`
  height: 100%;
  display: flex;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledButton = styled(Button)`
  visibility: ${props => props.visibility};
  height: 3rem;
  position: absolute;
  top: 0.6rem;
  left: 0.6rem;

  > svg {
    -webkit-filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`;

const StyledH1 = styled.h1`
  color: ${props => props.theme.color.textSecondary};
  margin: auto;
`;
