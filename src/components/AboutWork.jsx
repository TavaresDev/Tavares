import React from "react"
import { Card, Container, Row, Col } from "react-bootstrap"
import styles from '../styles/About.module.css'


const AboutWork = () => {
	return (
		<Container>
			<Row>
				<Col>
					<Container className='text-center p-5 '>
						<h1 className='p-3 '>What we do</h1>
						<h3>My value prop</h3>
					</Container>
				</Col>
			</Row>
			<Row className='pb-5 m-3'>
				<h2>Products</h2>
			</Row>
			<Row className='d-flex align-items-center'>
			<Container className='d-flex flex-wrap justify-content-md-around'>

                <div className={`${styles.card} `}>
						<Card.Body>
						<Card.Title> title of card</Card.Title>
             
							<Card.Text>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
								dolorem non repudiandae eveniet nostrum fugiat similique placeat
								accusantium illum sapiente neque deleniti corrupti voluptatem,
								commodi officia corporis consectetur dicta quas?
							</Card.Text>
						</Card.Body>
					</div>

		
                <Card className={styles.card}>
						<Card.Body>
						<Card.Title> title of card</Card.Title>
             
							<Card.Text>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
								dolorem non repudiandae eveniet nostrum fugiat similique placeat
								accusantium illum sapiente neque deleniti corrupti voluptatem,
								commodi officia corporis consectetur dicta quas?
							</Card.Text>
						</Card.Body>
					</Card>
        
            </Container>
			</Row>
		</Container>
	)
}

export default AboutWork
