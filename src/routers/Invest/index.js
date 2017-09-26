import React from 'react';
import {Link} from 'react-router';

import './index.less';

class InvestTotal extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            lists: [
                {
                    key: '1',
                    titleText: '海象金服',
                    investTotal: '2098988',
                    balance: '9089.00',
                    earn: '89.87',
                    earnTotal: '123498.00',
                    rate: '7.5%',
                    link: 'investList'
                },
                {
                    key: '2',
                    titleText: '全融信贷',
                    investTotal: '2098988',
                    balance: '9089.00',
                    earn: '89.87',
                    earnTotal: '123498.00',
                    rate: '7.5%',
                    link: 'investList'
                },
                {
                    key: '3',
                    titleText: '悟空理财',
                    investTotal: '2098988',
                    balance: '9089.00',
                    earn: '89.87',
                    earnTotal: '123498.00',
                    rate: '7.5%',
                    link: 'investList'
                },
                {
                    key: '4',
                    titleText: '拍拍贷',
                    investTotal: '2098988',
                    balance: '9089.00',
                    earn: '89.87',
                    earnTotal: '123498.00',
                    rate: '7.5%',
                    link: 'investList'
                }
            ]
        }
    }

    componentDidMount() {
    }

    render() {


        return(
            <div id="invest">
                <div className="clock_1">
                    <p className="content">
                        <span>资产总额</span>
                        <span></span>
                    </p>
                    <p className="money">
                        ¥ 6,777,783.00
                    </p>
                    <div className="bg_div">
                        <div></div>
                    </div>
                </div>
                <div className="clock_2">
                    <p className="content">
                        <span>昨日收益</span>
                        <span>10% 收益率</span>
                    </p>
                    <p className="rate">
                        56%
                    </p>
                </div>
                <div className="clock_3">
                    <p className="content">
                        <span>总收益</span>
                        <span>10% 收益率</span>
                    </p>
                    <p className="rate">
                        56%
                    </p>
                </div>
                <div className="case"></div>
                <ul className="invest_lists">
                    {
                        this.state.lists.map((list) => {
                            return (
                                <li className="invest_list" key={list.key}>
                                    <h2>{list.titleText} <span><Link to={{ pathname: list.link, query: { title: list.titleText } }} >···</Link></span></h2>
                                    <div className="left">
                                        <p>投资总额： ¥{list.investTotal}</p>
                                        <p>账户余额：¥{list.balance}</p>
                                        <p>昨日收益：¥{list.earn}</p>
                                        <p>总收益：¥{list.earnTotal}</p>
                                    </div>
                                    <div className="right">
                                        <p>昨日收益率</p>
                                        <h3>{list.rate}</h3>
                                    </div>
                                </li>
                            )
                        })
                    }

                </ul>
            </div>
        )
    }
}

export default InvestTotal
