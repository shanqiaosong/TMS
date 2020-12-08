
import React from 'react';
import reqwest from 'reqwest';
import {
    PlusOutlined,
    FormOutlined,
    UserOutlined,
    IdcardOutlined,
    ApartmentOutlined,
    StockOutlined,
    ToolOutlined,
    ExclamationCircleOutlined,
    CalculatorOutlined,
    DownloadOutlined,
    SyncOutlined,
    ContactsOutlined,
    MailOutlined,
    DisconnectOutlined,
    InfoCircleOutlined
} from '@ant-design/icons';
import {
    Table,
    Space,
    Button,
    Popconfirm,
    message, Tag, Breadcrumb,
    Badge,
    Popover, DatePicker,
    Modal,
    Divider, Input,
    Empty, Radio, Typography, Tooltip
} from 'antd';
const {Paragraph}=Typography;
import AddForm from "./AddForm";
import EditForm from "./EditForm";
import moment from "moment";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"
import {handleErr} from "../helper";

const base='/admin/binding'

class BindingList extends React.Component{
    constructor(props) {
        super(props);

    }

    onRef = (ref) => {
        this.editFormRef = ref
    }

    handleTableChange = (pagination) => {
        this.fetch({
            pagination,
        });
    };

    state={
        data:[],
        pagination:{
            current:1,
            pageSize:10,
            showSizeChanger:true,
        },
        loading:false,
        changingUserID:'',
        showModal:false,
        showRoleModal:false,
        changeIDNum:'',
        confirmLoading:false,
        confirmVisible:[]
    }
    componentDidMount() {
        const { pagination } = this.state;
        this.fetch(
            {pagination },
        );
    }
    fetch=(params={})=>{
        this.setState({ loading: true });
        reqwest({
            url:'/api/1.0/binding' +
                '?pageSize='+params.pagination.pageSize+
                '&page='+params.pagination.current,

            method: 'get',
            type: 'json',
        })
            .then(data => {
                console.log(data)
                this.setState({
                    loading: false,
                    data: data.data,
                    pagination: {
                        ...params.pagination,
                        total: data.total,
                    }
                });
            });
    }

