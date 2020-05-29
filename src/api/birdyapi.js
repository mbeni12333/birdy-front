import axios from 'axios';

axios.defaults.baseURL = "https://birdy-back.herokuapp.com";
//axios.defaults.baseURL = "http://localhost:8080/birdy";
const API  = {

  isLoggedIn : false,
  token : "",
  userId: "",
  user:{},
  ws: "",


  checkLoggedIn(){
    return localStorage.getItem("token") !== null;
  },
  getToken(req, callback){
    //if(this.isLoggedIn === false){
      //console.log("request is : " , req);
      axios.post("/auth", req)
      .then(res => {
        alert(JSON.stringify(res.data));
        if(res.data.status !== "KO"){
          //this.isLoggedIn = true;
          //this.token = res.data.token;
          localStorage.setItem("token", res.data.token);
          //console.log("khra1");
          SetAuthorizationToken(res.data.token);
          //console.log("khra2");
          callback(res.data.token);
        }
      })
      .catch(err =>{
        // handle errors somehow
        console.log("Error in the login");
        console.log(err);
      })
    //}
  },
  signup(req, callback){
    //console.log("request is : " , req);
    axios.post("/user", req)
    .then(res => {
      console.log("Error in the signup");
      alert(JSON.stringify(res.data))
    });
  },
  logout(callback){
    console.log("Trying to logout");
    axios.delete("/auth")
    .then(res => {
      //if(this.isLoggedIn === true){
        //alert("YOU ARE BEING LOGED OUT ");
        localStorage.removeItem("token");
        delete axios.defaults.headers.common["Authorization"];
        //this.isLoggedIn = false;
        callback();
    })
    .catch(err => alert(err));
  },
  connectSocket(){

    if(this.ws !== "" && this.ws.readyState == WebSocket.OPEN){
      return this.ws;
    }
    //this.ws = new WebSocket("ws://localhost:8080/birdy/chat/10?access_token="+localStorage.getItem("token"));
    this.ws = new WebSocket("wss://birdy-back.herokuapp.com/chat/10?access_token="+localStorage.getItem("token"));
    return this.ws;
  },
  getUserInitialData(){
    return Promise.all([
      axios.get("/user").then((res) => res.data).catch((e) => ({})),
      axios.get("/user?all").then((res) => res.data.users).catch((e) => ({}))
    ]).then(([data, users]) => ({data, users}))

  },
  addFriend(username){
    //alert("Entered the function " + username);
    return axios.post("/friend", {username})
                .then((res) => {
                  //alert(JSON.stringify(res.data));
                })
                .catch((err) => {
                  alert(JSON.stringify(err))
                })
  },
  removeFriend(username){
    //alert("Entered the function " + username);
    return axios.delete("/friend", {
              params: {
                username: username
              }})
                .then((res) => {
                  //alert(JSON.stringify(res.data));
                })
                .catch((err) => {
                  alert(JSON.stringify(err))
                })
  }

}

const SetAuthorizationToken = (token) => {
  //axios.defaults.baseURL = "http://localhost:8080/birdy";
  axios.defaults.baseURL = "https://birdy-back.herokuapp.com";
  axios.defaults.headers.common['Authorization'] = "Bearer " + token;
}

const formDataToJSON = (formElement) => {
  var formData = new FormData(formElement),
      convertedJSON = {};

  formData.forEach(function(value, key) {
      convertedJSON[key] = value;
  });

  return convertedJSON;
}

export {API, formDataToJSON, SetAuthorizationToken};
