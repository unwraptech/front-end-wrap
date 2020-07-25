
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {withRouter} from 'react-router-dom';
import PropTypes from "prop-types";
import "../../styles/footer.css"
const footerstyle =  {width :"100%", height:"300px" }
class Footer extends Component{

   
    render(){
        return(<div style={{width :"80%", height:"300px" ,backgroundColor:"#000" , marginLeft:"10%", marginRight:"10%"}}>
            
        </div>)
    }
}


Footer.propTypes = {
    history: PropTypes.object,
    match: PropTypes.object
  };
  function mapStateToProps(state) {
    return {
    };
  }
  function mapDispatchToProps(dispatch) {
    return bindActionCreators({ }, dispatch);
  }
  
  export default withRouter(connect(mapStateToProps,mapDispatchToProps,null,{ forwardRef: true }) (Footer));
   