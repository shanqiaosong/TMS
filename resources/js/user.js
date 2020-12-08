import React,{Suspense} from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import '../css/user.css';
import '../css/header.css';
import zhCN from 'antd/es/locale/zh_CN';
import {
    Layout,
    Menu,
    Breadcrumb,
    ConfigProvider,
    Skeleton,
    Button,
    Form,
    Input,
    Checkbox, message
} from 'antd';
import {
    UserOutlined,
    LaptopOutlined,
    NotificationOutlined,
    HomeOutlined,
    UnorderedListOutlined,
    FormOutlined,
    ContainerOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    NodeIndexOutlined,
    DashboardOutlined,
    LockOutlined,
    MailOutlined
} from '@ant-design/icons';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"
import { withRouter } from "react-router";
import reqwest from "reqwest";
import {handleErr} from "./helper";
import MyFooter from "./common/Footer";
const { SubMenu } = Menu;
const { Header, Content, Sider,Footer } = Layout;

const base = '/user';


class App extends React.Component{
    state={
        resetLoading:false
    }
    constructor(props) {
        super(props);
    }
    componentDidMount() {

    }

    render(){
        return(
            <Layout className={'layout'}>

                <div className="mask"/>
                <Header className="header">
                    <div id={'logo'}/>
                    <div id={'info'} style={{
                        float:'right',
                        color:'white',
                        opacity:0.65
                    }}>{
                        `您好，请登录`
                    }
                    </div>
                </Header>

                <span className={'title'}><div id={'logo-icon'}/><span className={'logo-text'}>TMSys.</span></span>
                <p className={'subtitle'}>TMSys. 教师考核管理系统</p>
                <Router>
                    <Route exact path={base+'/'}>

                        <Form
                            size={'large'}
                            name="normal_login"
                            className="login-form"
                            initialValues={{ remember: true }}
                            onFinish={(value)=>{

                                console.log(value)
                                reqwest({
                                    url:'/login',
                                    method:'post',
                                    data:value,
                                    type:'json'
                                }).then(
                                    (msg)=>{
                                        window.location.replace("/home");
                                    },(err)=>{
                                        handleErr(err,1)
                                    }
                                )
                            }}
                        >
                            <Form.Item
                                name="email"
                                rules={[{ required: true, message: '请输入电子邮箱！' },{type:'email',message:'邮箱格式错误！'}]}
                            >
                                <Input size={'large'} prefix={<MailOutlined className="site-form-item-icon" />} placeholder="电子邮箱" />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[{ required: true, message: '请输入密码！' },{min:8,message:'密码至少为8位！'}]}
                                style={{
                                    marginBottom:10
                                }}>
                                <Input
                                    size={'large'}
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    placeholder="密码"
                                />
                            </Form.Item>
                            <Form.Item style={{
                                marginBottom:10
                            }}>
                                <Form.Item name="remember" valuePropName="checked" noStyle>
                                    <Checkbox>记住我</Checkbox>
                                </Form.Item>

                                <Link className="login-form-forgot" to={base + "/forgot"}>
                                    忘记密码
                                </Link>
                            </Form.Item>

                            <Form.Item>
                                <Button style={{
                                    marginBottom:5
                                }} type="primary" htmlType="submit" className="login-form-button">
                                    登录
                                </Button>
                                或者 <Link to={base+'/register'}>注册账号</Link>
                            </Form.Item>
                        </Form>
                    </Route>
                    <Route path={base+'/register'}>
                        <Form
                            size={'large'}
                            name="normal_login"
                            className="login-form"
                            initialValues={{ remember: true }}
                            onFinish={(value)=>{
                                value.name=value.fakeN
                                console.log(value)
                                reqwest({
                                    url:'/register',
                                    method:'post',
                                    data:value,
                                    type:'json'
                                }).then(
                                    (msg)=>{
                                        window.location.replace("/");
                                    },(err)=>{
                                        handleErr(err,2)
                                    }
                                )
                            }}
                        >
                            <Form.Item
                                name="email"
                                rules={[{ required: true, message: '请输入电子邮箱！' },{type:'email',message:'邮箱格式错误！'}]}
                                style={{
                                    marginBottom:10
                                }}
                            >
                                <Input size={'large'} prefix={<MailOutlined className="site-form-item-icon" />} placeholder="电子邮箱" />
                            </Form.Item>
                            <Form.Item
                                name="fakeN"
                                rules={[{ required: true, message: '请输入昵称！' }]}
                                style={{
                                    marginBottom:10
                                }}
                            >
                                <Input size={'large'} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="昵称" />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[{ required: true, message: '请输入密码！' },{min:8,message:'密码至少为8位！'}]}
                                style={{
                                    marginBottom:10
                                }}
                                >
                                <Input
                                    size={'large'}
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    placeholder="密码"
                                />
                            </Form.Item>
                            <Form.Item
                                name="password_confirmation"
                                rules={[{ required: true, message: '请再次输入密码！' },{min:8,message:'密码至少为8位！'}]}
                                style={{
                                    marginBottom:10
                                }}>
                                <Input
                                    size={'large'}
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    placeholder="再次输入密码"
                                />
                            </Form.Item>


                            <Form.Item>
                                <Button style={{
                                    marginBottom:5
                                }} type="primary" htmlType="submit" className="login-form-button">
                                    注册
                                </Button>
                                或者 <Link to={base+'/'}>直接登陆</Link>
                            </Form.Item>
                        </Form>
                    </Route>

                    <Route exact path={base+'/forgot'}>

                        <Form
                            size={'large'}
                            name="normal_login"
                            className="login-form"
                            initialValues={{ remember: true }}
                            onFinish={(value)=>{
                                console.log(value)
                                this.setState({
                                    resetLoading:true
                                })
                                reqwest({
                                    url:'/password/email',
                                    method:'post',
                                    data:value,
                                    type:'json'
                                }).then(
                                    (msg)=>{
                                        message.success('邮件已经发送。')
                                        setTimeout(()=>window.location.replace("/home"),500)
                                    },(err)=>{
                                        handleErr(err,2)
                                        this.setState({
                                            resetLoading:false
                                        })
                                    }
                                )
                            }}
                        >
                            <Form.Item
                                name="email"
                                rules={[{ required: true, message: '请输入电子邮箱！' },{type:'email',message:'邮箱格式错误！'}]}
                            >
                                <Input size={'large'} prefix={<MailOutlined className="site-form-item-icon" />} placeholder="电子邮箱" />
                            </Form.Item>

                            <Form.Item>
                                <Button style={{
                                    marginBottom:5
                                }} loading={this.state.resetLoading} type="primary" htmlType="submit" className="login-form-button">
                                    重置密码
                                </Button>
                                或者 <Link to={base+'/'}>直接登陆</Link>
                            </Form.Item>
                        </Form>
                    </Route>
                </Router>
                <div className="footer">
                    <MyFooter />
                </div>
            </Layout>
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
