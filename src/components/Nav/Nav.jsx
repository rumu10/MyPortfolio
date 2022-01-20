import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

import './NavBar.scss';

const NavBar = () => {
	return (
		<div className = "nav"> 
			<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
				{/* <Navbar.Brand href="#home" className="rotate linear infinite">
					<img
						src={img}
						width="40"
						height="40"
						className="d-inline-block align-top "
						alt="React Bootstrap logo"
					/>

				</Navbar.Brand> */}
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="mr-auto"></Nav>
					<Nav>
						<Nav.Link href="/home">Home</Nav.Link>
						<Nav.Link href="/about">About</Nav.Link>
						<Nav.Link eventKey={2} href="/resume">
							Resume
						</Nav.Link>
						<Nav.Link eventKey={2} href="/protfolio">
							Porfolio
						</Nav.Link>
						<Nav.Link eventKey={2} href="/contact">
							Contact Me
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	)
}

export default NavBar
