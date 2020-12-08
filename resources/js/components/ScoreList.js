
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
    EyeOutlined

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
    Empty, Tooltip, Typography
} from 'antd';
const {Text,Paragraph} = Typography;
import AddForm from "./AddForm";
import EditForm from "./EditForm";
import Explain from "./Explain";
import moment from "moment";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"
import {handleErr} from "../helper";

const base='/admin/points'

class ScoreList extends React.Component{
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
            year:this.state.yearMoment.year(),
            force:true
        });
    };

    state={
        data:[],
        pagination:{
            current:1,
            pageSize:5,
            showSizeChanger:true,
            disabled: false
        },
        loading:false,
        showDrawer:false,
        showEditDrawer:false,
        filters:{},
        initVal:{},
        yearMoment:moment(),
        excelLoading:false,

        showExplain:false,
        explainID:null,
    }
    stateBackup=null
    componentDidMount() {
        const { pagination } = this.state;
        this.fetch(
            { pagination ,year:moment().year(),filters:{}},
        );
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
        this.setState({ loading: true });
        reqwest({
            url:'/api/1.0/results' +
            '?pageSize='+params.pagination.pageSize+
            '&page='+params.pagination.current+
            '&year='+params.year,

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
                <Text>...<span style={{
                    fontFamily:'Consolas'
                }}>{value.slice(-3)}</span></Text>,
            width:100
        },{
            title:<><ApartmentOutlined/> 岗位</>,
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
                    ['', '初级教师', '二级教师', '一级教师', '高级教师', '正高级教师'][value]}
                </Tag>
            )
            },
            filteredValue: this.state.filters.rank || null
        },{
            title: <>状态</>,
            dataIndex: 'inPenalty',
            render:(value)=>{
                return(
                    value? <Badge status="error" text="暂不可晋升" />
                        :
                        <Badge status="success" text="正常" />
                )
            }
        },{
            title: <>分数</>,
            dataIndex: 'score',
            fixed: 'right',
            width:130,
            render:(value,record)=>{
                return(
                    <>
                        <Button onClick={()=>{
                            this.setState({
                                showExplain:true,
                                explainID:record.id
                            })
                        }}
                        >
                            {value } <EyeOutlined/></Button>
                    </>
                )
            }
        },
        ]

        return (
            <>

                <Space direction="vertical"
                       style={{
                           width:'100%'
                       }}
                >
                    <Space direction={'horizontal'}>
                        <DatePicker picker={'year'}
                                    style={{
                                        width:80
                                    }}
                                    defaultValue={moment()}
                                    allowClear={false}
                                    onChange={(val)=>{
                                        this.setState({
                                            yearMoment:val
                                        })
                                        const { pagination } = this.state;
                                        this.fetch(
                                            { pagination ,year:val.year(),filters:this.state.filters},
                                        );
                                    }}
                        />
                        <Button
                            type={'primary'}
                            onClick={()=>{
                                Modal.confirm({
                                    title: '确定要重新计算 '+this.state.yearMoment.year()+' 年的数据吗？',
                                    icon: <ExclamationCircleOutlined />,
                                    content: '使用最新数据计算分数，旧的计算结果将被删除。',
                                    onOk:()=> {
                                        return reqwest({
                                            url:'/api/1.0/score/year/'+this.state.yearMoment.year(),
                                            type:'json',
                                            method:'post'
                                        }).then(()=>{
                                            message.success('计算成功！')
                                            const { pagination } = this.state;
                                            this.fetch(
                                                { pagination ,year:this.state.yearMoment.year(),filters:this.state.filters},
                                            );
                                        },(err)=>{
                                            handleErr(err)
                                        })
                                    },
                                    onCancel() {},
                                });
                            }}
                        ><CalculatorOutlined /> 重新计算</Button>
                        <Button
                            icon={<DownloadOutlined />}
                            loading={this.state.excelLoading}
                            onClick={()=>{
                                this.setState({
                                    excelLoading:true
                                })
                                fetch("/download/" +this.state.yearMoment.year()).then(res => res.blob()).then(blob => {
                                    var a = document.createElement('a');
                                    var url = window.URL.createObjectURL(blob);
                                    a.href = url;
                                    a.download = this.state.yearMoment.year()+'年度教师评级成绩表 '+moment().format('YYYY-MM-DD')+'.xlsx';
                                    a.click();
                                    window.URL.revokeObjectURL(url);
                                    this.setState({
                                        excelLoading:false
                                    })
                                })
                            }}
                        > 下载 Excel 表格</Button>
                        <Divider type={'vertical'}/>
                        <Paragraph  style={{
                            whiteSpace:'normal',
                            margin: 0
                        }} ellipsis={{
                            rows:2
                        }}><ExclamationCircleOutlined />
                        <Tooltip placement="left" title={`将 ${this.state.yearMoment.year()-1} - ${this.state.yearMoment.year()} 学年度及更早的数据纳入计算。`}
                        >
                            {` 将 ${this.state.yearMoment.year()-1} - ${this.state.yearMoment.year()} 学年度及更早的数据纳入计算。`}

                        </Tooltip>
                            </Paragraph >
                    </Space>
                    <Space direction={'horizontal'}>
                    <Input.Search
                        placeholder="搜索姓名"
                        onSearch={value => {
                            this.setState({ loading: true });
                            reqwest({
                                url:'/api/1.0/results',
                                data: {
                                    year:this.state.yearMoment.year(),
                                    query:value
                                },
                                method: 'get',
                                type: 'json',
                            })
                                .then(data => {
                                    //console.log(data)
                                    if (!this.stateBackup){
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
                                        filters:[]
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
                            filters: this.state.filters,
                            year: this.state.yearMoment.year(),
                            })
                    }}>
                        <SyncOutlined spin={this.state.loading} /> 刷新
                    </Button>
                    </Space>
                    <Table
                        scroll={{ x: 600 }}
                        style={{
                            width:'100%'
                        }}
                        columns={columns}
                        rowKey={record => record.id}
                        dataSource={data}
                        pagination={this.state.pagination}
                        loading={loading}
                        onChange={this.handleTableChange}
                        locale={{emptyText : <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={'没有数据，请点击上方按钮计算。'}/>}}
                    />
                </Space>
                <Modal
                    visible={this.state.showExplain}
                    onCancel={()=>{
                        this.setState({
                            showExplain:false
                        })
                    }}
                    closable={false}
                    footer={null}
                    width={700}
                    destroyOnClose
                >
                    <Explain
                        onClose={()=>{
                            this.setState({
                                showExplain:false
                            })
                        }}
                        resultID={this.state.explainID}
                    />
                </Modal>
            </>
        );
    }
}

export default ScoreList;
