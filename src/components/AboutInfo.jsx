import React from "react"
import { Row, Col, Container } from "react-bootstrap"
import Image from "next/image"


const AboutInfo = ({ text1, text2 , order, bg}) => {


	return (
		<section className={`sec ${bg}`}>
			<Container>
				<Row className=''>
					<Col className={`align-items-center d-flex ${order}`}  md={6}>
						<Container className=' '>
							<Image
								src='/undraw_dev.svg'
								alt='Picture of the author'
								layout='responsive'
								width={350}
								height={350}></Image>
						</Container>
					</Col>
					<Col md={6} className=''>
						<Container className='m-3 d-flex flex-column'>
                        
							<h3 className=' py-3'>{text1}</h3>
							<h3 className=' p-3'>{text2}  fugiat sunt molestiae nesciunt magni, commodi ex voluptatem possimus ipsa, itaque voluptatum incidunt illo assumenda.</h3>
							<h3 className=' p-3'>{text2}   itaque voluptatum incidunt illo assumenda.</h3>
                            
						</Container>
					</Col>
				</Row>
			</Container>
		</section>
	)
}

export default AboutInfo
