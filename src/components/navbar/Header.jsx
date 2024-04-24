import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Logo from '../../assets/img/logo2_crop.svg'
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand><Link exact to="/" className="nav-link" activeClassName="active"><img className='mylogo' src={Logo} alt="" /></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink exact to="/" className="nav-link" activeClassName="active">Home</NavLink>
                        <NavLink to="/About" className="nav-link" activeClassName="active">About Us</NavLink>
                        <NavLink to="/playinfo" className="nav-link" activeClassName="active">Players Info</NavLink>
                        <NavLink to="/searchplayers" className="nav-link" activeClassName="active">Search Players</NavLink>
                        <NavLink to="/profile" className="nav-link" activeClassName="active">Profile</NavLink>
                        <NavLink to="/login"><Button className='navbar_btn'>Login</Button></NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;
