
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
    ReloadOutlined,
    SyncOutlined
} from '@ant-design/icons';
import {
    Tooltip,
    Input,
    Table,
    Space,
    Button,
    Popconfirm,
    message, Tag, Breadcrumb,
    Badge,
    Popover,
    Divider,
    Card,
    Typography ,

} from 'antd';
const {Paragraph,Text}=Typography;
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
import Hashids from 'hashids'
const hashids = new Hashids('qiaosong',8)

const base='/admin/points'

class TeacherList extends React.Component{
    constructor(props) {
        super(props);

    }

    onRef = (ref) => {
        this.editFormRef = ref
    }

    handleTableChange = (pagination, filters) => {
        console.log(pagination);
        this.fetch({
            pagination,
            filters,
            force:true
        });
    };

    // 用于查询后恢复过滤选项
    stateBackup=null

    state={
        data:[],
        pagination:{
            current:1,
            pageSize:5,
            showSizeChanger:true,
            disabled:false
        },
        loading:false,
        showDrawer:false,
        showEditDrawer:false,
        filters:{},
        initVal:{}
    }
    componentDidMount() {
        const { pagination } = this.state;
        this.fetch({ pagination,filters:{} });
    }
    fetch=(params={})=>{
        if (this.stateBackup){
            // 重新请求时恢复分页
            this.setState(this.stateBackup);
            params.pagination=this.stateBackup.pagination;
            if (!params.force){
                // 当刷新时恢复过滤(切换过滤选项时不恢复)
                params.filters=this.stateBackup.filters;
            }
            this.stateBackup=null;
        }
        console.log(params.filters)
        this.setState({ loading: true });
        reqwest({
            url:'/api/1.0/teachers' +
            '?pageSize='+params.pagination.pageSize+
            '&page='+params.pagination.current,

            data: {
                ...params.filters
            },
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
                },filters:params.filters
            });
        },(err)=>{
                handleErr(err)
                this.setState({
                    loading:false
                })

            });
    }


    render(){
        const { data, pagination, loading } = this.state;
        let columns = [{
            title: <><UserOutlined/> 姓名</>,
            dataIndex: 'name',
            fixed: 'left',
            width:80
        },{
            title:<><IdcardOutlined /> 身份证</>,
            dataIndex: 'IDNum',
            render:(value)=>
                <Text copyable={{ text: value}}>
                    <Tooltip placement="topLeft" title={value}>
                        ...<span style={{
                                fontFamily:'Consolas'
                            }}>{value.slice(-3)}
                        </span>
                    </Tooltip>
                </Text>,
            width:90
        },{
            title:<><ApartmentOutlined/> 岗位</>,
            width: 110,
            dataIndex: 'group',
            ellipsis: {
                showTitle: false,
            },
            filters: [
                { text: '领导', value: '1' },
                { text: '考试学科任课教师', value: '2' },
                { text: '非考试学科任课教师', value: '3' },
                { text: '教辅', value: '4' },
            ],
            render:(value)=>{
                return <Tooltip placement="topLeft" title={['', '领导', '考试学科任课教师', '非考试学科任课教师', '教辅'][value]}>
                    {['', '领导', '考试学科任课教师', '非考试学科任课教师', '教辅'][value]}
                </Tooltip>},
            filteredValue: this.state.filters.group || null
        },{
            title: <><StockOutlined/> 职级</>,
            width: 100,
            dataIndex: 'rank',
            filters: [
                { text: '初级教师', value: '1' },
                { text: '二级教师', value: '2' },
                { text: '一级教师', value: '3' },
                { text: '高级教师', value: '4' },
                { text: '正高级教师', value: '5' },
            ],
            render:(value)=>{return(
                <Tag color={['','green','orange','red','purple','geekblue'][value]}>{
                    ['', '初级', '二级', '一级', '高级', '正高级'][value]}
                </Tag>
            )},
            filteredValue: this.state.filters.rank || null
        },{
            title: <>数据</>,
            width: 80,
            dataIndex: 'metaData',
            render:(value)=>{
                return(
                    value.err?
                        <Popover key={value.id} content={
                            (()=>{
                                let val=value.errYears.map((year)=><p key={value.id+''+year}>{year} - {year+1} 学年度</p>)
                                let len=val.length
                                if (!len){
                                    return '教师参加工作、职级评选年份设置有误。'
                                }
                                if (len>=4){
                                    val=val.slice(0,3)
                                    val.push(<p key={value.id+'...'}>等 {len} 条数据</p>)
                                }
                                return val
                            })()
                        } title="缺失的数据：">
                            <Badge status="error" text="缺失" />
                        </Popover>
                        :
                        <Badge status="success" text="完整" />
                )
            }
        },{
            title: <>账号</>,
            dataIndex: 'user_id',
            width: 100,
            render:(value)=>{
                return(
                    value?
                        <Badge status="success" text="已绑定" />
                        :
                        <Badge status="error" text="未绑定" />
                )
            }
        },{
            title:
                <>
                    <ToolOutlined/> 操作
                </>
            ,
            dataIndex:'id',
            width: 280,
            fixed: 'right',
            render:(value)=>{
                return(
                    <>
                        <Space>
                            <Popconfirm
                                title="此教师所有的得分记录也将随之被删除，真的要删除这条记录吗？"
                                onConfirm={()=>{

                                    const hide = message.loading('删除中...', 0);
                                    console.log(value)
                                    reqwest({
                                        url:'/api/1.0/teachers/'+value,
                                        method:'post',
                                        data:{
                                            _method:'delete'
                                        }
                                    }).then(()=>{
                                        hide()
                                        setTimeout(()=>{
                                            message.success('已删除。')
                                        },500)

                                        this.fetch({pagination:this.state.pagination,
                                            filters: this.state.filters} );
                                    },(err)=>{
                                        message.error(JSON.parse(err.response).message)
                                    })
                                }}
                                okText="确定"
                                cancelText="取消"
                            >
                                <Button danger>删除</Button>
                            </Popconfirm>
                            <Button  onClick={()=>{
                                let remove=message.loading('正在加载教师详细信息')
                                reqwest({
                                    url:'/api/1.0/teachers/'+value,

                                }).then((data)=>{
                                    data.fromYear=moment(data.fromYear,'YYYY')
                                    this.setState({
                                        initVal:data,
                                        showEditDrawer:true,
                                        editID:value,
                                    })
                                    console.log(this.state.initVal)
                                    remove()
                                })
                                this.editFormRef.handleRefresh();
                            }}>编辑</Button>

                            <Button>
                                <Link to={`${base}/${hashids.encode(value)}`}>
                                    <FormOutlined/> 修改分数
                                </Link>
                            </Button>
                        </Space>
                    </>
                )
            }
        }]

        return (
            <>
                <AddForm visible={this.state.showDrawer}
                         onClose={
                             ()=>{
                                 this.setState({
                                     showDrawer:false
                                 })
                             }
                         }
                         refresh={()=>{
                             this.fetch({
                                 pagination:this.state.pagination,
                                 filters: this.state.filters,
                                 force:true
                             } )
                         }}
                />

                <EditForm visible={this.state.showEditDrawer}
                          onClose={
                              ()=>{
                                  this.setState({
                                      showEditDrawer:false
                                  })
                              }
                          }
                          editID={this.state.editID}
                          refresh={()=>{
                              this.fetch({pagination:this.state.pagination,
                                  filters: this.state.filters} )
                          }}
                          initVal={this.state.initVal}
                          onRef={this.onRef}
                />

                <Space direction="vertical"
                       style={{
                           width:'100%'
                       }}
                >
                    <Space direction={'horizontal'}>
                        <Input.Search
                            placeholder="搜索姓名或身份证号"
                            onSearch={value => {
                                this.setState({ loading: true });
                                reqwest({
                                    url:'/api/1.0/teachers?query='+value,
                                    method: 'get',
                                    type: 'json',
                                })
                                .then(data => {
                                    console.log(data)
                                    if(!this.stateBackup){
                                        this.stateBackup={
                                            pagination: {...this.state.pagination,current:1},
                                            //current:1 防止筛选后看不到数据
                                            filters:this.state.filters,
                                        }
                                    }
                                    this.setState({
                                        loading: false,
                                        data: data,
                                        pagination: {
                                            ...this.state.pagination,
                                            total: data.length,
                                            current: 1,
                                            pageSize: data.length,
                                            disabled:true
                                        },
                                        filters:{}
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
                        <Button type='primary'
                                icon={<PlusOutlined /> }
                                onClick={
                                    ()=>{
                                        this.setState({
                                            showDrawer:true
                                        })
                                    }
                                }>新增教师</Button>
                        <Button type="text" onClick={()=>{
                            this.setState({
                                loading: true
                            })
                            this.fetch({pagination:this.state.pagination,
                                filters: this.state.filters})
                        }}>
                            <SyncOutlined spin={this.state.loading} /> 刷新
                        </Button>
                    </Space>
                    <Table
                        style={{
                            width:'100%'
                        }}
                        scroll={{ x: 1000 }}
                        columns={columns}
                        rowKey={record => record.id}
                        dataSource={data}
                        pagination={pagination}
                        loading={loading}
                        onChange={this.handleTableChange}
                    />
                </Space>
            </>
        );
    }
}

export default TeacherList;
