import React from 'react';
import './index.less';
import { Tabs, Table, Icon } from 'antd';
const TabPane = Tabs.TabPane;

import InvestModal from './Dialog/index';


class InvestTotal extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            defaultKey: '1',
            visible: false,
            modalTitle: '投资',
        }
    }

    componentDidMount() {
    }

    handleClick = (key) => {
        let title;
        switch (key) {
            case '1':
                title = '投资'
                break
            case '2':
                title = '赎回'
                break
            case '3':
                title = '充值'
                break
            case '4':
                title = '提现'
                break
            case '5':
                title = '奖励'
                break
            default:
                title = '积分'
        }
        this.setState({
            modalTitle: title,
            visible: false,
            defaultKey: key
        })
    }

    render() {
        const me = this;
        const {visible, modalTitle, defaultKey} = me.state;

        //投资
        const columns_1 = [
            {
                title: '序号',
                dataIndex: 'id',
                key: 'id',
            }, {
                title: '资产名称',
                dataIndex: 'name',
                key: 'name',
                render: text => <a href="javascript:void(0);">{text}</a>,
                onCellClick: (record) => {
                    this.setState({
                        visible: true,
                    })
                }
            }, {
                title: '投资金额',
                dataIndex: 'amount',
                key: 'amount',
            }, {
                title: '资产类型',
                dataIndex: 'type',
                key: 'type',
            }, {
                title: '投资日期',
                dataIndex: 'date',
                key: 'date',
            }, {
                title: '投资／持有天数',
                dataIndex: 'days',
                key: 'days',
            }, {
                title: '预期收益／已获收益',
                dataIndex: 'earn',
                key: 'earn',
            }];
        const data_1 = [
            {
                key: '1',
                id: '1',
                name: '供应链-001',
                amount: '¥1200',
                type: '理财计划-001',
                date: '2015-09-26 08:50:08',
                days: '30／10',
                earn: '102／14'
            }, {
                key: '2',
                id: '2',
                name: '供应链-001',
                amount: '¥1200',
                type: '理财计划-001',
                date: '2015-09-26 08:50:08',
                days: '30／10',
                earn: '102／14'
            }, {
                key: '3',
                id: '3',
                name: '供应链-001',
                amount: '¥1200',
                type: '理财计划-001',
                date: '2015-09-26 08:50:08',
                days: '30／10',
                earn: '102／14'
            }, {
                key: '4',
                id: '4',
                name: '供应链-001',
                amount: '¥1200',
                type: '理财计划-001',
                date: '2015-09-26 08:50:08',
                days: '30／10',
                earn: '102／14'
            }, {
                key: '5',
                id: '5',
                name: '供应链-001',
                amount: '¥1200',
                type: '理财计划-001',
                date: '2015-09-26 08:50:08',
                days: '30／10',
                earn: '102／14'
            },];
//赎回
        const columns_2 = [
            {
                title: '序号',
                dataIndex: 'id',
                key: 'id',
            }, {
                title: '资产名称',
                dataIndex: 'name',
                key: 'name',
                render: text => <a href="javascript:void(0);">{text}</a>,
                onCellClick: (record) => {
                    this.setState({
                        visible: true,
                    })
                }
            }, {
                title: '投资金额',
                dataIndex: 'amount',
                key: 'amount',
            }, {
                title: '资产类型',
                dataIndex: 'type',
                key: 'type',
            }, {
                title: '投资日期',
                dataIndex: 'date',
                key: 'date',
            }, {
                title: '赎回日期',
                dataIndex: 'returnDate',
                key: 'returnDate',
            }, {
                title: '持有天数',
                dataIndex: 'days',
                key: 'days',
            }, {
                title: '已获收益',
                dataIndex: 'earn',
                key: 'earn',
            }];
        const data_2 = [
            {
                key: '1',
                id: '1',
                name: '供应链-001',
                amount: '¥1200',
                type: '理财计划-001',
                date: '2015-09-26 08:50:08',
                returnDate: '2015-09-26 08:50:08',
                days: '10',
                earn: '14'
            }, {
                key: '2',
                id: '2',
                name: '供应链-001',
                amount: '¥1200',
                type: '理财计划-001',
                date: '2015-09-26 08:50:08',
                returnDate: '2015-09-26 08:50:08',
                days: '10',
                earn: '14'
            }, {
                key: '3',
                id: '3',
                name: '供应链-001',
                amount: '¥1200',
                type: '理财计划-001',
                date: '2015-09-26 08:50:08',
                returnDate: '2015-09-26 08:50:08',
                days: '10',
                earn: '14'
            }, {
                key: '4',
                id: '4',
                name: '供应链-001',
                amount: '¥1200',
                type: '理财计划-001',
                date: '2015-09-26 08:50:08',
                returnDate: '2015-09-26 08:50:08',
                days: '10',
                earn: '14'
            }, {
                key: '5',
                id: '5',
                name: '供应链-001',
                amount: '¥1200',
                type: '理财计划-001',
                date: '2015-09-26 08:50:08',
                returnDate: '2015-09-26 08:50:08',
                days: '10',
                earn: '14'
            }];
//充值
        const columns_3 = [
            {
                title: '序号',
                dataIndex: 'id',
                key: 'id',
            }, {
                title: '订单编号',
                dataIndex: 'number',
                key: 'number',
                render: text => <a href="javascript:void(0);">{text}</a>,
                onCellClick: (record) => {
                    this.setState({
                        visible: true,
                    })
                }
            }, {
                title: '投资金额',
                dataIndex: 'amount',
                key: 'amount',
            }, {
                title: '银行卡',
                dataIndex: 'bankCard',
                key: 'bankCard',
            }, {
                title: '充值日期',
                dataIndex: 'upDate',
                key: 'upDate',
            }, {
                title: '到账日期',
                dataIndex: 'dayAccount',
                key: 'dayAccount',
            }];
        const data_3 = [
            {
                key: '1',
                id: '1',
                number: 'R10002',
                amount: '¥1200',
                bankCard: '中国银行',
                upDate: '2015-09-26 08:50:08',
                dayAccount: '2015-09-26 08:50:08',
            }, {
                key: '2',
                id: '2',
                number: 'R10002',
                amount: '¥1200',
                bankCard: '中国银行',
                upDate: '2015-09-26 08:50:08',
                dayAccount: '2015-09-26 08:50:08',
            }, {
                key: '3',
                id: '3',
                number: 'R10002',
                amount: '¥1200',
                bankCard: '中国银行',
                upDate: '2015-09-26 08:50:08',
                dayAccount: '2015-09-26 08:50:08',
            }, {
                key: '4',
                id: '4',
                number: 'R10002',
                amount: '¥1200',
                bankCard: '中国银行',
                upDate: '2015-09-26 08:50:08',
                dayAccount: '2015-09-26 08:50:08',
            }, {
                key: '5',
                id: '5',
                number: 'R10002',
                amount: '¥1200',
                bankCard: '中国银行',
                upDate: '2015-09-26 08:50:08',
                dayAccount: '2015-09-26 08:50:08',
            },];
//提现
        const columns_4 = [
            {
                title: '序号',
                dataIndex: 'id',
                key: 'id',
            }, {
                title: '订单编号',
                dataIndex: 'number',
                key: 'number',
                render: text => <a href="javascript:void(0);">{text}</a>,
                onCellClick: (record) => {
                    this.setState({
                        visible: true,
                    })
                }
            }, {
                title: '投资金额',
                dataIndex: 'amount',
                key: 'amount',
            }, {
                title: '银行卡',
                dataIndex: 'bankCard',
                key: 'bankCard',
            }, {
                title: '充值日期',
                dataIndex: 'upDate',
                key: 'upDate',
            }, {
                title: '到账日期',
                dataIndex: 'dayAccount',
                key: 'dayAccount',
            }];
        const data_4 = [
            {
                key: '1',
                id: '1',
                number: 'W0003',
                amount: '¥1200',
                bankCard: '中国银行',
                upDate: '2015-09-26 08:50:08',
                dayAccount: '2015-09-26 08:50:08',
            }, {
                key: '2',
                id: '2',
                number: 'W0003',
                amount: '¥1200',
                bankCard: '中国银行',
                upDate: '2015-09-26 08:50:08',
                dayAccount: '2015-09-26 08:50:08',
            }, {
                key: '3',
                id: '3',
                number: 'W0003',
                amount: '¥1200',
                bankCard: '中国银行',
                upDate: '2015-09-26 08:50:08',
                dayAccount: '2015-09-26 08:50:08',
            }, {
                key: '4',
                id: '4',
                number: 'W0003',
                amount: '¥1200',
                bankCard: '中国银行',
                upDate: '2015-09-26 08:50:08',
                dayAccount: '2015-09-26 08:50:08',
            }, {
                key: '5',
                id: '5',
                number: 'W0003',
                amount: '¥1200',
                bankCard: '中国银行',
                upDate: '2015-09-26 08:50:08',
                dayAccount: '2015-09-26 08:50:08',
            },];
//奖励
        const columns_5 = [
            {
                title: '序号',
                dataIndex: 'id',
                key: 'id',
            }, {
                title: '订单编号',
                dataIndex: 'number',
                key: 'number',
                render: text => <a href="javascript:void(0);">{text}</a>,
                onCellClick: (record) => {
                    this.setState({
                        visible: true,
                    })
                }
            }, {
                title: '奖励金额',
                dataIndex: 'amount',
                key: 'amount',
            }, {
                title: '类型',
                dataIndex: 'type',
                key: 'type',
            }, {
                title: '发放日期',
                dataIndex: 'issueDate',
                key: 'issueDate',
            }, {
                title: '提现日期',
                dataIndex: 'cashDate',
                key: 'cashDate',
            }];
        const data_5 = [
            {
                key: '1',
                id: '1',
                number: 'J0001',
                amount: '¥1200',
                type: '体验金收益',
                issueDate: '2015-09-26 08:50:08',
                cashDate: '2015-09-26 08:50:08',
            }, {
                key: '2',
                id: '2',
                number: 'J0001',
                amount: '¥1200',
                type: '体验金收益',
                issueDate: '2015-09-26 08:50:08',
                cashDate: '2015-09-26 08:50:08',
            }, {
                key: '3',
                id: '3',
                number: 'J0001',
                amount: '¥1200',
                type: '体验金收益',
                issueDate: '2015-09-26 08:50:08',
                cashDate: '2015-09-26 08:50:08',
            }, {
                key: '4',
                id: '4',
                number: 'J0001',
                amount: '¥1200',
                type: '体验金收益',
                issueDate: '2015-09-26 08:50:08',
                cashDate: '2015-09-26 08:50:08',
            }, {
                key: '5',
                id: '5',
                number: 'J0001',
                amount: '¥1200',
                type: '体验金收益',
                issueDate: '2015-09-26 08:50:08',
                cashDate: '2015-09-26 08:50:08',
            },];
//积分
        const columns_6 = [
            {
                title: '序号',
                dataIndex: 'id',
                key: 'id',
            }, {
                title: '订单编号',
                dataIndex: 'number',
                key: 'number',
                render: text => <a href="javascript:void(0);">{text}</a>,
                onCellClick: (record) => {
                    this.setState({
                        visible: true,
                    })
                }
            }, {
                title: '奖励分数',
                dataIndex: 'grate',
                key: 'grate',
            }, {
                title: '类型',
                dataIndex: 'type',
                key: 'type',
            }, {
                title: '实现日期',
                dataIndex: 'implementDate',
                key: 'implementDate',
            }];
        const data_6 = [
            {
                key: '1',
                id: '1',
                number: 'J0001',
                grate: '400',
                type: '首次签到',
                implementDate: '2015-09-26 08:50:08',
            }, {
                key: '2',
                id: '2',
                number: 'J0001',
                grate: '400',
                type: '首次签到',
                implementDate: '2015-09-26 08:50:08',
            }, {
                key: '3',
                id: '3',
                number: 'J0001',
                grate: '400',
                type: '首次签到',
                implementDate: '2015-09-26 08:50:08',
            }, {
                key: '4',
                id: '4',
                number: 'J0001',
                grate: '400',
                type: '首次签到',
                implementDate: '2015-09-26 08:50:08',
            }, {
                key: '5',
                id: '5',
                number: 'J0001',
                grate: '400',
                type: '首次签到',
                implementDate: '2015-09-26 08:50:08',
            },];

        return(
            <div id="invest_list">
                <h2>{this.props.location.query.title}</h2>
                <Tabs onTabClick={this.handleClick} defaultActiveKey="1">
                    <TabPane tab={<span><Icon type="line-chart" />投资</span>} key="1">
                        <Table columns={columns_1} dataSource={data_1} />
                    </TabPane>
                    <TabPane tab={<span><Icon type="pay-circle-o" />赎回</span>} key="2">
                        <Table columns={columns_2} dataSource={data_2} />
                    </TabPane>
                    <TabPane tab={<span><Icon type="credit-card" />充值</span>} key="3">
                        <Table columns={columns_3} dataSource={data_3} />
                    </TabPane>
                    <TabPane tab={<span><Icon type="red-envelope" />提现</span>} key="4">
                        <Table columns={columns_4} dataSource={data_4} />
                    </TabPane>
                    <TabPane tab={<span><Icon type="trophy" />奖励</span>} key="5">
                        <Table columns={columns_5} dataSource={data_5} />
                    </TabPane>
                    <TabPane tab={<span><Icon type="switcher" />积分</span>} key="6">
                        <Table columns={columns_6} dataSource={data_6} />
                    </TabPane>
                </Tabs>
                <span className="return">
                    <a href="#/invest">返回投资主页</a>
                </span>
                <InvestModal visibleModal={visible} modalTitle={modalTitle} defaultKey={defaultKey} />
            </div>
        )
    }
}

export default InvestTotal
