import axios from "axios";
import * as config from "../../../config"

const authenticate_user = params => {
  return axios.post(config.localweb_URL+config.base_PATH+"/user/authenticate/",  params);
} 
const register_user= params => {
  return axios.post(config.localweb_URL+config.base_PATH+"/user/signUp/",  params);
} 
export default {
    authenticate_user,
    register_user
 };



