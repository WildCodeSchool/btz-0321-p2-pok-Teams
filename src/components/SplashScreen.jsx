import React from 'react';
import styled from 'styled-components';
import { HiMoon } from 'react-icons/hi';
import { CgPokemon } from 'react-icons/cg';
import PropTypes from 'prop-types';
import Header from './Header';

const Toggle = styled.button`
  cursor: pointer;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.titleColor};
  color: ${(props) => props.theme.pageBackground};
  &:focus {
    outline: none;
  }
  transition: all 0.5s ease;
`;

const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.pageBackground};
  transition: all 0.5s ease;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Splash(color) {
  function changeTheme() {
    if (color.theme === 'light') {
      color.setTheme('dark');
    } else {
      color.setTheme('light');
    }
  }

  const icon = color.theme === 'light' ? <HiMoon size={30} /> : <CgPokemon size={40} />;

  return (
    <Page>
      <Header />
      <Container>
        <Toggle onClick={changeTheme}>{icon}</Toggle>
      </Container>
    </Page>
  );
}

Splash.PropTypes = {
  changeTheme: PropTypes.object.isRequired,
  setTheme: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
};

export default Splash;
