/**
 * Created by wangyu on 2017/10/13.
 */
import React from 'react';

import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;

import './index.less';

class Demo extends React.Component{
    constructor(props) {
        super(props)
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }
    handleReset = () => {
        alert(1)
    }
    render() {
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 10 },
        };
        const { getFieldDecorator } = this.props.form;
        return (
            <div id="person_entrance">
                <h2>账户查询</h2>
                <Form onSubmit={this.handleSubmit}>
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
                            <Input placeholder="请填写公司名称"/>
                        )}
                    </FormItem>
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
                            <Input placeholder="请填写详细地址"/>
                        )}
                    </FormItem>
                    <FormItem
                        wrapperCol={{ span: 12, offset: 6 }}
                    >
                        <Button type="primary" htmlType="submit">提交</Button>
                        <Button onClick={this.handleReset}>重制</Button>
                    </FormItem>
                </Form>
            </div>
        )
    }
}


const PersonEntrance = Form.create()(Demo);

export default PersonEntrance