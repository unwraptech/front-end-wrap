import React, { Component } from "react";
import { List ,Table,Button } from "antd";

import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
const mobilesBrand = [
  'Apple',
  'Samsung',
  'Acer',
  'One Plus',
  'Vivo',
  'Sony',
  'Xiaomi',
  'Panasonic',
  'Asus',
  'Oppo'
];

const listdataStyle={ height:"30px" ,border:"#fff", backgroundColor:"#fff" , color:"#000"}


const headerstyle={textAlign:'center', color:"#fff", height:"40px", width:"100%",backgroundColor:"#000", marginTop:"5px"}
class MainCategories extends Component {
  constructor(props) {
    super(props);
    this.state={
    }
  }

  render() {
    return (
      <div >
        {/* search for mobile phones */}
        <Button style={headerstyle}>Mobile Brands</Button>
      
        <List   bordered dataSource={mobilesBrand} renderItem={item => (<List.Item style={listdataStyle}>{item}</List.Item> )}>
        <List.Item style={listdataStyle}>See more..</List.Item></List>

        {/* search for mobile phones */}
        <Button style={headerstyle}>Tabs/iPAD Brands</Button>

        <List   bordered dataSource={mobilesBrand} renderItem={item => (<List.Item style={listdataStyle}>{item}</List.Item> )}>
        <List.Item style={listdataStyle}>See more..</List.Item></List>

        {/* search for mobile phones */}
        <Button style={headerstyle}>Smartwatch Brands</Button>
        <List   bordered dataSource={mobilesBrand} renderItem={item => (<List.Item style={listdataStyle}>{item}</List.Item> )}>
        <List.Item style={listdataStyle}>See more..</List.Item></List>


        </div>


    );
  }
}



MainCategories.propTypes = {
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

export default connect(mapStateToProps,mapDispatchToProps,null,{ forwardRef: true }) (MainCategories);
