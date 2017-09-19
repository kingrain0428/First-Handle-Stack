/**
 * Created by wangyu on 2017/9/11.
 */
import React from 'react';
import {Link} from 'react-router'
import { Table } from 'antd';
import './index.less';
import HeadSrc from '../../assets/logo.png';
let timer_1;

class HomePage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    apply: '1001',
                    dealID: 'de0282a630fa32e9b4b186d50d8e18cafb3d9654732c15da79e2e4c76197c161',
                    dealQuantity: 32,
                    dealTime: '2017-09-12',
                }, {
                    apply: '1002',
                    dealID: 'de0282a630fa32e9b4b186d50d8e18cafb3d9654732c15da79e2e4c76197c162',
                    dealQuantity: 48,
                    dealTime: '2017-09-13',
                }, {
                    apply: '1003',
                    dealID: 'de0282a630fa32e9b4b186d50d8e18cafb3d9654732c15da79e2e4c76197c163',
                    dealQuantity: 12,
                    dealTime: '2017-09-14',
                }, {
                    apply: '1004',
                    dealID: 'de0282a630fa32e9b4b186d50d8e18cafb3d9654732c15da79e2e4c76197c164',
                    dealQuantity: 37,
                    dealTime: '2017-09-10',
                }, {
                    apply: '1005',
                    dealID: 'de0282a630fa32e9b4b186d50d8e18cafb3d9654732c15da79e2e4c76197c165',
                    dealQuantity: 78,
                    dealTime: '2017-09-02',
                }],
            isLogin: 'none',
            notLogin: 'block',
            navLists: [],
            blockHeight: 160879,
            users: 1576230,
            transactNum: 37639,
            id: 1005,
            dealID: 165
        }
        this.orderScroll = this.orderScroll.bind(this);
    }
    componentDidMount() {
        var me = this;
        window.addEventListener('scroll', this.orderScroll);
        if (localStorage.getItem('isLogin')) {
            this.setState({
                isLogin: 'block',
                notLogin: 'none',
                navLists: localStorage.getItem('navLists').split(',')
            })
        }

        timer_1 = setInterval(function () {
            me.setState({
                blockHeight: me.state.blockHeight + 99,
                users: me.state.users + 2,
                transactNum: me.state.transactNum + 1,
                id: me.state.id + 1,
                dealID: me.state.dealID + 1,
                data: [me.state.data[1], me.state.data[2], me.state.data[3], me.state.data[4], {
                            apply: me.state.id + 1,
                            dealID: 'de0282a630fa32e9b4b186d50d8e18cafb3d9654732c15da79e2e4c76197c' + (me.state.dealID),
                            dealQuantity: (parseInt(Math.random() * 100)  + 1),
                            dealTime: '2017-09-' + (parseInt(Math.random() * 15)  + 1),
                        }]
            })
        }, 1000)
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.orderScroll);
        clearInterval(timer_1)
    }
    orderScroll(e) {
        let scrollTop = e.path[1].scrollY
        this.refs.titleFixed.style.background = 'rgba(0,6,33,' + scrollTop/600 + ')';
    }
    //退出登录
    logOut() {
        localStorage.removeItem('isLogin');
        localStorage.removeItem('navLists');
        window.location.reload()
    }
    //nav
    handleNavlist(e) {
        let text = e.target.innerHTML;
        switch(text) {
            case '海象理财':
                localStorage.setItem('navID', 1)
                break;
            case '我要投资':
                localStorage.setItem('navID', 2)
                break;
            case '我要借款':
                localStorage.setItem('navID', 3)
                break;
            case '个人中心':
                localStorage.setItem('navID', 4)
                break;
        }
        location.hash = '/layout'

    }
    render() {
        const { notLogin, isLogin, navLists, data, blockHeight, users, transactNum} = this.state;
        const columns = [
            {
                title: '所属应用',
                dataIndex: 'apply',
                key: 'apply',
            }, {
                title: '交易Hash',
                dataIndex: 'dealID',
                key: 'dealID',
                render: (text) => {
                    return <Link to={{ pathname: '/detail', query: { name: text } }}>
                        {text}
                    </Link>
                }
            }, {
                title: '单笔交易量',
                dataIndex: 'dealQuantity',
                key: 'dealQuantity',
            }, {
                title: '交易时间',
                dataIndex: 'dealTime',
                key: 'dealTime',
            }];

        return(
            <div id="xianglian-home-page">
                <div className="title_fixed" ref='titleFixed'>
                    <img src={HeadSrc} className="title_img"/>
                    <ul onClick={this.handleNavlist}>
                        {
                            navLists.map(function (list, arg2) {
                                return <li key={arg2 + 1}>{list}</li>
                            })
                        }
                    </ul>
                    <div style={{display: notLogin}}>
                        <button className="btn_log">
                            <Link to="/login">登陆</Link>
                        </button>
                        <button className="btn_res">
                            <Link to="/login">注册</Link>
                        </button>
                    </div>
                    <div className="off" style={{display: isLogin}}>
                        <span onClick={this.logOut}>
                            退出
                        </span>
                    </div>
                </div>
                <div className="title_banner">
                    <div className="demo1">
                        <p>{blockHeight}</p>
                        <h2>当前区块高度</h2>
                    </div>
                    <div className="demo2">
                        <h2>用户量</h2>
                        <p>{users}</p>
                    </div>
                    <div className="demo3">
                        <h2>24小时交易笔数</h2>
                        <p>{transactNum}</p>
                    </div>
                </div>
                <div className="table_data">
                    <Table rowKey="homepageOne" pagination={false} columns={columns} dataSource={data} title={() => '最新交易'} />
                    <Table rowKey="homepageTwo" pagination={false} columns={columns} dataSource={data} title={() => '最新区块'} />
                </div>
                <div className="footer">
                    <p>官方交流群:565806304</p>
                    <p>copyright © 2015-2016 All Right Reserved.海象理财 版权所有 京ICP备：16033594号-2</p>
                    <p>Add：北京市朝阳区酒仙桥路52号东方科技园1号楼B座2层 Tel：64372398</p>
                    <p>京公网安备 11010502033347号</p>
                </div>
            </div>
        )
    }
}

export default HomePage
