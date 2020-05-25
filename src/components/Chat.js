import React from 'react';
import {API} from '../api/birdyapi.js';
import {Twemoji} from 'react-emoji-render';

import 'emoji-mart/css/emoji-mart.css'
import data from 'emoji-mart/data/google.json'
import { NimblePicker } from 'emoji-mart'


const sout = new Audio()
sout.src = "/audio/not.mp3"

const playsout = () => {
  sout.play();
}

const colors = {
  1: {"backgroundImage":"linear-gradient(to right bottom, #FF6CAB, #7366FF)"},
  2: {"backgroundImage":"linear-gradient(to right bottom, #B65EBA, #2E8DE1)"},
  3: {"backgroundImage":"linear-gradient(to right bottom, #64E8DE, #8A64EB)"},
  4: {"backgroundImage":"linear-gradient(to right bottom, #7BF2E9, #B65EBA)"},
  5: {"backgroundImage":"linear-gradient(to right bottom, #FF9482, #7D77FF)"},
  6: {"backgroundImage":"linear-gradient(to right bottom, #FFCF18, #FF8818)"},
  7: {"backgroundImage":"linear-gradient(to right bottom, #FFA62E, #EA4D2C)"},
  8: {"backgroundImage":"linear-gradient(to right bottom, #00FFED, #00B8BA)"},
  9: {"backgroundImage":"linear-gradient(to right bottom, #6EE2F5, #6454F0)"},
  10: {"backgroundImage":"linear-gradient(to right bottom, #3499FF, #3A3985)"},
  11: {"backgroundImage":"linear-gradient(to right bottom, #FF9897, #F650A0)"},
  12: {"backgroundImage":"linear-gradient(to right bottom, #FFCDA5, #EE4D5F)"},
  13: {"backgroundImage":"linear-gradient(to right bottom, #FF5B94, #8441A4)"},
  14: {"backgroundImage":"linear-gradient(to right bottom, #F869D5, #5650DE)"},
  15: {"backgroundImage":"linear-gradient(to right bottom, #F00B51, #7366FF)"}
}


class Chat extends React.Component{

  constructor(props){
    super(props);

    this.messageref = React.createRef();
    this.state = {
      "color":8,
      "colorPicker":false,
      "emojis": false,
      "messages": [],
      "value": "",
      "user":{
        "id":"",
        "photo":"",
        "username":"",
      }
    }

    this.ready = false;
    this.ws = API.connectSocket()//new WebSocket("ws://localhost:8080/birdy/chat/10?access_token="+localStorage.getItem("token"));
    this.initialiseSocket();
  }

  initialiseSocket = () => {

    this.ws.onopen = (e) => {
      console.log("BGHEL CONNECTED");
    }

    this.ws.onmessage = (e) => {
      //alert("BGHEL MESSAGE");
      var data = JSON.parse(e.data);

      if(this.ready === true){
        //switch(data.message_type)
        this.setState({
          "messages": [...this.state.messages, data]
        });

        playsout();
      }else{
        this.setState({
          "user": JSON.parse(e.data)
        });
        this.ready = true;
      }

    }

    this.ws.onclose = (e) => {
      console.log("User is disconnecting ... trying to reconnect");
      setTimeout(() => {
        this.ws = API.connectSocket();
        this.initialiseSocket();
      }, 1000);

    }
  }
  send = (e) => {
    if(e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault();
      //alert("SEND !!");
      this.ws.send(this.state.value);

      let newmessage = {
          "self":true,
          "photo":this.state.user.photo,
          "content":this.state.value
      }

      this.setState((prevState) => ({
          "value":"",
          "messages": [...prevState.messages, newmessage]
        })
      );

    }
  }
  /*
    to replace with liable textarea autoresize
    clean up code later
  */
  auto_grow  = (e) => {

    e = e.target ;
    this.setState({"value":e.value})
    var characters = e.value.length;
    //e.style.width;
    //e.style.fontSize;
    var lines = (characters) * 16 / (e.clientWidth + 320);

    //console.log({"scroll height" : e.scrollHeight, "offset height" : e.offsetHeight, "truc" : lines});
    e.style.height = (50 + (parseInt(lines))*20)+"px";
    e.parentNode.style.height = e.style.height;
  }
  check  = (e) => {
    e = e.target;
    var parentz = e.parentNode;

    var val = e.scrollHeight;
    var h = e.offsetHeight;
    var cal = h-2;
    console.log({cal, h, val});
    if(val>cal){
     h = h+10;
     e.style.height=h+"px";
     parentz.style.height = h+"px";
    }
  }
//{<span className="message__content">{message.content}</span>}
  /*message_element = (message, index) => {
    let message_type = "message " + (message.self === true ? "message--self" : "message--other");
    //console.log(message_type);
    return(
      <div className={message_type} key={index} >
        <div className="message__profile" style={{"overflow":"hidden"}}>
          <img alt="profile" style={{"height":"100%", "width":"100%", "objectFit": "cover"}}
          src={message.photo}/>
        </div>
        <Twemoji className="message__content" text={message.content ? message.content : "reconnect"}
        style={message.self === true ? colors[this.state.color] : {}}/>

      </div>
    );
  }*/

