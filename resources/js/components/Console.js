import reqwest from "reqwest";
import {
    Alert, AutoComplete, Badge,
    Button, Card, Col, Collapse,
    DatePicker,
    Descriptions, Divider,
    Drawer,
    Form,
    Input, InputNumber, message,
    PageHeader, Popconfirm,
    Popover,
    Radio, Row, Select,
    Skeleton, Space,
    Tag,Tooltip,Progress,Statistic,Timeline,Modal,notification

} from "antd";
import MonacoEditor from "react-monaco-editor/lib/editor";
import { Typography, } from 'antd';

const { Text, Link ,Paragraph} = Typography;
import { MinusCircleOutlined,
    PlusOutlined,
    EditOutlined,
    FormOutlined,
    UserOutlined,
    ApartmentOutlined,
    DeleteOutlined,
    SaveOutlined,
    CloseOutlined,
    CheckOutlined,
    StockOutlined,
    SolutionOutlined,
    SmileOutlined,
    FrownOutlined,
    CalendarOutlined,
    IdcardOutlined,
    DashboardOutlined
} from '@ant-design/icons';
import React from 'react';
import stringRandom from "string-random";
import {handleErr} from "../helper";
class Console extends React.Component{
    constructor(props) {
        super(props);
    }
    state={
        status:null,
        maintainVisible:false,
        maintainLoading: false,
        secret: null,
        codeVisible:false,
        code:'',
        loadCode:false
    }
    componentDidMount() {
        reqwest({
            url:'/api/1.0/console/status',
            type:'json',

        }).then((status)=>{
            this.setState({
                status:status
            })
        })
    }

