import React from 'react'
import classNames from 'classnames'
// import Mailto from 'react-mailto'

class ProjectCategory extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
          projects: []
        }
    }
   
    setActive = () => {
        this.props.handleClick(this.props.Index)
    }
    getWidth(isActive) {
        let w = !isActive ? 'calc(18vw - 25px)' : '500px'
        return w
    }
    render() {
        let { active, focused, shiftLeft, isLast } = this.props

        let styles = {
          container: { 
            transform: (function() {
                return active
                    ? 'scale(1.1) translate3d(0, 0, 0)'
                    : 'scale(1) translate3d(0, 0, 0)'
            })()
          }, item: {
              transform: (function() {
                  let direction = (shiftLeft) ? '-': ''
                  let transform = (focused && !active) ? 'translate3d('+ direction +'100%, 0, 0)' : 'translate3d(0, 0, 0)'
                  return transform
              })()
          }, background: {
              // background: 'url(' ./aboutme.PNG ') no-repeat center center',
              background: 'url(' + this.props.cat.thumbnail + ') no-repeat center center',
            //   backgroundSize: 'cover',
              height: '75vh',
              width: (this.getWidth(active))
          }

        //   container: {
        //       width: '50vw',
        //       hieght: "60vh",

        //   }
        }
        let classes = classNames({category: true, isActive: active, isLast, shiftLeft})
        return (
            <li className={classes} style={styles.item}>
              {/* <h1>HELLO, I'M IPSITA</h1> */}
                <div className="category--content"     >
                    <h2>{this.props.cat.name}</h2>
                    <div className ='grouped'>
                    <h4>{this.props.cat.description}</h4>
                    
                    <img className = "mypic" src={this.props.cat.pic}/>              </div>
                    <div className = "work-icons">
                        <img className ="icon1" src={this.props.cat.icon1}/>
                        <img className ="icon1" src={this.props.cat.icon2}/>
                        <img className ="icon1" src={this.props.cat.icon3}/>
                        <img className ="icon1" src={this.props.cat.icon4}/>
                        <img className ="icon1" src={this.props.cat.icon5}/>
                        <img className ="icon1" src={this.props.cat.icon6}/>
                        <img className ="icon1" src={this.props.cat.icon7}/>
                        <img className ="icon1" src={this.props.cat.icon8}/>
                    </div>
                    <div className ="projects">
                      <div className = "p1">
                      <img className="project" src ={this.props.cat.work1}/>
                      <h3>{this.props.cat.stiched}</h3>
                      </div>
                    
                      <div className = "p1"> 
                      <img className="project" src ={this.props.cat.work2}/>
                      <h3>{this.props.cat.goodcooking}</h3>
                      </div>
                      <div className = "p1"> 
                      <img className="project" src ={this.props.cat.work3}/>
                      <h3>{this.props.cat.richord}</h3>
                      </div>
                    </div>
                    <div className ="contacts">
                      <div className= "mail">
                      <a href="mailto:ipsita.rao@gmail.com?subject=Hi!">
                        <img src ={this.props.cat.mail}/>
                      </a>
                      <h5>{this.props.cat.email}</h5>
                      </div>
                      <div className="linkin">
                        <a href={this.props.cat.linkweb}>
                        <img src={this.props.cat.linkedin}/>
                        </a>
                      </div>
                      {/* <Mailto email="ipsita.rao#gmail.com" obfuscate={true}>
                      <img src ={this.props.cat.mail}/>
                      </Mailto> */}
                    </div>

          
                 
                    {/* <ProjectList projects={this.state.projects}/> */}
                </div>
                <div className="category--image-container" onClick={this.setActive} style={styles.container}>
                    <div className="category--image" style={styles.background}></div>
                </div>
                <div className="category--name">
                  <h6>{this.props.cat.name}</h6>
                </div>
                <div className="category--closeButton">
                  <a href="#">Back</a>
                </div>
            </li>
        )
    }
}

export default ProjectCategory