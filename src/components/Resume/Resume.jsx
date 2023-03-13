import { Row, Col, Card, Progress, Button, Popover } from "antd";
import React from "react";
import { AiOutlineCaretRight } from "react-icons/ai";
import { DownloadOutlined } from "@ant-design/icons";
import { education, experience, skills } from "../../util/Data";
import Tilt from 'react-tilt';

import "./Resume.scss";
import Footer from "../Common/Footer";

const Resume = () => {
  return (
    <div className="resume">
      <div className="main-div">
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
            My background details!
          </p>
          <h1
            style={{
              margin: "10px 0 0 0",
              color: "#ffffffb5",
              fontSize: "40px",
              fontWeight: "700",
            }}
          >
            RESUME
          </h1>
        </div>
        <br />
        <br />
        <Row className="reveal" justify="center">
          <Col lg={{ span: 7, offset: 0 }} md={{ span: 24, offset: 0 }} xs={{ span: 24, offset: 0 }}>
            <h1
              style={{
                margin: "10px 0 20px 0",
                color: "#ffffffb5",
                fontSize: "20px",
                fontWeight: "700",
              }}
            >
              Education
            </h1>
            <Card>
              {education.map((v, i) => (
                <div>
                  <AiOutlineCaretRight />
                  <Tilt className="Tilt" options={{ max: 35, scale: 1.08 }}>
                    <div style={{ margin: "0px 0 20px 30px" }}>
                      <h2
                        style={{
                          color: "white",
                          //  textDecoration: "underline",
                          fontSize: "22px",
                        }}
                      >
                        {v.degree}
                      </h2>
                      <p>{v.institution}</p>
                      <p>{v.subj}</p>
                      <p>{v.session}</p>
                    </div>
                  </Tilt>
                  {i === 2 ? null : <hr />}
                </div>
              ))}
            </Card>
          </Col>
          <Col lg={{ span: 7, offset: 1 }} md={{ span: 24, offset: 0 }} xs={{ span: 24, offset: 0 }}>
            <h1
              style={{
                margin: "10px 0 20px 0",
                color: "#ffffffb5",
                fontSize: "20px",
                fontWeight: "700",
              }}
            >
              Experience
            </h1>
            <Card>
              {experience.map((v, i) => (
                <div>
                  <AiOutlineCaretRight />
                  <Tilt className="Tilt" options={{ max: 35, scale: 1.08 }}>
                    <div style={{ margin: "0px 0 20px 30px" }}>
                      <h2
                        style={{
                          color: "white",
                          //  textDecoration: "underline",
                          fontSize: "22px",
                        }}
                      >
                        {v.post}
                      </h2>
                      <p>{v.office}</p>
                      <p>{v.span}</p>
                      {/* <p>{v.session}</p> */}
                    </div>
                  </Tilt>
                  <Popover content={
                    <div>
                      {
                        v.res.map(r => {
                          return (<p>{r.des}</p>)
                        })
                      }
                    </div>
                  }
                    title="Responsibility"
                    placement="right"
                  >
                    <Button style={{ backgroundColor: "var(--primaryColor)" }} type="primary">Hover</Button>
                  </Popover>
                  {i === 2 ? null : <hr />}
                </div>
              ))}
            </Card>
          </Col>
        </Row>
        <br />
        <h1
          style={{
            margin: "10px 0 20px 0",
            color: "#ffffffb5",
            fontSize: "20px",
            fontWeight: "700",
          }}
          className="reveal"
        >
          <Row><Col lg={{ span: 6, offset: 4 }}>My Skills</Col></Row>
        </h1>
        <Row className="reveal" >
          {
            skills.map(v => {
              return (
                <Col lg={{ span: 7, offset: 4 }} xs={{ span: 7, offset: 0 }} >
                  <p>{v.name}</p>
                  <Progress
                    strokeColor={{
                      from: "#108ee9",
                      to: "#87d068",
                    }}
                    percent={v.percent}
                    status="active"
                    showInfo={false}
                  />
                </Col>
              )
            })
          }

        </Row>
        <br />
        <br />
        <div className="reveal" style={{ textAlign: "center" }}>
          <Button
            style={{ backgroundColor: "var(--primaryColor)" }}
            type="primary"
            shape="round"
            icon={<DownloadOutlined />}
            size=""
            href='https://drive.google.com/file/d/1ECO4ztYaf3o4vwHv_FMR8xxRQnu0k3_W/view?usp=sharing'
            target="_blank"
          >
            Download CV
          </Button>
        </div>
        <br />
        <br />
        <Footer />
      </div>
    </div>
  );
};

export default Resume;
