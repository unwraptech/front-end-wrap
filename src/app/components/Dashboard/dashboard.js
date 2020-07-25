import React, { Component } from "react";
import MainCategories from "./main-categories";
import EventsAdds from "./events"
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {withRouter} from 'react-router-dom';
import * as DashboardActions from "../../redux/actions/dashboard-actions";
import Footer from "./footer"
import Slider from "./slider"

class Dashboard extends Component {
  constructor(props) {
    super(props);
   
  }
  onSelect = data => {
    console.log('onSelect', data);
  };
  onSearch = searchText => {
   console.log(searchText);
   
  };
  componentDidMount(){
   
  }

 render() {
    return (
      <div  >
<div style={{marginLeft:"10%", marginRight:"10%"}}>
      <div style={{border:"1px solid #F3F2F2", height:"150px", marginTop:"5px"}}>
     <Slider></Slider>
      </div>
    </div>
    <div style={{marginLeft:"10%", marginRight:"10%" ,  border:"1px solid #F3F2F2"}}>
        <div style={{display: "flex"}} >
        <div style={{flex:"20%"}} >

          <MainCategories></MainCategories>
        </div>
     
      <div   style={{border:"1px solid #F3F2F2", flex:"80%"}}>
      <EventsAdds></EventsAdds>
      </div>
      </div>
       </div>
   <Footer></Footer>
  </div>
          )
        
}
}

  Dashboard.propTypes = {
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

  export default withRouter(connect(mapStateToProps,mapDispatchToProps,null,{ forwardRef: true }) (Dashboard));
