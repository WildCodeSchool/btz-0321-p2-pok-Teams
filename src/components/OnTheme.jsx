import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { HiMoon } from 'react-icons/hi';
import { CgPokemon } from 'react-icons/cg';

const Toggle = styled.button`
  cursor: pointer;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.bulleColor};
  color: ${(props) => props.theme.pageBackground};
  &:focus {
    outline: none;
  }

  transition: all 0.5s ease;
`;

function OnTheme({ theme, setTheme }) {
  function changeTheme() {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  const icon = theme === 'light' ? <HiMoon size={30} /> : <CgPokemon size={40} />;

  return <Toggle onClick={changeTheme}>{icon}</Toggle>;
}

OnTheme.propTypes = {
  changeTheme: PropTypes.object.isRequired,
  setTheme: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
};

export default OnTheme;
