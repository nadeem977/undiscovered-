import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Logo from '../../assets/img/logo2_crop.svg'
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/CreateContext';

const Header = () => {

 

    return (


        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand><Link to="/" className="nav-link  " ><img className='mylogo' src={Logo} alt="" /></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink to="/" className="nav-link  " >Home</NavLink>
                        <NavLink to="/About" className="nav-link  " >About Us</NavLink>
                        <NavLink to="/playinfo" className="nav-link  " >Players Info</NavLink>
                        <NavLink to="/searchplayers" className="nav-link  " >Search Players</NavLink>
                        <NavLink to="/profile" className="nav-link  " >Profile</NavLink>
                        <NavLink to="/login"><Button className='navbar_btn'>Login</Button></NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;
