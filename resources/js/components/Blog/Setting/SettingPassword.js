import React, { Component } from 'react';
import { Form, Input, Button, message, Spin, Upload } from 'antd';
const FormItem = Form.Item;

export class SettingPassword extends React.Component {
  render(){
    return (
      <WrappedSettingPasswordForm />
    )
  }
}

class SettingPasswordForm extends React.Component {
  state={
    formData:{
      password: '',
      newPassword:'',
      newPasswordRepeat: '',
    }
  }
  render() {
    const formData = this.state.formData;

      return (
        <Form onSubmit={this.handleSubmit} style={{ paddingTop:20 }}>
          <FormItem rules={[{
              required: true,
              message: '原密码不能为空！',
          }]} name={'password'} initialValue={formData.password} {...formItemLayout} label="原密码">

              <Input placeholder="请输入原密码" type="password" />

          </FormItem>
          <FormItem name={formData.newPassword} initialValue={'newPassword'} rules={[{
              required: true,
              message: '新密码不能为空！'
          }]} {...formItemLayout} label="新密码">
              <Input placeholder="请输入新密码" type="password" />
          </FormItem>
          <FormItem {...formItemLayout} label="重复新密码">
            {getFieldDecorator('newPasswordRepeat', {
              rules: [{
                  required: true,
                  message: '重复新密码不能为空！'
                }],
                initialValue: formData.newPasswordRepeat
            })(
              <Input placeholder="请重复输入新密码" type="password" />
            )}
          </FormItem>
          <FormItem {...formTailLayout}>
            <Button type="primary" htmlType="submit">
              保存
            </Button>
          </FormItem>
        </Form>
      )
  }
  //表单提交
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // console.log(values);
        axios.post(window.apiURL + 'users/1/password', values)
        .then(function (response) {
          if (response.data.status == 0) {
            message.success(response.data.message);
            location.reload();
          }else {
            message.error(response.data.message);
          }
        })
        .catch(function (error) {
          console.log(error);
          message.error('error');
        });
      }
    });
  }
}

const WrappedSettingPasswordForm = (SettingPasswordForm);

//表单布局
const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 },
};
const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8, offset: 4 },
};
