import React from 'react';
import './Portfolio.scss';
import { Row, Col, Button, Card, Tooltip, Tabs } from "antd";
import { FilePdfOutlined, GithubOutlined } from '@ant-design/icons';
import { thesis, works } from '../../util/Data';
import Tilt from 'react-tilt';
import thesisImg from "../../Assets/Images/thesis.png";

const { Meta } = Card;
const { TabPane } = Tabs;

const Portfolio = () => {
	return (
		<div className="pf">
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
					Take a look at my works!
				</p>
				<h1
					style={{
						margin: "10px 0 0 0",
						color: "#ffffffb5",
						fontSize: "40px",
						fontWeight: "700",
					}}
				>
					My works
				</h1>
			</div>
			<br />
			<div className="reveal main-div" style={{ display: 'flex', justifyContent: 'center' }} >
				<Tabs defaultActiveKey="1" >
					<TabPane tab="Projects" key="1">
						<Row gutter={[16, 16]} justify='center' >
							{works.map((v, i) => (
								<>
									<Tilt className="Tilt" options={{ max: 35, scale: 1.08 }} style={{ position: 'relative' }} >
										<Col>
											<Card
												style={{
													background: v.colour,
													color: 'white',
													width: '300px'
												}}
												// cover={
												// 	<img
												// 		alt="example"
												// 		src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
												// 	/>
												// }
												actions={[
													<Tooltip title="Source Code">
														<Button style={{ color: "black" }} target="_blank" href={v.gitUrl} type='link' block icon={<GithubOutlined />} ></Button>
													</Tooltip>
													// <SettingOutlined key="setting" />,
													// <EditOutlined key="edit" />,
													// <EllipsisOutlined key="ellipsis" />,
												]}
											>
												<Meta
													//avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
													title={v.title}
													description={v.des}
												/>
											</Card>
										</Col>
									</Tilt>
									<br />
								</>
							))}
						</Row>
					</TabPane>
					<TabPane tab="Research" key="2">
						<Row gutter={[16, 16]} justify='center' >
							{thesis.map((v, i) => (
								<>
									<Tilt className="Tilt" options={{ max: 35, scale: 1.08 }} style={{ position: 'relative' }} >
										<Col>
											<Card
												style={{
													background: v.colour,
													color: 'Black',
													width: '300px'
												}}
												cover={
													<img
														alt="example"
														src={thesisImg}
													/>
												}
												actions={[
													<div style = {{display:'flex', justifyContent:'center'}}>
														<Tooltip title="Source Code">
															<Button style={{ color: "black" }} target="_blank" href={v.gitUrl} type='link' block icon={<GithubOutlined />} ></Button>
														</Tooltip>
														<Tooltip title="Download Pdf">
															<Button style={{ color: "black" }} target="_blank" href={v.pdf} type='link' block icon={<FilePdfOutlined />} ></Button>
														</Tooltip>
													</div>

													// <SettingOutlined key="setting" />,
													// <EditOutlined key="edit" />,
													// <EllipsisOutlined key="ellipsis" />,
												]}
											>
												<Meta
													//avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
													title={v.title}
													description={v.des}
												/>
											</Card>
										</Col>
									</Tilt>
									<br />
								</>
							))}
						</Row>
					</TabPane>
				</Tabs>
			</div>
		</div>
	)
}

export default Portfolio
