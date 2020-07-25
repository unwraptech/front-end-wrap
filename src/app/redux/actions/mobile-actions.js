import API from "../apis/mobiles-api";

export function search_mobiles(search) {
  return async function (dispatch, getState) {
    try {

      let resp = await API.searchmobiles(search);
      return resp.data;
    } catch (e) {
      return { "error": true };
    }
  };
}
export function compare_mobiles(params) {
  return async function (dispatch, getState) {
    try {

      let resp = await API.comparemobiledevices(params);
      return resp.data;
    } catch (e) {
      return { "error": true };
    }
  };
}

