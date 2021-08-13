import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'
import { devicesizes } from './responsive';

const Card = styled.div`
width: 305px;
height: 290px;
background: rgba(255,255,255,1);
display: flex;
flex-direction: column;
align-items: flex-start;
box-shadow: 6px 2px 10px rgba(0,0,0,0.5);

@media screen and (max-width: 1011px){
    width: 250px;
    height: 230px;
}

`;

const Cardback = styled.div`
width: 305px;
height: 185px;
background: rgba(196,196,196,0.3);
border-bottom: 1px solid rgba(0,0,0,0.3);
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

@media screen and (max-width: 1011px){
    width: 250px;
    height: 160px;
}
`;

const Cardimage = styled.div`
width: 240px;
height: 120px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;


@media screen and (max-width: 1011px){
    width: 180px;
    height: 90px;
}
`;

const Cardimageint = styled.img`
    object-fit: contain;
    max-width: 100%;
    max-height: 100%;
    min-width: 50%;
    min-height: 50%;
`;

const CardTitle = styled.h4`
font-size: 24px;
font-family: "Montserrat";
color: rgba(0,0,0,0.7);
margin:0;
margin-left: 20px;
margin-top:20px;

@media screen and (max-width: 1011px){
    font-size: 18px;
    margin-left: 10px;
    margin-top:10px;
}

`;

const CardParagraph = styled.p`
font-size: 14px;
font-family: "Montserrat";
color: rgba(156,81,168,1);
font-weight:800;
margin:0;
margin-left: 20px;
margin-top:20px;

@media screen and (max-width: 1011px){
    font-size: 12px;
    margin-left: 10px;
    margin-top:10px;
}

`;

export function CardComponent({project}){
    return(
        <Card>
            <Cardback>
                 <Cardimage><Cardimageint src={project.image} alt="" /></Cardimage>
            </Cardback>
           <CardTitle>{project.cardtitle}</CardTitle>
           <CardParagraph>{project.cardtext}</CardParagraph>  
       </Card>
    );
}