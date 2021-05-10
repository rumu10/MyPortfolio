import { Row, Col, Card, Progress, Button } from "antd";
import React from "react";
import { AiOutlineCaretRight } from "react-icons/ai";
import { DownloadOutlined } from "@ant-design/icons";
import { education, experience } from "../../util/Data";

import "./Resume.scss";
import Footer from "../Common/Footer";

const Resume = () => {
  return (
    <div className="resume">
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
      <br />
      <br />
      <br />
      <Row>
        <Col lg={{ span: 7, offset: 4 }}>
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
                {i == 2 ? null : <hr />}
              </div>
            ))}
          </Card>
        </Col>
        <Col lg={{ span: 7, offset: 2 }}>
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
                {i == 1 ? null : <hr />}
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
      >
       <Row><Col lg={{ span: 6, offset: 4 }}>My Skills</Col></Row> 
      </h1>
      <Row>
        <Col lg={{ span: 7, offset: 4 }}>
			  <p>React.js</p>
          <Progress
            strokeColor={{
              from: "#108ee9",
              to: "#87d068",
            }}
            percent={99.9}
            status="active"
          />
			  <p>React.js</p>
          <Progress
            strokeColor={{
              from: "#108ee9",
              to: "#87d068",
            }}
            percent={99.9}
            status="active"
          />
			  <p>React.js</p>
          <Progress
            strokeColor={{
              from: "#108ee9",
              to: "#87d068",
            }}
            percent={99.9}
            status="active"
          />
        </Col>
		  <Col lg={{ span: 7, offset: 2 }}>
			  <p>React.js</p>
          <Progress
            strokeColor={{
              from: "#108ee9",
              to: "#87d068",
            }}
            percent={99.9}
            status="active"
          />
			  <p>React.js</p>
          <Progress
            strokeColor={{
              from: "#108ee9",
              to: "#87d068",
            }}
            percent={9.9}
            status="active"
          />
			  <p>React.js</p>
          <Progress
            strokeColor={{
              from: "#108ee9",
              to: "#87d068",
            }}
            percent={99.9}
            status="active"
          />
        </Col>
      </Row>
      <br />
		<br />
		<div style={{ textAlign: "center" }}>
              <Button
                style={{ backgroundColor: "var(--primaryColor)" }}
                type="primary"
                shape="round"
                icon={<DownloadOutlined />}
                size="large"
					 href='https://drive.google.com/drive/folders/1LzA-GhyjZFdXBXXvFaUcsbuHY56XVWKt?usp=sharing'
					 target="_blank"
              >
                Download CV
              </Button>
            </div>
				<br />
				<br/>
				<Footer/>
    </div>
  );
};

export default Resume;
