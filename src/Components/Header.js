import React from 'react'
// import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from 'react-bootstrap';


export default function Header() {


    return (

        <Navbar expand="lg" bg="dark" className="fixed-top">
            <Container>
                <Navbar.Brand href="#home" className="navbar-brand">News Reader</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#" className="nav-link li-hover">Read News</Nav.Link>
                        <Nav.Link href="#" className="nav-link li-hover">Trending</Nav.Link>
                        <Nav.Link href="#" className="nav-link li-hover">Category</Nav.Link>
                        <Nav.Link href="#" className="nav-link li-hover">Search News</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>


    )
}
