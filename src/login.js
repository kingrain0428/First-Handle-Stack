/**
 * Created by wangyu on 2017/9/10.
 */
import React from 'react';
import { Form, Icon, Input, Button, Modal } from 'antd';
const FormItem = Form.Item;
import src from './assets/hx_logo.png';


import './componentLESS/login.less'

class NormalLoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            modalText: '账号或密码错误！',
            modalTitle: '提示'
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                if (values.password === '123456' && values.userName === '海象金服') {
                    localStorage.setItem('isLogin', true)
                    localStorage.setItem('navLists', ['海象理财', '我要投资', '我要借款', '个人中心'])
                    location.hash = '/'
                } else {
                    this.setState({
                        visible: true
                    })
                }
            }
        })
    }
    handleCancel = () => {
        this.setState({
            visible: false
        })
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        const {visible, modalText, modalTitle} = this.state;
        return (
            <div id="components-form-demo-normal-login">
                <div className="login_div">
                    <Form onSubmit={this.handleSubmit} className="login-form" ref="loginForm">
                        <img src={src}/>
                        <h2>用户登录</h2>
                        <FormItem>
                            {getFieldDecorator('userName', {
                                rules: [{ required: true, message: '不能为空' }],
                            })(
                                <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="请输入您的用户名" />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: '不能为空' }],
                            })(
                                <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="请输入您的密码" />
                            )}
                        </FormItem>
                        <FormItem>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登陆
                            </Button>
                            <Button type="primary" disabled className="login-form-button">
                                注册
                            </Button>
                        </FormItem>
                    </Form>
                </div>
                <Modal
                    title={modalTitle}
                    wrapClassName="vertical-center-modal"
                    visible={visible}
                    onCancel={() => this.handleCancel}
                    footer={[
                        <Button key="cancel" type='primary' size='large' onClick={this.handleCancel}>确定</Button>
                    ]}
                >
                    <p>{modalText}</p>
                </Modal>
            </div>
        );
    }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);


export default WrappedNormalLoginForm