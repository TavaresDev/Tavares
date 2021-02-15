import React from 'react'
import { Jumbotron, Container} from 'react-bootstrap'
import styles from '../styles/Hero.module.css'

const Hero = ({heroTitle, subTitle}) => {
    
    
    return (
        <Jumbotron className={styles.hero}>
            <Container className='text-center wraper'>

            <h1>{heroTitle}</h1>
            <h3>{subTitle}</h3>

            <style jsx>{`
            div {
            height: auto;
            border: 1px solid black;
          }
          h3 {
              color: green;

          }
            h1 {
              color: blue;
            }
            
 
          `}</style>
            </Container>
        </Jumbotron>
    )
}

export default Hero
