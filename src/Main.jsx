import React from 'react';
import ReactDOM from 'react-dom';
import { Header } from './Components/header';
import { Aboutsection } from './Components/about';
import { Projects } from './Components/projects';
import { Contactme } from './Components/contactme';
import styled from 'styled-components'

const Body = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const Seperator = styled.div`
width:100%;
height: 1px;
border-bottom: 2px solid rgba(255,255,255,1);
`;

function Main() {
  return (
    <Body>
    <Header/>
    <Seperator/>
    <Aboutsection/>
    <Seperator/>
    <Projects/>
    <Seperator/>
    <Contactme/>
    </Body>
  );
}

export default Main;
