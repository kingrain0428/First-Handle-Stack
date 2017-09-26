import React from 'react';

import './index.less';

class InvestTotal extends React.Component{

    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        return(
            <div id="invest_index">
                <div className="clock_1">
                    <p className="content">
                        <span>资产负债率</span>
                        <span>10% 同比上周</span>
                    </p>
                    <p className="rate">
                        56%
                    </p>
                </div>
                <div className="clock_2">
                    <p className="content">
                        <span>资产总额</span>
                        <span>0.8% 同比上周</span>
                    </p>
                    <p className="money">
                        ¥ 6,777,783.00
                    </p>
                    <div className="bg_div">
                        <div></div>
                    </div>
                </div>
                <div className="clock_3">
                    <p className="content">
                        <span>资产负债率</span>
                        <span>10% 同比上周</span>
                    </p>
                    <p className="money">
                        ¥ 789,023.00
                    </p>
                    <div className="bg_div">
                        <div></div>
                    </div>
                </div>
                <div className="clock_4">
                    <p className="content">
                        <span>资产负债率</span>
                        <span>10% 同比上周</span>
                    </p>
                    <p className="rate">
                        56%
                    </p>
                </div>
                <div className="clock_5">
                    <p className="content">
                        <span>本月收益</span>
                        <span>0.8% 同比上周</span>
                    </p>
                    <p className="money">
                        ¥ 77,783.00
                    </p>
                    <div className="bg_div">
                        <div></div>
                    </div>
                </div>
                <div className="clock_6">
                    <p className="content">
                        <span>资产负债率</span>
                        <span>10% 同比上周</span>
                    </p>
                    <p className="money">
                        ¥ 9,023.00
                    </p>
                    <div className="bg_div">
                        <div></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default InvestTotal
