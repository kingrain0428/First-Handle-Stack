/**
 * Created by wangyu on 2017/9/10.
 */
import React from 'react';
import { Layout, Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
// const { SubMenu } = Menu;
const { Header, Sider, Content } = Layout;
import {Link} from 'react-router';

import './index.less';

class SiderDemo extends React.Component {
    state = {
        collapsed: false,
        data: [
            [
                { key: 'invest/index', name: '首页', icon: 'home'},
                { key: 'invest/invest', name: '投资', icon: 'area-chart'},
                { key: 'invest/borrow', name: '借款', icon: 'pay-circle-o'}
            ],
            [
                { key: 'loan/index', name: '首页', icon: 'home'},
                { key: 'loan/person', name: '个人', icon: 'user'},
                { key: 'loan/company', name: '企业', icon: 'usergroup-add'},
                { key: 'loan/object', name: '标的', icon: 'pushpin'},
                { key: 'loan/expMoney', name: '体验金', icon: 'red-envelope'},
                { key: 'loan/addCard', name: '加息卡', icon: 'credit-card'}
            ],
            [
                { key: 'moneyTotal', name: '总账户', icon: 'switcher'},
                { key: 'moneyIn', name: '收款清算户', icon: 'solution'},
                { key: 'moneyOut', name: '出款清算户', icon: 'exception'}
            ],
            [
                { key: 'user', name: '用户信息', icon: 'user'},
                { key: 'info', name: '认证信息', icon: 'camera-o'},
                { key: 'contract', name: '接入合同', icon: 'solution'},
                { key: 'app', name: '我的应用', icon: 'appstore-o'},
                { key: 'node', name: '我的节点', icon: 'pushpin-o'}
            ]
        ],
        menuLists: []
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    componentWillMount () {
        // if (localStorage.getItem('isLogin')) {
        //     window.location.hash = 'login'
        // }
        let navID = localStorage.getItem('navID');
        let data = this.state.data;
        switch (navID) {
            case '1':
                this.setState({
                    menuLists : data[0]
                })
                break
            case '2':
                this.setState({
                    menuLists : data[1]
                })
                break
            case '3':
                this.setState({
                    menuLists : data[2]
                })
                break
            case '4':
                this.setState({
                    menuLists : data[3]
                })
                break
            default:
                window.location.hash = '/'
        }
    }

    render() {
        const {menuLists} = this.state;
        return (
            <div style={{height: '100%'}} id="components-layout-demo-custom-trigger">
                <Layout style={{height: '100%'}}>
                    <Sider
                        trigger={null}
                        collapsible
                        collapsed={this.state.collapsed}
                    >
                        <div className="logo">

                        </div>
                        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                            {
                                menuLists.map(function (list) {
                                    return (
                                        <Menu.Item key={list.key}>
                                            <Link to={list.key}>
                                                <Icon type={list.icon} />
                                                <span>{list.name}</span>
                                            </Link>
                                        </Menu.Item>
                                    )
                                })
                            }
                        </Menu>
                    </Sider>
                    <Layout>
                        <Header style={{ background: '#fff', padding: 0 }}>
                            <Icon
                                className="trigger"
                                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                onClick={this.toggle}
                            />
                            <Link to="/" className='return_index'>
                                <span>返回主页</span>
                            </Link>
                        </Header>
                        <Content style={{ margin: '24px 16px', padding: 24, background: '#fff' }}>
                            {this.props.children}
                        </Content>
                    </Layout>
                </Layout>
            </div>

        );
    }
}

export default SiderDemo