import React, { Component } from 'react';
import {
    Table,
    Input,
    Button,
    message,
    Modal,
    Tooltip,
    Badge,
    Avatar,
    Select,
    Popover,
    Dropdown,
    Menu,
    Drawer,
    Form,
    Row,
    Col,
    DatePicker,
    Alert,
    Space, List
} from 'antd';
const ButtonGroup = Button.Group;
const confirm = Modal.confirm;
const Option = Select.Option;
const Search = Input.Search;
import { Link } from 'react-router-dom';
import axios from 'axios';
import {
    EyeOutlined,
    CarryOutOutlined,
    ToTopOutlined,
    DeleteOutlined

} from "@ant-design/icons"
import NoticeView from "./NoticeView";

window.apiURL='/api/1.0/blog/';
let base='/admin'

export class Article extends React.Component {
    constructor() {
        super();
        this.state = {
            //表格数据
            articles:[],
            showDetail:false,
            showDetailData: {},
            //detailID:0,
            pagination: {
                showSizeChanger:true,
                showQuickJumper:true,
                defaultCurrent:1,
                defaultPageSize:10
            },
            order:'created_at_desc',
            status:null,
            top:null,
            key:null,
            loading:true,
        };
    }
    componentWillMount() {
        this.fetchData();
    }
    render(){
        //表格行配置
        const columns = [{
            //     title: 'ID',
            //     dataIndex: 'id',
            //     key: 'id',
            //     width: 50,
            // },{
            title: '标题',
            key: 'title',
            fixed:'left',
            width: 150,
            ellipsis:{
                showTitle:false
            },
            render: (text, record) => (
                <Tooltip title={record.title}>
                    <Link to={base+'/article/update/' + record.id}>
                      {record.title}
                    </Link>
                </Tooltip>
            )
        },{
            title: '内容',
            dataIndex: 'content_html_short',
            key: 'content_html_short',
            ellipsis:{
                showTitle:false
            },
            width: 150,
            render:(value)=>{
                return <Tooltip title={value}>{value}</Tooltip>
            }
        },{
            title: '状态',
            key: 'is_hidden',
            width: 100,
            render: (text, record) => {
                if (record.is_hidden)
                    return <Badge status="warning" text="笔记" />
                else
                    return <Badge status="processing" text="已发表" />
            }
        },{
            title: '浏览量',
            dataIndex: 'view',
            key: 'view',
            width:80
        },{
            title: '最后访问',
            dataIndex: 'updated_at_diff',
            key: 'updated_at',
            width:100
        },{
            title: '编辑时间',
            dataIndex: 'created_at',
            key: 'created_at',
            width:120,
            render:(value)=>{
                return <Tooltip title={value.slice(0,10)+' '+value.slice(11,16)} >{value.slice(0, 10)}</Tooltip>
            }
        },{
            title: '操作',
            key: 'action',
            width: 150,
            fixed: 'right',
            render: (text, record) => (
                <span>
          <ButtonGroup>
            <Tooltip title="预览">
              <Button icon={<EyeOutlined />} onClick={
                  // this.handleView.bind(this, record.id)
                  ()=>{
                      this.setState({
                          showDetailData:record,
                          showDetail:true,
                      })
                  }
              }/>
            </Tooltip>
            <Tooltip title="发表">
              <Button icon={<CarryOutOutlined />} type={ record.is_hidden?'default':'primary'} onClick={this.handlePublish.bind(this, record.id)}/>
            </Tooltip>
            <Tooltip title="置顶">
              <Button icon={<ToTopOutlined />} type={ record.is_top?'primary':'default'} onClick={this.handleTop.bind(this, record.id)}/>
            </Tooltip>
            <Tooltip title="删除">
              <Button icon={<DeleteOutlined />} onClick={this.handleDelete.bind(this, record.id)}/>
            </Tooltip>
          </ButtonGroup>
        </span>
            ),
        },];
        return (
            <div>
                <Space direction="vertical"
                       style={{
                           width:'100%'
                       }}
                >
                    <div style={{overflow:'hidden'}}>
                        <Select defaultValue="created_at_desc" style={{ width: 120, marginRight: 10 }} onChange={this.handleChangeOrder}>
                            <Option value="created_at_desc">最新创建</Option>
                            <Option value="created_at">最早创建</Option>
                            <Option value="view_desc">最多浏览</Option>
                            <Option value="comment_desc">最多留言</Option>
                        </Select>
                        <Select placeholder="按发表状态筛选" style={{ width: 140, marginRight: 10 }} onChange={this.handleChangeStatus} allowClear>
                            <Option value={0}>已发表</Option>
                            <Option value={1}>笔记</Option>
                        </Select>
                        <Select placeholder="按置顶状态筛选" style={{ width: 140, marginRight: 10 }} onChange={this.handleChangeTop} allowClear>
                            <Option value={0}>未置顶</Option>
                            <Option value={1}>置顶</Option>
                        </Select>
                        <Search
                            placeholder="搜索标题"
                            onSearch={this.handleSearch}
                            style={{ width: 200, marginRight: 10 }}
                        />

                        {/*<Dropdown*/}
                        {/*    placement="bottomRight"*/}
                        {/*    trigger={['click']}*/}
                        {/*    overlay={*/}
                        {/*        <Menu>*/}
                        {/*            <Menu.Item>*/}
                        {/*            </Menu.Item>*/}
                        {/*            /!*<Menu.Item>*!/*/}
                        {/*            /!*    <Link to={`${base}/articles/create/markdown`}>*!/*/}
                        {/*            /!*        Markdown编辑器*!/*/}
                        {/*            /!*    </Link>*!/*/}
                        {/*            /!*</Menu.Item>*!/*/}
                        {/*        </Menu>*/}
                        {/*    }>*/}
                        {/*    <Button type="primary" style={{float: 'right'}}>写文章</Button>*/}
                        {/*</Dropdown>*/}
                        <Button type={'primary'} style={{float: 'right'}}>
                            <Link to={`${base}/article/create/richtext`}>
                                创建通知
                            </Link>
                        </Button>
                        {/*<Link to={`${base}/tags`}>*/}
                        {/*    <Button style={{float: 'right', marginRight: 10}}>标签管理</Button>*/}
                        {/*</Link>*/}
                        {/*<Dropdown*/}
                        {/*    placement="bottomCenter"*/}
                        {/*    trigger={['click']}*/}
                        {/*    overlay={*/}
                        {/*        <Menu onClick={this.handleMenuClick}>*/}
                        {/*            <Menu.Item key="import">从数据库导入文章</Menu.Item>*/}
                        {/*        </Menu>*/}
                        {/*    }>*/}
                        {/*    <Button style={{float: 'right', marginRight: 10}}>*/}
                        {/*    </Button>*/}
                        {/*</Dropdown>*/}
                    </div>
                    <Table
                        // size="small"
                        // bordered
                        scroll={{
                            x:600
                        }}
                        dataSource={this.state.articles}
                        loading={this.state.loading}
                        columns={columns}
                        pagination={this.state.pagination}
                        onChange={this.handleTableChange}
                        // style={{marginTop:10}}
                    />
                </Space>

                {this.state.articles.length ?
                    <NoticeView data={this.state.showDetailData} visible={this.state.showDetail}
                                onCancel={()=>{
                                    this.setState({
                                        showDetail:false
                                    })
                                }
                                }/>
                    : ''}
            </div>
        )
    }
    //获取数据
    fetchData = (currentPage=null, pageSize=null) =>{
        const pager = { ...this.state.pagination };
        if (!currentPage) {
            currentPage = pager.current ? pager.current : pager.defaultCurrent;
        }
        if (!pageSize) {
            pageSize = pager.pageSize ? pager.pageSize : pager.defaultPageSize;
        }
        this.setState({ loading:true });
        let url = window.apiURL + 'articles?order=' + this.state.order + '&pagesize=' + pageSize + '&page=' + currentPage;
        if (this.state.status != null) {
            url = url + '&status=' + this.state.status;
        }
        if (this.state.top != null) {
            url = url + '&top=' + this.state.top;
        }
        if (this.state.search != null) {
            url = url + '&search=' + this.state.search;
        }
        axios.get(url)
            .then((response) => {
                const pager = { ...this.state.pagination };
                pager.total = response.data.total;
                pager.current = response.data.current_page;
                pager.pageSize = Number(response.data.per_page);
                this.setState({
                    articles:response.data.data,
                    pagination: pager,
                    loading:false,
                })
                console.log(response.data.data)
            })
            .catch((error) => {
                console.log(error);
            });
    }
    //文章预览
    handleView = (id) =>{
        window.open('/articles/' + id)
    }
    //文章发表
    handlePublish = (id) =>{
        var that = this
        axios.get(window.apiURL + 'articles/publish/' + id)
            .then(function (response) {
                if (response.status == 200) {
                    that.fetchData()
                    message.success(response.data.message)
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    //文章置顶
    handleTop = (id) =>{
        var that = this
        axios.get(window.apiURL + 'articles/top/' + id)
            .then(function (response) {
                if (response.status == 200) {
                    that.fetchData()
                    message.success(response.data.message)
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    //文章删除
    handleDelete = (id) =>{
        var that = this
        confirm({
            title: '确认删除',
            content: '此操作将会永久删除此文章，确认继续？',
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                //获取文章数据
                axios.get(window.apiURL + 'articles/delete/' + id)
                    .then(function (response) {
                        if (response.status == 200) {
                            that.fetchData()
                            message.success(response.data.message)
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            },
            onCancel() {
                console.log('取消删除');
            },
        });
    }
    //文章排序
    handleChangeOrder = (value) =>{
        this.setState({ order:value }, () => this.fetchData());
    }
    //文章按发表状态筛选
    handleChangeStatus = (value) =>{
        this.setState({ status:value }, () => this.fetchData());
    }
    //文章按置顶状态筛选
    handleChangeTop = (value) =>{
        this.setState({ top:value }, () => this.fetchData());
    }
    //文章搜索
    handleSearch = (value) => {
        this.setState({ search:value }, () => this.fetchData());
    }
    //操作表格触发函数
    handleTableChange = (pagination, filters, sorter) => {
        const pager = { ...this.state.pagination };
        pager.current = pagination.current;
        this.setState({
            pagination: pager,
        });
        this.fetchData(pagination.current, pagination.pageSize);
    }
}
