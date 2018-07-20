import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { message } from 'antd'
import { connect } from 'react-redux'
import logo from 'assets/img/logo.svg'
import bg from 'assets/img/bg.png'
import bg1 from 'assets/img/bg1.jpg'
import { login } from 'actions/actions'
import { Form, Icon, Input, Button, Checkbox } from 'antd'
const FormItem = Form.Item

class Login extends Component {
  handleSubmit = e => {
    e.preventDefault()
    const { form, login, history, syncUser } = this.props
    form.validateFields((err, { userName, password }) => {
      if (!err) {
        login({ user: userName, pwd: password }).then(res => {
          const info = res.value.result
          if (info.out_Flag === 0) {
            const userId = info.out_yonghID
            const userName = info.out_yonghName
            localStorage.setItem('userName', userName)
            localStorage.setItem('userId', userId)
            history.push('/op-budget')
          }
          message.info(info.out_nszRtn)
        })
        // console.log('Received values of form: ', {userName,password})
      }
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <div className="vh-100 flex items-center justify-center">
        <img src={bg1} className="Login-bg" alt="" />
        <div className="mr6">
          <img style={{ opacity: 0 }} src={bg} alt="" />
        </div>
        <div className="flex flex-column ph4 pv3 br2 Login-form">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <FormItem>
              {getFieldDecorator('userName', {
                rules: [{ required: true, message: '必填' }],
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="用户名"
                />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '必填' }],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="密码"
                />
              )}
            </FormItem>
            <FormItem>
              <Button type="primary" htmlType="submit" className="Login-form-button">
                登录
              </Button>
            </FormItem>
          </Form>
        </div>
      </div>
    )
  }
}

const cLogin = withRouter(
  connect(
    null,
    { login }
  )(Login)
)
const LoginForm = Form.create()(cLogin)

export default LoginForm
