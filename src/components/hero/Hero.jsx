import React from 'react';
import './Hero.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import hero_img from '../../assets/img/hero.png'


const Hero = () => {
  return (
    <section className='hero_section'>
        <Container>
            <Row style={{alignItems: "center" }}>
                <Col lg="6" md='6' sm="12">
                    <div className="hero_text_main_div">
                        <h1>Welcome To <br /> <span>Undiscovered Recruitsfinal</span></h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias officiis ad laudantium aliquam ducimus minima quis fugit similique. Pariatur vitae dolore sint sit non repellat magnam atque qui similique.</p>
                    </div>
                </Col>
                <Col lg="6" md='6' sm="12">
                    <div className="hero_img_div">
                        <img src={hero_img} alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Hero