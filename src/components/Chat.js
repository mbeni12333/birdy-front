import React from 'react';

let messages = [
  {"self":true, "photo":"test", "content":"some stuff"},
  {"self":true, "photo":"test", "content":"some stuff"},
  {"self":false, "photo":"test", "content":"some stuff"},
  {"self":true, "photo":"test", "content":"some stuff"},
  {"self":false, "photo":"test", "content":"some stuff"},
  {"self":false, "photo":"test", "content":"Tottaly right i agree with the person that didn't speek yet , the stuff seem to work coorectly but the font is shutty as hell , maybe change it to roboto"},
  {"self":false, "photo":"test", "content":"some stuff"},
  {"self":true, "photo":"test", "content":"some other stuff i'm trying to do stuff here just to see if the stuff goes as "},
  {"self":true, "photo":"test", "content":"some stuff"},
  {"self":false, "photo":"test", "content":"some other stuff i'm trying to do stuff here just to see if the stuff goes as it was stuffed to do  so till now every stuff seem to be working , maybe change teh font later i don't know suufjdklfkd sjflkjds"},
  {"self":true, "photo":"test", "content":"some stuff"},
  {"self":false, "photo":"test", "content":"some other stuff i'm trying to do stuff here just to see if the stuff goes as it was stuffed to do  so till now every stuff seem to be "},
  {"self":true, "photo":"test", "content":"some stuff"},
]

class Chat extends React.Component{

  constructor(props){
    super(props);

    this.messageref = React.createRef();
    this.state = {
      "messages": [],
      "value": "",
      "user":{
        "id":"",
        "photo":"",
        "username":"",
      }
    }

    this.ready = false;

    this.ws = new WebSocket("wss://birdy-back.herokuapp.com/chat/10?access_token="+localStorage.getItem("token"));

    this.ws.onopen = (e) => {
      alert("BGHEL CONNECTED");
    }
    this.ws.onmessage = (e) => {
      //alert("BGHEL MESSAGE");
      var data = JSON.parse(e.data);

      if(this.ready === true){
        //switch(data.message_type)
        this.setState({
          "messages": [...this.state.messages, data]
        });
      }else{
        this.setState({
          "user": JSON.parse(e.data)
        });
        this.ready = true;
      }
    }
  }

  send = (e) => {
    if(e.keyCode == 13 && e.shiftKey == false) {
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

  message_element = (message, index) => {
    let message_type = "message " + (message.self === true ? "message--self" : "message--other");
    //console.log(message_type);
    return(
      <div className={message_type} key={index}>
        <div className="message__profile" style={{"overflow":"hidden"}}>
          <img style={{"height":"100%", "width":"100%", "object-fit": "cover"}}
          src={message.photo}/>
        </div>
        <span className="message__content">{message.content}</span>
      </div>
    );
  }

  componentDidUpdate(){
    console.log("khra : " + this.messageref.current.scrollHeight)
    this.messageref.current.scrollTop = this.messageref.current.scrollHeight;
  }

  render() {
    return (
      <div className="chat">
            <div className="messages" ref={this.messageref}>
              {this.state.messages.map( (message, index) => this.message_element(message, index))}
              <div className="messages_vu" style={{ "padding":"1px", "color":"red", "text-align":"right"}}>

              </div>
            </div>

            <div className="input">
              <div className="tools">
                <div className="emojis">
                </div>
                <div className="emojis">
                </div>
                <div className="emojis">
                </div>
              </div>

              <div className="text">
                <textarea placeholder="Aa..."
                  value={this.state.value}
                  onInput={(e) => this.auto_grow(e)}
                  onKeyDown={this.send.bind(this)}></textarea>
              </div>

              <div className="send">

              </div>
            </div>
      </div>
    );
  }
}


export default Chat;
