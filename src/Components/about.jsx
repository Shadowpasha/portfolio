import React from 'react';
import ReactDOM from 'react-dom';
import styled, { isStyledComponent } from 'styled-components'
import { useMediaQuery } from 'react-responsive';
import { devicesizes } from './Parts/responsive';

import aboutmejpg from "../assets/Aboutme.jpg"
import Gameicon from "../assets/Gameicon.png"
import Webicon from "../assets/Webicon.png"
import Roboticon from "../assets/Roboticon.png"


const Aboutcontainer = styled.div`
width: 100%;
height: 100vh;
background: url(${aboutmejpg}) no-repeat;
background-size: cover;


@media screen and (max-height: 650px) {
    height: 110vh;
}

@media screen and (max-height: 570px) {
    height: 130vh;
}

@media screen and (max-height: 464px) {
    height: 150vh;
}

@media screen and (max-width: ${devicesizes.mobile}px){
    height: 220vh;
}

@media screen and  (max-height: 650px) and (max-width: ${devicesizes.mobile}px) and (min-width: 467px) {
    height: 280vh;
}

@media screen and (max-height: 705px) and (max-width:500px) {
    height: 300vh;
}

`;

const Overlay = styled.div`
width: 100%;
height: 100%;
background: linear-gradient(#9135a1b5,#81457e3a);
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const Middlepart = styled.div`
width: 983px;
height: 80%;
border: transparent;
border-radius: 40px;
background: rgba(255,255,255,1);
display: flex;
flex-direction: row;

@media screen and (max-width: ${devicesizes.tablet}px){
    width:80vw;
    height: 80%;
}

@media screen and (max-width: ${devicesizes.mobile}px){
    flex-direction: column;
    height: 90%;
}

`;

const Cell = styled.div`
height: 707px;
width: 330px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;

@media screen and (max-width: ${devicesizes.tablet}px)  {
    width:28vw;
}

@media screen and (max-width: ${devicesizes.mobile}px){
    width: 100%;
    height: 33%;
    justify-content: center;
}



`;

const Seperator = styled.div`
margin:0;
height: 100%;
width:1px;
border-right: 2px solid rgba(0,0,0,0.2);

@media screen and (max-width:${devicesizes.mobile}px){
    width:100%;
    height: 1px;
    border-bottom: 2px solid rgba(0,0,0,0.2);
}

`;

const Icon = styled.img`
width: 96px;
height: 96px;
margin-top: 40px;
margin-bottom: 20px;

@media screen and (max-width: ${devicesizes.tablet}px) , (max-height: 800px){
    width:72px;
    height:72px;
}

@media screen and (max-width: ${devicesizes.mobile}px){
    margin-top: 10px;
    margin-bottom: 10px;
}

`;

const CellTitle = styled.p`
font-size: 32px;
color: rgba(0,0,0,1);
font-weight: bolder;
text-align:center;
margin:0;


@media screen and (max-width: ${devicesizes.tablet}px) , (max-height: 800px){
    font-size:22px;
}


@media screen and (max-height: 740px) and (max-width:467px) , (max-height: 700px) and (max-width: ${devicesizes.tablet}px){
    font-size:17px;
}



`;

const CellParagraph = styled.p`
height:15%;
font-size: 18px;
color: rgba(0,0,0,1);
text-align:center;
margin:30px 45px 20px 45px;
font-weight: 550;

@media screen and (max-width: ${devicesizes.tablet}px) , (max-height: 800px){
    font-size:15px;
}

@media screen and (max-height: 740px) and (max-width:467px) , (max-height: 700px) and (max-width: ${devicesizes.tablet}px){
    font-size:12px;
}

@media screen and (max-height: 650px) and (max-width: ${devicesizes.tablet}px) {
    height:11%;
}


`;

const Listtitle = styled.p`
font-size: 18px;
font-weight: bolder;
color: #a423bbb5;
margin:0;

@media screen and (max-width: ${devicesizes.tablet}px) , (max-height: 800px){
    font-size:14px;
}

@media screen and (max-height: 740px) and (max-width:467px) , (max-height: 700px) and (max-width: ${devicesizes.tablet}px){
    font-size:12px;
}

`;

const List = styled.p`
height:110px;
font-size: 18px;
color: rgba(0,0,0,1);
text-align:center;
margin:20px 30px 30px 30px;
font-weight: 550;

@media screen and (max-width: ${devicesizes.tablet}px) , (max-height: 800px){
    font-size:13px;
}

@media screen and (max-width: ${devicesizes.mobile}px ) , (max-height: 800px){
    margin:20px 30px 10px 30px;
}

@media screen and  (max-height: 740px) and (max-width:467px)  , (max-height: 700px) and (max-width: ${devicesizes.tablet}px){
    font-size:12px;
}

`;

export function Aboutsection(){
    const ismobile = useMediaQuery({ maxWidth: devicesizes.tablet });
    return(

        <Aboutcontainer id="about">
            <Overlay>
            <Middlepart >
            <Cell >
            <Icon src={Roboticon}/>
            <CellTitle >Robot <br/> Development </CellTitle>
            <CellParagraph >
             Extensive experience with programming robots as well as moderate experience with 3D design and electronics.
            </CellParagraph>
            <Listtitle>Previous Experience With:</Listtitle>
            <List >
                STM, DSPIC, and Arduino <br/>
                Real Time Operating System(RTOS)<br/>
                ROS (Navigation, Moveit, & PCL)<br/>
                Comm. (UART, I2C, SPI, and CAN)<br/>
                Solidworks 3D Design <br/>
                Control Theory (PID & EKF) <br/>
                Image Processing with OpenCV and Machine Learning
            </List>
            </Cell>

             < Seperator/>

            <Cell >
            <Icon src={Gameicon} />
            <CellTitle >Game <br/> Development </CellTitle>
            <CellParagraph >
             Develpoing 2D and 3D Games that link to external Databases/Dashboards using popular game engines including Unity and Godot.
            </CellParagraph>
            <Listtitle >Previous Experience With:</Listtitle>
            <List>
                Unity 2D and 3D games <br/>
                Using Unity Web Requests to Send and recieve HTTP requests <br/>
                Multiplayer using Photon <br/>
                3D Path Planning and AI <br/>
                Games using Godot Engine <br/>
                Linking Embedded systems <br/>
                with Unity 
            </List>
            </Cell>

            < Seperator/>

            <Cell >
            <Icon src={Webicon} />
            <CellTitle >Web <br/> Development </CellTitle>
            <CellParagraph >
             Develpoing Web and Mobile Apps using HTML,CSS, Javascript in addition to Frameworks and libraries.
            </CellParagraph>
            <Listtitle >Previous Experience With:</Listtitle>
            <List>
                HTML,CSS,Javascript <br/>
                Bootstrap, MaterialUI, Bulma <br/>
                React and React Native <br/>
                Flutter <br/>
                Python Flask  <br/>
                MongoDB <br/>
                Firebase <br/>
                Heroku for Hosting <br/>
                .NET Desktop Development
            </List>
            </Cell>
            </Middlepart>
            </Overlay>
        </Aboutcontainer>
    );
}