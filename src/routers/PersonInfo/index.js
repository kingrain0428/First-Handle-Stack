import React from 'react';
import {
    Form, Row, Col, Select, Radio, Input, Button, Upload, Icon, Modal
} from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
// const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

import './index.less';

var provinceData = ['北京', '天津', '河北'],
    cityData = {
        '北京': ['朝阳区', '东城区', '西城区', '海淀区', '昌平区'],
        '天津': ['和平区', '东丽区', '河西区', '武清区', '南开区'],
        '河北': ['廊坊市', '衡水市', '石家庄市', '保定市', '承德市']
    }

class Demo extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            businessLicenseVisible: false,
            handleIDCardVisible: false,
            idCardFrontVisible: false,
            idCardReverseVisible: false,
            businessLicenseImage: '',
            handleIDCardImage: '',
            idCardFrontImage: '',
            idCardReverseImage: '',
            fileList: [],
            fileListOne: [],
            fileListTwo: [],
            fileListThree: [],
            firstSelect: provinceData[0],
            secondSelect: [],
            isSubmit: false,
            isShow: true
        }
    }
    //一级动
    firstSelectChange = (value) => {
        this.props.form.setFieldsValue({
            city: ''
        })
        this.setState({
            secondSelect: cityData[value]
        })
    }

    //营业执照 func
    businessLicenseCancel = () => this.setState({ businessLicenseVisible: false })
    businessLicensePreview = (file) => {
        this.setState({
            businessLicenseImage: file.url || file.thumbUrl,
            businessLicenseVisible: true,
        });
    }
    businessLicenseChange = ({ fileList }) => {
        if (localStorage.getItem('isCertifi')) {
            return
        } else {
            this.setState({
                fileListOne: fileList
            })
        }
    }
    //持身份证照
    handleIDCardCancel = () => this.setState({ handleIDCardVisible: false })
    handleIDCardPreview = (file) => {
        this.setState({
            handleIDCardImage: file.url || file.thumbUrl,
            handleIDCardVisible: true,
        });
    }
    handleIDCardChange = ({ fileList }) => this.setState({
        fileListTwo: fileList
    })
    //身份证正面
    idCardFrontCancel = () => this.setState({ idCardFrontVisible: false })
    idCardFrontPreview = (file) => {
        this.setState({
            idCardFrontImage: file.url || file.thumbUrl,
            idCardFrontVisible: true,
        });
    }
    idCardFrontChange = ({ fileList }) => this.setState({
        fileListThree: fileList
    })
    //身份证反面
    idCardReverseCancel = () => this.setState({ idCardReverseVisible: false })
    idCardReversePreview = (file) => {
        this.setState({
            idCardReverseImage: file.url || file.thumbUrl,
            idCardReverseVisible: true,
        });
    }
    idCardReverseChange = ({ fileList }) => this.setState({ fileList })
    //提交
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                // console.log(values)
                // console.log(this.state.fileList)
                localStorage.setItem('isCertifi', true);
                localStorage.setItem('infoFormValue', JSON.stringify(values));
                window.location.reload();
            }
        });
    }

    componentDidMount = () => {
        if (localStorage.getItem('isCertifi')) {
            let infoFormValue = JSON.parse(localStorage.getItem('infoFormValue'));
            this.setState({
                isSubmit: true,
                isShow: false
            })
            this.props.form.setFieldsValue(infoFormValue);
        }
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 },
        };

        const { businessLicenseVisible,
            fileList,
            fileListOne,
            fileListTwo,
            fileListThree,
            handleIDCardVisible,
            idCardFrontVisible,
            idCardReverseVisible,
            businessLicenseImage,
            handleIDCardImage,
            idCardFrontImage,
            idCardReverseImage,
            secondSelect,
            isSubmit,
            isShow
        } = this.state;
        const uploadButton = (
            <div>
                <Icon type="plus" />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        return(
            <div id="persin_info">
                <Form onSubmit={this.handleSubmit}>
                    <FormItem
                        {...formItemLayout}
                        label="认证状态："
                    >
                        <span className="ant-form-text" style={{display: isShow ? 'block' : 'none'}}>未认证</span>
                        <span className="ant-form-text" style={{display: !isShow ? 'block' : 'none'}}>已认证</span>
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="公司名称："
                        hasFeedback
                    >
                        {getFieldDecorator('companeyName', {
                            rules: [
                                {required: true, message: '请填写公司名称'}
                            ]
                        })(
                            <Input disabled={isSubmit} placeholder="请填写公司名称"/>
                        )}
                    </FormItem>
                    <Row>
                        <Col span='12'>
                            <FormItem
                                labelCol = {{ span: 12 }}
                                wrapperCol = {{span: 8}}
                                label="企业所在省份："
                                hasFeedback
                            >
                                {getFieldDecorator('province', {
                                    rules: [
                                        { required: true, message: '请选择企业所在省份' },
                                    ],
                                })(
                                    <Select disabled={isSubmit} placeholder="请选择省份" onChange={this.firstSelectChange}>
                                        {
                                            provinceData.map((param, index) => {
                                                return (
                                                    <Option key={index + 1} value={param}>{param}</Option>
                                                )
                                            })
                                        }
                                    </Select>
                                )}
                            </FormItem>

                        </Col>
                        <Col span="12">
                            <FormItem
                                labelCol = {{ span: 8 }}
                                wrapperCol = {{span: 8}}
                                label="企业所在城市："
                                hasFeedback
                            >
                                {getFieldDecorator('city', {
                                    rules: [
                                        { required: true, message: '请选择企业所在城市' },
                                    ],
                                })(
                                    <Select disabled={isSubmit} placeholder="请选择城市">
                                        {
                                            secondSelect.map((param, index) => {
                                                return(
                                                    <Option key={index + 1} value={param}>{param}</Option>
                                                )
                                            })
                                        }
                                    </Select>
                                )}
                            </FormItem>
                        </Col>
                    </Row>
                    <FormItem
                        {...formItemLayout}
                        label="企业详细地址："
                        hasFeedback
                    >
                        {getFieldDecorator('detailAddr', {
                            rules: [
                                {required: true, message: '请填写详细地址'}
                            ]
                        })(
                            <Input disabled={isSubmit} placeholder="请填写详细地址"/>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="三证合一："
                    >
                        {getFieldDecorator('threeToOne')(
                            <RadioGroup>
                                <Radio disabled={isSubmit} value="true">是</Radio>
                                <Radio disabled={isSubmit} value="false">否</Radio>
                            </RadioGroup>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="营业执照号："
                        hasFeedback
                    >
                        {getFieldDecorator('businessLicenseNumber', {
                            rules: [
                                {required: true, message: '请填写营业执照号'}
                            ]
                        })(
                            <Input disabled={isSubmit} placeholder="请填写营业执照号"/>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="负责人电话："
                        hasFeedback
                    >
                        {getFieldDecorator('leaderNum', {
                            rules: [
                                {required: true, message: '请填写负责人电话'}
                            ]
                        })(
                            <Input disabled={isSubmit} placeholder="请填写负责人电话"/>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="身份证："
                        hasFeedback
                    >
                        {getFieldDecorator('idCardNum', {
                            rules: [
                                {required: true, message: '请填写身份证'}
                            ]
                        })(
                            <Input disabled={isSubmit} placeholder="请填写身份证"/>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="联系人号码："
                        hasFeedback
                    >
                        {getFieldDecorator('telphone', {
                            rules: [
                                {required: true, message: '请填写联系人号码'}
                            ]
                        })(
                            <Input disabled={isSubmit} placeholder="请填写联系人号码"/>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="营业执照："
                        hasFeedback
                    >
                        <div className="clearfix">
                            {getFieldDecorator('upBusinessLicenseNumber', {
                                rules: [
                                    {required: true, message: '请上传营业执照'}
                                ]
                            })(
                                <Upload
                                    action="//jsonplaceholder.typicode.com/posts/"
                                    listType="picture-card"
                                    fileList={fileListOne}
                                    onPreview={this.businessLicensePreview}
                                    onChange={this.businessLicenseChange}
                                >
                                    {fileListOne.length >= 1 ? null : uploadButton}
                                </Upload>

                            )}
                            <Modal visible={businessLicenseVisible} footer={null} onCancel={this.businessLicenseCancel}>
                                <img alt="example" style={{ width: '100%' }} src={businessLicenseImage} />
                            </Modal>
                        </div>
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="持身份证照："
                        hasFeedback
                    >
                        <div className="clearfix">
                            {getFieldDecorator('handleIDCard', {
                                rules: [
                                    {required: true, message: '请上传持身份证照'}
                                ]
                            })(
                                <Upload
                                    action="//jsonplaceholder.typicode.com/posts/"
                                    listType="picture-card"
                                    fileList={fileListTwo}
                                    onPreview={this.handleIDCardPreview}
                                    onChange={this.handleIDCardChange}
                                >
                                    {fileListTwo.length >= 1 ? null : uploadButton}
                                </Upload>

                            )}
                            <Modal visible={handleIDCardVisible} footer={null} onCancel={this.handleIDCardCancel}>
                                <img alt="持身份证照" style={{ width: '100%' }} src={handleIDCardImage} />
                            </Modal>
                        </div>
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="身份证正面照片："
                        hasFeedback
                    >
                        <div className="clearfix">
                            {getFieldDecorator('idCardFront', {
                                rules: [
                                    {required: true, message: '请上传身份证正面照'}
                                ]
                            })(
                                <Upload
                                    action="//jsonplaceholder.typicode.com/posts/"
                                    listType="picture-card"
                                    fileList={fileListThree}
                                    onPreview={this.idCardFrontPreview}
                                    onChange={this.idCardFrontChange}
                                >
                                    {fileListThree.length >= 1 ? null : uploadButton}
                                </Upload>

                            )}
                            <Modal visible={idCardFrontVisible} footer={null} onCancel={this.idCardFrontCancel}>
                                <img alt="身份证正面照" style={{ width: '100%' }} src={idCardFrontImage} />
                            </Modal>
                        </div>
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="身份证反面照："
                        hasFeedback
                    >
                        <div className="clearfix">
                            {getFieldDecorator('idCardReverse', {
                                rules: [
                                    {required: true, message: '请上传身份证反面照'}
                                ]
                            })(
                                <Upload
                                    action="//jsonplaceholder.typicode.com/posts/"
                                    listType="picture-card"
                                    fileList={fileList}
                                    onPreview={this.idCardReversePreview}
                                    onChange={this.idCardReverseChange}
                                >
                                    {fileList.length >= 1 ? null : uploadButton}
                                </Upload>

                            )}
                            <Modal visible={idCardReverseVisible} footer={null} onCancel={this.idCardReverseCancel}>
                                <img alt="身份证反面照" style={{ width: '100%' }} src={idCardReverseImage} />
                            </Modal>
                        </div>
                    </FormItem>
                    <FormItem
                        wrapperCol={{ span: 12, offset: 6 }}
                    >
                        <Button type="primary" htmlType="submit">提交认证</Button>
                    </FormItem>
                </Form>
            </div>
        )
    }
}

const RiskManage = Form.create()(Demo);

export default RiskManage
