import React from 'react';
import {Table, Button, Modal, Form, Input, Radio, Select, Upload, Icon} from 'antd';

const Option = Select.Option;

import './index.less';

class Demo extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isCertifi: 'block',
            tableHeight: 200,
            addVisible: false,
            upLoadVisible: false,
            upLoadImage: '',
            fileList: []
        }
    }

    //添加应用
    addApply = () => {
        this.setState({
            addVisible: true
        })
    }

    handleCancel = () => {
        this.setState({
            addVisible: false
        })
    }
    // handleOk = () => {
    //     this.setState({
    //         addVisible: false
    //     })
    // }

    upLoadCancel = () => this.setState({ upLoadVisible: false })
    upLoadPreview = (file) => {
        this.setState({
            upLoadImage: file.url || file.thumbUrl,
            upLoadVisible: true,
        });
    }
    upLoadChange = ({ fileList }) => {
        this.setState({
            fileList: fileList
        })
    }

    componentDidMount() {
        if (localStorage.getItem('isCertifi')) {
            this.setState({
                isCertifi: 'none'
            })
        }
        this.setState({
            tableHeight: TableHeight()
        })
        window.onresize = () => {
            this.setState({
                tableHeight: TableHeight()
            })
        }
    }
    //提交
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                this.setState({
                    addVisible: false
                })
            }
        });
    }

    render() {
        const {isCertifi, tableHeight, addVisible, upLoadVisible, fileList, upLoadImage} = this.state;
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 }
        }
        const {getFieldDecorator} = this.props.form;
        const uploadButton = (
            <div>
                <Icon type="plus" />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        const columns = [
            {
                title: '应用名称',
                dataIndex: 'applyName',
                key: 'applyName',
                width: '10%'
            }, {
                title: 'AppId',
                dataIndex: 'applyID',
                key: 'applyID',
            }, {
                title: 'App密匙',
                dataIndex: 'applyKey',
                key: 'applyKey',
                width: '19%'
            }, {
                title: '应用类型',
                key: 'applyType',
                dataIndex: 'applyType',
                width: '10%'
            }, {
                title: '应用logo',
                key: 'applyLogo',
                dataIndex: 'applyLogo',
                width: '10%'

            }, {
                title: '服务属性',
                key: 'serverAttr',
                dataIndex: 'serverAttr',
                width: '10%'

            }, {
                title: '创建时间',
                key: 'createTime',
                dataIndex: 'createTime',
                width: '12%'

            }, {
                title: '审核结果',
                key: 'auditResult',
                dataIndex: 'auditResult',
                width: '10%'

            }
        ];

        const data = [
            {
                applyName: '测试应用',
                applyID: 'e51aafbe125083f668e517ee0829ecb0',
                applyKey: 'e51aafbe125083f668e517ee0829ecb02',
                applyType: '其他',
                applyLogo: '--',
                serverAttr: '测试服务',
                createTime: '2017-01-03 22:54:46',
                auditResult: '审核成功'
            }
        ];
        return(
            <div id="person_appstore">
                <div className="top_info" style={{display: isCertifi}}>
                    您尚未进行认证，只能使用象链测试服务 <a href="#/info">立刻认证>></a>
                </div>
                <Button className='addApply' type="primary" onClick={this.addApply}>添加应用</Button>
                <Table rowKey="personAppstore" columns={columns} dataSource={data} scroll={{y: tableHeight}}/>
                <Modal
                    title="添加应用"
                    onCancel={this.handleCancel}
                    footer={[]}
                    visible={addVisible}>

                    <Form onSubmit={this.handleSubmit}>
                        <Form.Item
                            {...formItemLayout}
                            label="应用名称："
                            hasFeedback
                        >
                            {getFieldDecorator('applyName', {
                                rules: [
                                    {required: true, message: '请填写应用名称'}
                                ]
                            })(
                                <Input placeholder="请填写应用名称"/>
                            )}
                        </Form.Item>
                        <Form.Item
                            {...formItemLayout}
                            label="应用类型："
                            hasFeedback
                        >
                            {getFieldDecorator('appltType', {
                                rules: [
                                    {required: true, message: '请填写应用类型'}
                                ]
                            })(
                                <Select placeholder="请填写应用类型">
                                    <Option key="1">游戏交易</Option>
                                    <Option key="2">商业积分</Option>
                                    <Option key="3">网络互助</Option>
                                    <Option key="4">保险卡单</Option>
                                    <Option key="5">慈善公益</Option>
                                    <Option key="6">理财产品</Option>
                                    <Option key="7">数字黄金</Option>
                                    <Option key="0">其他</Option>
                                </Select>
                            )}
                        </Form.Item>
                        <Form.Item
                            {...formItemLayout}
                            label="应用Logo："
                            hasFeedback
                        >
                            <div className="clearfix">
                                {getFieldDecorator('applyLogo', {
                                    rules: [
                                        {required: true, message: '请上传应用Logo'}
                                    ]
                                })(
                                    <Upload
                                        action="//jsonplaceholder.typicode.com/posts/"
                                        listType="picture-card"
                                        fileList={fileList}
                                        onPreview={this.upLoadPreview}
                                        onChange={this.upLoadChange}
                                    >
                                        {fileList.length >= 1 ? null : uploadButton}
                                    </Upload>

                                )}
                                <Modal visible={upLoadVisible} footer={null} onCancel={this.upLoadCancel}>
                                    <img alt="应用Logo" style={{ width: '100%' }} src={upLoadImage} />
                                </Modal>
                            </div>
                        </Form.Item>
                        <Form.Item
                            {...formItemLayout}
                            label="URL："
                        >
                            {getFieldDecorator('companeyName')(
                                <Input placeholder="该URL用来向您服务器通知资产发行、交易等结果信息"/>
                            )}
                        </Form.Item>
                        <Form.Item
                            {...formItemLayout}
                            label="服务属性："
                            hasFeedback
                        >
                            {getFieldDecorator('applyAttr', {
                                rules: [
                                    {required: true, message: '请选择服务属性'}
                                ]
                            })(
                                <Radio.Group>
                                    <Radio value="test">测试服务</Radio>
                                    <Radio value="online">线上服务</Radio>
                                </Radio.Group>
                            )}
                        </Form.Item>
                        <Form.Item
                            wrapperCol={{ span: 12, offset: 6 }}
                        >
                            <Button type="primary" htmlType="submit">提交</Button>
                        </Form.Item>
                    </Form>
                </Modal>
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
        return (winHeight - 350)
    }
}

const LayoutAssets = Form.create()(Demo);

export default LayoutAssets
