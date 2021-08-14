import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'
import { CardComponent } from './Parts/card';
import { Grid } from '@material-ui/core';
import { devicesizes } from './Parts/responsive';

import projectsjpg from "../assets/Projects.jpg"
import roboconpng from "../assets/Robocon.png"
import junglemazepng from "../assets/Jungle Maze Logo.png"
import numberrush from "../assets/Number.png"
import coinhunters from "../assets/Coin hunters.png"
import glovepng from "../assets/glove.png"
import rospng from "../assets/ros.png"
import TRA1 from '../assets/TRA1.jpg'
import TRA2 from '../assets/TRA2.jpg'
import TRA3 from '../assets/TRA3.jpg'
import jungle1 from '../assets/jungle1.png'
import jungle2 from '../assets/jungle2.png'
import jungle3 from '../assets/jungle3.png'
import coin1 from '../assets/coin1.png'
import coin2 from '../assets/coin2.png'
import coin3 from '../assets/coin3.png'
import number1 from '../assets/number1.png'
import number2 from '../assets/number2.png'
import number3 from '../assets/number3.png'
import glove1 from '../assets/glove1.jpg'
import glove2 from '../assets/glove2.jpg'
import glove3 from '../assets/glove4.jpg'
import ros1 from '../assets/ROS1.jpg'
import ros2 from '../assets/ROS2.jpg'
import ros3 from '../assets/ROS3.jpg'

const Projectcontainer = styled.div`
width: 100%;
background: url(${projectsjpg});
background-size: cover;
background-position: center;
`;

const Overlay = styled.div`
width: 100%;
height: 100%;
background: linear-gradient(#9135a1b5,#81457e3a);
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
overflow:hidden;
padding-top:40px;
padding-bottom: 40px;
`;

const ProjectTitle = styled.h1`
font-size:7vh;
color: rgba(255,255,255,1);
margin-top: 10px;
margin-bottom: 15px;
`;

const Line = styled.div`
height: 2px;
width: 300px;
border-bottom: 1vh solid rgba(255,255,255,1);
margin: 0;
margin-bottom:30px;
`;

const projects = [
    {id:1, cardtitle:"Robocon", cardtext:"Programmed TRA for UTM Robocon", image: roboconpng, image1:TRA1,image2:TRA2,image3:TRA3,title:"TRA Programming",sec:"UTM Robocon",text:["During the second year in Robocon, I was responsible for programming the several boards on the arrow shooting robot TRA. I had a lot of fun programming the robot using FreeRTOS as an operating system. I was also in charge of maintaining and upgrading the programming library which I managed to update to using the latest drivers. I also wrote multiple peripheral libraries that allowed us to use multiple sensors. You can visit the official Robocon 2021 website to know more about the role of TR in the game: ", <a href="http://www.robocon2021.com" target="__blank">http://www.robocon2021.com</a> ]},
    {id:2, cardtitle:"Jungle Maze", cardtext:"Tile based Maze Game", image: junglemazepng, image1:jungle1,image2:jungle2,image3:jungle3,title:"Jungle Maze",sec:"Impact Volution",text:"A game based on completing a maze through getting through going through the correct tiles all the way to the other side of the map. The game was made with unity which was then linked to a flask backend. The data was stored in a MongoDB database."},
    {id:3, cardtitle:"Number Rush", cardtext:"Pattern Multiplayer online Game", image: numberrush, image1:number1,image2:number2,image3:number3,title:"Number Rush",sec:"Impact Volution",text:"A game based on clicking the numbers in the corrrect order from 1 to 45. The players have to take turns clicking on the numbers in the correct order. if the players click the numbers in an incorrect order or a player clicks two numbers in a row a fault is added. The game was made with unity which was then linked to a flask backend. The data was stored in a MongoDB database." },
    {id:4, cardtitle:"Coin Hunters", cardtext:"A Coin Collecting Game", image: coinhunters, image1:coin1,image2:coin2,image3:coin3,title:"Coin Hunters",sec:"Impact Volution",text:"A game whose objective is to collect as much coins as possible within the time limit. The coins appear randomly from all directions and the player has to click on the coins in order to collect them. The game was made with unity which was then linked to a flask backend. The data was stored in a MongoDB database." },
    {id:5, cardtitle:"Glove Defect", cardtext:"Glove defect Image Processing", image: glovepng, image1:glove1,image2:glove2,image3:glove3,title:"Glove Defect Detection System",sec:"University Open Virtual Hackathon Using AI Based Machine Vision",text:"This projected was made for the University Open Virtual Hackathon Using AI Based Machine Vision. I trained models using tensorflow to detect several features that might suggest the a glove in the assembly line is defective. In total, three models were trained. One was for detecting any tears/holes in the gloves. The second was for detecting any leaks on a surface beneath the gloves when the gloves are filled with water to check for holes. The third was to detect the glove was the correct size. We ended up as the first runner ups in the hackathon." }, 
    {id:6, cardtitle:"ROS Robot", cardtext:"gazebo Robot with PCL Detection", image: rospng, image1:ros1,image2:ros2,image3:ros3,title:"ROS Mobile Robot Navigation with Robotic Arm",sec:"ROS/Ubuntu ROS Navigation MoveIT",text:"A project that consisted of creating the robot model using urdf and then setup the navigation stack for the robot as well as the move it wizard for controlling the robotic arm. I've also expermiinted with the PCL library"}
]


export function Projects(){
    return(

        <Projectcontainer id="projects">
            <Overlay>
                <ProjectTitle>Projects</ProjectTitle>
                <Line/>
                <Grid container justifyContent='center' alignItems='center' spacing={6} >
                    {projects.map((project) => (
                        <Grid item  key={project.id} lg={4} align="center" >
                            <CardComponent project={project}></CardComponent>      
                        </Grid>
                    ))}
                </Grid>
            </Overlay>
        </Projectcontainer>
    );
}