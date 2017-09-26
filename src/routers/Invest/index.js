import React from 'react';

import './index.less';

class InvestTotal extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
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
                <ul>
                    <li>

                    </li>
                </ul>
            </div>
        )
    }
}

export default InvestTotal