    render(){
        const { data, loading } = this.state;
        const radioStyle = {
            display: 'block',
            height: '30px',
            lineHeight: '30px',
        };
        let columns = [{
            title: <><ContactsOutlined /> 用户名</>,
            dataIndex: 'userName',
            width:100,
            fixed:'left',
        },{
            title:<><MailOutlined /> 邮箱</>,
            width: 100,
            dataIndex: 'userEmail',
            ellipsis: {
                showTitle: false,
            },
            render:(value)=>{
                return <Tooltip placement="topLeft" title={value}>
                    {value}
                </Tooltip>},
        },{
            title:<><UserOutlined/> 绑定教师</>,
            width:120,
            dataIndex: 'teacherName',
            render: (val,rec)=>{
                return val?<Tooltip placement="topLeft" title={rec.IDNum}>{val}</Tooltip>: <><Badge status="error" />未绑定</>
            }
        },{
            title:
                <>
                    <ToolOutlined/> 操作
                </>
            ,
            fixed:'right',
            dataIndex:'IDNum',
            width: 350,
            render:(value,record)=>{
                return(
                    <>
                        <Space>

                            <Popconfirm
                                title="真的要解绑？"
                                onConfirm={()=>{
                                    const hide = message.loading('解绑中...', 0);
                                    reqwest({
                                        url:'/api/1.0/binding/bind/',
                                        method:'post',
                                        type:'json',
                                        data:{
                                            userID:-1,
                                            IDNum:value
                                        }
                                    }).then(()=>{
                                        hide()
                                        setTimeout(()=>{
                                            message.success('已解绑。')
                                        },500)
                                        this.fetch({pagination:this.state.pagination} );
                                    },(err)=>{
                                        hide();
                                        this.setState({
                                            confirmLoading:false
                                        })
                                        message.error(JSON.parse(err.response).message)
                                    })
                                }}
                                onVisibleChange={(vis)=>{
                                    if (!value) return;
                                    let newVis=this.state.confirmVisible;
                                    newVis[record.userID]=vis;
                                    this.setState({
                                        confirmVisible:newVis
                                    })
                                }}
                                visible={this.state.confirmVisible[record.userID]}
                            >
                                <Button danger
                                        disabled={value==null}
                                ><DisconnectOutlined /> 解绑</Button>
                            </Popconfirm>
                            <Button  onClick={()=>{
                                console.log(record.userID)
                                this.setState({
                                    changingUserID:record.userID,
                                    showModal:true
                                })
                            }}

                            >换绑</Button>
                            <Button onClick={()=>{
                                console.log(record.userID)
                                this.setState({
                                    changingUserID:record.userID,
                                    showRoleModal:true,
                                    changeToRole:record.roles?record.roles:3
                                })
                            }}>权限</Button>
                            {
                                record.status===1?
                                    <Popover placement="leftTop" title={'确认绑定'} content={
                                        <>
                                            <Paragraph>
                                                <InfoCircleOutlined /> 申请绑定的身份证号为：<span style={{
                                                fontFamily:'Consolas'
                                            }}>{record.pendingIDNum}</span></Paragraph>
                                            <Space>
                                                <Button onClick={()=>{

                                                    const {changingUserID,changeIDNum,pagination}=this.state
                                                    let finish=message.loading('确认中...')
                                                    reqwest({
                                                        url:'/api/1.0/binding/bind/',
                                                        method:'post',
                                                        type:'json',
                                                        data:{
                                                            userID:record.userID,
                                                            IDNum:record.pendingIDNum
                                                        }
                                                    }).then(()=>{
                                                        finish()
                                                        setTimeout(()=>
                                                        message.success('已绑定。'),500);
                                                        this.fetch({pagination:pagination} );
                                                    },(err)=>{
                                                        message.error(JSON.parse(err.response).message)
                                                        finish()
                                                    })
                                                }} size='small' type={'primary'}>确认</Button>
                                                <Button onClick={()=>{

                                                    const {changingUserID,changeIDNum,pagination}=this.state
                                                    let finish=message.loading('拒绝中...')
                                                    reqwest({
                                                        url:'/api/1.0/binding/deny/',
                                                        method:'post',
                                                        type:'json',
                                                        data:{
                                                            userID:record.userID,
                                                        }
                                                    }).then(()=>{
                                                        finish()
                                                        setTimeout(()=>
                                                            message.success('已拒绝。'),500);
                                                        this.fetch({pagination:pagination} );
                                                    },(err)=>{
                                                        message.error(JSON.parse(err.response).message)
                                                        finish()
                                                    })
                                                }}  size={'small'} danger>拒绝</Button>
                                            </Space>

                                            </>
                                    }>
                                        <Button onClick={()=>{
                                        }}
                                                type={'text'}
                                        ><Badge status={'processing'}/>申请中</Button>
                                    </Popover>

                                    :''
                            }
                        </Space>
                    </>
                )
            }
        }
        ]

        return (
            <>
                <Space direction="vertical"
                       style={{
                           width:'100%'
                       }}
                >

                    <Space direction={'horizontal'}>
                        <Input.Search
                            placeholder="搜索用户名或邮箱"
                            onSearch={value => {
                                this.setState({ loading: true });
                                reqwest({
                                    url:'/api/1.0/binding',
                                    data: {
                                        query:value
                                    },
                                    method: 'get',
                                    type: 'json',
                                })
                                    .then(data => {
                                        this.setState({
                                            loading: false,
                                            data: data,
                                            pagination: {
                                                ...this.state.pagination,
                                                total: data.length,
                                                current: 1,
                                            },
                                        });
                                    },(err)=>{
                                        this.setState({
                                            loading:false
                                        })
                                        handleErr(err)
                                    });
                            }}
                            style={{ width: 200 }}
                        />

                        <Button type="text" onClick={()=>{
                            this.setState({
                                loading: true
                            })
                            this.fetch({
                                pagination:this.state.pagination,
                            })
                        }}>
                            <SyncOutlined spin={this.state.loading} /> 刷新
                        </Button>
                    </Space>
                    <Table
                        style={{
                            width:'100%'
                        }}
                        scroll={{ x: 600 }}
                        columns={columns}
                        rowKey={record => record.userID}
                        dataSource={data}
                        pagination={this.state.pagination}
                        loading={loading}
                        onChange={this.handleTableChange}
                        locale={{emptyText : <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={'没有数据。'}/>}}
                    />
                    <Modal
                        title={'换绑用户'}
                        confirmLoading={this.state.confirmLoading}
                        onOk={()=>{
                            this.setState({
                                confirmLoading:true
                            })
                            const {changingUserID,changeIDNum,pagination}=this.state
                            console.log(this.state)
                            reqwest({
                                url:'/api/1.0/binding/bind/',
                                method:'post',
                                type:'json',
                                data:{
                                    userID:changingUserID,
                                    IDNum:changeIDNum
                                }
                            }).then(()=>{
                                message.success('已绑定。')
                                this.setState({
                                    showModal:false,
                                    confirmLoading:false
                                })
                                this.fetch({pagination:pagination} );
                            },(err)=>{
                                message.error(JSON.parse(err.response).message)
                                this.setState({
                                    confirmLoading:false
                                })
                            })

                        }}
                        onCancel={()=>{
                            this.setState({
                                showModal:false
                            })
                        }}
                        visible={this.state.showModal}
                    >
                        <p><ExclamationCircleOutlined /> 请输入要绑定的教师身份证号：</p>
                        <Input onChange={(value)=>{
                            this.setState({
                                changeIDNum:value.target.value.toUpperCase()
                            })
                        }}
                               value={this.state.changeIDNum}
                        />
                    </Modal>
                    <Modal
                        title={'管理权限'}
                        confirmLoading={this.state.confirmLoading}
                        onOk={()=>{
                            this.setState({
                                confirmLoading:true
                            })
                            const {changingUserID,changeToRole,pagination}=this.state
                            console.log(this.state)
                            reqwest({
                                url:'/api/1.0/role/'+changingUserID,
                                method:'post',
                                type:'json',
                                data:{
                                    role:this.state.changeToRole,
                                }
                            }).then(()=>{
                                message.success('已设置。')
                                this.setState({
                                    showModal:false,
                                    confirmLoading:false
                                })
                                this.fetch({pagination:pagination} );
                            },(err)=>{
                                message.error(JSON.parse(err.response).message)
                                this.setState({
                                    confirmLoading:false
                                })
                            })

                        }}
                        onCancel={()=>{
                            this.setState({
                                showRoleModal:false
                            })
                        }}
                        visible={this.state.showRoleModal}
                        destroyOnClose={true}
                    >
                        <p><ExclamationCircleOutlined /> 请选择权限：</p>
                        <Radio.Group onChange={(val)=>{
                            this.setState({
                                changeToRole:val.target.value
                            })
                        }} defaultValue={this.state.changeToRole}>
                            <Radio style={radioStyle} value={1}>
                                系统管理员
                            </Radio>
                            <Radio style={radioStyle} value={2}>
                                录入员
                            </Radio>
                            <Radio style={radioStyle} value={3}>
                                普通用户
                            </Radio>
                            <Radio style={radioStyle} value={4}>
                                禁用
                            </Radio>
                        </Radio.Group>
                    </Modal>
                </Space>
            </>
        );
    }
}

export default BindingList;
