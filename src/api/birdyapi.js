import axios from 'axios';

axios.defaults.baseURL = "https://birdy-back.herokuapp.com";
//axios.defaults.baseURL = "http://localhost:8080/birdy";
const API  = {

  isLoggedIn : false,
  token : "",
  userId: "",
  user:{},

  checkLoggedIn(){
    return localStorage.getItem("token") !== null;
  },

  getToken(req, callback){
    if(this.isLoggedIn === false){
      console.log("request is : " , req);
      axios.post("/auth", req)
      .then(res => {
        //alert(JSON.stringify(res.data));
        if(res.data.status !== "KO"){

          this.isLoggedIn = true;
          this.token = res.data.token;
          localStorage.setItem("token", res.data.token);

          axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.token;
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
  },

  logout(callback){
    console.log("Trying to logout");
    axios.delete("/auth")
    .then(res => {
      if(this.isLoggedIn === true){
        //alert("YOU ARE BEING LOGED OUT ");
        localStorage.removeItem("token");
        axios.defaults.headers.common = {};
        this.isLoggedIn = false;
        callback();
      }
    })
    .catch(err => alert(err));
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
