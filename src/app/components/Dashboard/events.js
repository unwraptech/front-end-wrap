import React, { Component } from "react";
import { List ,Tooltip , BackTop , Button} from "antd";
import { ArrowUpOutlined } from '@ant-design/icons';

import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as DashboardActions from "../../redux/actions/dashboard-actions"
const data =[ ]
const style = {
    height: 40,
    width: 40,
    lineHeight: '40px',
    borderRadius: '10%',
    backgroundColor:"#000",
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
  }; 
class EventsAdds extends Component {
  constructor(props) {
    super(props);
   
    this.state={
      news :[]
    }
  }
componentDidMount(){
  // this.props.getNewsList().then(list =>{
  //   console.log(list.news);
  //   this.setState({news : list.news})
  // })
}
  render() {
    return (
      <div >

{/* {this.state.news.map((person, index) => (
            <img style={{width:"100%"}} src={person.urltoimage}></img>
            ))} */}
        {/* <List  >
      
            <List.Item >
            </List.Item>
            <List.Item >
            <Button style={{width:"100%" , height:"60px" , backgroundColor:"#000", color:"#fff"}}>See more..</Button>
            </List.Item>
            </List> */}
            <Tooltip placement="top" title="Back to Top"><BackTop><div style={style}><ArrowUpOutlined  style={{ fontSize: '25px', color: '#ffffff'}}></ArrowUpOutlined></div></BackTop></Tooltip>
    </div>


    );
  }
}


EventsAdds.propTypes = {
  history: PropTypes.object,
  match: PropTypes.object
};
function mapStateToProps(state) {
  return {
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...DashboardActions }, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps,null,{ forwardRef: true }) (EventsAdds);
