/**
 * Created by wangyu on 2017/9/27.
 */
import React from 'react';
import './index.less';
import {Modal, Button} from 'antd';

class InvestModal extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            title: '',
            defaultKey: '1'
        }
    }
    componentWillReceiveProps = (nextProps) => {
        this.setState({
            visible: nextProps.visibleModal,
            title: nextProps.modalTitle,
            defaultKey: nextProps.defaultKey
        })
    }
    modalHid = () => {
        this.setState({
            visible: false
        })
    }
    render() {
        const {visible, title, defaultKey} = this.state;
        return (
            <div id="invest_list_modal">
                <Modal
                    title={title}
                    visible={visible}
                    onCancel={this.modalHid}
                    footer={<Button onClick={this.modalHid} type='primary'>关闭</Button>}
                >
                    <div style={{display: defaultKey == '1' || defaultKey == '2' ? 'block' : 'none'}}>
                        <div className="invest_list_modal_div">
                            <h2>投资／赎回 <span className="name">全时便利店</span> <span className="number">供应链-001</span></h2>
                            <ul>
                                <li>
                                    ¥50,000.00 <span>资产金额：</span>
                                </li>
                                <li>
                                    50 <span>投资天数：</span>
                                </li>
                                <li>
                                    ¥50,000.00 <span>投资金额：</span>
                                </li>
                                <li>
                                    180 <span>锁定天数：</span>
                                </li>
                                <li>
                                    2015-12-12 12:34:56 <span>投资时间：</span>
                                </li>
                                <li>
                                    2016-12-11 12:34:55 <span>预期还款日期：</span>
                                </li>
                                <li>
                                    XXX <span>预期年化收益率：</span>
                                </li>
                                <li>
                                    ¥50,000.00 <span>预期年化收益：</span>
                                </li>
                            </ul>
                        </div>
                        <div className="invest_list_modal_div">
                            <h2>公司简介 <span className="name">全时便利店</span> <span className="number">地址：</span></h2>
                            <ul>
                                <li>
                                    张三 <span>法人姓名：</span>
                                </li>
                                <li>
                                    xxx <span>经营范围：</span>
                                </li>
                                <li>
                                    7988888888877x <span>统一社会编号：</span>
                                </li>
                                <li>
                                    李四 <span>联系人：</span>
                                </li>
                                <li>
                                    133333333 <span>联系电话：</span>
                                </li>
                            </ul>
                        </div>
                        <div className="invest_list_modal_div">
                            <h2>资产详情 <span className="name">供应链-001</span> <span className="number">资产金额：¥500,000</span></h2>
                            <ul>
                                <li>
                                    商业用途 <span>贷款用途：</span>
                                </li>
                                <li>
                                    xxx <span>担保方式：</span>
                                </li>
                                <li>
                                    ¥50,000.00 <span>放款日期：</span>
                                </li>
                                <li>
                                    2017-09-09 12:34:57 <span>预计还款日期：</span>
                                </li>
                                <li>
                                    10% <span>年化利率：</span>
                                </li>
                                <li>
                                    2016-12-11 12:34:55 <span>实际还款日期：</span>
                                </li>
                                <li>
                                    一次付清 <span>还款方式：</span>
                                </li>
                                <li style={{width: '100%'}}>
                                    ¥50,000.00 <span>项目背景：</span>
                                </li>
                                <li style={{width: '100%'}}>
                                    ¥50,000.00 <span>资金用途：</span>
                                </li>
                                <li style={{width: '100%'}}>
                                    ¥50,000.00 <span>风控措施：</span>
                                </li>
                            </ul>
                        </div>
                    </div>


                </Modal>
            </div>
        )
    }
}


export default InvestModal