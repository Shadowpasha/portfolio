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

const projects = [
    {id:1, cardtitle:"Robocon", cardtext:"Programmed TRA for UTM Robocon", image: roboconpng},
    {id:2, cardtitle:"Jungle Maze", cardtext:"Tile based Maze Game", image: junglemazepng},
    {id:3, cardtitle:"Number Rush", cardtext:"Pattern Multiplayer online Game", image: numberrush},
    {id:4, cardtitle:"Coin Hunters", cardtext:"A Coin Collecting Game", image: coinhunters},
    {id:5, cardtitle:"Glove Defect", cardtext:"Glove defect Image Processing", image: glovepng},
    {id:6, cardtitle:"ROS Robot", cardtext:"gazebo Robot with PCL Detection", image: rospng}
]




export function Projects(){
    return(

        <Projectcontainer id="projects">
            <Overlay>
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