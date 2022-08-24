import "./About.scss";
import React from "react";
import propic from "../../Assets/Images/propic.jpg";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { Row, Col, Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import { Nav } from "react-bootstrap";
import Tilt from 'react-tilt';

const About = () => {
  return (
    <div className="about">
      <div className="about-content">
      <div className="reveal" style={{ textAlign: "center" }}>
        <br />
        <br />
        <p
          style={{
            margin: "0px 0 0 0",
            color: "#31adc1f5",
            fontSize: "16px",
            fontWeight: "700",
          }}
        >
          Let me introduce myself!
        </p>
        <h1
          style={{
            margin: "10px 0 0 0",
            color: "#ffffffb5",
            fontSize: "40px",
            fontWeight: "700",
          }}
        >
          ABOUT ME
        </h1>
      </div>

      <br />
      <br />
      <br />
      <div className="main-div">
        <Row justify = 'center'>
        <Tilt className="Tilt" options={{ max: 35, scale: 1.08 }}  >
          <Col className="reveal" lg={{ span: 8, offset: 0 }}>
            <img
              style={{ borderRadius: "10px" }}
              width="350"
              height="480"
              alt="example"
              src={propic}
            />
          </Col>
          </Tilt>
          <Col className="reveal" md={{ span: 24, offset: 0 }} lg={{ span: 8, offset: 1 }} xs ={{ span: 24, offset: 0 }}>
            <p
              style={{
                margin: "0",
                color: "#31adc1f5",
                fontSize: "16px",
                fontWeight: "700",
              }}
            >
              Who am I?
            </p>
            <br />
            <h2
              style={{
                margin: "0",
                color: "white",
                fontSize: "25px",
                fontWeight: "700",
              }}
              className="reveal"
            >
              I'm Sudipta Biswas, a Software Engineer and I'm from
              Dhaka,Bangladesh
            </h2>
            <br />
            <p
              style={{
                margin: "0",
                color: "#f3ecec6e",
                fontSize: "16px",
                fontWeight: "700",
              }}
              className="reveal"
            >
              I've completed my graduation in Computer Science And Engineering
              (CSE) in 2019. After that I worked as a trainee in a software firm
              for 9 months. Lately, I am working as a Software engineer
              in V2 Techonologies Ltd. I mostly work in Javascript.Initially I
              started as a frontend developer. But from last year I am working as 
              a Full-Stack Software Engineer. Fast-forward to today, I have been given responsiblity to 
              manage projects. In future, I see myself as a Project Manager.
            </p>
            <br />
            <hr style={{ border: "1px solid #edf0f31a" }} />
            <Row className="reveal">
              <Col lg={{ span: 10, offset: 0 }}>
                <p
                  style={{
                    margin: "0",
                    color: "#f3ecec6e",
                    fontSize: "16px",
                    fontWeight: "700",
                  }}
                >
                  <span style={{color:'var(--white)'}}>Name:</span> Sudipta Biswas
                </p>
                <p
                  style={{
                    margin: "0",
                    color: "#f3ecec6e",
                    fontSize: "16px",
                    fontWeight: "700",
                  }}
                >
                  <span style={{color:'var(--white)'}}>Contact No: </span> +8801673304886
                </p>
              </Col>
              <Col lg={{ span: 10, offset: 4 }}>
                <p
                  style={{
                    margin: "0",
                    color: "var(--primaryColor)",
                    fontSize: "16px",
                    fontWeight: "700",
					          textDecoration:'underline'
                  }}
                >
                  <span style={{color:'var(--white)'}}>Email:</span> sudiptarumu@gmail.com
                </p>
                <p
                  style={{
                    margin: "0",
                    color: "#f3ecec6e",
                    fontSize: "16px",
                    fontWeight: "700",
                  }}
                >
                  {" "}
                  <span style={{color:'var(--white)'}}>Nationality:</span> Bangladeshi
                </p>
              </Col>
            </Row>
            <br />
            <br />
            <br />
            <div className="reveal" style={{ textAlign: "center" }}>
              <Button
                style={{ backgroundColor: "var(--primaryColor)" }}
                type="primary"
                shape="round"
                icon={<DownloadOutlined />}
                size=""
                href="https://drive.google.com/file/d/1MY7sC5-axiiEJ6N_thJYbNLbhgGYe_Lv/view?usp=sharing"
              >
                Download CV
              </Button>
            </div>
            <div className="social-links reveal">
              <Nav defaultActiveKey="/home" className="justify-content-center">
                <Nav.Link href="/home">
                  <FaFacebook />
                </Nav.Link>
                <Nav.Link eventKey="link-1">
                  <FaGithub />
                </Nav.Link>
                <Nav.Link eventKey="link-2">
                  <FaLinkedin />
                </Nav.Link>
              </Nav>
            </div>
            <br />
          </Col>
        </Row>
      </div>
      </div>
    </div>
  );
};

export default About;
