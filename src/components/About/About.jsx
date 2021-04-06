import React from 'react';
import { Row, Col, Nav, Navbar } from 'react-bootstrap';
import img from '../../Assets/Images/logo.png';
import propic from '../../Assets/Images/propic.jpg';
import { Wave } from 'react-animated-text';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Card } from 'antd';

import './About.scss';

const { Meta } = Card;

const About = () => {
	return (
		<div className="about">
			<Row>
				<Col>
					<p style={{margin:'80px 0 0 0', color: '#31adc1f5', fontSize: '16px', fontWeight: '700' , textAlign:'center'}}>Let me introduce myself!</p>
					<h1 style={{margin:'10px 0 0 0', color: '#ffffffb5', fontSize: '40px', fontWeight: '700' , textAlign:'center'}}>ABOUT ME</h1>
				</Col>
			</Row>
			<br/>
			<br/>
			<br/>
			<br/>
			<Row className="justify-content-lg-center">
				<Col lg ={{span: 3, offset:1}}>
					<Card
						hoverable
						style={{ width: 240 }}
						cover={<img width="400" height="520" alt="example" src={propic} />}
					>
						<Meta title="Europe Street beat" description="www.instagram.com" />
					</Card>
				</Col>
				<Col lg ={{span: 5, offset:0}}>
					<p style={{margin:'0', color: '#31adc1f5', fontSize: '16px', fontWeight: '700'}}>Who am I?</p>
					<br/>
					<h2 style={{margin:'0', color: 'white', fontSize: '25px', fontWeight: '700'}}>
						I'm Sudipta Biswas, a Junior Software Engineer and I'm from Dhaka,Bangladesh
					</h2>
					<br/>
					<p style={{margin:'0', color: '#f3ecec6e', fontSize: '16px', fontWeight: '700'}}>
						I've completed my graduation in Computer Science And Engineering (CSE) in 2019.
						After that I worked as a trainee in a software firm for 9 months. Lately, I am working as a 
						Junior Software engineer in V2 Techonologies Ltd. I mostly work in Javascript.Initially I started as a frontend
						developer. But now started working in backend as well.
					</p>
					<br/>
					<hr style ={{border: '1px solid #edf0f31a'}}/>
					<Row>
						<Col lg ={{span: 2, offset:0}}>
							<p style={{margin:'0', color: '#f3ecec6e', fontSize: '16px', fontWeight: '700'}}>Name: Sudipta Biswas</p>
							<p style={{margin:'0', color: '#f3ecec6e', fontSize: '16px', fontWeight: '700'}}>Contact No: 01973304886</p>
						</Col>
					</Row>
					<Row>
					<Col lg ={{span: 2, offset:0}}>
							<p style={{margin:'0', color: '#f3ecec6e', fontSize: '16px', fontWeight: '700'}}>Name: Sudipta Biswas</p>
							<p style={{margin:'0', color: '#f3ecec6e', fontSize: '16px', fontWeight: '700'}}> Contact No: +8801973304886</p>
						</Col>
					</Row>
				</Col>
			</Row>

			{/* <div className="info">
				<Card
					hoverable
					style={{ width: 240 }}
					cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
				>
					<Meta title="Europe Street beat" description="www.instagram.com" />
				</Card>
			</div> */}
		</div>
	)
}

export default About
