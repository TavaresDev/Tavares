import React from "react"
import { Card, Container, Row, Col } from "react-bootstrap"

const AboutWork = () => {
	return (
		<Container>
			<Row>
				<Col>
					<Container className='text-center p-5 box'>
						<h1 className='p-3 box'>What we do</h1>
						<h3>My value prop</h3>
					</Container>
				</Col>
			</Row>
			<Row>
				<h2>Products</h2>
			</Row>
			<Row>
				<Col md={6}>
					<Card>
						<Card.Title> title of card</Card.Title>
						<Card.Body>
							<Card.Text>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
								dolorem non repudiandae eveniet nostrum fugiat similique placeat
								accusantium illum sapiente neque deleniti corrupti voluptatem,
								commodi officia corporis consectetur dicta quas?
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
				<Col md={6}></Col>
			</Row>
		</Container>
	)
}

export default AboutWork
