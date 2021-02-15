import LinkNext from 'next/link'
import React from 'react'
import { Container } from 'react-bootstrap'


const NotFound = () => {
    return (
        <>
            <Container>

                <h1> Oooooops....</h1>
                <h2> You got lost</h2>
                <p>Go back <LinkNext href="/"><a>Home Page</a></LinkNext></p>
            </Container>
            
            
        </>
    )
}

export default NotFound
