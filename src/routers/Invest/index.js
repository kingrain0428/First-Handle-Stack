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
            }, {
                title: '平台账户名称',
                dataIndex: 'accountName',
                key: 'accountName',
                width: '10%'
            }, {
                title: '总投资金额',
                dataIndex: 'totalInvestment',
                key: 'totalInvestment',
                width: '14%'
            }, {
                title: '总提现金额',
                key: 'totalWithdrawal',
                dataIndex: 'totalWithdrawal',
                width: '14%'
            }, {
                title: '总充值金额',
                key: 'totalRecharge',
                dataIndex: 'totalRecharge',
                width: '14%'

            }, {
                title: '总赎回金额',
                key: 'totalRedemption',
                dataIndex: 'totalRedemption',
                width: '14%'

            }, {
                title: '总收益金额',
                key: 'totalRevenue',
                dataIndex: 'totalRevenue',
                width: '14%'

            }, {
                title: '创建时间',
                key: 'createTime',
                dataIndex: 'createTime',
                width: '13%'

            }
        ];


        const data = [
            {
                account: '1001',
                accountName: '海象理财',
                totalInvestment: '21,928,257,276',
                totalWithdrawal: '16,637,156,642',
                totalRecharge: '21,928,257,276',
                totalRedemption: '16,654,296,673',
                totalRevenue: '2,213,273,283',
                createTime: '2017-10-' + (parseInt(Math.random() * 15) + 1)
            }, {
                account: '1002',
                accountName: '全融',
                totalInvestment: '22,345,825,279',
                totalWithdrawal: '12,637,156,368',
                totalRecharge: '22,345,825,279',
                totalRedemption: '12,654,296,214',
                totalRevenue: '2,170,273,200',
                createTime: '2017-10-' + (parseInt(Math.random() * 15) + 1)
            }, {
                account: '1003',
                accountName: '趣分期',
                totalInvestment: '23,928,257,391',
                totalWithdrawal: '16,637,156,197',
                totalRecharge: '23,928,257,391',
                totalRedemption: '16,654,296,921',
                totalRevenue: '2,369,273,372',
                createTime: '2017-10-' + (parseInt(Math.random() * 15) + 1)
            }, {
                account: '1004',
                accountName: '玖富理财',
                totalInvestment: '21,928,257,636',
                totalWithdrawal: '15,637,156,264',
                totalRecharge: '21,928,257,636',
                totalRedemption: '15,654,296,742',
                totalRevenue: '2,113,273,810',
                createTime: '2017-10-' + (parseInt(Math.random() * 15) + 1)
            }, {
                account: '1005',
                accountName: '拍拍贷',
                totalInvestment: '24,283,883,190',
                totalWithdrawal: '17,637,156,102',
                totalRecharge: '24,283,883,190',
                totalRedemption: '17,654,296,102',
                totalRevenue: '2,413,273,901',
                createTime: '2017-10-' + (parseInt(Math.random() * 15) + 1)
            }, {
                account: '1006',
                accountName: '翼龙贷',
                totalInvestment: '21,928,257,276',
                totalWithdrawal: '16,637,156,642',
                totalRecharge: '21,928,257,276',
                totalRedemption: '16,654,296,673',
                totalRevenue: '2,213,273,283',
                createTime: '2017-10-' + (parseInt(Math.random() * 15) + 1)
            }, {
                account: '1007',
                accountName: '凡普金科',
                totalInvestment: '20,928,257,200',
                totalWithdrawal: '16,637,156,288',
                totalRecharge: '20,928,257,200',
                totalRedemption: '16,654,296,166',
                totalRevenue: '2,013,273,200',
                createTime: '2017-10-' + (parseInt(Math.random() * 15) + 1)
            }, {
                account: '1008',
                accountName: '宜人贷',
                totalInvestment: '21,928,257,276',
                totalWithdrawal: '16,637,156,642',
                totalRecharge: '21,928,257,276',
                totalRedemption: '16,654,296,673',
                totalRevenue: '2,213,273,283',
                createTime: '2017-10-10'
            }, {
                account: '1009',
                accountName: '悟空理财',
                totalInvestment: '27,928,257,291',
                totalWithdrawal: '16,637,156,192',
                totalRecharge: '27,928,257,291',
                totalRedemption: '16,654,296,638',
                totalRevenue: '2,713,273,010',
                createTime: '2017-10-' + (parseInt(Math.random() * 15) + 1)
            }, {
                account: '1010',
                accountName: '小金理财',
                totalInvestment: '26,928,257,276',
                totalWithdrawal: '18,637,156,743',
                totalRecharge: '26,928,257,276',
                totalRedemption: '18,654,296,170',
                totalRevenue: '2,613,273,912',
                createTime: '2017-10-' + (parseInt(Math.random() * 15) + 1)
            }, {
                account: '1011',
                accountName: '联动金融',
                totalInvestment: '25,928,257,382',
                totalWithdrawal: '16,637,156,729',
                totalRecharge: '25,928,257,382',
                totalRedemption: '16,654,296,192',
                totalRevenue: '2,513,273,876',
                createTime: '2017-10-' + (parseInt(Math.random() * 15) + 1)
            }, {
                account: '1012',
                accountName: '微融网',
                totalInvestment: '29,928,257,182',
                totalWithdrawal: '19,637,156,124',
                totalRecharge: '29,928,257,182',
                totalRedemption: '19,654,296,452',
                totalRevenue: '3,013,273,299',
                createTime: '2017-10-' + (parseInt(Math.random() * 15) + 1)
            }];
        return(
            <div>
                <Table rowKey="investTotal" columns={columns} dataSource={data} scroll={{y: this.state.tableHeight}} />
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
