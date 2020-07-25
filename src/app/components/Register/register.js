import React, { Component } from "react";
import { Form, Input, Button } from 'antd';
import 'antd/dist/antd.css';

const layout = {
  labelCol: {
    span: 12,
  },
  wrapperCol: {
    span: 12,
    offset: 5,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 10,
    span: 16,
  },
};


class Register extends Component {
  constructor(props) {
    super(props);
    this.state={


    }
  }

  handleChange =()=>{
    console.log('i am in change')
  }
 
  submit =()=>{
    console.log('in submit')

  }

   onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  
 componentDidMount(){

 }


  render() {
    return (
      <div className ="component-register">
        {/* <div className="wrapper">
          <h3>Register</h3>
      <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={this.submit}
      onFinishFailed={this.onFinishFailed}
 
    >
      <div className="label">Email</div>
      <Form.Item
       
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
        ]}
        onChange={this.handleChange('name')}
      >
        
        <Input />
      </Form.Item>
      <div className="label">Password</div>
      <Form.Item
        
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        onChange={this.handleChange('pass')}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </div> */}
    </div>
      
    );
  }
}

// function mapStateToProps(state) {
//     return {
//       redirect:state.user.redirect,
//       userList:state.user.userList,
//       loginMessage:state.user.loginMessage
//     };
//   }
//   function mapDispatchToProps(dispatch) {
//     return bindActionCreators({ ...userActions }, dispatch);
//   }
  
//   export default connect(mapStateToProps,mapDispatchToProps,null,{ ref: true }) (withStyles(styles)(Login));
  
export default Register;