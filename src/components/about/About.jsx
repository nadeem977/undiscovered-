import React from 'react'
import './About.css'
import Container from 'react-bootstrap/Container';
import About_img from '../../assets/img/basketball.jpg'
import Button from 'react-bootstrap/Button';

const About = () => {
  return (
    <section className='about_section' id='About'>
      <Container>
        <div className="about_main_div">
            <div className="about_img_div">
                <img src={About_img} alt="" />
            </div>
            <div className="about_card_div">
                <h1>About <span>Us</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora aspernatur expedita nisi cumque voluptatibus, non ex, mollitia saepe nesciunt, consequatur ipsum.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora aspernatur expedita nisi cumque voluptatibus, non ex, mollitia saepe nesciunt, consequatur ipsum.</p>
                <Button>Read More</Button>
            </div>
        </div>
      </Container>
    </section>
  )
}

export default About