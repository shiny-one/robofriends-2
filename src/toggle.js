import React from 'react'
import { func, string } from 'prop-types';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
// Import a couple of SVG files we'll use in the design: https://www.flaticon.com
import { ReactComponent as MoonIcon } from './icons/moon.svg';
import { ReactComponent as SunIcon } from './icons/sun.svg';

const ToggleContainer = styled.button`
  background: ${({ theme }) => theme.gradient};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  font-size: 0.5rem;
  justify-content: space-between;
  margin: auto;
  overflow: hidden;
  padding: 1rem;
  position: relative;
  width: 6rem;
  height: 3rem;
  top: 1.2rem;

  svg {
    height: 150px;
    width: 1.5rem;
    transition: all 0.3s linear;
    
    // sun icon
    &:first-child {
      transform: ${({ lightTheme }) => lightTheme ? 'translateY(0)' : 'translateY(0.5rem)'};
    }
    
    // moon icon
    &:nth-child(2) {
      transform: ${({ lightTheme }) => lightTheme ? 'translateY(-0.5rem)' : 'translateY(0)'};
    }
  }
`;

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light';
  return (
    <ToggleContainer onClick={toggleTheme} >
      <SunIcon />
      <MoonIcon />
    </ToggleContainer>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}

export default Toggle;