import React from 'react'
import Nav from './Nav'
import Hero from './Hero'
import About from './About'
import Portfolio from './Portfolio'
import Contact from './Contact'
import Collection from './Accordion/Collection'


const Container = () => {




    return(
        <div className = 'main--container'>
        <Hero/>
        <Collection/>
        {/* <Nav/> */}
        {/* <About/> */}
        {/* <Portfolio/> */}
        {/* <Contact/> */}
        </div>
    )
}

export default Container