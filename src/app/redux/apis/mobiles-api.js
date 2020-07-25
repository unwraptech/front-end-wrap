import axios from "axios";
import * as config from "../../../config"

const searchmobiles = search => {
  console.log(search);
  
  return axios.get(config.localweb_URL+config.base_PATH+"/mobiles/search-mobile/"+ search);
} 
const comparemobiledevices = params => {  
  return axios.post(config.localweb_URL+config.base_PATH+"/mobiles/compare-mobile", params);
}

export default {
    searchmobiles,
    comparemobiledevices
 };
