import React, { useState } from 'react';
import logo from './logo.svg';
import "../style/narrowDownSearch.css";
import '../style/searchOptions.css';
import { Button, Card, DatePicker, Input, Layout, Progress, Tooltip} from 'antd';
import { Row, Col } from 'antd';
import { Cascader } from "antd";

import { Table, Divider } from 'antd';
import { Checkbox } from "antd";
import { Link } from 'react-router-dom';

const { Header, Content } = Layout;

const { Search } = Input;

const HeaderData = () => {
    const data = [
        {
            name: "Whole Grain Ma Pizza",
            dateRange: "11/30/2020-12/20/2021",
            event: "Any event date",
            lot: "Lot 327"
        }
    ]
    return (
        <div>
                  {data.map((d) => (
                    <div className='subtitle'>
                      <span className='prettier'>{d.name}</span>
                      <span className='mg-left prettier'>{d.dateRange}</span>
                      <span className='mg-left prettier'>{d.event}</span>
                      <span className='mg-left prettier'>{d.lot}</span>
                    </div>
                  ))}
        </div>
    )
}

const NarrowDown = () => {
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

    const [selectionType, setSelectionType] = useState('checkbox');

    const rowSelection = {
        onChange: (selectedRowKeys: any, selectedRows: any) => {
          console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        getCheckboxProps: (record: any) => ({
          disabled: record.name === 'Disabled User',
          // Column configuration not to be checked
          name: record.name,
        }),
    };

    const productSearch = [
        {
            notification: {
                icon: "V",
                message: "Product Found",
                detail: "Lots, pallets and/or serial number were found for the specified product date range"
            },
            lotColumns: [
                {
                    title: 'Lot numbers found',
                    dataIndex: 'number',
                    render: (text: any) => <a>{text}</a>,
                  },
                  {
                    title: 'Expiration date',
                    dataIndex: 'expDate',
                  },
                  {
                    title: 'Production date',
                    dataIndex: 'proDate',
                  },
            ],
            lotData: [
                {
                    key: '1',
                    number: '324',
                    expDate: '04/03/2020',
                    proDate: '---',
                  },
                  {
                    key: '2',
                    number: '327',
                    expDate: '12/03/2020',
                    proDate: '---',
                }
            ],
            palletColums: [
                {
                    title: 'Pallet numbers found',
                    dataIndex: 'number',
                    render: (text: any) => <a>{text}</a>,
                }
            ],
            palletData: [
                {
                    key: '1',
                    number: 'LPN: 2166',
                  },
                  {
                    key: '2',
                    number: 'LPNL 8888',
                }
            ],
            serial: [
                {
                    number: "6183"
                },
                {
                    number: "7183"
                },
                {
                    number: "8183"
                },
                {
                    number: "9183"
                }
            ]
        }
    ]

    return (
        <>
        <div>
            <p>Next narrow down the product search either by date<br />or by lot, serial, or pallet number</p>
        </div>
        <Row>
            <Col span={8}> 
                <Card>
                    <p>Date type</p>
                    <Cascader
                        options={options}
                        onChange={onChange}
                        placeholder="Please select"
                    />
                    <div className='flex-row'>
                            <div>
                                <p>Start Date</p>
                                <DatePicker />
                            </div>
                            <div>
                                <p>End Date</p>
                                <DatePicker />
                            </div>
                    </div>
                    <div className='flex-between'>
                        <Button type="primary">Use this date range</Button>
                        <Button type="primary">Clear this date range</Button>
                    </div>
                    {productSearch.map((data) => (
                        <div className='flex-row bg-color-dark color-white'>
                            <div>{data.notification.icon}</div>
                            <div>
                                <b>{data.notification.message}</b>
                                <p>{data.notification.detail}</p>
                            </div>
                        </div>
                    ))}
                </Card>
            </Col>
            <Col span={7}>
                <Card>
                    <div>
                        <span className='big-number'>{productSearch[0].lotData.length}</span>
                        LOTS
                    </div>
                    <div>
                        <Table
                            rowSelection={{
                                // type: selectionType,
                                ...rowSelection,
                            }}
                            columns={productSearch[0].lotColumns}
                            dataSource={productSearch[0].lotData}
                            pagination={false} 
                        />
                    </div>
                </Card>
            </Col>
            <Col span={3}>
                <Card>
                    <div>
                        <span className='big-number'>{productSearch[0].palletData.length}</span>
                        PALLETS
                    </div>
                    <div>
                        <Table
                            rowSelection={{
                                // type: selectionType,
                                ...rowSelection,
                            }}
                            columns={productSearch[0].palletColums}
                            dataSource={productSearch[0].palletData}
                            pagination={false} 
                        />
                    </div>
                </Card>
            </Col>
            <Col span={6}>
                <Card>
                    <div>
                        <span className='big-number'>{productSearch[0].serial.length}</span>
                        SERIAL NUMBERS
                    </div>
                    <div>
                        <Search placeholder="input search text" allowClear />   
                        <Checkbox.Group style={{ width: '100%' }} onChange={onChange}>
                            {productSearch[0].serial.map((n) => (
                                <>
                                <Checkbox value="A">{n.number}</Checkbox><br />
                                </>
                            ))}
                        </Checkbox.Group>
                    </div>
                </Card>
            </Col>
        </Row>
        </>
    )
}

const SwitchView = (props: any) => {
    return (
        <>
        <div className='flex-row normal-lineheight'>
            <p className='margin-unset' onClick={props.funcA}>Supply chain view</p>
            <p className='margin-unset mg-left' onClick={props.funcB}>Product view</p>
        </div>
        </>
    )
}

function NarrowDownSearch() {
   
    return (
        <div className='pd-out'>
          <Header className='bg-color-unset custom'>
              <div className='flex-between'>
                <h1 className='logo'>Trace</h1>

                <div>
                    <Button type="primary">
                        Clear
                    </Button>
                    <Button type="default">
                        <Link to="/product-entry">
                            Trace
                        </Link>
                    </Button>
                </div>
              </div>
              <HeaderData />
              <hr
                style={{
                    color: 'white',
                    backgroundColor: 'white',
                    height: 5,
                    border: 0
                }}
                />
          </Header>
          <Content>
            <NarrowDown />
          </Content>
        </div>
    );
  }
  
  
  export default NarrowDownSearch;