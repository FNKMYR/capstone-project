import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as BackButtonSvg } from '../images/backButton.svg';

export default function Header({ headerText, backButtonVisibility }) {
  const navigate = useNavigate();

  return (
    <StyledHeader>
      <ButtonContainer>
        <StyledBackButton
          onClick={() => navigate(-1)}
          visibility={backButtonVisibility}
        >
          <BackButtonSvg />
        </StyledBackButton>
      </ButtonContainer>
      <HeaderContainer>
        {headerText === 'SplitPal' ? (
          <StyledH1SplitPal>
            <span>Split</span>
            <SpanComplementary>Pal</SpanComplementary>
          </StyledH1SplitPal>
        ) : (
          <StyledH1>{headerText}</StyledH1>
        )}
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
  background: inherit;
`;

const StyledBackButton = styled.a`
  visibility: ${props => props.visibility};
  cursor: pointer;
  position: absolute;
  top: 1.7rem;
  left: 1rem;

  > svg {
    -webkit-filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`;

const StyledH1 = styled.h1`
  color: ${props => props.theme.color.textSecondary};
  margin: auto;
`;

const StyledH1SplitPal = styled(StyledH1)`
  font-size: 4rem;
  color: ${props => props.theme.color.complementaryLight};
  font-weight: 200;
`;

const SpanComplementary = styled.span`
  color: ${props => props.theme.color.textSecondary};
  font-weight: 300;
`;
