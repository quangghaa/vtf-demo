import React, { createContext, useContext, useEffect, useState } from 'react';
import logo from './logo.svg';
import '../style/dashboard.css';
import '../style/searchOptions.css';
import "../style/narrowDownSearch.css";
import "../style/scv_ex.css";
import { Button, Card, Cascader, Checkbox, DatePicker, Divider, Input, Layout, Modal, Progress, Radio, Space, Table, Tooltip} from 'antd';
import { Row, Col } from 'antd';
import { FlowAnalysisGraph, Line } from '@ant-design/charts';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import NarrowDownSearch from './NarrowDownSearch';
import { Link, Route, Routes } from 'react-router-dom';
import useFetch from '../hook/useFetch';

const { Header, Content } = Layout;

const { Search } = Input;


const Options = (props: any) => {
    const hint = [
        {
            icon: "ICON",
            name: "Accepted product identifiers:",
            hints: [
                {content: "14 digit GS-1 Global Trade Item Number (GTIN)"},
                {content: "12 digit Universal Product Code (UPC)"},
                {content: "8 difit Universal Product Code (UPC)"},
                {content: "VN Trust Food assigned product ID. If you can't remember the whole number, just type in '.12345' for example"}
            ]
        }
    ];

    const [rsList, setRsList] = useState([
        {
            id: "",
            ID: "",
            PO: "",
            name: "",
            owner: ""
        }
    ]);

    useEffect(() => {
        setRsList([]);
    }, [props.clear]);

    const [url, setUrl] = useState("");

    const {loading, error, data} = useFetch(url);
    console.log("DEBUG:", data);

      useEffect(() => {
        if(data != null) setRsList(data);
      }, [data]);

    const orderHint = [
        {
            icon: "Icon--",
            name: "To trace a lot number for a shipped product and known PO number",
            detail: "If you do not have a PO number, use a date range to search for POs by expected delivery dates."
        }
    ]

    const searchByName = (value: any, event: any) => {
        console.log("CLicked", value);

        const url = "https://demo.uiza.vn/products" + "?" + "name=" + value.trim();
        setUrl(url);
        console.log("URL set: ", url);
    }

    const [state, setState] = useState(1);
    
    const onChange = (e: any) => {
        console.log('radio checked', e.target.value);
        setState(e.target.value);
    };

    // const handleTrace = () => {
    //   if(rsList.length > 0) {
    //     const productName = rsList[0].name;
    //     setProduct(productName);
    //     console.log("Done set ", productName);
    //     props.func();
    //   }
    // }

    return (
        <>
        <div>
            <div className='flex-between'>
                <b>Choose the product to trace using one of the options below</b>
                <div>
                    <span>icon</span>
                    <p>Doc: Trace</p>
                </div>
            </div>
        </div>
        <Row gutter={16}>
            <Col span={8}> 
                <Card>
                    <p>Product Identication number</p>
                    <Search
                        placeholder="Enter product ID"
                        allowClear
                        enterButton="Find"
                    />
                    {hint.map((data) => (
                        <>
                        <p><span>{data.icon}</span>{data.name}</p>
                        <ul>
                            {data.hints.map((h) => (
                                <li>{h.content}</li>
                            ))}
                        </ul>
                        </>
                    ))}
                </Card>
            </Col>
            <Col span={8}>
                <Card>
                    <p>Product name</p>
                    <Search placeholder="input search text" allowClear onSearch={(value, event) => searchByName(value, event)} />
                    <p>{rsList.length} Product found with the above name</p>
                    {rsList.map((data, i) => (
                        <>
                        <Divider />
                        <Radio.Group onChange={onChange} value={state}>
                            <Space direction="vertical">
                                <Radio value={i+1}>
                                    <div>
                                        <p>{data.ID}</p>
                                        <p>{data.name}</p>
                                        <p>{data.owner}</p>
                                    </div>
                                </Radio>
                            </Space>
                        </Radio.Group>
                        <br />
                        </>
                    ))}
                    <Button type="primary">
                      <Link to='/narrowing-down'>
                          Use this product
                      </Link>
                    </Button>
                </Card>
            </Col>
            <Col span={8}>
                <Card>
                    <p>Purchase order</p>
                    <Search
                        placeholder="Enter product PO number"
                        allowClear
                        enterButton="Find"
                    />
                    
                    {orderHint.map((data) => (
                        <>
                            <p><span>{data.icon}</span>{data.name}</p>
                            <p>{data.detail}</p>
                        </>
                    ))}
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
                    <Button type="primary">Find purchase order</Button>
                </Card>
            </Col>
        </Row>
        </>
    )
}

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
                    <>
                      <span className='prettier'>{d.name}</span>
                      <span className='mg-left prettier'>{d.dateRange}</span>
                      <span className='mg-left prettier'>{d.event}</span>
                      <span className='mg-left prettier'>{d.lot}</span>
                    </>
                  ))}
        </div>
    )
}

