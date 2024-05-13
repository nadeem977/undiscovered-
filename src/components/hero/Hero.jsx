import React from 'react';
import './Hero.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import hero_img from '../../assets/img/hero.png'
import hero1 from "../../assets/img/hero1.png"
import hero2 from "../../assets/img/hero2.png"
import hero3 from "../../assets/img/hero3.png"
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section>
        <Container>
           <div className='w-full my-3'>
            <img src={hero1} alt="images" className='w-full h-auto'/>
            <div className='imagesgrid'>
                <Link to="/PlearSearch">
                <img src={hero2} alt="images" className='w-full h-auto' /></Link>
                <Link  to="/PlearSearch"><img src={hero3} alt="images" className='w-full h-auto' /></Link>
            </div>
           </div>
        </Container>
    </section>
  )
}

export default Hero