  componentDidUpdate(){
    //console.log("khra : " + this.messageref.current.scrollHeight)
    try{
      this.messageref.current.scrollTop = this.messageref.current.scrollHeight;
    }catch(e){

    }
  }


  toggleEmojis = () => {
    this.setState({
      "emojis": !this.state.emojis
    })
  }

  addEmoji = (emoji) => {
    this.setState({
      value: this.state.value + " " + emoji + " "
    })
  }
  render() {


    if(this.state.colorPicker === true){

      return(
          <div className="fullsc-conatiner" id="fullsc-conatiner">
            <button className="btn-circle btn-circle--large fullsc-close" onClick={(e) => this.setState({colorPicker:false})}>
              <i className="fas fa-times"></i>
            </button>

            <div className="card-container card-container--colorPicker">
              <div className="card card--colorPicker">
                <div className="colorPicker">
                  {
                    Object.keys(colors).map((index, key) => {
                      return(
                        <div key={key} className="colorPicker__color" style={colors[index]}
                        onClick={e => this.setState({colorPicker:false, color:index})}></div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </div>
      )
    }


    return (
      <div className="chat">
            <div className="messages" ref={this.messageref}>
              {
                this.state.messages.map( (message, index) => {

                  //return this.message_element(message, index)
                  let message_type = "message " +
                   (message.self === true ? "message--self " : "message--other ") +
                   ((this.state.messages.length === index+1 || message.self !== this.state.messages[index+1].self)? "message--last": "");
                  //console.log(message_type);
                  return(
                    <div className={message_type} key={index} >
                      <div className="message__profile" style={{"overflow":"hidden"}}>
                        <img alt="profile" style={{"height":"100%", "width":"100%", "objectFit": "cover"}}
                        src={message.photo}/>
                      </div>
                      <Twemoji className="message__content" text={message.content ? message.content : "reconnect"}
                      style={message.self === true ? colors[this.state.color] : {}}/>

                    </div>
                  );
                })
              }
              <div className="messages_vu" style={{ "padding":"1px", "color":"red", "textAlign":"right"}}>
                vu
              </div>
            </div>

            <div className="input">
              <div className="tools">
                <div className="emojis" onClick={(e) => {
                    e.preventDefault();
                    this.toggleEmojis();
                  }}style={{"position":"relative"}}>
                    <i className="far fa-laugh-wink" style={{
                      "backgroundImage":colors[this.state.color].backgroundImage,
                      "WebkitBackgroundClip":"text",
                      "WebkitTextFillColor":"transparent",
                      "backgroundSize": "cover",
                      "backgroundPosition": "center",
                      "backgroundAttachment": "fixed"
                    }}></i>

                  <NimblePicker title="Emojis" theme="dark" set='twitter' data={data} style={{
                    "position":"absolute",
                    "bottom": "60px",
                    "left":"0",
                    "display": this.state.emojis === true ? "initial": "none"
                  }} onClick={(emoji, event) => {
                    event.stopPropagation()
                    //alert(JSON.stringify(emoji))
                  }} onSelect={(emoji) => {
                    this.addEmoji(emoji.colons)
                  }}/>
                </div>
                <div className="emojis" onClick={(e) => this.setState({colorPicker:true})}>
                  <i className="fas fa-image" style={{
                    "backgroundImage":colors[this.state.color].backgroundImage,
                    "WebkitBackgroundClip":"text",
                    "WebkitTextFillColor":"transparent"
                  }}></i>
                </div>
              </div>

              <div className="text">
                <textarea placeholder="Aa..."
                  value={this.state.value}
                  onInput={(e) => this.auto_grow(e)}
                  onKeyDown={this.send.bind(this)}
                  onFocus={(e) => {
                    if(this.state.emojis === true){
                      this.setState({emojis: false})
                    }
                  }}></textarea>
              </div>

              <div className="send">

              </div>
            </div>
      </div>
    );
  }
}


export default Chat;
