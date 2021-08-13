import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'
import { Typewriter } from 'react-simple-typewriter'
import { devicesizes } from './Parts/responsive';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-scroll';

import Topsectionpng from '../assets/Topsection.jpg'
import Logo from '../assets/Logo.png'

const Topsection = styled.div`
width: 100%;
height: 100vh;
background: url(${Topsectionpng}) no-repeat;
background-size: cover;
background-position: center;
`;

const BackgroundFilter = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(210,47,237,0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
  
const Navbar = styled.div`
width: 100%;
height: 120px;
background: rgba(255,255,255,1.0);
box-shadow: 0 3px 10px rgba(0,0,0,0.2);
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
margin-bottom: 20vh;

@media screen and (max-width: ${devicesizes.mobile}px){
    justify-content: center;
}

`;

const Logodiv = styled.img`
width: 140px;
height: 140px;
margin-left: 120px;

@media screen and (max-width: ${devicesizes.tablet}px){
    width: 100px;
    height: 100px;
}

@media screen and (max-width: ${devicesizes.mobile}px){
    margin-left: 0px;
    width: 140px;
    height: 140px;
}

`;

const Linknav = styled.a`
color: rgba(0,0,0,1);
font-size: 30px;
margin-right: 70px;
font-weight: bolder;
text-decoration: none;

@media screen and (max-width: ${devicesizes.tablet}px){
    font-size: 24px;
}


`;

const Contact = styled.button`
color: rgba(255,255,255,1);
width:185px;
height:60px;
background-color: rgba(187,107,217,1) ;
border-radius: 30px;
border: transparent;
margin-right: 120px;
font-size: 28px;
font-weight: bolder;
text-decoration: none;
box-shadow: 2px 3px 5px rgba(0,0,0,0.3);
font-family: 'Lato';

:hover{
    background-color: #a54ac7 ;
    cursor: pointer;
}

:active{
    background-color: #b480c7 ;
}

@media screen and (max-width: ${devicesizes.tablet}px){
    font-size: 20px;
    width:155px;
    height:50px;   
}
`;

const TitleText = styled.p`
font-size: 96px;
font-weight: bolder;
color: rgba(255,255,255,1);
margin:0;

@media screen and (max-width: ${devicesizes.tablet}px){
    font-size: 69px;
}

@media screen and (max-width: ${devicesizes.mobile}px){
    font-size: 35px;
}

`;


const View = styled.button`
color: rgba(255,255,255,1);
width:318px;
height:82px;
background-color: rgba(187,107,217,1) ;
border-radius: 50px;
border: 5px solid rgba(255,255,255,1);
font-size: 36px;
font-weight: bolder;
text-decoration: none;
box-shadow: 2px 3px 5px rgba(0,0,0,0.3);
font-family: 'Lato';
margin-top: 30px;
:hover{
    background-color: #a54ac7 ;
    cursor: pointer;
}

:active{
    background-color: #b480c7 ;
}

@media screen and (max-width: ${devicesizes.tablet}px){
    font-size: 24px;
    width: 240px;
    height: 60px;    
    border: 3px solid rgba(255,255,255,1);
}

`;


export function Header(){

    const ismobile = useMediaQuery({ maxWidth: devicesizes.mobile });

    return(
        <Topsection>
        <BackgroundFilter>
        <Navbar>
            <a href='/'><Logodiv src={Logo} alt=""/></a>
            {!ismobile &&
            <div >
           <Link to='about' smooth> <Linknav href=''>About</Linknav> </Link>
           <Link to='projects' smooth> <Linknav href=''>Projects</Linknav> </Link>
           <Link to='contact' smooth>  <Contact>Contact Me</Contact> </Link>
            </div>
            }   
        </Navbar>
        <TitleText>Hello, I’m Anas Amer</TitleText> 
        <TitleText>I'm a 
        <Typewriter
            words={[' Game Developer', ' Robot Enthusiast', ' Web Developer']}
            loop={0}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
          />
         </TitleText>
         <Link to='projects' smooth><View>View My Work</View></Link>
        </BackgroundFilter>
        </Topsection>
    );
}