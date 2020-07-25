import React, { Component } from "react";
import {Table} from "antd"
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as AdminActions from "../../../redux/actions/admin-actions"

  
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
    },
    {
        title: 'Type',
        dataIndex: 'type',
        key: 'type',
      },
  ];
class AllUsers extends Component{
constructor(props){
    super(props);
    this.state={
        userList:[]
    }
}
componentDidMount(){
this.props.getALLusers(0).then(data=>{
    this.setState({userList:data.message})
})
}
render(){
    return(
        <div>
<Table style={{marginLeft:"230px", marginRight:"30px" , marginTop:"30px"}} dataSource={this.state.userList} columns={columns} />


        </div>
    )
}

}

AllUsers.propTypes = {
    history: PropTypes.object,
    match: PropTypes.object
  };
  function mapStateToProps(state) {
    return {
    };
  }
  function mapDispatchToProps(dispatch) {
    return bindActionCreators({ ...AdminActions }, dispatch);
  }
  
  export default connect(mapStateToProps,mapDispatchToProps,null,{ forwardRef: true }) (AllUsers);
  