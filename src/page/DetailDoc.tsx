import React, { useState } from 'react';
import logo from './logo.svg';
import '../style/detail_doc.css';
import { Breadcrumb, Button, Card, Cascader, DatePicker, Divider, Input, Layout, Table, Tooltip} from 'antd';
import { Row, Col } from 'antd';
import { Line } from '@ant-design/charts';
import { PlusOutlined, SearchOutlined } from '@ant-design/icons';
import TextArea from 'antd/lib/input/TextArea';

const { Header, Footer, Content } = Layout;


function DetailDoc() {
  return (
    <>
        <div className='bg-lightpink'>
            <Header className='bg-white pd-15 full-wh'>

                <div className='flex-between'>
                    <h3>Migilor Formiggi SQF Level 2</h3>
                    <div className='text-box'>Last updated 12/02/2021, 6:19pm</div>
                </div>

                <div className='flex-between mg-top mg-bot'>
                    <div className='flex-row'>
                        <div className='text-box'>
                            <div className='text-box'>Owning Organization</div>
                            <b>Brandega foods</b>
                        </div>
                        <div className='mg-left text-box'>
                            <div className='text-box'>Document category</div>
                            <b>Certificate</b>
                        </div>
                        <div className='mg-left text-box'>
                            <div className='text-box'>Document type</div>
                            <b>SQF</b>
                        </div>
                    </div>
                    <div className='flex-row'>
                        <Button>Delete</Button>
                        <Button className='mg-left'>Edit</Button>
                    </div>
                </div>
            </Header>
            <Content>
                <Row gutter={8}>
                    <Col span={20}>
                        <div className='pd-10'>
                            <div className='flex-between'>
                                <div className='text-box'>
                                    <span>Icon </span>
                                    <b>File</b>
                                </div>

                                <div className='text-box'>
                                    <b>Download</b>
                                    <span>Icon</span>
                                </div>
                            </div>

                            <div className='bg-white mg-top mg-bot'>asdfasdfsadf78asdf0.jpg</div>

                            <div>
                                BIG IMAGE HERE
                            </div>
                        </div>
                    </Col>
                    <Col span={4}>
                        <div>
                                <div className='flex-between'>
                                    <div className='text-box'>
                                        <span>Icon</span>
                                        <b>Focus (Optional)</b>
                                    </div>

                                    <div className='text-box'>Edit</div>
                                </div>

                                <div className='text-box mg-top'>Select a facility as the document focus</div>

                                <b>Facility</b>
                                <div className='text-box radius bg-grey color-grey wrap-text'>Migilor Formaggio</div>
                        </div>
                        <Divider />
                        <div>
                                <div className='flex-between'>
                                    <div className='text-box'>
                                        <span>Icon</span>
                                        <b>Sharing (Optional)</b>
                                    </div>

                                    <div className='text-box'>Edit</div>
                                </div>

                                <div className='text-box mg-top'>Select organization to share the document with.</div>

                                <div className='text-box wrap-text mg-top'>Demo Organization</div>
                        </div>
                        <Divider />
                        <div>
                                <div className='text-box'>
                                        <span>Icon</span>
                                        <b>Property</b>
                                </div>

                                <div className='text-box mg-top'>
                                    <div>Title</div>
                                    <div>Migigglo SQF Level 2</div>
                                </div>
                        </div>
                    </Col>
                </Row>
            </Content>
        </div>
        
    </>
  );
}


export default DetailDoc;
