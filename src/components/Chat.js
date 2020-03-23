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

  auto_grow  = (e) => {

    e = e.target ;

    var characters = e.value.length;
    //e.style.width;
    //e.style.fontSize;
    var lines = (characters) * 16 / (e.clientWidth + 320);

    console.log({"scroll height" : e.scrollHeight, "offset height" : e.offsetHeight, "truc" : lines});
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
  message_element = (message) => {

    let message_type = "message " + (message.self == true ? "message--self" : "message--other");
    console.log(message_type);
    return(
      <div className={message_type}>
        <div className="message__profile"></div>
        <span className="message__content">{message.content}</span>
      </div>
    );
  }
  render() {
    return (
      <div className="chat">
            <div className="messages">

              {messages.map( message => this.message_element(message))}

              <div style={{"color":"transparent", "line-height":"10px"}}>
                test
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
                <textarea placeholder="Aa..." onInput={this.auto_grow.bind(this)}></textarea>
              </div>

              <div className="send">

              </div>
            </div>
      </div>
    );
  }
}


export default Chat;
