/**
 * Created by wangyu on 2017/9/12.
 */
import React from 'react';
import HeadSrc from '../../assets/logo.png';
import {Link} from 'react-router';
import './index.less';


class DataDetail extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isLogin: 'none',
            notLogin: 'block',
            navLists: []
        }
    }
    componentDidMount() {
        // console.log(this.props.location.query.name)
        if (localStorage.getItem('isLogin')) {
            this.setState({
                isLogin: 'block',
                notLogin: 'none',
                navLists: localStorage.getItem('navLists').split(',')
            })
        }
    }

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
                break
            case '我要投资':
                localStorage.setItem('navID', 2)
                break
            case '我要借款':
                localStorage.setItem('navID', 3)
                break
            case '个人中心':
                localStorage.setItem('navID', 4)
                break
        }
        location.hash = '/layout'

    }

    handleImage() {
        window.location.hash = '/'
    }

    render() {
        const {navLists, notLogin, isLogin} = this.state;
        return(
            <div id="data_detail">
                <div className="title_fixed" ref='titleFixed'>
                    <img src={HeadSrc} className="title_img" onClick={this.handleImage}/>
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
                <div className="detail">
                    <h2>交易ID：{this.props.location.query.name}</h2>
                    <div className="contents">
                        <div className="left">
                            <p>交易发起方：</p>
                            <p>交易接收方：</p>
                            <p>资产名称：</p>
                            <p>交易数量：</p>
                            <p>交易时间：</p>
                        </div>
                        <div className="right">
                            <p>海象金服</p>
                            <p>浩瀚资本</p>
                            <p>一年盈</p>
                            <p>20000</p>
                            <p>2017-9-12 15:07:33</p>
                        </div>
                    </div>
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

export default DataDetail