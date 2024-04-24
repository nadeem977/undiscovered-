import React from 'react'
import Logo from '../../assets/img/logo2_crop.svg'
import Container from 'react-bootstrap/Container';
import './Footer.css'
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';



const Footer = () => {
    return (
        <section className="footer_section">
            <Container>
                <div className="footer_content_main_div">
                    <div className="footer_logo">
                        <img src={Logo} alt="" />
                    </div>
                    <div className="footer_links">
                        <Nav className="">
                            <NavLink to="/" className="nav-link" activeClassName="active">Home</NavLink>
                            <NavLink to="/about" className="nav-link" activeClassName="active">About Us</NavLink>
                        </Nav>
                    </div>
                    <div className="footer_last_text_main">
                        <div className="footer_last1">
                            <Nav className="">
                                <NavLink to="/about" className="nav-link" activeClassName="active">Privacy Policy</NavLink>
                                <NavLink to="/about" className="nav-link" activeClassName="active">Terms & Condiotions</NavLink>
                            </Nav>
                           <p>2024. All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Footer