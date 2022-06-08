//import Aos from 'aos';
import React, { Component } from 'react';
import styled, {css} from 'styled-components';
// import { Button } from './Button';

//import axios from 'axios';
//import Swal from 'sweetalert2';
//import withReactContent from 'sweetalert2-react-content';
import { FiFacebook } from 'react-icons/fi';
import { RiWhatsappLine } from 'react-icons/ri';
import { FaInstagram } from 'react-icons/fa';
import { FaWaze } from 'react-icons/fa';
import {SiGmail} from 'react-icons/si';

const icon = css`
    color: #2596be;
    margin: 0.3rem;
    margin-top: 1rem;
    margin-right: 1.5rem;
    font-size: 2rem;
    @media  screen and (max-width: 768px) {     
        font-size: 1.5rem;        
    }
`;

const GmailIcon = styled(SiGmail)`
   ${icon}
   color: red;
   
`;
const FacebookIcon = styled(FiFacebook)`
   ${icon}
   color: blue;
`;
const WhatsAppIcon = styled(RiWhatsappLine)`
    ${icon}
    color: #4FCE5D;
    
`;
const InstagramIcon = styled(FaInstagram)`
   ${icon}
   background:linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d);
   color: #fff;
   border-radius: 10px;
  
 


`;
const WazeIcon = styled(FaWaze)`
   ${icon}
`;


const Section = styled.section`
    width: 100%;
    height: 100%;
    color: rgb(37, 150, 190);
    padding-top: 3rem;
    font-family: 'Heebo', sans-serif;
   

`;

const Container = styled.div`
    padding: 0rem;
    text-align: center;
    
    h1{
        text-align: center;
        padding-bottom: 2rem;
        font-family: 'Karantina', cursive;
        letter-spacing: 2px;
        font-size: 3rem;
    }
    
`;

const ContactForm = styled.div`

form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
}
label{
    padding: 1rem 0rem;
}
input{
    border: none;
    border-bottom: 1px solid #000d1a;
    height: 2rem;
    padding: 1rem;
    width: 40%;
    font-size: 1rem;

    @media screen and (max-width: 768px){
        width: 60%;
    }
}
textarea{
    font-family: 'Heebo', sans-serif;
    border: none;
    border-bottom: 1px solid #000d1a;
    height: 3rem;
    padding: 1rem;
    width: 40%;
    font-size: 1rem;
    font-weight: bold;

    @media screen and (max-width: 768px){
        width: 60%;
        height: 3.7rem;
    }
}
   
`;
const Send = styled.div`
    button{
        background: rgb(37, 150, 190);
        border: 3px solid #fff;
        min-width: 100px;
        max-width: 250px;
        cursor: pointer;
        text-decoration: none;
        transition: 0.3s;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem ;
        color: #fff;
        font-family: 'Karantina', cursive;
        letter-spacing: 2px;
        font-size: 1.5rem;
        margin-top: 1rem;
        
        &:hover {
            transform: translateY(5px);
        }
        }
`;




export default class Contact extends Component {
constructor(props){
    super(props)
    this.state = {
        name: '',
        phone: '',
        email: '',
        comment: ''
    }
}

   changeHandler = (e) =>{
       this.setState({[e.target.name]: e.target.value})
   }


    // submitHandler = (e) =>{
    //     e.preventDefault();
    //     console.log(this.state);
       
    //     axios.post('/api/form', this.state)
    //     .then(res => {
    //         this.resetForm()
    //         console.log(res);
           
    //         const MySwal = withReactContent(Swal);
    //         MySwal.fire({   
    //             didOpen: () => {
    //               MySwal.clickConfirm()
    //             }
    //           }).then(() => {
    //             return MySwal.fire(<p style={{letterSpacing: '3px', fontSize: '2rem'}}>הפניה נשלחה בהצלחה</p>)
    //           });
            
    //     }).catch(()=>{
    //         console.log('message not sent');  
    //     });
    // }

    resetForm = () =>{
        this.setState({
            name: '',
            phone: '',
            email: '',
            comment: ''
        })
       
    }
    
    render(){
      //const {name, phone, email, comment} = this.state;  
    return (
        
        
        <Section dir="rtl" id="contact" >
            <Container 
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
            >
                <h1>צור איתנו קשר</h1>
                <ContactForm>
                    <form method="POST"  action="https://formsubmit.co/m.avitan053@gmail.com">
                    <input type="hidden" name="_subject" value="פניה חדשה - שמים פתוחים"/>
                   
                    <input type="hidden" name="_captcha" value="false"/>
                        
                        <input 
                            type="text" 
                            name="name" 
                            placeholder="שמך"
                            required
                        />
                        
                        <input 
                            type="number" 
                            name="phone" 
                            placeholder="טלפון"
                            required
                        />
                       
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="אימייל"
                            required
                        />
                        <textarea
                            type="text"
                            name="comment"
                            placeholder="הערות"
                        />
                        
                        <Send>
                        <button type="submit"  value="שלח">
                         שלח
                         </button>
                        </Send>
                        
                             
                    </form>
                    
                </ContactForm>
                <a target="_blank" href="https://waze.com/ul/hsvc5x9vmb" rel="noreferrer">
                    <WazeIcon />
                    </a>
                    <FacebookIcon />
                    <InstagramIcon />
                    
                    <a target="_blank" href="https://wa.me/972549631100?text=%D7%A9%D7%9C%D7%95%D7%9D%2C%20%D7%9E%D7%A2%D7%95%D7%A0%D7%99%D7%99%D7%9F%20%D7%91%D7%A4%D7%A8%D7%98%D7%99%D7%9D%20%D7%A2%D7%9C%20%D7%A1%D7%95%D7%95%D7%99%D7%98%D7%95%D7%AA%20%D7%A9%D7%9E%D7%99%D7%9D%20%D7%A4%D7%AA%D7%95%D7%97%D7%99%D7%9D" rel="noreferrer">
                    <WhatsAppIcon />
                    </a>
                    <a target="_blank" href="mailto:opensky.zefat@gmail.com?subject=פרטים אודות סוויטות שמים פתוחים" rel="noreferrer">
                    <GmailIcon />
                    </a>
            </Container>
        </Section>
    )

  }
}
