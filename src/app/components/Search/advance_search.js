import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { Form, Input, Select, Tooltip, Button } from 'antd';
const { Option } = Select;
const onFinish = values => {
  console.log('Received values of form: ', values);
};
class AdvanceSearch extends Component{
constructor(props){
    super(props);
    this.state={

    }
}
render(){
    return(
      <div style={{backgroundColor:"#F4F5F5"}} >
            <div style={{marginLeft:"10%", marginRight:"10%",marginTop:"5px",border:"solid black 1px" ,backgroundColor:"#FFF"}}>
            <Form name="complex-form" onFinish={onFinish}>

     
      <Form.Item label="BirthDate" style={{ marginBottom: 0, marginLeft:"10px" }}>
        <Form.Item
          name="year"
          rules={[{ required: true }]}
          style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
        >

              <Select placeholder="Select province">
              <Option value={1}>Samsung</Option>
              <Option value={2}>IPhone</Option>
              <Option value={3}>Blackberry</Option>
              <Option value={4}>Redmi</Option>

            </Select>        </Form.Item>
         
      </Form.Item>
      <Form.Item label="BirthDate" style={{ marginBottom: 0, marginLeft:"10px" }}>
        <Form.Item
          name="year"
          rules={[{ required: true }]}
          style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
        >

              <Select placeholder="Select province">
              <Option value={1}>Samsung</Option>
              <Option value={2}>IPhone</Option>
              <Option value={3}>Blackberry</Option>
              <Option value={4}>Redmi</Option>

            </Select>        </Form.Item>
         
      </Form.Item>
      <Form.Item label=" " colon={false}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
   </div>
      </div>
    )
}

}
AdvanceSearch.propTypes = {
  history: PropTypes.object,
  match: PropTypes.object
};
function mapStateToProps(state) {
  return {
    
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({  }, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps) (AdvanceSearch);
