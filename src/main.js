/**
 * Created by wangyu on 2017/9/10.
 */
import React from 'react';
import {render} from 'react-dom';
import {Router, Route, hashHistory as history} from 'react-router';

import Homepage from './routers/HomePage/index';
import DataDetail from './routers/DataDetail/index';
//个人中心
// import User from './routers/PersonUser/index';
// import Info from './routers/PersonInfo/index';
// import Node from './routers/PersonNode/index';
// import Contract from './routers/PersonContract/index';
// import Appstore from './routers/PersonApps/index';

//个人投资
import InvestIndex from './routers/PersonInvest/InvestIndex/index';
import Invest from './routers/PersonInvest/Invest/index';
import InvestBorrow from './routers/PersonInvest/InvestBorrow/index';

import InvestList from './routers/PersonInvest/InvestList/index';
import InvestBorrowLists from './routers/PersonInvest/InvestBorrowLists/index';
//个人借款
import LoanIndex from './routers/PersonLoan/LoanIndex/index';
import PersonEntrance from './routers/PersonLoan/PersonEntrance/index';
import CompanyEntrance from './routers/PersonLoan/CompeanyEntrance/index';
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
                /*个人投资*/
                <Route path='/invest/index' component={InvestIndex}/>
                <Route path='/invest/invest' component={Invest}/>
                <Route path="/invest/borrow" component={InvestBorrow}/>

                <Route path="/invest/investList" component={InvestList}/>
                <Route path="/invest/investBorrowLists" component={InvestBorrowLists}/>
                /*个人借款*/
                <Route path='/loan/index' component={LoanIndex}/>
                <Route path='/loan/person/entrance' component={PersonEntrance}/>
                <Route path='/loan/company/entrance' component={CompanyEntrance}/>
                <Route path='/loan/index' component={InvestIndex}/>
                <Route path='/loan/index' component={InvestIndex}/>
                <Route path='/loan/index' component={InvestIndex}/>
                <Route path='/loan/index' component={InvestIndex}/>
                <Route path='/loan/index' component={InvestIndex}/>

            </Route>
        </div>
    </Router>
)


render(
    <Apps/>,
    document.getElementById('root')
)
