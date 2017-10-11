import React from 'react';
import './index.less';
import { Table } from 'antd';
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

class InvestTotal extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
    }

    handleClick = () => {

    }

    render() {
        return(
            <div id="invest_list">
                <h2>{this.props.location.query.title}</h2>
                <Table columns={columns_1} dataSource={data_1} />
                <span className="return">
                    <a href="#/borrow">返回借款主页</a>
                </span>
            </div>
        )
    }
}

export default InvestTotal
