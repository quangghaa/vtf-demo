import React, { useState } from 'react';
import logo from './logo.svg';
import '../style/doc_library.css';
import { Button, Card, Cascader, DatePicker, Input, Layout, Table, Tooltip} from 'antd';
import { Row, Col } from 'antd';
import { Line } from '@ant-design/charts';
import { PlusOutlined, SearchOutlined } from '@ant-design/icons';

const { Header, Footer, Content } = Layout;


function DocLibrary(props: any) {
    const options = [
        {
          value: "Value",
          label: "Any event date",
        },
        {
          value: "Vlue",
          label: "Other event date",
        }
    ];
    
    function onChange(checkedValues: any) {
        console.log('checked = ', checkedValues);
    }

    const columns = [
        {
          title: 'Owning organization',
          dataIndex: 'owningOrganization',
          width: 150,
        },
        {
          title: 'Document type',
          dataIndex: 'documentType',
          width: 150,
        },
        {
          title: 'Document title',
          dataIndex: 'documentTitle',
        //   width: 150,
        },
        {
            title: 'Focus',
            dataIndex: 'focus',
            // width: 150,
        },
        {
            title: 'Last updated',
            dataIndex: 'lastUpdated',
            // width: 150,
        },
        {
            title: 'Expiration date',
            dataIndex: 'expirationDate',
            // width: 150,
        },
      ];
      
      const data = [];
      for (let i = 0; i < 100; i++) {
        data.push({
          key: i,
          owningOrganization: `Owning organization ${i}`,
          documentType: "SQF",
          documentTitle: `Document title ${i}`,
          focus: `ID ${i}`,
          lastUpdated: `12/02/2022`,
          expirationDate: "12/02/2023"
        });
      }

  return (
    <>
        <Header className='bg-white pd-15 full-wh'>
            <div className='flex-between'>
                <div className='text-box'>Document library</div>
                <div className='text-box'>
                    <span>ICON </span>
                    <span>Docs: Manage Documents</span>
                </div>
            </div>

            <div className='flex-row mg-top'>
                <div className='mg-left'>
                    <div className='text-box'>Document category</div>
                    <Cascader
                        options={options}
                        onChange={onChange}
                        placeholder="Please select"
                    />
                </div>

                <div className='mg-left'>
                    <div className='text-box'>Document type</div>
                    <Cascader
                        options={options}
                        onChange={onChange}
                        placeholder="Please select"
                    />
                </div>

                <div className='mg-left'>
                    <div className='text-box'>Owning organization</div>
                    <Cascader
                        options={options}
                        onChange={onChange}
                        placeholder="Please select"
                    />
                </div>

                <div className='mg-left'>
                    <div className='text-box'>Facility name</div>
                    <Input placeholder="Enter facility name" />
                </div>

                <div className='mg-left'>
                    <div className='flex-row'>
                        <div>
                            <div className='text-box'>Expiration from</div>
                            <DatePicker onChange={onChange} />
                        </div>
                        <div>
                            <div className='text-box'>To</div>
                            <DatePicker onChange={onChange} />
                        </div>
                    </div>
                    
                </div>
            </div>

            <div className='flex-between'>
                <div className='flex-row'>
                    <div className='mg-left'>
                        <div className='text-box'>Product</div>
                        <Input placeholder="Enter product name" />
                    </div>

                    <div className='mg-left'>
                        <div className='text-box'>Lot</div>
                        <Input placeholder="First select a product" />
                    </div>
                </div>

                <div className='flex-row'>
                    <Button className='mg-right'>Clear</Button>
                    <Button type="primary" icon={<SearchOutlined />}>
                        Search
                    </Button>
                </div>
            </div>
        </Header>
        <Content>
            <div className='flex-reverse'>
                <Button type="primary" icon={<PlusOutlined />} onClick={props.func}>
                    Upload a document
                </Button>
            </div>

            <Table columns={columns} dataSource={data} scroll={{ y: 240 }} onRow={(r) => ({
                onClick: props.funcB,
            })}/>
        </Content>
    </>
  );
}


export default DocLibrary;
