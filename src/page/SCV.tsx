import React, { useState } from 'react';
import logo from './logo.svg';
import "../style/scv_ex.css";

import { Button, Card, Col, DatePicker, Divider, Input, Layout, Modal, Progress, Row, Tooltip} from 'antd';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import { FlowAnalysisGraph } from "@ant-design/graphs";
import { deepStrictEqual } from 'assert';

const { Header, Content } = Layout;

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

const SwitchView = () => {
    return (
        <>
        <div className='flex-row normal-lineheight'>
            <p className='margin-unset'>Supply chain view</p>
            <p className='margin-unset'>Product view</p>
        </div>
        </>
    )
}

const Detail = () => {
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
    <Button type="primary" onClick={showModal}>
                        Open Modal
    </Button>
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

const SCV_Ex = () => {
  
  const scvDataEx = [
    {
      farm: {
        head: {
          name: "Farm",
          number: "5"
        },
        data: [
          {
            owner: "Brandega foods",
            name: "Basil",
            detail: "1 farm",
            type: "color"
          },
          {
            owner: "Brandega foods",
            name: "None GMO Tomatoes",
            detail: "1 farm",
            type: "color"
          },
          {
            owner: "Brandega foods",
            name: "Whole Wheat Flour",
            detail: "1 farm",
            type: "color"
          },
          {
            owner: "Brandega foods",
            name: "Pure Olive Oil",
            detail: "1 farm",
            type: "color"
          },
          {
            owner: "Brandega foods",
            name: "Organic Whole Milk",
            detail: "1 farm",
            type: "color"
          }
        ]
      },
      distributionCenter: {
        head: {
          name: "Distribution Center",
          number: "1"
        },
        data: [
          {
            owner: "Brandega foods",
            name: "Organic Mozzarella Cheese",
            detail: "1 Distribution Center",
            type: "color"
          },
          {
            owner: "Brandega foods",
            name: "Organic Whole Milk",
            detail: "1 Distribution Center",
            type: "color"
          }
        ]
      },
      supplier: {
        head: {
          name: "Supplier",
          number: "1"
        },
        data: [
          {
            owner: "Brandega foods",
            name: "Whole Wheat Pizza Crust",
            detail: "1 Supplier",
            type: "color"
          },
          {
            owner: "Brandega foods",
            name: "Whole Wheat Flour",
            detail: "1 Supplier",
            type: "color"
          },
          {
            owner: "Brandega foods",
            name: "Pure Olive Oil",
            detail: "1 Supplier",
            type: "color"
          }
        ]
      },
      distributor: {
        head: {
          name: "Distributor",
          number: "1"
        },
        data: [
          {
            owner: "Brandega foods",
            name: "Tomato Puree",
            detail: "1 Distributor",
            type: "color"
          },
          {
            owner: "Brandega foods",
            name: "None GMO Tomatoes",
            detail: "1 Distributor",
            type: "color"
          }
        ]
      },
      manufacturerOfGoods: {
        head: {
          name: "Manufacturer of Goods",
          number: "1"
        },
        data: [
          {
            owner: "Brandega foods",
            name: "Whole Grain Mar Pizza",
            detail: "1 Manufacture of Goods",
            type: "color"
          },
          {
            owner: "Brandega foods",
            name: "Whole Wheat Flour",
            detail: "1 Manufacture of Goods",
            type: "color"
          },
          {
            owner: "Brandega foods",
            name: "Pure Olive Oil",
            detail: "1 Manufacture of Goods",
            type: "color"
          },
          {
            owner: "Brandega foods",
            name: "Whole Wheat Flour",
            detail: "1 Manufacture of Goods",
            type: "color"
          },
          {
            owner: "Brandega foods",
            name: "Whole Wheat Flour",
            detail: "1 Manufacture of Goods",
            type: "color"
          }
        ]
      },
      store: {
        head: {
          name: "Store",
          number: "1"
        },
        data: [
          {
            owner: "Brandega foods",
            name: "Whole Grain Mar Pizza",
            detail: "1 Store",
            type: "color"
          }
        ]
      },
    }
  ]

    return (
        <>
        <div className='bg-color-white'>
            <div className='flex-row-reverse'>
                <p>Expand all</p>
                <p>Collapse all</p>
            </div>
            <Row gutter={16} className='row-pd'>
                <Col span={4}>
                    <div className='bg-color-lightpink pd-out'>
                        <p className='margin-unset'>{scvDataEx[0].farm.head.name}</p>
                        <p className='big-number margin-unset'>{scvDataEx[0].farm.head.number}</p>
                    </div>
                    {scvDataEx[0].farm.data.map((d) => (
                      <div className='margin-top'>
                        <p className='margin-unset'>{d.owner}</p>
                        <div className='bg-color-lightblue left-pd'>
                            <div className='bg-color-lightpink pd-10'>
                                <div className='flex-row-reverse'>
                                    <DownOutlined />
                                </div>
                                <p className='margin-unset'>{d.name}</p>
                                <p className='margin-unset'>{d.detail}</p>
                            </div>
                        </div>
                      </div>
                    ))}
                </Col>
                <Col span={4}>
                    <div className='bg-color-lightpink pd-out'>
                        <p className='margin-unset'>{scvDataEx[0].distributionCenter.head.name}</p>
                        <p className='big-number margin-unset'>{scvDataEx[0].distributionCenter.head.number}</p>
                    </div>

                    <div className='margin-top'>
                        <p className='margin-unset'>Brandega foods</p>
                        <div className='bg-color-lightblue left-pd'>
                            <div className='bg-color-lightpink pd-10'>
                                <div className='flex-row-reverse'>
                                    <DownOutlined />
                                </div>
                                <p className='margin-unset'>Basil</p>
                                <p className='margin-unset'>1 Farm</p>
                            </div>
                        </div>
                    </div>
                    {scvDataEx[0].distributionCenter.data.map((d) => (
                      <div className='margin-top'>
                      <p className='margin-unset'>{d.owner}</p>
                      <div className='bg-color-lightblue left-pd'>
                          <div className='bg-color-lightpink pd-10'>
                              <div className='flex-row-reverse'>
                                  <DownOutlined />
                              </div>
                              <p className='margin-unset'>{d.name}</p>
                              <p className='margin-unset'>{d.detail}</p>
                          </div>
                      </div>
                      </div>
                    ))}
                    <Detail />
                </Col>
                <Col span={4}>
                    <div className='bg-color-lightpink pd-out'>
                        <p className='margin-unset'>{scvDataEx[0].supplier.head.name}</p>
                        <p className='big-number margin-unset'>{scvDataEx[0].supplier.head.number}</p>
                    </div>
                    {scvDataEx[0].supplier.data.map((d) => (
                      <div className='margin-top'>
                      <p className='margin-unset'>{d.owner}</p>
                      <div className='bg-color-lightblue left-pd'>
                          <div className='bg-color-lightpink pd-10'>
                              <div className='flex-row-reverse'>
                                  <DownOutlined />
                              </div>
                              <p className='margin-unset'>{d.name}</p>
                              <p className='margin-unset'>{d.detail}</p>
                          </div>
                      </div>
                    </div>
                    ))}
                </Col>
                <Col span={4}>
                    <div className='bg-color-lightpink pd-out'>
                        <p className='margin-unset'>{scvDataEx[0].distributor.head.name}</p>
                        <p className='big-number margin-unset'>{scvDataEx[0].distributor.head.number}</p>
                    </div>
                    {scvDataEx[0].distributor.data.map((d) => (
                      <div className='margin-top'>
                      <p className='margin-unset'>{d.owner}</p>
                      <div className='bg-color-lightblue left-pd'>
                          <div className='bg-color-lightpink pd-10'>
                              <div className='flex-row-reverse'>
                                  <DownOutlined />
                              </div>
                              <p className='margin-unset'>{d.name}</p>
                              <p className='margin-unset'>{d.detail}</p>
                          </div>
                      </div>
                      </div>
                    ))}
                </Col>
                <Col span={4}>
                    <div className='bg-color-lightpink pd-out'>
                        <p className='margin-unset'>{scvDataEx[0].manufacturerOfGoods.head.name}</p>
                        <p className='big-number margin-unset'>{scvDataEx[0].manufacturerOfGoods.head.number}</p>
                    </div>
                    {scvDataEx[0].manufacturerOfGoods.data.map((d) => (
                      <div className='margin-top'>
                      <p className='margin-unset'>{d.owner}</p>
                      <div className='bg-color-lightblue left-pd'>
                          <div className='bg-color-lightpink pd-10'>
                              <div className='flex-row-reverse'>
                                  <DownOutlined />
                              </div>
                              <p className='margin-unset'>{d.name}</p>
                              <p className='margin-unset'>{d.detail}</p>
                          </div>
                      </div>
                      </div>
                    ))}
                </Col>
                <Col span={4}>
                    <div className='bg-color-lightpink pd-out'>
                        <p className='margin-unset'>{scvDataEx[0].store.head.name}</p>
                        <p className='big-number margin-unset'>{scvDataEx[0].store.head.number}</p>
                    </div>
                    {scvDataEx[0].store.data.map((d) => (
                      <div className='margin-top'>
                      <p className='margin-unset'>{d.owner}</p>
                      <div className='bg-color-lightblue left-pd'>
                          <div className='bg-color-lightpink pd-10'>
                              <div className='flex-row-reverse'>
                                  <DownOutlined />
                              </div>
                              <p className='margin-unset'>{d.name}</p>
                              <p className='margin-unset'>{d.detail}</p>
                          </div>
                      </div>
                      </div>
                    ))}
                </Col>

            </Row>
        </div>
        </>
    )
}

const SCV_Co = () => {
  const scvDataCo = [
    {
      farm: {
        head: {
          name: "Farm",
          number: "5"
        },
        data: [
          {
            owner: "Brandega foods",
            name: "Basil",
            detail: "1 farm",
            type: "color",
            child: [
              {name: "Happy Acres Farm"}
            ]
          }
        ]
      },
      manufacturerOfGoods: {
        head: {
          name: "Manufacturer of Goods",
          number: "1"
        },
        data: [
          {
            owner: "Brandega foods",
            name: "Whole Grain Mar Pizza",
            detail: "1 Manufacture of Goods",
            type: "color",
            child: [
              {name: "Brandega Food Pizza"}
              
            ]
          },
          {
            owner: "Brandega foods",
            name: "Basil",
            detail: "1 Manufacture of Goods",
            type: "color",
            child: [
              {name: "Brandega Food Pizza"}
            ]
          }
        ]
      },
      store: {
        head: {
          name: "Store",
          number: "5"
        },
        data: [
          {
            owner: "Brandega foods",
            name: "Whole Grain Mar Pizza",
            detail: "5 Store",
            type: "color",
            child: [
              {name: "Pizza Store #2"},
              {name: "Pizza Store #4"},
              {name: "Pizza Store"},
              {name: "Pizza Store #5"},
              {name: "Pizza Store #3"}
            ]
          }
        ]
      },
    }
  ]

    return (
        <>
        <div className='bg-color-white'>
            <div className='flex-row-reverse'>
                <p>Expand all</p>
                <p>Collapse all</p>
            </div>
            <Row gutter={16} className='row-pd'>
                <Col span={5}>
                    <div className='bg-color-lightpink pd-out'>
                        <p className='margin-unset'>{scvDataCo[0].farm.head.name}</p>
                        <p className='big-number margin-unset'>{scvDataCo[0].farm.head.number}</p>
                    </div>

                    <div className='margin-top'>
                        <p className='margin-unset'>Brandega foods</p>
                        <div className='bg-color-lightblue left-pd'>
                            <div className='bg-color-lightpink pd-10'>
                                <div className='flex-row-reverse'>
                                    <DownOutlined />
                                </div>
                                <p className='margin-unset'>Basil</p>
                                <p className='margin-unset'>1 Farm</p>
                            </div>
                        </div>
                    </div>

                    {scvDataCo[0].farm.data.map((d) => (
                      <div className='margin-top'>
                        <p className='margin-unset'>{d.owner}</p>
                        <div className='bg-color-lightblue left-pd'>
                            <div className='bg-color-lightpink pd-10'>
                                <div className='flex-row-reverse'>
                                    <DownOutlined />
                                </div>
                                <p className='margin-unset'>{d.name}</p>
                                <p className='margin-unset'>{d.detail}</p>
                            </div>
                        </div>
                        {d.child.map((c) => (
                          <div className='bg-color-lightpink pd-10 mg-10'>
                            <p className='margin-unset'>{c.name}</p>
                          </div>
                        ))}
                      </div>
                    ))}
                </Col>
                <Col span={5}>
                    <div className='bg-color-lightpink pd-out'>
                        <p className='margin-unset'>{scvDataCo[0].manufacturerOfGoods.head.name}</p>
                        <p className='big-number margin-unset'>{scvDataCo[0].manufacturerOfGoods.head.number}</p>
                    </div>
                    {scvDataCo[0].manufacturerOfGoods.data.map((d) => (
                      <div className='margin-top'>
                      <p className='margin-unset'>{d.owner}</p>
                      <div className='bg-color-lightblue left-pd'>
                          <div className='bg-color-lightpink pd-10'>
                              <div className='flex-row-reverse'>
                                  <DownOutlined />
                              </div>
                              <p className='margin-unset'>{d.name}</p>
                              <p className='margin-unset'>{d.detail}</p>
                          </div>
                      </div>
                      {d.child.map((c) => (
                        <div className='bg-color-lightpink pd-10 mg-10'>
                          <p className='margin-unset'>{c.name}</p>
                        </div>
                      ))}
                      </div>
                    ))}
                </Col>
                <Col span={5}>
                    <div className='bg-color-lightpink pd-out'>
                        <p className='margin-unset'>{scvDataCo[0].store.head.name}</p>
                        <p className='big-number margin-unset'>{scvDataCo[0].store.head.number}</p>
                    </div>
                    {scvDataCo[0].store.data.map((d) => (
                      <div className='margin-top'>
                      <p className='margin-unset'>{d.owner}</p>
                      <div className='bg-color-lightblue left-pd'>
                          <div className='bg-color-lightpink pd-10'>
                              <div className='flex-row-reverse'>
                                  <DownOutlined />
                              </div>
                              <p className='margin-unset'>{d.name}</p>
                              <p className='margin-unset'>{d.detail}</p>
                          </div>
                      </div>
                      {d.child.map((c) => (
                        <div className='bg-color-lightpink pd-10 mg-10'>
                          <p className='margin-unset'>{c.name}</p>
                        </div>
                      ))}
                      </div>
                    ))}
                </Col>
            </Row>
        </div>
        </>
    )
}

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

const PV = () => {
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


function SCV() {
    return (
        <Layout className='pd-out'>
          <Header className='bg-color-white custom'>
              <div className='pd-out'>
                <div className='flex-between'>
                    <h1 className='logo'>Trace</h1>
                    <div>
                        <Button type="primary">
                            Clear
                        </Button>
                        <Button type="default">
                            Trace
                        </Button>
                    </div>
                </div>
                <HeaderData />
                <div>
                <Tooltip title="3 done / 3 in progress / 4 to do">
                  <Progress percent={60} success={{ percent: 30 }} />
                </Tooltip>
                </div>
                <SwitchView />
              </div>
          </Header>
          <Content className='pd-out'> 
                <SCV_Ex />
                {/* <SCV_Co /> */}
                {/* <PV /> */}
          </Content>
        </Layout>
    );
  }
  
  
  export default SCV;