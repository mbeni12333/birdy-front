import axios from 'axios';

axios.defaults.baseURL = "https://birdy-back.herokuapp.com";

const API  = {

  isLoggedIn : false,
  token : "",
  userId: "",

  checkLoggedIn(){
    return localStorage.getItem("token") !== null;
  },

  getToken(req, callback){
    if(this.isLoggedIn === false){
      console.log("request is : " , req);
      axios.post("/auth", req)
      .then(res => {
        if(res.data.status !== "KO"){
          this.isLoggedIn = true;
          this.token = res.data.token;
          localStorage.setItem("token", res.data.token);
          alert(JSON.stringify(res.data));
          callback(res.data.token);
        }
      })
      .catch(err =>{
        // handle errors somehow
        alert(JSON.stringify(err));
      })
    }
  },
  signup(req, callback){
    console.log("request is : " , req);
    axios.post("/user", req)
    .then(res => alert(JSON.stringify(res.data)));
  }

}

const formDataToJSON = (formElement) => {
  var formData = new FormData(formElement),
      convertedJSON = {};

  formData.forEach(function(value, key) {
      convertedJSON[key] = value;
  });

  return convertedJSON;
}

export {API, formDataToJSON};
