import React,{Suspense} from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import '../css/admin.css';
import '../css/header.css';
import zhCN from 'antd/es/locale/zh_CN';
import {
    Layout,
    Menu,
    ConfigProvider,
    Skeleton,
    Button,
    Result, Breadcrumb,
    Typography,Divider,Alert
} from 'antd';
const {Text, Paragraph, Title} =Typography
import {
    UnorderedListOutlined,
    ContainerOutlined,
    LinkOutlined,
    FileSearchOutlined,
    HomeOutlined,
    NotificationOutlined,
    MailOutlined ,
    PhoneOutlined ,
    CustomerServiceOutlined,
    CloudDownloadOutlined,
    InfoCircleOutlined
} from '@ant-design/icons';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"

import { withRouter } from "react-router";
import reqwest from "reqwest";
//import Explain from ;
const Explain =  React.lazy(() => import("./components/Explain"))
const SubmitBind =  React.lazy(() => import("./components/SubmitBind"))
// const MyFooter =  React.lazy(() => import("./common/Footer"))
const NoticeList =  React.lazy(() => import("./components/Blog/NoticeList"))
// import SubmitBind from "./components/SubmitBind";
import MyFooter from "./common/Footer";
import {handleErr} from "./helper";
// import NoticeList from "./components/Blog/NoticeList";
const { Header, Content, Sider,Footer } = Layout;

const base = '/home';

