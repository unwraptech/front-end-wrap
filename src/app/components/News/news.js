
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {withRouter} from 'react-router-dom';
import PropTypes from "prop-types";
import * as DashboardActions from "../../redux/actions/dashboard-actions"
import {Col , Row , Card} from "antd"
class TechNews extends Component{
constructor(props){
    super(props)
    this.state={
        news :[]
    }
}
    componentDidMount(){
        this.props.getNewsList().then(list=>{
            this.setState({news : list.news})
        })
    }
    render(){
        return(<div style={{marginLeft:"10%", marginRight:"10%"}}>
{this.state.news.map((person, index) => (
        <div style={{background:"#000000"}}>
                <Row  >

            <Col span={6}> <img style={{width:"100%" ,}} src={person.urltoimage}></img> </Col>
            <Col span={18} style={{background:"#000"}}>
                    
                    <span style={{ fontSize:"20px", color:"#FFFFFF"}}>{person.title}</span><br/>
                    <span style={{fontSize:"14px", color:"#FFFFFF"}}>{person.description}</span>
                    <a href={person.url} target='blank'>  Read more ..</a>

    </Col>
    </Row>
 </div>

            ))}        </div>)
    }
}


TechNews.propTypes = {
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
  
  export default withRouter(connect(mapStateToProps,mapDispatchToProps,null,{ forwardRef: true }) (TechNews));
   