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
                width: '10%'
            }, {
                title: '账户名称',
                dataIndex: 'accountName',
                key: 'accountName',
                width: '15%'
            }, {
                title: '平台账户名称',
                dataIndex: 'totalInvestment',
                key: 'totalInvestment',
                width: '15%'
            }, {
                title: '总借款金额',
                key: 'totalWithdrawal',
                dataIndex: 'totalWithdrawal',
                width: '15%'
            }, {
                title: '总笔数',
                key: 'totalRecharge',
                dataIndex: 'totalRecharge',
                width: '15%'

            }, {
                title: '总借款手续费',
                key: 'totalRedemption',
                dataIndex: 'totalRedemption',
                width: '15%'

            }, {
                title: '创建时间',
                key: 'createTime',
                dataIndex: 'createTime',
                width: '15%'

            }];

        const data = [
            {
                account: '1001',
                accountName: '赵倩',
                totalInvestment: '海象理财',
                totalWithdrawal: '251,921',
                totalRecharge: '5',
                totalRedemption: '5292',
                createTime: '2017-9-01'
            }, {
                account: '1002',
                accountName: '钱学',
                totalInvestment: '全融',
                totalWithdrawal: '12,921',
                totalRecharge: '2',
                totalRedemption: '2192',
                createTime: '2017-9-10'
            }, {
                account: '1003',
                accountName: '孙山',
                totalInvestment: '趣分期',
                totalWithdrawal: '121,000',
                totalRecharge: '4',
                totalRedemption: '4283',
                createTime: '2017-9-15'
            }, {
                account: '1004',
                accountName: '李琳琳',
                totalInvestment: '玖富理财',
                totalWithdrawal: '280,000',
                totalRecharge: '8',
                totalRedemption: '8182',
                createTime: '2017-9-07'
            }, {
                account: '1005',
                accountName: '周萌',
                totalInvestment: '拍拍贷',
                totalWithdrawal: '12,123',
                totalRecharge: '1',
                totalRedemption: '1133',
                createTime: '2017-9-02'
            }, {
                account: '1006',
                accountName: '吴天',
                totalInvestment: '翼龙贷',
                totalWithdrawal: '210,000',
                totalRecharge: '5',
                totalRedemption: '5822',
                createTime: '2017-9-14'
            }, {
                account: '1007',
                accountName: '郑思',
                totalInvestment: '凡普金科',
                totalWithdrawal: '190,023',
                totalRecharge: '3',
                totalRedemption: '2984',
                createTime: '2017-9-04'
            }, {
                account: '1008',
                accountName: '王五',
                totalInvestment: '宜人贷',
                totalWithdrawal: '152,292',
                totalRecharge: '4',
                totalRedemption: '4120',
                createTime: '2017-9-11'
            }, {
                account: '1009',
                accountName: '伍声',
                totalInvestment: '悟空理财',
                totalWithdrawal: '262,281',
                totalRecharge: '7',
                totalRedemption: '6890',
                createTime: '2017-9-10'
            }, {
                account: '1010',
                accountName: '周倚天',
                totalInvestment: '小金理财',
                totalWithdrawal: '10,122',
                totalRecharge: '1',
                totalRedemption: '1201',
                createTime: '2017-9-02'
            }, {
                account: '1011',
                accountName: '王健',
                totalInvestment: '联动金融',
                totalWithdrawal: '280,000',
                totalRecharge: '8',
                totalRedemption: '8182',
                createTime: '2017-9-01'
            }, {
                account: '1012',
                accountName: '冯琳琳',
                totalInvestment: '微融网',
                totalWithdrawal: '280,000',
                totalRecharge: '8',
                totalRedemption: '8182',
                createTime: '2017-9-12'
            }, {
                account: '1013',
                accountName: '岂怀伟',
                totalWithdrawal: '10,122',
                totalRecharge: '1',
                totalRedemption: '1201',
                createTime: '2017-9-10'
            }];
        return(
            <div>
                <Table rowKey='loanTotal' columns={columns} dataSource={data} scroll={{y: this.state.tableHeight}} />
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
