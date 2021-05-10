import React from 'react';
import { Row, Col, Nav, Navbar } from 'react-bootstrap';
import img from '../../Assets/Images/logo.png';
import { Wave } from 'react-animated-text';
import {FaFacebook, FaGithub, FaLinkedin} from 'react-icons/fa';

import './Homepage.scss';

const Homepage = () => {
	return (
		<div className='bg' >
			<br />
			<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
				<Navbar.Brand href="#home" className="rotate linear infinite">
					<img
						src={img}
						width="40"
						height="40"
						className="d-inline-block align-top "
						alt="React Bootstrap logo"
					/>

				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="mr-auto"></Nav>
					<Nav>
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
			<div className="home-intro">
				<h1 className='home-name' style={{ color: '#ffffffb5', fontSize: '40px', fontWeight: '700' }}>SUDIPTA <span> BISWAS</span></h1>
				{/* <p style={{ textAlign:'center', color: 'white', fontSize: '20px', fontWeight: '700' }}>I am a developer</p> */}
				<div className='home-detail' style={{ textAlign: 'center', color: '#31adc1f5', fontSize: '25px', fontWeight: '700' }}><Wave style={{ color: 'white' }} text="I'm a Developer" effect="stretch" effectChange={2.0} /></div>
			</div>
			<div className="social-links">
				<Nav defaultActiveKey="/home" className="flex-column">
					<Nav.Link target='_blank' href="https://www.facebook.com/srum1012/"><FaFacebook/></Nav.Link>
					<Nav.Link eventKey="link-1"><FaGithub/></Nav.Link>
					<Nav.Link eventKey="link-2"><FaLinkedin/></Nav.Link>
				</Nav>
			</div>
		</div>
	)
}

export default Homepage