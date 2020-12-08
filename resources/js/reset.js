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
const { SubMenu } = Menu;
const { Header, Content, Sider,Footer } = Layout;

const base = '/user';


class App extends React.Component{
    state={
        valid:false,
        email:decodeURIComponent(this.getQueryVariable('email')),
        token:this.getQueryVariable('token'),
        loading:false
    }
    constructor(props) {
        super(props);
    }
    getQueryVariable(variable)
    {
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i=0;i<vars.length;i++) {
            var pair = vars[i].split("=");
            if(pair[0] === variable){return pair[1];}
        }
        return false;
    }
    componentDidMount() {
        let token=this.getQueryVariable('token')
        let email=this.getQueryVariable('email')
        if (!token||!email){
            message.error('参数不正确！')
            return;
        }
        console.log(token,email)
        this.setState({
            token:token,
            email:email,
            valid:true
        })
    }

    render(){
        return(
            <Layout className={'layout'}>
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
                        <Form
                            size={'large'}
                            name="normal_login"
                            className="login-form"
                            initialValues={{ email:this.state.email,token:this.state.token }}
                            onFinish={(value)=>{
                                value.name=value.fakeN
                                console.log(value)
                                this.setState({
                                    loading:true
                                })
                                reqwest({
                                    url:'/password/reset',
                                    method:'post',
                                    data:value,
                                    type:'json'
                                }).then(
                                    (msg)=>{
                                        message.success('密码重置成功！')
                                        setTimeout(()=>window.location.replace("/"),500)
                                    },(err)=>{
                                        handleErr(err,2)
                                        this.setState({
                                            loading:false
                                        })
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
                                name="token"
                                hidden
                            >
                                <Input/>
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
                                }} disabled={!this.state.valid} loading={this.state.loading} type="primary" htmlType="submit" className="login-form-button">
                                    更改密码
                                </Button>
                                或者 <a href={'/user'}>直接登陆</a>
                            </Form.Item>
                        </Form>
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
