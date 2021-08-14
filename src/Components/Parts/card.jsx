import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'
import { devicesizes } from './responsive';
import { useMediaQuery } from 'react-responsive';
import Modal from 'react-modal';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './card.css';



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

:hover{
    cursor: pointer;
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

const Modaldiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

const Close = styled.button`
color: rgba(255,255,255,1);
width:150px;
height:50px;
background-color: #7d7281 ;
border-radius: 50px;
border: 5px solid rgba(255,255,255,1);
font-size: 24px;
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
`;

const ModalTitle = styled.h1`
width:90%;
color: rgba(0,0,0,1);
font-size: 32px;
font-family: 'Lato';
text-align:left;
margin-bottom:0;
`;

const ModalTitlesec = styled.h1`
width:90%;
color: #952e9e;
font-size: 22px;
font-family: 'Lato';
text-align:left;
margin-top: 10px;
`;

const ModalText = styled.p`
color: rgba(0,0,0,1);
font-size: 17px;
font-family: 'Lato';
text-align: left;
width:90%;
`;


export function CardComponent({project}){

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
      }

      function closeModal() {
        setIsOpen(false);
      }

     

    return(

        <div >
        <Card onClick={openModal}>
            <Cardback>
                 <Cardimage><Cardimageint src={project.image} alt="" /></Cardimage>
            </Cardback>
           <CardTitle>{project.cardtitle}</CardTitle>
           <CardParagraph>{project.cardtext}</CardParagraph>

               
       </Card>

        <Modal  className="Modal" overlayClassName="Overlay"  isOpen={modalIsOpen} onRequestClose={closeModal}>
             <Modaldiv>

                <Carousel >
                 <div>
                    <img src={project.image1} />
                 </div>
                 <div>
                    <img src={project.image2} />
                 </div>
                 <div>
                    <img src={project.image3} />
                 </div>
                </Carousel>
                <ModalTitle>{project.title}</ModalTitle>
                <ModalTitlesec>{project.sec}</ModalTitlesec>
                <ModalText> {project.text}   </ModalText>

                <Close onClick={closeModal}>Close</Close>
             </Modaldiv>
        </Modal>  
        </div>

    );
}