const Block = (props: any) => {
  const [showChild, setShowChild] = useState(false);

  const handleClick = () => {
    setShowChild(!showChild);
  }

  const [isModalVisible, setIsModalVisible] = useState(false);
  
    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const handleOk = () => {
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };

  const Detail = () => {
    
    const headerData = [
      {
        product: {
          title: "Product",
          name: "Organic Whole MIlk"
        }, 
        facility: {
          title: "Facility name",
          name: "Migilor Formaggio"
        },
        other: {
          facilityType: {
            title: "Facility type",
            name: "Distribution Center"
          },
          location: {
            title: "Location",
            name: "Padua, Italy"
          },
          facilityOwner: {
            title: "Facility Owner",
            name: "Brandega foods"
          }
        }
      }
    ];
  
    const documentData = [
      {
        title: "Facility certificates and documents",
        data: [
          {
            icon: "I1",
            name: "Migilor formaggio Organic Certificate",
            type: "Generic Certificate",
            expireDate: "Expiring on: 04/28/2021"
          },
          {
            icon: "I2",
            name: "Migilor formaggio SQF Level 2",
            type: "SQF",
            expireDate: "Expiring on: 09/10/2021"
          },
        ]
      }
    ]
    
    return (
      <>
      <Modal
                          title=""
                          visible={isModalVisible}
                          onOk={handleOk}
                          onCancel={handleCancel}
                          width={1200}>
                          <Row gutter={8}>
                            <Col span={7} className='bg-color-lightpink pd'>
                              <div className='full-w-h bg-color-white'>
                                <p>{headerData[0].product.title}</p>
                                <p>{headerData[0].product.name}</p>
                              </div>
                              
                            </Col>
                            <Col span={7} className='bg-color-lightpink pd'>
                              <div className='full-w-h bg-color-white'>
                                <p>{headerData[0].facility.title}</p>
                                <p>{headerData[0].facility.name}</p>
                              </div>
                              
                            </Col>
                            <Col span={10}>
                                <Row>
                                  <Col span={8}>
                                    <p>{headerData[0].other.facilityType.title}</p>
                                    <p>{headerData[0].other.facilityType.name}</p>
                                  </Col>
                                  <Col span={8}>
                                    <p>{headerData[0].other.location.title}</p>
                                    <p>{headerData[0].other.location.name}</p>
                                  </Col>
                                  <Col span={8}>
                                    <p>{headerData[0].other.facilityOwner.title}</p>
                                    <p>{headerData[0].other.facilityOwner.name}</p>
                                  </Col>
                                </Row>
                            </Col>
                          </Row>
  
                          <div className='modal-menu'>
                            <ul>
                              <li>All activities</li>
                              <li>Observation</li>
                              <li>Transformation</li>
                              <li>Other documents</li>
                            </ul>
                          </div>
  
                          <Divider />
  
                          <div className='modal-content'>
                            <div className='flex-between'>
                              <p>{documentData[0].title}</p>
                              <UpOutlined />
                            </div>
                            
                            <Row gutter={16}>
                              {documentData[0].data.map((d) => (
                                <Col span={8}>
                                <div className='flex-row'>
                                  <p>{d.icon}</p>
                                  <div>
                                    <p>{d.name}</p>
                                    <p>{d.type}</p>
                                    <p>{d.expireDate}</p>
                                  </div>
                                </div>
                                </Col>
                              ))}
                            </Row>
                          </div>
      </Modal>
      </>
    )
  }

  return (
    <>
    <div className='margin-top' onClick={handleClick}>
                      <p className='margin-unset'>Brandega foods</p>
                      <div className='left-pd' style={{backgroundColor: props.data.color}}>
                          <div className='bg-color-lightpink pd-10'>
                              <div className='flex-row-reverse'>
                                  <DownOutlined />
                              </div>
                              <p className='margin-unset'>{props.data.name}</p>
                              <p className='margin-unset'>1 Farm</p>
                          </div>
                      </div>
                    </div>
    {showChild ? <div className='pd-10'>
      {props.data.child.map((c: any) => (
        <>
        <p className='bg-color-lightpink margin-unset mg-10' onClick={showModal}>{c.name}</p>
        <Detail />
        </>
      ))}
      
    </div> : <></> }
    </>
  )
}