    render() {
        return(
            <>
                <Row gutter={24}>
                    <Col span={8}>
                        <Space direction={'vertical'} size={'large'} style={{width:'100%'}}>
                            <Card title={'教师管理'}>
                                <Space direction={'horizontal'} size={'large'}>
                                    <Progress type="dashboard" percent={
                                        this.state.status?this.state.status.dataPercent:0
                                    } />
                                    <Space direction={'vertical'}>
                                        <Statistic title="注册教师" value={
                                            this.state.status?this.state.status.teacherCount:0
                                        } />
                                        <Statistic title="需要补充数据" value={
                                            this.state.status?this.state.status.errCount:0
                                        } />
                                    </Space>
                                </Space>
                            </Card>
                            <Card title={'服务器管理'}>
                                <Row gutter={16}>
                                    <Col span={12}>
                                        <Space size={'small'} direction={'vertical'}>
                                            <Button danger onClick={()=>{
                                                reqwest({
                                                    url:'/api/1.0/console/artisan',
                                                    data: {
                                                        cmd: 'up',
                                                    },
                                                    type:'json'
                                                }).then((msg)=>{
                                                    message.success('已退出维护状态。')
                                                    this.setState({
                                                        maintainVisible:false
                                                    })
                                                },(err)=>{
                                                    handleErr(err)
                                                })
                                            }}>退出维护状态</Button>
                                            <Button><a href="/phpmyadmin">管理数据库</a></Button>
                                            <Button onClick={()=>{
                                                reqwest({
                                                    url:'/api/1.0/console/artisan',
                                                    data: {
                                                        cmd: 'clear',
                                                    },
                                                    type:'json'
                                                }).then((msg)=>{
                                                    message.success('已清除缓存。')
                                                    this.setState({
                                                        maintainVisible:false
                                                    })
                                                },(err)=>{
                                                    handleErr(err)
                                                })
                                            }}>清除缓存</Button>
                                        </Space>
                                    </Col>
                                    <Col span={12}>
                                        <Space size={'small'} direction={'vertical'}>

                                            <Button danger onClick={()=>{
                                                this.setState({
                                                    maintainVisible:true
                                                })
                                            }}>进入维护状态</Button>
                                            <Button onClick={()=>{
                                                reqwest({
                                                    url:'/api/1.0/console/artisan',
                                                    data: {
                                                        cmd: 'cache',
                                                    },
                                                    type:'json'
                                                }).then((msg)=>{
                                                    message.success('已建立缓存。')
                                                    this.setState({
                                                        maintainVisible:false
                                                    })
                                                },(err)=>{
                                                    handleErr(err)
                                                })
                                            }}>建立缓存</Button>
                                            <Button><a href="/logs">查看系统日志</a></Button>
                                        </Space>
                                    </Col>
                                </Row>
                            </Card>
                        </Space>
                    </Col>
                    <Col span={8}>
                        <Space direction={'vertical'} size={'large'} style={{width:'100%'}}>
                            <Card title={'用户管理'}>
                                <Statistic title="用户数" value={
                                    this.state.status?this.state.status.userCount:0
                                } />
                                <Statistic title="绑定的教师数" value={
                                    this.state.status?this.state.status.bindCount:0
                                } />
                            </Card>
                            <Card title={'业务管理'}>
                                <Row gutter={16}>
                                    <Col span={12}>
                                        <Space size={'small'} direction={'vertical'}>
                                            <Button
                                                onClick={()=>{
                                                    this.setState({
                                                        loadCode:true,
                                                    })
                                                    reqwest({
                                                        url:'/api/1.0/all_config',
                                                        //type:'json',
                                                    }).then((value)=>{
                                                        //console.log(value)
                                                        this.setState({
                                                            code:value,
                                                            loadCode:false,
                                                            codeVisible:true
                                                        })
                                                    })
                                                }}
                                                loading={this.state.loadCode}
                                            >设置参数</Button>
                                        </Space>
                                    </Col>
                                    <Col span={12}>
                                        <Space size={'small'} direction={'vertical'}>
                                            <Button>高级用户管理</Button>
                                        </Space>
                                    </Col>
                                </Row>
                            </Card>
                        </Space>
                    </Col>
                    <Col span={8}>
                        <Space direction={'vertical'} size={'large'} style={{width:'100%'}}>
                            <Card title={'系统向导'}>
                                <Timeline>
                                    <Timeline.Item color="green"><p>配置系统参数</p></Timeline.Item>
                                    <Timeline.Item color="green"><p>录入教师基本信息</p></Timeline.Item>
                                    <Timeline.Item color="green">
                                        <p>录入教师得分记录</p>
                                    </Timeline.Item>
                                    <Timeline.Item color="green">
                                        <p>计算分数</p>
                                    </Timeline.Item>
                                    <Timeline.Item  color="green">
                                        <p>公示并审查</p>
                                    </Timeline.Item>
                                    <Timeline.Item  color="green">
                                        <p>下载结果</p>
                                    </Timeline.Item>
                                </Timeline>

                            </Card>
                        </Space>
                    </Col>
                </Row>

                <Modal
                    title="维护状态"
                    visible={this.state.maintainVisible}
                    onOk={()=>{
                        let secret=stringRandom(16);
                        this.setState({
                            secret:secret,
                            maintainLoading:true,
                        })
                        reqwest({
                            url:'/api/1.0/console/artisan',
                            data: {
                                cmd: 'down',
                                secret: secret
                            },
                            type:'json'
                        }).then((msg)=>{
                            message.success('已进入维护状态。')
                            this.setState({
                                maintainVisible:false,
                                maintainLoading:false
                            })
                            const args = {
                                message: '临时链接',
                                description:<Paragraph>
                                    <p>
                                        请点击 <a href={`/`+this.state.secret}>此链接</a> 获取临时访问权限。</p>
                                    <p>
                                        若临时链接丢失，请联系网站管理员。</p>
                                </Paragraph>,
                                duration: 0,
                            };
                            notification.open(args);
                        },(err)=>{
                            handleErr(err)
                            this.setState({
                                maintainLoading:false
                            })
                        })
                    }}
                    onCancel={()=>{
                        this.setState({
                            maintainVisible:false
                        })
                    }}
                    confirmLoading={this.state.maintainLoading}
                >
                    <p>进入维护模式后，网站将无法访问，包括管理员页面。</p>
                    <p>若要临时访问，请访问稍后弹出的链接获取权限。</p>
                </Modal>
                <Modal
                    width={648}
                    style={{
                        minWidth:648
                    }}
                    visible={this.state.codeVisible}
                    closable={false}
                    maskClosable={false}
                    confirmLoading={this.state.confirmLoading}
                    onCancel={()=>{
                        this.setState({
                            codeVisible:false
                        })
                    }}
                    onOk={()=>{
                        this.setState({
                            //codeVisible:false,
                            confirmLoading:true
                        })
                        reqwest({
                            url:'/api/1.0/edit_config',
                            method:'POST',
                            type:'json',
                            data:{
                                conf:this.state.code
                            }
                        }).then(()=>{
                            this.setState({
                                confirmLoading:false,

                            })
                            message.success('更新成功')
                        },(err)=>{
                            handleErr(err)
                        })

                    }}
                >
                    <MonacoEditor
                        width="600"
                        height="500"
                        language="json"
                        theme="vs-dark"
                        value={this.state.code}
                        onChange={(value)=>{
                            this.setState({
                                code:value
                            })
                        }}
                        options={{
                            selectOnLineNumbers: true
                        }}
                        //onChange={::this.onChange}
                        //editorDidMount={}
                    />
                </Modal>
            </>
        )
    }
}

export default Console;
