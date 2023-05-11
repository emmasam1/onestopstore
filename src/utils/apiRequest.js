import axios from "axios";

let mode = "prod"
let BASE_URL;
if(mode.toUpperCase() =="PROD") BASE_URL = "https://storeserver.herokuapp.com/"
if(mode.toUpperCase() =="DEV") BASE_URL = "http://localhost:5000/"

const apiRequest = axios.create({
  baseURL: BASE_URL,
});

export default apiRequest;