const SCV_Ex = () => {
    
    const dataForm = [
      {
        productName: "",
        startDate: "",
        endDate: "",
        farm: [
          {
            name: "",
            color: "",
          }
        ],
        disCen: [
          {
            name: "",
            color: "",
          }
        ],
        sup: [
          {
            name: "",
            color: "",
          }
        ],
        dis: [
          {
            name: "",
            color: "",
          }
        ],
        maGo: [
          {
            name: "",
            color: "",
          }
        ],
        store: [
          {
            name: "",
            color: "",
          }
        ]
      }
    ]

    const [showData, setShowData] = useState([
      {
        productName: "",
        startDate: "",
        endDate: "",
        farm: [
          {
            name: "",
            color: "",
            child: [
              {name: ""}
            ]
          }
        ],
        disCen: [
          {
            name: "",
            color: "",
            child: [
              {name: ""}
            ]
          }
        ],
        sup: [
          {
            name: "",
            color: "",
            child: [
              {name: ""}
            ]
          }
        ],
        dis: [
          {
            name: "",
            color: "",
            child: [
              {name: ""}
            ]
          }
        ],
        maGo: [
          {
            name: "",
            color: "",
            child: [
              {name: ""}
            ]
          }
        ],
        store: [
          {
            name: "",
            color: "",
            child: [
              {name: ""}
            ]
          }
        ]
      }
    ]);

    const {loading, error, data} = useFetch("https://demo.uiza.vn/ingredients");

    // Logic
    useEffect(() => {
      if(data != null) {
        let list = [
          {
            id: 0,
            ID: "",
            name: "",
            color: "",
            product: {
              name: ""
            },
            farms: [],
            distribution_centers: [],
            suppliers: [],
            distributors: [],
            manufacturer_of_goods: [],
            stores: []
          }
        ];
        list = data;

        let farms = [];
        let disCens = [];
        let sups = [];
        let dists = [];
        let maGos = [];
        let stores = [];
  
        for(let i = 0; i < list.length; i++) {
          if(list[i].farms.length > 0) farms.push({name: list[i].name, color: list[i].color, child: list[i].farms});
          if(list[i].distribution_centers.length > 0) disCens.push({name: list[i].name, color: list[i].color, child: list[i].distribution_centers});
          if(list[i].suppliers.length > 0) sups.push({name: list[i].name, color: list[i].color, child: list[i].suppliers});
          if(list[i].distributors.length > 0) dists.push({name: list[i].name, color: list[i].color, child: list[i].distributors});
          if(list[i].manufacturer_of_goods.length > 0) maGos.push({name: list[i].name, color: list[i].color, child: list[i].manufacturer_of_goods});
          if(list[i].stores.length > 0) stores.push({name: list[i].name, color: list[i].color, child: list[i].stores});
        }
  
        let rs = [
          {
            productName: list[0].product.name,
            startDate: "",
            endDate: "",
            farm: farms,
            disCen: disCens,
            sup: sups,
            dis: dists,
            maGo: maGos,
            store: stores
          }
        ];
        setShowData(rs as any);
      }
    }, [data]);

    console.log("SHOW ME DATA:", showData);
    
      return (
          <>
              <Row gutter={16} className='row-pd'>
                  <Col span={4}>
                      <div className='bg-color-lightpink pd-out'>
                          <p className='margin-unset'>Farm</p>
                          <p className='big-number margin-unset'>{showData[0].farm.length}</p>
                      </div>
                      {showData[0].farm.map((d) => (                       
                        <Block data={d} />
                      ))}
                  </Col>
                  <Col span={4}>
                      <div className='bg-color-lightpink pd-out'>
                          <p className='margin-unset'>Distribution Center</p>
                          <p className='big-number margin-unset'>{showData[0].disCen.length}</p>
                      </div>
                      {showData[0].disCen.map((d) => (
                        <Block data={d} />
                      ))}
                  </Col>
                  <Col span={4}>
                      <div className='bg-color-lightpink pd-out'>
                          <p className='margin-unset'>Supplier</p>
                          <p className='big-number margin-unset'>{showData[0].sup.length}</p>
                      </div>
                      {showData[0].sup.map((d) => (
                        <Block data={d} />
                      ))}
                  </Col>
                  <Col span={4}>
                      <div className='bg-color-lightpink pd-out'>
                          <p className='margin-unset'>Distributor</p>
                          <p className='big-number margin-unset'>{showData[0].dis.length}</p>
                      </div>
                      {showData[0].dis.map((d) => (
                        <Block data={d} />
                      ))}
                  </Col>
                  <Col span={4}>
                      <div className='bg-color-lightpink pd-out'>
                          <p className='margin-unset'>Manufacturer of goods</p>
                          <p className='big-number margin-unset'>{showData[0].maGo.length}</p>
                      </div>
                      {showData[0].maGo.map((d) => (
                        <Block data={d} />
                      ))}
                  </Col>
                  <Col span={4}>
                      <div className='bg-color-lightpink pd-out'>
                          <p className='margin-unset'>Store</p>
                          <p className='big-number margin-unset'>{showData[0].store.length}</p>
                      </div>
                      {showData[0].store.map((d) => (
                        <Block data={d} />
                      ))}
                  </Col>
  
              </Row>
          </>
      )
}
  
