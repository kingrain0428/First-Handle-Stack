import React from 'react';

import './index.less';

import { Table, Icon } from 'antd'

class LoanIndex extends React.Component{

    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        const columns = [
            {
                title: '日期',
                dataIndex: 'date',
                key: 'date',
            }, {
                title: '个人标的',
                dataIndex: 'personObject',
                key: 'personObject',
            }, {
                title: '占比',
                dataIndex: 'ratePer',
                key: 'ratePer',
            }, {
                title: '企业标的',
                dataIndex: 'companyObject',
                key: 'companyObject',
            }, {
                title: '占比',
                dataIndex: 'rateCom',
                key: 'rateCOm',
            }, {
                title: '合计',
                dataIndex: 'total',
                key: 'total',
            }];

        const data = [
            {
                key: '1',
                date: '2017-10-22',
                personObject: '35000',
                ratePer: '35%',
                companyObject: '35000',
                rateCom: '35%',
                total: '350001'
            },
            {
                key: '2',
                date: '2017-10-22',
                personObject: '35000',
                ratePer: '35%',
                companyObject: '35000',
                rateCom: '35%',
                total: '350001'
            },
            {
                key: '3',
                date: '2017-10-22',
                personObject: '35000',
                ratePer: '35%',
                companyObject: '35000',
                rateCom: '35%',
                total: '350001'
            },
            {
                key: '4',
                date: '2017-10-22',
                personObject: '35000',
                ratePer: '35%',
                companyObject: '35000',
                rateCom: '35%',
                total: '350001'
            },
            {
                key: '5',
                date: '2017-10-22',
                personObject: '35000',
                ratePer: '35%',
                companyObject: '35000',
                rateCom: '35%',
                total: '350001'
            }
        ];
        return(
            <div id="loan_index">
                <h2>数据概览</h2>
                <div className="clock_1">
                    <p className="content">
                        <span>注册用户</span>
                        <span>10% 同比上周</span>
                    </p>
                    <p className="rate">
                        123,456
                    </p>
                </div>
                <div className="clock_2">
                    <p className="content">
                        <span>存续金额</span>
                        <span>0.8% 同比上周</span>
                    </p>
                    <p className="money">
                        ¥ 999,890,234
                    </p>
                    <div className="bg_div">
                        <div></div>
                    </div>
                </div>
                <div className="clock_1">
                    <p className="content">
                        <span>企业标的存续总额</span>
                        <span>10% 同比上周</span>
                    </p>
                    <p className="rate">
                        124,345
                    </p>
                </div>
                <div className="clock_1">
                    <p className="content">
                        <span>个人标的存续总额</span>
                        <span>10% 同比上周</span>
                    </p>
                    <p className="rate">
                        124,345
                    </p>
                </div>
                <div className="clock_1">
                    <p className="content">
                        <span>充值额</span>
                        <span>10% 同比上周</span>
                    </p>
                    <p className="rate">
                        124,345
                    </p>
                </div>
                <div className="clock_1">
                    <p className="content">
                        <span>提现额</span>
                        <span>10% 同比上周</span>
                    </p>
                    <p className="rate">
                        124,345
                    </p>
                </div>
                <div className="clock_3">
                    <p className="content">
                        <span>投资额</span>
                        <span>10% 同比上周</span>
                    </p>
                    <p className="money">
                        ¥ 124,345
                    </p>
                    <div className="bg_div">
                        <div></div>
                    </div>
                </div>
                <div className="clock_4">
                    <p className="content">
                        <span>赎回额度</span>
                        <span>0.8% 同比上周</span>
                    </p>
                    <p className="money">
                        ¥ 345,44
                    </p>
                    <div className="bg_div">
                        <div></div>
                    </div>
                </div>
                <div className="superCase"></div>
                <Table columns={columns} dataSource={data} title={() => '标的到期'} />
            </div>
        )
    }
}

export default LoanIndex
