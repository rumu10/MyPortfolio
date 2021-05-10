import "./About.scss";
import React from "react";
import img from "../../Assets/Images/logo.png";
import propic from "../../Assets/Images/propic.jpg";
import { Wave } from "react-animated-text";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { Row, Col, Card, Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import { Nav } from "react-bootstrap";

const { Meta } = Card;

const About = () => {
  return (
    <div className="about">
      <div className="about-content">
      <div style={{ textAlign: "center" }}>
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
      <br />
      <br />
      <br />
      <div>
        <Row>
          <Col lg={{ span: 4, offset: 5 }}>
            <img
              style={{ borderRadius: "10px" }}
              width="350"
              height="480"
              alt="example"
              src={propic}
            />
          </Col>
          <Col lg={{ span: 8, offset: 1 }}>
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
            >
              I'm Sudipta Biswas, a Junior Software Engineer and I'm from
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
            >
              I've completed my graduation in Computer Science And Engineering
              (CSE) in 2019. After that I worked as a trainee in a software firm
              for 9 months. Lately, I am working as a Junior Software engineer
              in V2 Techonologies Ltd. I mostly work in Javascript.Initially I
              started as a frontend developer. But now started working in
              backend as well.
            </p>
            <br />
            <hr style={{ border: "1px solid #edf0f31a" }} />
            <Row>
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
            <div style={{ textAlign: "center" }}>
              <Button
                style={{ backgroundColor: "var(--primaryColor)" }}
                type="primary"
                shape="round"
                icon={<DownloadOutlined />}
                size="large"
              >
                Download CV
              </Button>
            </div>
            <div className="social-links">
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
