/**
 * Created by wangyu on 2017/9/10.
 */
import React from 'react';
import {render} from 'react-dom';
import {Router, Route, hashHistory as history} from 'react-router';

import Homepage from './routers/HomePage/index';
import DataDetail from './routers/DataDetail/index';
//投资
import InvestTotal from './routers/InvestTotal/index';
import InvestInvest from './routers/InvestInvest/index';
import InvestClear from './routers/InvestClear/index'

//理财
import MoneyTotal from './routers/MoneyTotal/index';
import MoneyIn from './routers/MoneyIn/index';
import MoneyOut from './routers/MoneyOut/index';

//借款
import LoanTotal from './routers/LoanTotal/index';
import LoanClear from  './routers/LoanClear/index';
//个人中心
import User from './routers/PersonUser/index';
import Info from './routers/PersonInfo/index';
import Node from './routers/PersonNode/index';
import Contract from './routers/PersonContract/index';
import Appstore from './routers/PersonApps/index';
//登陆
import NormalLogin from './login';
//后台布局
import ManLayout from './ManLayout/index';

const Apps = () => (
    <Router history={history}>
        <div style={{height: '100%'}}>
            <Route path='/' component={Homepage}/>
            <Route path="/login" component={NormalLogin}/>
            <Route path="/detail" component={DataDetail}/>
            <Route path='/layout' component={ManLayout}>
                <Route path='/investTotal' component={InvestTotal}/>
                <Route path='/investInvest' component={InvestInvest}/>
                <Route path='/investClear' component={InvestClear}/>

                <Route path="/moneyTotal" component={MoneyTotal}/>
                <Route path="/moneyIn" component={MoneyIn}/>
                <Route path="/moneyOut" component={MoneyOut}/>

                <Route path="/loanTotal" component={LoanTotal}/>
                <Route path="/loanClear" component={LoanClear}/>

                <Route path='/user' component={User}/>
                <Route path="/info" component={Info}/>
                <Route path="/contract" component={Contract}/>
                <Route path="/app" component={Appstore}/>
                <Route path="/node" component={Node}/>

            </Route>
        </div>
    </Router>
)


render(
    <Apps/>,
    document.getElementById('root')
)
