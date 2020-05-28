import React from 'react'


class AddPost extends React.Component{

  constructor(props){
    super(props)

    this.state = {
      active: false,
      post_content: ""
    }
  }


  toggleActive = (e) => {
    e.preventDefault();
    console.log("active: ", this.state);
    this.setState( (prevstate) => ({
      active: !prevstate.active
    }))
  }


  render(){
    if(this.state.active === true){
      return(
        <div className="fullsc-conatiner">
          <button className="btn-circle btn-circle--large fullsc-close" onClick={(e) => this.toggleActive(e)}>
            <i className="fas fa-times"></i>
          </button>

          <div className="fullsc fullsc--addpost card-container">
            <div className="card card--addpost">
                <div className="addpost">
                  <div className="addpost__title">
                    <span>Creer une publication</span>
                    <button className="btn-circle btn-circle--small" onClick={(e) => this.toggleActive(e)}>
                          <i className="fas fa-times"></i>
                    </button>
                  </div>

                  <div className="addpost__user">
                    <img src=""/>
                    <span>Mounib Benimam</span>
                  </div>

                  <textarea className="addpost__textarea" placeholder="Que voulez-vous dire ?"
                    value={this.state.post_content}
                    onChange={(e) => this.setState({"post_content": e.target.value})}>

                  </textarea>

                  <div className="addpost__toolblock">
                    <button><i className="far fa-images" style={{"color":"#45bd62"}}></i><span>Photo/video</span></button>
                    <button><i className="fas fa-user-tag" style={{"color":"#1877f2"}}></i><span>Identifier des amis</span></button>
                    <button><i className="far fa-laugh-beam" style={{"color": "#fd7e14"}}></i><span>Humeur</span></button>
                  </div>

                  <button disabled={this.state.post_content === "" } 
                    className={`addpost__publish ${this.state.post_content !== "" ? "addpost__publish--active" : ""}`}
                    style={{"margin-top":"1rem"}}>
                    Publier
                  </button>
                </div>
            </div>
          </div>
        </div>
      )
    }

    return(
      <div className="card-container">
        <div className="card">
          <div className="addpost__input">
            <div className="user-icon">
              <img src="/images/gintoki.jpg"/>
            </div>
            <button className="input__btn" onClick={(e) => this.toggleActive(e)}>
              Que voulez-vous dire ?
            </button>
          </div>

          <div className="addpost__toolblock">
            <button><i className="far fa-images" style={{"color":"#45bd62"}}></i><span>Photo/video</span></button>
            <button><i className="fas fa-user-tag" style={{"color":"#1877f2"}}></i><span>Identifier des amis</span></button>
            <button><i className="far fa-laugh-beam" style={{"color": "#fd7e14"}}></i><span>Humeur</span></button>
          </div>

        </div>
      </div>
    )

  }
}

export default AddPost
