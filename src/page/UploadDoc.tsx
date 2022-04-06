import React, { useState } from 'react';
import logo from './logo.svg';
import '../style/upload_doc.css';
import { Breadcrumb, Button, Card, Cascader, DatePicker, Divider, Input, Layout, Table, Tooltip} from 'antd';
import { Row, Col } from 'antd';
import { Line } from '@ant-design/charts';
import { PlusOutlined, SearchOutlined } from '@ant-design/icons';
import TextArea from 'antd/lib/input/TextArea';

const { Header, Footer, Content } = Layout;


function UploadDoc() {
  return (
    <>
        <div className='bg-lightpink'>
            <div className='flex-between'>
                <Breadcrumb>
                    <Breadcrumb.Item>Document library</Breadcrumb.Item>
                    <Breadcrumb.Item>SQF</Breadcrumb.Item>
                    <Breadcrumb.Item>Edit document</Breadcrumb.Item>
                </Breadcrumb>

                <div className='text-box'>
                    <span>Icon </span>
                    <span>Docs: Manage documents</span>
                </div>
            </div>
            <Header className='bg-white pd-15 full-wh'>
                <h1>Upload document</h1>
                <div className='flex-row'>
                    <div>
                        <div className='text-box'>Document category</div>
                        <b>Certificate</b>
                    </div>
                    <div className='mg-left'>
                        <div className='text-box'>Document category</div>
                        <b>Certificate</b>
                    </div>
                </div>
            </Header>
            <Content>
                <Row>
                    <Col span={8}>
                        <div className='pd-20'>
                            <div className='text-box'>
                                <span>Icon </span>
                                <b>File</b>
                            </div>

                            <p>Add the pdf, text, or image (PNG, JPEG, or GIF) file of this document (20MB maximum)</p>

                            <Button>Change file</Button>

                            <div className='bg-white'>ashdfkk.png</div>
                        </div>
                    </Col>

                    <Col span={8}>
                        <div className='pd-20'>
                            <div className='text-box'>
                                <span>Icon </span>
                                <b>Property</b>
                            </div>

                            <div className='mg-top'>
                                <div className='text-box'>Title (optional)</div>
                                <Input placeholder="Enter title" />
                            </div>

                            <div className='mg-top flex-row'>
                                <div>
                                    <div className='text-box'>Expiration date</div>
                                    <DatePicker />
                                </div>

                                <div className='mg-left'>
                                    <div className='text-box'>Issue date (optional)</div>
                                    <DatePicker />
                                </div>
                            </div>

                            <div className='mg-top'>
                                <div className='text-box'>Notes (optional)</div>
                                <TextArea showCount maxLength={500} style={{ height: 120 }} />
                            </div>
                        </div>
                    </Col>

                    <Col span={8}>
                        <div className='pd-20'>
                            
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
                        </div>
                    </Col>
                </Row>
                <div className='flex-reverse pd-20'>
                    <Button className='mg-left'>Cancel</Button>
                    <Button>Save</Button>
                </div>
            </Content>
        </div>
        
    </>
  );
}


export default UploadDoc;
