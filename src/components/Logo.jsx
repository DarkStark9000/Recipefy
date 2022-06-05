import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link to="/">
      <LogoContainer className="stickyLogo">
        Recipefy
      </LogoContainer>
    </Link>
  );
}

const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 2.2rem;
    font-weight: 500;
    background: #5200b7;
    color: #D0FE00;

    font-family: 'Cookie', cursive;
    letter-spacing: 0px;

`;
export default Logo;
