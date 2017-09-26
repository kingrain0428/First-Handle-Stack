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
                    link: 'investBorrowLists',
                    isClear: true
                },
                {
                    key: '2',
                    titleText: '全融信贷',
                    investTotal: '2098988',
                    balance: '9089.00',
                    earn: '89.87',
                    earnTotal: '123498.00',
                    rate: '7.5%',
                    link: 'investBorrowLists',
                    isClear: false
                },
                {
                    key: '3',
                    titleText: '悟空理财',
                    investTotal: '2098988',
                    balance: '9089.00',
                    earn: '89.87',
                    earnTotal: '123498.00',
                    rate: '7.5%',
                    link: 'investBorrowLists',
                    isClear: false
                },
                {
                    key: '4',
                    titleText: '拍拍贷',
                    investTotal: '2098988',
                    balance: '9089.00',
                    earn: '89.87',
                    earnTotal: '123498.00',
                    rate: '7.5%',
                    link: 'investBorrowLists',
                    isClear: false
                }
            ]
        }
    }

    componentDidMount() {
    }

    render() {


        return(
            <div id="invest_borrow">
                <div className="total">
                    <ul className="total_detail">
                        <li className="amount">
                            <div>
                                <img src={require('../../assets/borrow_2.png')}/>
                            </div>
                            <p>借款总金额</p>
                            <h2>¥124,345</h2>
                        </li>
                        <li className="amountMonth">
                            <div>
                                <img src={require('../../assets/borrow_4.png')}/>
                            </div>
                            <p>本月需还总额</p>
                            <h2>¥54,322</h2>
                        </li>
                        <li className="amountDay">
                            <div>
                                <img src={require('../../assets/borrow_6.png')}/>
                            </div>
                            <p>今日需还总额</p>
                            <h2>¥68,123</h2>
                        </li>
                    </ul>
                </div>
                <ul className="invest_lists">
                    {
                        this.state.lists.map((list) => {
                            return (
                                <li className="invest_list" key={list.key}>
                                    <h2>{list.titleText} <p style={{display: list.isClear ? 'inline-block' : 'none'}}>已还清</p> <span><Link to={{ pathname: list.link, query: { title: list.titleText } }} >···</Link></span></h2>
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