class App extends React.Component{
    state={
        myRole:0,
        collapsed:false,
        myResID:-1,
        myName:'教师'
    }
    LeftSider = withRouter(({history}) => {
        return (
            <Sider width={200}
                   className="site-layout-background"
                   breakpoint="xl"
                   collapsedWidth="80"
                   style={{
                       overflow: 'auto',
                       height: '100vh',
                       position: 'fixed',
                       left: 0,
                   }}
                   onCollapse={(collapsed, type)=>{
                       this.setState({
                           collapsed:collapsed
                       })
                   }}
            >
                <Menu
                    mode="inline"
                    //inlineCollapsed={collapsed}
                    defaultSelectedKeys={['1']}
                    selectedKeys={(()=>{
                        console.log(history.location.pathname)
                        if(String(history.location.pathname).indexOf(`${base}/points`)===0){
                            return [base]
                        }
                        return [history.location.pathname]
                    })()}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%', borderRight: 0 }}
                >
                    <Menu.Item key={`${base}`} icon={<HomeOutlined/>}>
                        <Link to={`${base}`}>我的成绩</Link>
                    </Menu.Item>
                    <Menu.Item key={`${base}/notice`} icon={<NotificationOutlined />}>
                        <Link to={`${base}/notice`}>通知</Link>
                    </Menu.Item>
                    <Menu.Item key={`${base}/bind`} icon={<LinkOutlined />}>
                        <Link to={`${base}/bind`}>提交绑定</Link>
                    </Menu.Item>
                    <Menu.Item key={`${base}/feedback`} icon={<CustomerServiceOutlined />}>
                        <Link to={`${base}/feedback`}>反馈和帮助</Link>
                    </Menu.Item>
                </Menu>
            </Sider>

        );
    } )
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.handleRefresh();
    }
    handleRefresh=()=>{
        this.setState({
                myResID:-1
            })
        reqwest({
            url:'/api/1.0/info',
            type:'json'
        }).then((data)=>{
            console.log(data)
            this.setState({
                myRole:data.role,
                myName:data.name,
                myResID:data.resID,
                myBind:data.bind,
                myBindStatus:data.bindStatus,
                pendingIDNum:data.pendingIDNum
            })
        },(err)=>{
            handleErr(err)
        })
    }

    render(){
        return(
            <Router history={history}>
                <Layout>
                    <Header className="header">
                        <div id={'logo'}/>
                        <Menu style={{
                            float:'left'
                        }} theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                            <Menu.Item key="2">成绩查看</Menu.Item>
                            {
                                this.state.myRole===1||this.state.myRole===2?
                                <Menu.Item key="1"><a href="/admin">管理员</a></Menu.Item>
                                :''
                            }
                        </Menu>
                        <div id={'info'} style={{
                            float:'right',
                            color:'white',
                            opacity:0.65
                        }}>{
                            `您好，${this.state.myName}`
                        }
                            <Button style={{
                                marginLeft:15
                            }} ghost><a
                                onClick={(event => {
                                    event.preventDefault();
                                    document.getElementById('logout-form').submit();
                                })}
                                href="/logout">退出登录</a></Button>

                            <form id="logout-form" style={{
                                display:'none'
                            }} action="/logout" method="POST">
                            </form>
                        </div>
                    </Header>
                    <Layout style={{minHeight:'100vh', marginTop: 64}}>
                        <this.LeftSider/>
                        <Layout style={{ padding: '0 24px 24px' ,marginLeft: this.state.collapsed?80:200  }}>
                            <Switch>

                                <Route path={`${base}`} exact>
                                    <Breadcrumb style={{ margin: '16px 0' }}>
                                        <Breadcrumb.Item><a href="/home"><HomeOutlined /> 主页</a></Breadcrumb.Item>
                                    </Breadcrumb>
                                </Route>
                                <Route path={`${base}/notice`}>
                                    <Breadcrumb style={{ margin: '16px 0' }}>
                                        <Breadcrumb.Item><a href="/home"><HomeOutlined /> 主页</a></Breadcrumb.Item>
                                        <Breadcrumb.Item>
                                            <Link to={`${base}/notice`}><NotificationOutlined /> 通知</Link></Breadcrumb.Item>
                                    </Breadcrumb>
                                </Route>
                                <Route path={`${base}/bind`}>
                                    <Breadcrumb style={{ margin: '16px 0' }}>
                                        <Breadcrumb.Item><a href="/home"><HomeOutlined /> 主页</a></Breadcrumb.Item>
                                        <Breadcrumb.Item>
                                            <Link to={`${base}/bind`}><LinkOutlined /> 提交绑定</Link></Breadcrumb.Item>
                                    </Breadcrumb>
                                </Route>
                                <Route path={`${base}/feedback`}>
                                    <Breadcrumb style={{ margin: '16px 0' }}>
                                        <Breadcrumb.Item><a href="/home"><HomeOutlined /> 主页</a></Breadcrumb.Item>
                                        <Breadcrumb.Item>
                                            <Link to={`${base}/feedback`}><CustomerServiceOutlined/> 反馈和帮助</Link></Breadcrumb.Item>
                                    </Breadcrumb>
                                </Route>
                                <Route>
                                    <Breadcrumb style={{ margin: '16px 0' }}>
                                        <Breadcrumb.Item><a href="/home"><HomeOutlined /> 主页</a></Breadcrumb.Item>
                                    </Breadcrumb>
                                </Route>
                            </Switch>
                            <Content
                                className="site-layout-background"
                                style={{
                                    padding: 24,
                                    margin: 0,
                                    minHeight: 280,
                                    minWidth: 500,
                                }}
                            >
                                <Suspense fallback={
                                    <Skeleton active={true}/>
                                }>
                                    <Switch>
                                        <Route exact path={`${base}/`}>
                                            <Skeleton loading={this.state.myResID===-1}>
                                                {this.state.myResID===-2?
                                                    <Result
                                                        status="404"
                                                        title="没有您的成绩"
                                                        subTitle="抱歉，系统尚未计算您的成绩。请联系学校负责人或系统管理员。"
                                                        extra={<Button type="primary"><Link to={base+'/feedback'}>反馈</Link></Button>}
                                                    />:
                                                    this.state.myResID===-3?
                                                        <Result
                                                            status="404"
                                                            title="尚未绑定"
                                                            subTitle="抱歉，学校尚未绑定您的教师信息。请先提交绑定。"
                                                            extra={<Button type="primary"><Link to={base+'/bind'}>去提交绑定</Link></Button>}
                                                        />:
                                                < Explain resultID={this.state.myResID}/>
                                                }
                                            </Skeleton>
                                        </Route>
                                        <Route path={`${base}/notice`}>
                                            <NoticeList/>
                                        </Route>
                                        <Route path={`${base}/bind`}>
                                            <SubmitBind refresh={this.handleRefresh} info={{
                                                res:this.state.myResID,
                                                IDNum:this.state.myBind,
                                                status:this.state.myBindStatus,
                                                pendingIDNum:this.state.pendingIDNum
                                            }}/>
                                        </Route>
                                        <Route path={`${base}/feedback`}>
                                            <Typography>

                                                <Title level={3}>
                                                    关于我们
                                                </Title>
                                                <Paragraph>
                                                    <Alert showIcon message={'此系统目前处于开发与测试阶段，请勿用于正式场景。'} type={'warning'}/>
                                                </Paragraph>
                                                <Paragraph>
                                                    TMSys. 教师考核信息管理系统基于《中小学教师职务评聘的长效考核机制》开发，设置责任明确的管理权限，每学期结束时对各项考核指标进行量化，量化结果公开，逐年累计，职务晋升时依据量化排名依次确定晋升人员。
                                                </Paragraph>
                                                <Divider/>
                                                <Title level={3}>
                                                    考核规则
                                                </Title>
                                                <Paragraph>
                                                    考核规则由各学校自行确定，详细信息请联系校方相关工作人员。
                                                </Paragraph>
                                                <Paragraph>
                                                    <Button icon={<CloudDownloadOutlined />}>考核规则</Button>
                                                </Paragraph>
                                                <Divider/>
                                                <Title level={3}>
                                                    <CustomerServiceOutlined/> 帮助
                                                </Title>

                                                <Paragraph>
                                                    如果您需要帮助，您可以联系校方相关负责人，或者通过以下方式联系工作人员：
                                                </Paragraph>
                                                <Paragraph>
                                                    <PhoneOutlined/> 电话：<Text copyable>18210329999</Text>
                                                </Paragraph>
                                                <Paragraph>
                                                    <MailOutlined/> 邮箱：<Text copyable>tmsys@163.com</Text>
                                                </Paragraph>
                                                <Paragraph>

                                                    <Text type={'secondary'}>
                                                        <InfoCircleOutlined /> 反馈时，请注意留下您的账号邮箱，以便于工作人员核查。
                                                    </Text>
                                                </Paragraph>
                                            </Typography>
                                        </Route>

                                        <Route>
                                            <Result
                                                status="404"
                                                title="错误"
                                                subTitle="您所访问的页面不存在"
                                                extra={<Button type="primary"><Link to={base+'/feedback'}>反馈</Link></Button>}
                                            />
                                        </Route>
                                    </Switch>
                                </Suspense>
                            </Content>
                            <MyFooter/>
                        </Layout>
                    </Layout>
                </Layout>
            </Router>
        )
    }
}



ReactDOM.render(

    <ConfigProvider locale={zhCN}>
        <App />
    </ConfigProvider>

    ,
    document.getElementById('root')
);
