import React,{Suspense} from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import '../css/admin.css';
import '../css/header.css';
import zhCN from 'antd/es/locale/zh_CN';
import {
    Layout,
    Menu,
    Breadcrumb,
    ConfigProvider,
    Skeleton,
    Button
} from 'antd';
import {
    HomeOutlined,
    UnorderedListOutlined,
    FormOutlined,
    ContainerOutlined,
    NodeIndexOutlined,
    DashboardOutlined,
    NotificationOutlined,
    EditOutlined
} from '@ant-design/icons';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"
const TeacherList = React.lazy(() => import('./components/TeacherList'));
const ScoreList = React.lazy(() => import('./components/ScoreList'));
const BindingList = React.lazy(() => import('./components/BindingList'));
const PointsEditForm = React.lazy(() => import('./components/PointsEditForm'));
const Console = React.lazy(() => import('./components/Console'));
import MyFooter from "./common/Footer";
import { withRouter } from "react-router";
import reqwest from "reqwest";
import {Article} from "./components/Blog/Article/Article";
import {ArticleCreate} from "./components/Blog/Article/ArticleCreate";
import {ArticleUpdate} from "./components/Blog/Article/ArticleUpdate";
const { Header, Content, Sider,Footer } = Layout;

const base = '/admin';

class App extends React.Component{
    state={
        myRole:0,
        collapsed:false,
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
                        }else if(String(history.location.pathname).indexOf(`${base}/article`)===0){
                            return [base+'/article']
                        }
                        return [history.location.pathname]
                    })()}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%', borderRight: 0 }}
                >
                    <Menu.Item key={`${base}`} icon={<UnorderedListOutlined/>}>
                        <Link to={`${base}`}>教师列表</Link>
                    </Menu.Item>
                    <Menu.Item key={`${base}/results`} icon={<ContainerOutlined/>}>
                        <Link to={`${base}/results`}>结果公示</Link>
                    </Menu.Item>
                    {
                        this.state.myRole===1?

                            (<Menu.Item key={`${base}/binding`} icon={<NodeIndexOutlined/>}>
                                <Link to={`${base}/binding`}>账号绑定</Link>
                            </Menu.Item>
                            ):''
                    }
                    {
                        this.state.myRole===1?

                            (<Menu.Item key={`${base}/console`} icon={<DashboardOutlined/>}>
                                    <Link to={`${base}/console`}>仪表盘</Link>
                                </Menu.Item>
                            ):''
                    }
                    {
                        this.state.myRole===1?

                            (<Menu.Item key={`${base}/article`} icon={<NotificationOutlined />}>
                                    <Link to={`${base}/article`}>通知管理</Link>
                                </Menu.Item>
                            ):''
                    }
                </Menu>
            </Sider>

        );
    } )
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        reqwest({
            url:'/api/1.0/info',
            type:'json'
        }).then((data)=>{
            this.setState({
                myRole:data.role,
                myName:data.name
            })
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
                        }} theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                            <Menu.Item key="2"><a href="/home">成绩查看</a></Menu.Item>
                            <Menu.Item key="1">管理员</Menu.Item>
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
                    <Layout style={{ minHeight:'100vh', marginTop: 64 }}>
                        <this.LeftSider/>
                        <Layout style={{ padding: '0 24px 24px' ,marginLeft: this.state.collapsed?80:200  }}>
                            <Route path={`${base}`} exact>
                                <Breadcrumb style={{ margin: '16px 0' }}>
                                    <Breadcrumb.Item><a href="/home"><HomeOutlined /> 主页</a></Breadcrumb.Item>
                                    <Breadcrumb.Item>
                                        <Link to={`${base}`}><UnorderedListOutlined /> 教师列表</Link></Breadcrumb.Item>
                                </Breadcrumb>
                            </Route>
                            <Route path={`${base}/points/:teacherId`}>
                                <Breadcrumb style={{ margin: '16px 0' }}>
                                    <Breadcrumb.Item><a href="/home"><HomeOutlined /> 主页</a></Breadcrumb.Item>
                                    <Breadcrumb.Item>
                                        <Link to={`${base}`}><UnorderedListOutlined /> 教师列表</Link></Breadcrumb.Item>
                                    <Breadcrumb.Item><FormOutlined/> 修改分数</Breadcrumb.Item>
                                </Breadcrumb>
                            </Route>
                            <Route path={`${base}/results`}>
                                <Breadcrumb style={{ margin: '16px 0' }}>
                                    <Breadcrumb.Item><a href="/home"><HomeOutlined /> 主页</a></Breadcrumb.Item>
                                    <Breadcrumb.Item>
                                        <Link to={`${base}/results`}><ContainerOutlined /> 结果公示</Link></Breadcrumb.Item>
                                </Breadcrumb>
                            </Route>
                            <Route path={`${base}/binding`}>
                                <Breadcrumb style={{ margin: '16px 0' }}>
                                    <Breadcrumb.Item><a href="/home"><HomeOutlined /> 主页</a></Breadcrumb.Item>
                                    <Breadcrumb.Item>
                                        <Link to={`${base}/binding`}><NodeIndexOutlined /> 账号绑定</Link></Breadcrumb.Item>
                                </Breadcrumb>
                            </Route>
                            <Route path={`${base}/console`}>
                                <Breadcrumb style={{ margin: '16px 0' }}>
                                    <Breadcrumb.Item><a href="/home"><HomeOutlined /> 主页</a></Breadcrumb.Item>
                                    <Breadcrumb.Item>
                                        <Link to={`${base}/console`}><DashboardOutlined /> 仪表盘</Link></Breadcrumb.Item>
                                </Breadcrumb>
                            </Route>
                            <Route path={`${base}/article`} exact>
                                <Breadcrumb style={{ margin: '16px 0' }}>
                                    <Breadcrumb.Item><a href="/home"><HomeOutlined /> 主页</a></Breadcrumb.Item>
                                    <Breadcrumb.Item>
                                        <Link to={`${base}/article`}><NotificationOutlined /> 通知管理</Link></Breadcrumb.Item>
                                </Breadcrumb>
                            </Route>
                            <Route path={`${base}/article/create/richtext`}>

                                <Breadcrumb style={{ margin: '16px 0' }}>
                                    <Breadcrumb.Item><a href="/home"><HomeOutlined /> 主页</a></Breadcrumb.Item>
                                    <Breadcrumb.Item>
                                        <Link to={`${base}/article`}><NotificationOutlined /> 通知管理</Link>
                                    </Breadcrumb.Item>
                                    <Breadcrumb.Item>
                                        <EditOutlined /> 文章创建
                                    </Breadcrumb.Item>
                                </Breadcrumb>
                            </Route>
                            <Route path={`${base}/article/update`}>

                                <Breadcrumb style={{ margin: '16px 0' }}>
                                    <Breadcrumb.Item><a href="/home"><HomeOutlined /> 主页</a></Breadcrumb.Item>
                                    <Breadcrumb.Item>
                                        <Link to={`${base}/article`}><NotificationOutlined /> 通知管理</Link>
                                    </Breadcrumb.Item>
                                    <Breadcrumb.Item>
                                        <EditOutlined /> 文章编辑
                                    </Breadcrumb.Item>
                                </Breadcrumb>
                            </Route>
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
                                        <Route path={`${base}/console`}>
                                            <Console/>
                                        </Route>
                                        <Route path={`${base}/results`}>
                                            <ScoreList/>
                                        </Route>
                                        <Route path={`${base}/binding`}>
                                            <BindingList/>
                                        </Route>
                                        <Route path={`${base}/article`} exact>
                                            <Article/>
                                        </Route>

                                        <Route path={`${base}/article/create/:type`} exact component={ArticleCreate}/>

                                        <Route path={`${base}/article/update/:id`} component={ArticleUpdate}/>

                                        <Route path={`${base}`} exact>
                                                <TeacherList/>
                                        </Route>
                                        <Route path={`${base}/points/:teacherId`} component={PointsEditForm}>

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
