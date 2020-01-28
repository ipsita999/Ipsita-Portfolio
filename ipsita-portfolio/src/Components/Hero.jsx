import React from 'react'
import TextLoop from "react-text-loop";
// import Link from "react-router";
// import { BodyText } from "./ui";


// const Hero = () => {
//     // render()
//     return(
//         <>
//     <h1 className= 'header'>Hi, I'm Ipsita: A full stack developer</h1>
//         </>
//     )
// }





class Hero extends React.Component {
    render() {
        return (
            <h1 className= 'header'>
                Hi I am [ <TextLoop children={["Ipsita Rao", " a Sofware Developer", " an avid reader", "an innovator", "dog lover"]} /> ]

            </h1>
        );
    }
}
export default Hero