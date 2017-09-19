import React from 'react';
import {Table} from 'antd';

class InvestTotal extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            tableHeight: 200
        }
    }

    componentDidMount() {
        // let me = this;
        this.setState({
            tableHeight: TableHeight()
        })
        window.onresize = () => {
            this.setState({
                tableHeight: TableHeight()
            })
        }
    }

    render() {
        const columns = [
            {
                title: '账户',
                dataIndex: 'account',
                key: 'account',
                width: '8%'
            }, {
                title: '账户名称',
                dataIndex: 'accountName',
                key: 'accountName',
                width: '10%'
            }, {
                title: '交易日期',
                dataIndex: 'transactionDate',
                key: 'transactionDate',
                width: '13%'
            }, {
                title: '记账日期',
                key: 'accountingDate',
                dataIndex: 'accountingDate',
                width: '13%'
            }, {
                title: '交易详情',
                key: 'transactDetail',
                dataIndex: 'transactDetail'

            }, {
                title: '凭证号',
                key: 'voucherNumber',
                dataIndex: 'voucherNumber',
                width: '13%'
            }, {
                title: '摘要',
                key: 'abstracts',
                dataIndex: 'abstracts',
                width: '8%'
            }, {
                title: '借方',
                key: 'borrower',
                dataIndex: 'borrower',
                width: '8%'
            }, {
                title: '贷方',
                key: 'loaner',
                dataIndex: 'loaner',
                width: '8%'
            }, {
                title: '余额',
                key: 'balance',
                dataIndex: 'balance',
                width: '8%'
            }];

        const data = [
            {
                account: '1001',
                accountName: '夏吟风',
                transactionDate: '2017-9-11',
                accountingDate: '2017-9-11',
                transactDetail: '详情',
                voucherNumber: '201709111001',
                abstracts: '充值',
                borrower: '',
                loaner: '充值',
                balance: '127,192'
            }, {
                account: '1002',
                accountName: '王禹',
                transactionDate: '2017-9-02',
                accountingDate: '2017-9-02',
                transactDetail: '详情',
                voucherNumber: '201709021002',
                abstracts: '赎回',
                borrower: '赎回',
                loaner: '',
                balance: '121,123'
            }, {
                account: '1003',
                accountName: '张立山',
                transactionDate: '2017-9-03',
                accountingDate: '2017-9-03',
                transactDetail: '详情',
                voucherNumber: '201709031001',
                abstracts: '赎回',
                borrower: '赎回',
                loaner: '',
                balance: '178,292'
            }, {
                account: '1004',
                accountName: '孙传',
                transactionDate: '2017-9-04',
                accountingDate: '2017-9-04',
                transactDetail: '详情',
                voucherNumber: '201709041004',
                abstracts: '提现',
                borrower: '提现',
                loaner: '',
                balance: '199,110'
            }, {
                account: '1005',
                accountName: '钱申',
                transactionDate: '2017-9-14',
                accountingDate: '2017-9-14',
                transactDetail: '详情',
                voucherNumber: '201709141005',
                abstracts: '投资',
                borrower: '',
                loaner: '投资',
                balance: '158,231'
            }, {
                account: '1006',
                accountName: '周杰',
                transactionDate: '2017-9-01',
                accountingDate: '2017-9-01',
                transactDetail: '详情',
                voucherNumber: '201709011006',
                abstracts: '提现',
                borrower: '提现',
                loaner: '',
                balance: '121,917'
            }, {
                account: '1007',
                accountName: '郑三炮',
                transactionDate: '2017-9-06',
                accountingDate: '2017-9-06',
                transactDetail: '详情',
                voucherNumber: '201709061007',
                abstracts: '提现',
                borrower: '提现',
                loaner: '',
                balance: '111,928'
            }, {
                account: '1008',
                accountName: '冯玉',
                transactionDate: '2017-9-07',
                accountingDate: '2017-9-07',
                transactDetail: '详情',
                voucherNumber: '201709071008',
                abstracts: '赎回',
                borrower: '赎回',
                loaner: '',
                balance: '192,177'
            }, {
                account: '1009',
                accountName: '陈晨',
                transactionDate: '2017-9-12',
                accountingDate: '2017-9-12',
                transactDetail: '详情',
                voucherNumber: '201709121009',
                abstracts: '充值',
                borrower: '',
                loaner: '充值',
                balance: '192,823'
            }, {
                account: '1010',
                accountName: '楚留香',
                transactionDate: '2017-9-03',
                accountingDate: '2017-9-03',
                transactDetail: '详情',
                voucherNumber: '201709031010',
                abstracts: '提现',
                borrower: '提现',
                loaner: '',
                balance: '134,823'
            }, {
                account: '1011',
                accountName: '魏老版',
                transactionDate: '2017-9-12',
                accountingDate: '2017-9-12',
                transactDetail: '详情',
                voucherNumber: '201709121011',
                abstracts: '充值',
                borrower: '',
                loaner: '充值',
                balance: '122,233'
            }, {
                account: '1012',
                accountName: '张晓春',
                transactionDate: '2017-9-10',
                accountingDate: '2017-9-10',
                transactDetail: '详情',
                voucherNumber: '201709101012',
                abstracts: '充值',
                borrower: '',
                loaner: '充值',
                balance: '123,498'
            }];
        return(
            <div>
                <Table rowKey="investClear" columns={columns} dataSource={data} scroll={{y: this.state.tableHeight}}/>
            </div>
        )
    }
}
function TableHeight () {
    //获取浏览器窗口高度
    var winHeight=0;
    // divHeight = document.getElementById(args.id).offsetHeight;
    if (window.innerHeight) {
        winHeight = window.innerHeight;
    } else if ((document.body) && (document.body.clientHeight)) {
        winHeight = document.body.clientHeight;
    }
    //通过Document对body进行检测，获取浏览器可视化高度
    if (document.documentElement && document.documentElement.clientHeight) {
        winHeight = document.documentElement.clientHeight;
    }
    //DIV高度为浏览器窗口高度
    if (winHeight < 300) {
        return 300
    } else {
        return (winHeight - 250)
    }
}

export default InvestTotal
