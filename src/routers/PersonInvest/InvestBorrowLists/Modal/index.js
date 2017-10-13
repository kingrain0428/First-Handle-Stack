/**
 * Created by wangyu on 2017/9/28.
 */
import React from 'react';
import './index.less';
import {Modal, Button, Table} from 'antd';

const columns = [
    {
        title: '序号',
        dataIndex: 'id',
        key: 'id',
        width: 40
    },
    {
        title: '还款金额',
        dataIndex: 'paymentAmount',
        key: 'paymentAmount',
    },
    {
        title: '本金',
        dataIndex: 'principal',
        key: 'principal',
    },
    {
        title: '手续费',
        dataIndex: 'charge',
        key: 'charge'
    },
    {
        title: '还款日期',
        dataIndex: 'repaymentDate',
        key: 'repaymentDate'
    },
    {
        title: '状态',
        dataIndex: 'status',
        key: 'status'
    },
    {
        title: '实际还款日期',
        dataIndex: 'realityDate',
        key: 'realityDate'
    }
]
const data = []
for(let i = 1; i <= 6; i++) {
    data.push({
        key: i,
        id: i,
        paymentAmount: '¥567',
        principal: '¥200.00',
        charge: '¥34.00',
        repaymentDate: '2015-09-26 08:50:08',
        status: '已还款',
        realityDate: '2015-09-26 08:50:08'
    })
}

class InvestBorTableModal extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }

    componentWillReceiveProps = (nextProps) => {
        this.setState({
            visible: nextProps.visible
        })
    }

    handleHid = () => {
        this.setState({
            visible: false
        })
    }

    render () {
        const {visible} = this.state;
        return (
            <div>
                <Modal title='借款详情' visible={visible} onCancel={this.handleHid}
                    footer={<Button onClick={this.handleHid} type='primary'>关闭</Button>}
                >
                    <div className="invest_list_modal_div">
                        <h2>借款详情 <span className="name">全时便利店</span> <span className="number">供应链-001</span></h2>
                        <ul>
                            <li>
                                ¥50,000.00 <span>借款金额：</span>
                            </li>
                            <li>
                                50 <span>借款天数：</span>
                            </li>
                            <li>
                                ¥50,000.00 <span>投资金额：</span>
                            </li>
                            <li>
                                180 <span>锁定天数：</span>
                            </li>
                            <li>
                                2015-12-12 12:34:56 <span>借款时间：</span>
                            </li>
                            <li>
                                2016-12-11 12:34:55 <span>最后还款日期：</span>
                            </li>
                            <li style={{width: '100%'}}>
                                ¥1230 <span>手续费：</span>
                            </li>
                            <li>
                                ¥50,000.00 <span>利息：</span>
                            </li>
                            <li>
                                69 <span>投资人数：</span>
                            </li>
                        </ul>
                    </div>
                    <Table columns={columns} dataSource={data} scroll={{x: 600}} pagination={{pageSize: 5}} />
                </Modal>
            </div>
        )
    }
}

export default InvestBorTableModal
