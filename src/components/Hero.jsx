import React from "react"
import { Jumbotron, Container } from "react-bootstrap"
import styles from "../styles/Hero.module.css"
import LazyHero from "react-lazy-hero"
// http://react-lazy-hero.danielstefanovic.com/

const Hero = ({ heroTitle, subTitle }) => {
	return (
		<LazyHero
			imageSrc='https://unsplash.it/2000/2000'
			color='blue'
			minHeight='80vh'
			opacity='0.4'
			parallaxOffset= '51'>
                
                <h1 className='text-light' >{heroTitle}</h1>
                <h3>{subTitle}</h3>
		</LazyHero>
	)
}

export default Hero
