import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'
import emailjs from 'emailjs-com';

import { devicesizes } from './Parts/responsive'

import contactme from "../assets/contactme.jpg"
import facebook from "../assets/facebook.png"
import instagram from "../assets/instagram.png"
import linkedin from "../assets/linkedin.png"
import github from "../assets/github.png"

const ContactContainer = styled.div`
width: 100%;
height: 100vh;
background: url(${contactme});
background-size:cover;
background-position: center ;
`;

const Overlay = styled.form`
width: 100%;
height: 100%;
background: linear-gradient(#9135a1b5,#81457e3a);
display: flex;
flex-direction: column;
align-items: center;
overflow:hidden;
`;

const Footercontainer = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
`;

const ContactTitle = styled.h1`
font-size:8vh;
color: rgba(255,255,255,1);
`;

const Line = styled.div`
height: 2px;
width: 270px;
border-bottom: 1vh solid rgba(255,255,255,1);
margin: 0;

@media screen and (max-width: ${devicesizes.mobile}px){
    width: 150px;
}

`;

const ContactText = styled.h1`
font-size:2.5vh;
color: rgba(255,255,255,1);
margin-top: 3vh;
margin-bottom: 2vh;
`;

const Field = styled.input`
width:463px;
height:5vh;
margin-top: 1vh;
background-color: rgba(255,255,255,0.5);
color: rgba(255,255,255,1);
font-size: 3vh;
font-weight: bold;
text-indent: 30px;
border:transparent;

::placeholder{
    color: rgba(255,255,255,0.7);
}

@media screen and (max-width: ${devicesizes.mobile}px){
    width: 350px;
}

`;

const Message = styled.textarea`
width:407px;
height:20vh;
margin-top: 10px;
background-color: rgba(255,255,255,0.5);
color: rgba(255,255,255,1);
font-size: 3vh;
font-weight: bold;
padding: 30px;
border:transparent;

::placeholder{
    color: rgba(255,255,255,0.7);
}

@media screen and (max-width: ${devicesizes.mobile}px){
    width: 290px;
}

`;

const Submit = styled.button`
color: rgba(255,255,255,1);
width:180px;
height:51px;
background-color: rgba(187,107,217,1) ;
border-radius: 40px;
border: 4px solid rgba(255,255,255,1);
font-size: 3vh;
font-weight: bolder;
text-decoration: none;
box-shadow: 2px 3px 5px rgba(0,0,0,0.3);
font-family: 'Lato';
margin-top: 20px;
margin-left: 290px;
:hover{
    background-color: #a54ac7 ;
    cursor: pointer;
}

:active{
    background-color: #b480c7 ;
}

@media screen and (max-width: ${devicesizes.mobile}px){
    width: 130px;
    margin-left: 230px;
}

`;

const Footer = styled.div`
width: 100%;
height: 7vh;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
background-color: rgba(255,255,255,1);
`;

const SocialIcon = styled.img`
width: 45px;
height: 45px;
margin-left: 10px;
margin-right: 10px;
`;

export function Contactme(){

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_vo8rele', 'template_g6wnnec', e.target, 'user_g6rhB0qWKy389PnyP2cGr')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

          window.location.reload(false);
      }

    return(
            <ContactContainer id="contact">
                <Footercontainer>
                <Overlay onSubmit={sendEmail}>
                    <ContactTitle>Get in Touch</ContactTitle>
                    <Line/>
                    <ContactText>Have a question or want to work together?</ContactText>
                    <Field type="text" placeholder="Name" name="Name"></Field>
                    <Field type="email" placeholder="Email" name="Email"></Field>
                    <Message placeholder="Your Message" name="Message"></Message>
                    <Submit type="submit" value="send">Submit</Submit>
                  
                </Overlay>
                    <Footer>
                        <a href='https://www.facebook.com/anas.amer.3950' target='_blank'><SocialIcon src={facebook} /></a>
                        <a href='https://www.instagram.com/shad0wpasha/?hl=en' target='_blank'><SocialIcon src={instagram} /></a>
                        <a href='https://www.linkedin.com/in/anas-amer-6347421a9/' target='_blank'><SocialIcon src={linkedin} /></a>
                        <a href='https://github.com/Shadowpasha' target='_blank'><SocialIcon src={github} /></a>
                    </Footer>
                </Footercontainer>
            </ContactContainer>
    );
}