import React from 'react'
import ProjectCategory from './ProjectCategory'
import classNames from 'classnames'

class Collection extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
          open: false,
          activeIndex: null,
          categories: []
        }
    }
    componentDidMount() {
      
      this.setState({
        categories: [
          {"thumbnail":"https://images.unsplash.com/photo-1498813569067-a4332afdfcf0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
          "name":"About Me",
          "description": "I am a mission-driven software developer focused on client relations and creating meaningful collaborations to produce innovative solutions to complex problems. I excel at taking initiative and ownership of my projects and products and proactively resolving issues. As an avid and fast learner, I aspire to work in a challenging environment to continually grow my skills while also giving back to my community.",
          "pic":"https://i.ibb.co/RBxtvKB/IMG-0873.jpg",
          "slug":"commodo"},
          {"thumbnail":"https://images.unsplash.com/photo-1528191195167-06a0309a1839?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
          "name":"Skills",
          "icon1":"https://i.ibb.co/8PHL3H7/icons8-html-5-50.png",
          "icon2":"https://i.ibb.co/z2Q8vXP/icons8-javascript-logo-50.png",
          "icon3":"https://i.ibb.co/PGXY4pX/icons8-css3-50.png",
          "icon4":"https://i.ibb.co/TgLkK16/icons8-react-native-50.png",
          "icon5":"https://i.ibb.co/Tg42Bgy/icons8-ruby-programming-language-50.png",
          "icon6":"https://i.ibb.co/F5wySht/icons8-mysql-50.png",
          "icon7":"https://i.ibb.co/dG7R63G/icons8-nodejs-50.png",
          "icon8":"https://i.ibb.co/NSNvPVp/icons8-postgresql-50.png",

          "slug":"laborum",
          "id":"586537da60c040bc1e3060a1"},
          {"thumbnail":"https://images.unsplash.com/photo-1528359308540-af487aa03e10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",        
          "name":"Works",
          "work1":"https://media.giphy.com/media/RMNVUVEYkDZydqzqkS/giphy.gif",
          "stiched":"STICHED",
          "work2":"https://media.giphy.com/media/WTA8S0dyWHM5NEOq6h/giphy.gif",
          "goodcooking": "GOOD COOKING",
          "work3":"https://media.giphy.com/media/LPUUfGy3BJB3LESqBg/giphy.gif",
          "richord": "RICHORD",
          "slug":"commodo",
          "id":"586537daffc67c66ec4dc356"},
          {"thumbnail":"https://images.unsplash.com/photo-1527752410185-f3a0fc45a358?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
          "name":"Contact",
          "mail": "https://i.ibb.co/HrC0bLs/icons8-composing-mail-100.png",
          "email": "ipsita.rao@gmail.com",
          "linkedin":"https://i.ibb.co/RhvDbLg/icons8-linkedin-128-1.png",
          "linkweb": "www.linkedin.com/in/ipsita-rao",

          "slug":"voluptate",
          "id":"586537dae1be34396786ce5f"},
          {"thumbnail":"https://images.unsplash.com/photo-1516617433566-d946f8252770?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
          "name":"Blog",
          "slug":"voluptate",
          "id":"586537dae1be34396786ce5f"}]
      })
    }
  
    handleClick = (i) => {
      this.setState({
        activeIndex: i,
        open: true
      })
    }
    focusOff = (e) => {
      e.preventDefault()
      if (e.target.className !== 'category--image') {
        this.setState({
          activeIndex: null,
          open: false
        })
      }
    }
    categoryNode = (cat, i) => {
        let isLast = ( i === this.state.categories.length - 1 || i === this.state.categories.length - 2)
        let shiftLeft = ( i < this.state.activeIndex )

        return (
          <ProjectCategory
            cat={cat}
            key={'cat-' + i}
            handleClick={this.handleClick}
            active={i === this.state.activeIndex}
            focusOff={this.focusOff}
            focused={this.state.open}
            shiftLeft={shiftLeft}
            Index={i}
            isLast={isLast}
          />
        )
    }
    render() {
      let catNodes = this.state.categories.map(this.categoryNode)
      let classes = classNames({
        focused: this.state.open
      })
      return (
        // <div className={'categories--menu-container ' + classes} onClick={this.focusOff} style={{height: window.innerHeight}}>
        <div className={'categories--menu-container ' + classes} onClick={this.focusOff}>
          <ul className="categories menu">
            {catNodes}
          </ul>
        </div>
      )
    }
}

export default Collection




// "thumbnail":"https://images.unsplash.com/photo-1544273677-c433136021d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",