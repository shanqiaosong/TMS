import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Layout, Menu, Dropdown, Avatar, message } from 'antd';
const { Header, Sider, Content } = Layout;
import { BrowserRouter as Router, Route, Link, HashRouter, Redirect, Switch } from 'react-router-dom'
import { Article } from './components/Blog/Article/Article'
import { ArticleCreate } from './components/Blog/Article/ArticleCreate'
import { ArticleUpdate } from './components/Blog/Article/ArticleUpdate'
import { Tag } from './components/Blog/Article/Tag'
import { Comment } from './components/Blog/Comment/Comment'
import { Blacklist } from './components/Blog/Comment/Blacklist'
import { Dashboard } from './components/Blog/Dashboard/Dashboard'
import { Setting } from './components/Blog/Setting/Setting'
import axios from 'axios';

class SiderLayout extends React.Component {
  render() {
    return (
      <HashRouter>
        <>
          <Layout className="layout">
            <Sider collapsible >
              <div className="layout__logo" />
              <Menu
                theme="dark"
                defaultSelectedKeys={this.menuAutoSelect()}>
                <Menu.Item key="dashboard">
                  <Link to="/">
                    <span>后台首页</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="articles">
                  <Link to="/articles">
                    <span>文章管理</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="comments">
                  <Link to="/comments">
                    <span>留言管理</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="settings">
                  <Link to="/settings/web">
                    <span>设置中心</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="exit">
                  <a href="/">
                    <span>退出后台</span>
                  </a>
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout>
              <Header className="layout__header">
                <div className="layout__header__right">
                  <Dropdown overlay={menu}>
                    <a href="#">
                      <Avatar />
                      <span className="layout__header__right__name">{'管理员'}</span>
                    </a>
                  </Dropdown>
                </div>
              </Header>
              <Content className="layout__content">
                <Switch>
                  <Route path="/" exact component={Dashboard}/>
                  <Route path="/articles" exact component={Article}/>
                  <Route path="/articles/create/:type" exact component={ArticleCreate}/>
                  <Route path="/articles/update/:id" component={ArticleUpdate}/>
                  <Route path="/tags" exact component={Tag}/>
                  <Route path="/comments" exact component={Comment}/>
                  <Route path="/blacklist" exact component={Blacklist}/>
                  <Route path="/settings/:module" exact component={Setting}/>
                  <Redirect to="/" />
                </Switch>
              </Content>
            </Layout>
          </Layout>
        </>
      </HashRouter>
    );
  }
  //左侧菜单选中状态根据 url 自动转换
  menuAutoSelect() {
    let key = window.location.hash.split('/')[1];
    if (key=='' || !key) {
      key = 'dashboard';
    }
    return new Array(key);
  }
  //new function
}

//头像下拉菜单处理
const avatarOnClick = function({key}){
  switch (key) {
    case 'personal':
      location.hash = '#/settings/personal';
      break;
    case 'logout':
      axios.post('logout')
      .then(function (response) {
        location.reload()
      })
      .catch(function (error) {
        console.log(error);
      });
      break;
    default: break;
  }
};
//头像下拉菜单
const menu = (
  <Menu onClick={avatarOnClick}>
    <Menu.Item key="version">
      <span>版本 1.0.10</span>
    </Menu.Item>
    <Menu.Item key="personal">
      <span>博主设置</span>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="logout">
      <span>退出登录</span>
    </Menu.Item>
  </Menu>
);

//挂载根节点
if (document.getElementById('root')) {
    ReactDOM.render(<SiderLayout />, document.getElementById('root'));
}
