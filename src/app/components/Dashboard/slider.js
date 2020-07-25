import React, { Component } from "react";
import {Carousel} from "antd";

import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
class MainSlider extends Component {
  constructor(props) {
    super(props);
    this.state={
    }
  }
  onChange(a, b, c) {
  }
  
  render() {
    return (
      <div>
           <Carousel afterChange={this.onChange} style={{backgroundColor:"#000" , height:"150px"}} autoplay={true}>
    <div >
      {/* <h3 style={{color:"#fff" }}>IOS 11</h3> */}
      <img style={{height:"150px", width:"100%"}} src="data:image/jpeg;base64,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"></img>
    </div>
    <div>
    <img style={{height:"150px", width:"100%"}} src="https://www.themobileindian.com/public/thumbs/news/2020/04/30792/mi-pay_425_735.jpg"></img> 
       </div>
    <div>
    <img style={{height:"150px", width:"100%"}} src="https://static.makeuseof.com/wp-content/uploads/2017/10/stop-ads-android-994x400.jpg "></img> 
    </div>
    <div>
    <img style={{height:"150px", width:"100%"}} src="https://tech-blogs.com/wp-content/uploads/2019/08/1566320010_The-latest-update-of-MIUI-10-adds-to-sources-and.jpg"></img> 
    </div>
   </Carousel>
      </div>

    );
  }
}



MainSlider.propTypes = {
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

export default connect(mapStateToProps,mapDispatchToProps,null,{ forwardRef: true }) (MainSlider);
