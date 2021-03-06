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
  margin-right: 10px;
  transition: all 0.5s ease;
  &:focus {
    outline: none;
  }
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
  setTheme: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
};

export default OnTheme;
