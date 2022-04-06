import React, { useState } from 'react';
import logo from './logo.svg';
import '../style/dashboard.css';
import { Card, Layout} from 'antd';
import { Row, Col } from 'antd';
import { Line } from '@ant-design/charts';

const { Header, Footer, Content } = Layout;


const Logo = () => {
    // const [message, setMessage] = useState("");
  
    return (
        <div className='box'>
        <h1>Welcome to</h1>
        <img src="" alt="VTF_WEB" />
      </div>
    );
};

const Org = () => {
    const orgData = [
        {
            title: "VN Food Trust Organizations",
            number: "37",
            detail: "Organization"
        },
        {
            title: "VN Food Trust Users",
            number: "11",
            detail: "Users"
        },
        {
            title: "VN Food Trust facilities",
            number: "16",
            detail: "Facilities"
        },
        {
            title: "VN Food Trust Products",
            number: "9",
            detail: "Products"
        }
    ]

    return (
        <>
        <div className='pd'>
            <h1>Your Organization</h1>
            <Row gutter={16}>
                {orgData.map((data) => (
                    <Col span={6}>
                        <Card size='small' title={data.title}>
                            <p className='big-number'>{data.number}</p>
                            <p>{data.detail}</p>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
        </>
    )
}

const OrgDetail = () => {
    const detailChartData = [
        {
            name: "Daily trace usage by your organization",
            data: [
                { x: 1, y: 0 },
                { x: 2, y: 0 },
                { x: 3, y: 1 },
                { x: 4, y: 0 },
                { x: 5, y: 0 },
                { x: 6, y: 1 },
                { x: 7, y: 0 },
                { x: 8, y: 0 },
                { x: 9, y: 0 },
                { x: 10, y: 0 },
                { x: 11, y: 0 },
                { x: 12, y: 0 },
                { x: 13, y: 0 },
                { x: 14, y: 0},
                { x: 15, y: 0 },
                { x: 16, y: 0 },
                { x: 17, y: 0 },
                { x: 18, y: 0 },
                { x: 19, y: 0 },
                { x: 20, y: 0 },
                { x: 21, y: 0 },
                { x: 22, y: 0 },
                { x: 23, y: 0 },
                { x: 24, y: 0 },
                { x: 25, y: 0 },
                { x: 26, y: 0 },
                { x: 27, y: 0 },
                { x: 28, y: 0 },
                { x: 29, y: 0 },
                { x: 30, y: 0 },
            ]
        },
        {
            name: "Daily logins by your organization",
            data: [
                { x: 1, y: 0 },
                { x: 2, y: 0 },
                { x: 3, y: 0 },
                { x: 4, y: 0 },
                { x: 5, y: 0 },
                { x: 6, y: 1 },
                { x: 7, y: 0 },
                { x: 8, y: 0 },
                { x: 9, y: 0 },
                { x: 10, y: 0 },
                { x: 11, y: 0 },
                { x: 12, y: 1 },
                { x: 13, y: 0 },
                { x: 14, y: 0},
                { x: 15, y: 0 },
                { x: 16, y: 0 },
                { x: 17, y: 0 },
                { x: 18, y: 0 },
                { x: 19, y: 0 },
                { x: 20, y: 0 },
                { x: 21, y: 0 },
                { x: 22, y: 0 },
                { x: 23, y: 0 },
                { x: 24, y: 0 },
                { x: 25, y: 0 },
                { x: 26, y: 0 },
                { x: 27, y: 0 },
                { x: 28, y: 0 },
                { x: 29, y: 0 },
                { x: 30, y: 0 },
            ]
        }
    ];

    const eventUploadData = [
        {
            name: "Event uploads",
            data: [
                { x: 1, y: 0 },
                { x: 2, y: 0 },
                { x: 3, y: 1 },
                { x: 4, y: 0 },
                { x: 5, y: 0 },
                { x: 6, y: 1 },
                { x: 7, y: 0 },
                { x: 8, y: 0 },
                { x: 9, y: 0 },
                { x: 10, y: 0 },
                { x: 11, y: 0 },
                { x: 12, y: 0 },
                { x: 13, y: 0 },
                { x: 14, y: 0},
                { x: 15, y: 0 },
                { x: 16, y: 0 },
                { x: 17, y: 0 },
                { x: 18, y: 0 },
                { x: 19, y: 0 },
                { x: 20, y: 0 },
                { x: 21, y: 0 },
                { x: 22, y: 0 },
                { x: 23, y: 0 },
                { x: 24, y: 0 },
                { x: 25, y: 0 },
                { x: 26, y: 0 },
                { x: 27, y: 0 },
                { x: 28, y: 0 },
                { x: 29, y: 0 },
                { x: 30, y: 0 },
            ]
        }
    ]

    return (
        <>
        <div className='mg-bot'>
            <h1 className='white-bg pd'>Your Organization Details</h1>
            <Row>
                {detailChartData.map((chartData) => (
                    <Col span={12}>
                        <Card>
                            <p>{chartData.name}</p>
                            <Line
                                data={chartData.data}
                                height={500}
                                xField="x"
                                yField="y"
                                point={{ size: 5, shape: 'diamon' }}
                                color='blue'
                            />
                        </Card>
                    </Col>
                ))}
            </Row>

            <Row>
                <Col span={12}>
                    <Card>
                        <p>BIG PICTURE</p>
                        <img src="../assets/big_pic.png" alt="Big picture" height={500} />
                    </Card>
                </Col>
                {eventUploadData.map((eventData) => (
                    <Col span={12}>
                        <Card>
                                <p>{eventData.name}</p>
                                <Line
                                    data={eventData.data}
                                    height={500}
                                    xField="x"
                                    yField="y"
                                    point={{ size: 5, shape: 'diamon' }}
                                    color='blue'
                                />
                                <p> .  .  . </p>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
        </>
    )
}

const OrgModule = () => {
    const orgModuleData = [
        {
            name: "Your organization's modules",
            block: [
                {
                    icon: "I1",
                    name: "Data 1",
                    forwardIcon: "FI1"
                },
                {
                    icon: "I2",
                    name: "Data 2",
                    forwardIcon: "FI2"
                },
                {
                    icon: "I3",
                    name: "Data 3",
                    forwardIcon: "FI3"
                },
                {
                    icon: "I4",
                    name: "Data 4",
                    forwardIcon: "FI4"
                },
                {
                    icon: "I5",
                    name: "Data 5",
                    forwardIcon: "FI5"
                },
                {
                    icon: "I6",
                    name: "Data 6",
                    forwardIcon: "FI6"
                },
            ]
        }
    ]

    return (
        <>
        {orgModuleData.map((data) => (
            <Row>
                <Col span={6}>
                    <p>{data.name}</p>
                </Col>
                <Col span={18}>
                    <Row gutter={[16, 16]}>
                        {data.block.map((blockdata) => (
                            <Col span={8}>
                                <Card>
                                    <p>{blockdata.icon}</p>
                                    <div className='flex-between'>
                                        <span>{blockdata.name}</span>
                                        <span>{blockdata.forwardIcon}</span>
                                    </div>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        ))}
        </>
    ) 
}

function Dashboard() {
  return (
    //   <Layout className='pd-out'>
    <>
        <Header className='background'>
          <Logo />

        </Header>
        <Content>
            <Org />
            <OrgDetail />
            <OrgModule />
        </Content>
    </>
    //   </Layout>
  );
}


export default Dashboard;
