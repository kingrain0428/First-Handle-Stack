import React from 'react';
import {
    Form, Input,
} from 'antd';
const FormItem = Form.Item;

import './index.less';

class Demo extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            formValus: {
                userID: '1441',
                mobile: '17326805521',
                email: '13633167649@163.com',
                blockUrl: 'bubiV8i2mzfozVGfMkQeSjU1RNzgKmbWDQK5T43q',
                checkoutKey: '6666',
                register: '2017-09-10 09:30:22'
            },
            isCertifi: 'block'
        }
    }

    componentDidMount() {
        this.props.form.setFieldsValue(this.state.formValus);
        if (localStorage.getItem('isCertifi')) {
            this.setState({
                isCertifi: 'none'
            })
        }
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const {isCertifi} = this.state;
        const formItemLayout = {
            labelCol: { span: 7 },
            wrapperCol: { span: 13 },
        };
        return(
            <div id="components-form-demo-validate-other">
                <div className="top_info" style={{display: isCertifi}}>
                    您尚未进行认证，只能使用象链测试服务 <a href="#/info">立刻认证>></a>
                </div>
                <Form>
                    <FormItem
                        {...formItemLayout}
                        label="用户ID"
                    >
                        {getFieldDecorator('userID')(
                            <Input disabled/>
                        )}

                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="手机"
                    >
                        {getFieldDecorator('mobile')(
                            <Input disabled/>
                        )}

                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="邮箱"
                    >
                        {getFieldDecorator('email')(
                            <Input disabled/>
                        )}

                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="区块链地址"
                    >
                        {getFieldDecorator('blockUrl')(
                            <Input disabled/>
                        )}
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="查看私钥"
                    >
                        {getFieldDecorator('checkoutKey')(
                            <Input disabled/>
                        )}
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="注册时间"
                    >
                        {getFieldDecorator('register')(
                            <Input disabled/>
                        )}
                    </FormItem>

                </Form>
            </div>
        )
    }
}

const UserInfo = Form.create()(Demo);


// function TableHeight () {
//     获取浏览器窗口高度
    // var winHeight=0;
    // divHeight = document.getElementById(args.id).offsetHeight;
    // if (window.innerHeight) {
    //     winHeight = window.innerHeight;
    // } else if ((document.body) && (document.body.clientHeight)) {
    //     winHeight = document.body.clientHeight;
    // }
    // 通过Document对body进行检测，获取浏览器可视化高度
    // if (document.documentElement && document.documentElement.clientHeight) {
    //     winHeight = document.documentElement.clientHeight;
    // }
    // DIV高度为浏览器窗口高度
    // if (winHeight < 300) {
    //     return 300
    // } else {
    //     return (winHeight - 250)
    // }
// }

export default UserInfo
