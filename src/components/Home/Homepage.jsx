import React from 'react';
import { Row, Col, Nav, Navbar } from 'react-bootstrap';
import img from '../../Assets/Images/logo192.png';
import { Wave} from 'react-animated-text';

import './Homepage.scss';

const Homepage = () => {
	return (
		<div className='bg'>
			<br />
			<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
				<Navbar.Brand href="#home">
				<img
					src={img}
					width="30"
					height="30"
					className="d-inline-block align-top"
					alt="React Bootstrap logo"
      		/>
				 
			</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="mr-auto"></Nav>
					<Nav>
						<Nav.Link href="#deets">About</Nav.Link>
						<Nav.Link eventKey={2} href="#memes">
							Resume
      				</Nav.Link>
						<Nav.Link eventKey={2} href="#memes">
							Porfolio
      				</Nav.Link>
						<Nav.Link eventKey={2} href="#memes">
							Contact Me
      				</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
			<div className="home-intro">			
				<h1 className='home-name' style={{color: 'white', fontSize: '40px', fontWeight: '700' }}>SUDIPTA <span> BISWAS</span></h1>
				{/* <p style={{ textAlign:'center', color: 'white', fontSize: '20px', fontWeight: '700' }}>I am a developer</p> */}
				<div className='home-detail' style={{ textAlign:'center', color: 'white', fontSize: '30px', fontWeight: '700' }}><Wave style ={{color:'white'}} text="I'm a Developer" effect="stretch" effectChange={2.0} /></div>
			</div>
			<div>

  </div>
		</div>
	)
}

export default Homepage