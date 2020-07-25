import axios from "axios";
import * as config from "../../../config"
const getAllMobileDevices = data => {
  return axios.get(config.localweb_URL+config.base_PATH+"/mobiles/get-mobile-by-brand/"+data);
};
const getALLusers = id => {
  return axios.get(config.localweb_URL+config.base_PATH+"/user/getUsers/"+id);
};
const getAllDevices = params => {
  console.log(params);
  
  return axios.post(config.localweb_URL+config.base_PATH+"/mobiles/get-mobile-devices/",params);
};
export default {
    getAllMobileDevices,
    getALLusers,
    getAllDevices
};