const SCV_Co = () => {

  const dataForm = [
    {
      productName: "",
      startDate: "",
      endDate: "",
      farm: [
        {
          name: "",
          color: "",
        }
      ],
      disCen: [
        {
          name: "",
          color: "",
        }
      ],
      sup: [
        {
          name: "",
          color: "",
        }
      ],
      dis: [
        {
          name: "",
          color: "",
        }
      ],
      maGo: [
        {
          name: "",
          color: "",
        }
      ],
      store: [
        {
          name: "",
          color: "",
        }
      ]
    }
  ]

  const [showData, setShowData] = useState([
    {
      productName: "",
      startDate: "",
      endDate: "",
      farm: [
        {
          name: "",
          color: "",
          child: [
            {name: ""}
          ]
        }
      ],
      disCen: [
        {
          name: "",
          color: "",
          child: [
            {name: ""}
          ]
        }
      ],
      sup: [
        {
          name: "",
          color: "",
          child: [
            {name: ""}
          ]
        }
      ],
      dis: [
        {
          name: "",
          color: "",
          child: [
            {name: ""}
          ]
        }
      ],
      maGo: [
        {
          name: "",
          color: "",
          child: [
            {name: ""}
          ]
        }
      ],
      store: [
        {
          name: "",
          color: "",
          child: [
            {name: ""}
          ]
        }
      ]
    }
  ]);

  const {loading, error, data} = useFetch("https://demo.uiza.vn/ingredients");

  // Logic
  useEffect(() => {
    if(data != null) {
      let list = [
        {
          id: 0,
          ID: "",
          name: "",
          color: "",
          product: {
            name: ""
          },
          farms: [],
          distribution_centers: [],
          suppliers: [],
          distributors: [],
          manufacturer_of_goods: [],
          stores: []
        }
      ];
      list = data;

      let farms = [];
      let disCens = [];
      let sups = [];
      let dists = [];
      let maGos = [];
      let stores = [];

      for(let i = 0; i < list.length; i++) {
        if(list[i].farms.length > 0) farms.push({name: list[i].name, color: list[i].color, child: list[i].farms});
        if(list[i].distribution_centers.length > 0) disCens.push({name: list[i].name, color: list[i].color, child: list[i].distribution_centers});
        if(list[i].suppliers.length > 0) sups.push({name: list[i].name, color: list[i].color, child: list[i].suppliers});
        if(list[i].distributors.length > 0) dists.push({name: list[i].name, color: list[i].color, child: list[i].distributors});
        if(list[i].manufacturer_of_goods.length > 0) maGos.push({name: list[i].name, color: list[i].color, child: list[i].manufacturer_of_goods});
        if(list[i].stores.length > 0) stores.push({name: list[i].name, color: list[i].color, child: list[i].stores});
      }

      let rs = [
        {
          productName: list[0].product.name,
          startDate: "",
          endDate: "",
          farm: farms,
          disCen: disCens,
          sup: sups,
          dis: dists,
          maGo: maGos,
          store: stores
        }
      ];
      setShowData(rs as any);
    }
  }, [data]);

      return (
          <>
              <Row gutter={16} className='row-pd'>
                  <Col span={5}>
                    <div className='bg-color-lightpink pd-out'>
                          <p className='margin-unset'>Farm</p>
                          <p className='big-number margin-unset'>{showData[0].farm.length}</p>
                      </div>
                      {showData[0].farm.map((d) => (                       
                        <Block data={d} />
                      ))}
                  </Col>
                  <Col span={5}>
                    <div className='bg-color-lightpink pd-out'>
                          <p className='margin-unset'>Manufacturer of goods</p>
                          <p className='big-number margin-unset'>{showData[0].maGo.length}</p>
                      </div>
                      {showData[0].maGo.map((d) => (                       
                        <Block data={d} />
                      ))}
                  </Col>
                  <Col span={5}>
                    <div className='bg-color-lightpink pd-out'>
                          <p className='margin-unset'>Store</p>
                          <p className='big-number margin-unset'>{showData[0].store.length}</p>
                      </div>
                      {showData[0].store.map((d) => (                       
                        <Block data={d} />
                      ))}
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

const SCVType = (props: any) => {
  return (
    <div className='flex-row-reverse'>
                  <p onClick={props.ex}>Expand all</p>
                  <p className='mg-right' onClick={props.co}>Collapse all</p>
    </div>
  )
}

const SCV = () => {
  const [isEx, setIsEx] = useState(true);

  const toEx = () => {
    setIsEx(true);
    console.log("Change to EX");
  }

  const toCo = () => {
    setIsEx(false);
    console.log("Change to CO");
  }   

  return (
    <>
    <div className='bg-color-white'>
      <SCVType ex={toEx} co={toCo} />
      {isEx ? <SCV_Ex /> : <SCV_Co /> }
    </div>
    </>
  )
}

const PV = () => {
  const data = {
    nodes: [
      {
        id: "-3",
        value: {
          title: "title -3",
          items: [
            {
                text: "item -3",
                value: "10.30",
                icon:
                  "https://gw.alipayobjects.com/zos/antfincdn/iFh9X011qd/7797962c-04b6-4d67-9143-e9d05f9778bf.png"
              }
          ]
        }
      },
      {
        id: "-2",
        value: {
          title: "title -2",
          items: [
            {
              text: "item -2",
              value: "10.30",
              icon:
                "https://gw.alipayobjects.com/zos/antfincdn/iFh9X011qd/7797962c-04b6-4d67-9143-e9d05f9778bf.png"
            }
          ]
        }
      },
      {
        id: "-1",
        value: {
          title: "title -1",
          items: [
            {
              text: "item -1"
            }
          ]
        }
      },
      {
        id: "0",
        value: {
          title: "title 0",
          items: [
            {
              text: "item 0"
            }
          ]
        }
      },
      {
        id: "1",
        value: {
          title: "title 1",
          items: [
            {
              text: "item 1"
            }
          ]
        }
      },
      {
        id: "2",
        value: {
          title: "title 2",
          items: [
            {
              text: "item 2"
            }
          ]
        }
      },
      {
        id: "3",
        value: {
          title: "title 3",
          items: [
            {
              text: "item 3"
            }
          ]
        }
      },
      {
        id: "4",
        value: {
          title: "title 4",
          items: [
            {
              text: "item 4"
            }
          ]
        }
      },
      {
        id: "5",
        value: {
          title: "title 5",
          items: [
            {
              text: "item 5"
            }
          ]
        }
      },
      {
        id: "6",
        value: {
          title: "title 6",
          items: [
            {
              text: "item 6"
            }
          ]
        }
      },
      {
        id: "6",
        value: {
          title: "title 7",
          items: [
            {
              text: "item 7"
            }
          ]
        }
      },
      {
        id: "7",
        value: {
          title: "title 7",
          items: [
            {
              text: "item 7"
            }
          ]
        }
      },
      {
        id: "8",
        value: {
          title: "title 8",
          items: [
            {
              text: "item 8"
            }
          ]
        }
      }
    ],
    edges: [
      {
        source: "-3",
        target: "0",
        value: ""
      },
      {
        source: "-2",
        target: "0",
        value: ""
      },
      {
        source: "-1",
        target: "0",
        value: ""
      },
      {
        source: "0",
        target: "1"
      },
      {
        source: "0",
        target: "2"
      },
      {
        source: "0",
        target: "3"
      },
      {
        source: "0",
        target: "4"
      },
      {
        source: "0",
        target: "5"
      },
      {
        source: "2",
        target: "6"
      },
      {
        source: "3",
        target: "7"
      },
      {
        source: "4",
        target: "8"
      }
    ]
  };
  const config = {
    data,
    nodeCfg: {
      size: [140, 25],
      badge: {
        style: (cfg: any) => {
          const ids = ["-3", "-2", "-1"];
          const fill = ids.includes(cfg.id) ? "#c86bdd" : "#5ae859";
          return {
            fill,
            // radius: [2, 0, 0, 2]
            radius: 2
          };
        }
      },
      items: {
        padding: 6,
        containerStyle: {
          fill: "#fff"
        },
        style: (cfg: any, group: any, type: any) => {
          const styles = {
            icon: {
              width: 12,
              height: 12
            },
            value: {
              fill: "#f00"
            },
            text: {
              fill: "#aaa"
            }
          };
          return styles.value;
        }
      },
      nodeStateStyles: {
        hover: {
          stroke: "#1890ff",
          lineWidth: 2
        }
      },
      title: {
        containerStyle: {
          fill: "transparent"
        },
        style: {
          fill: "#000",
          fontSize: 12
        }
      },
      style: {
        fill: "#E6EAF1",
        stroke: "#B2BED5",
        // radius: [2, 2, 2, 2]
        radius: 2
      }
    },
    edgeCfg: {
      label: {
        style: {
          fill: "#aaa",
          fontSize: 12,
          fillOpacity: 1
        }
      },
      style: (edge: any) => {
        const stroke = edge.target === "0" ? "#c86bdd" : "#5ae859";
        return {
          stroke,
          lineWidth: 1,
          strokeOpacity: 0.5
        };
      },
      edgeStateStyles: {
        hover: {
          lineWidth: 2,
          strokeOpacity: 1
        }
      }
    },
    markerCfg: (cfg: any) => {
      const { edges } = data;
      return {
        position: 'right' as const,
        show: true,
        collapsed: true
      };
    },
    behaviors: ["drag-canvas", "zoom-canvas", "drag-node"]
  };

  return (
      <>
      <Row gutter={16}>
          <Col span={4}>
              <div className='bg-color-white pd-out mg-bot'>
                  <p className='margin-unset'>Farm</p>
                  <p className='big-number margin-unset'>5</p>
              </div>
              <div className='bg-color-white pd-out mg-bot'>
                  <p className='margin-unset'>Farm</p>
                  <p className='big-number margin-unset'>5</p>
              </div>
              <div className='bg-color-white pd-out mg-bot'>
                  <p className='margin-unset'>Farm</p>
                  <p className='big-number margin-unset'>5</p>
              </div>
              <div className='bg-color-white pd-out mg-bot'>
                  <p className='margin-unset'>Farm</p>
                  <p className='big-number margin-unset'>5</p>
              </div>
              <div className='bg-color-white pd-out mg-bot'>
                  <p className='margin-unset'>Farm</p>
                  <p className='big-number margin-unset'>5</p>
              </div>
              <div className='bg-color-white pd-out mg-bot'>
                  <p className='margin-unset'>Farm</p>
                  <p className='big-number margin-unset'>5</p>
              </div>
          </Col>

          <Col span={20}>
              <FlowAnalysisGraph {...config} />
          </Col>
      </Row>
      </>
  )
}

function SearchOptions() {
    const [clear, setClear] = useState(0);

    const clearClicked = () => {
      setClear(clear => clear + 1);
    }

    const [view, setView] = useState("search");

    const toNarrow = () => {
        setView("narrow");
        console.log("Change to narrow search");
    }

    const toSCV = () => {
        setView("scv");
        console.log("Change to SCV");
    }

    const toPv = () => {
      setView("pv");
      console.log("Change to product view");
    }
 
    const render = () => {
        switch(view) {

          case "search":   return <Options func={toSCV} clear={clear}/>;
          case "narrow":   return <NarrowDownSearch />;
          case "scv": return <SCV />;
          case "pv": return <PV />;

          default:      return <Options func={toNarrow} clear={clear}/>
        }
    }

    return (
        <div className='pd-out'>
          <Header className='bg-color-unset custom'>
              <div className='flex-between'>
                <h1 className='logo'>Trace</h1>

                <div>
                    <Button type="primary" onClick={clearClicked}>
                        Clear
                    </Button>
                    <Button type="default" onClick={toSCV}>
                        Trace
                    </Button>
                </div>
              </div>
              {view != "search" ? <HeaderData /> : <></>}
              { view ==="scv" || view ==="pv" ? <>
                  <Tooltip title="3 done / 3 in progress / 4 to do">
                    <Progress percent={60} success={{ percent: 30 }} />
                  </Tooltip>
                  <SwitchView funcA={toSCV} funcB={toPv} />
                </> : <></> }
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
                {render()}
          </Content>
        </div>
    );
  }
  
  
  export default SearchOptions;