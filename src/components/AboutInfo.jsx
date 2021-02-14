import React from "react"
import { Row, Col, Container } from "react-bootstrap"
import Image from "next/image"
// import { Image, Row ,Col} from '../../public/'

const AboutInfo = ({ text1, text2 }) => {
	return (
		<>
        <Container>

			<Row>
				<Col md={6}>
					<Image
						src='/undraw_dev.svg'
						alt='Picture of the author'
						width={350}
						height={350}></Image>
				</Col>
				<Col md={6}>
                    <Container className='p'>

					<h3>{text1}</h3>
					<h3>{text2}</h3>
                    </Container>
				</Col>
			</Row>
                        </Container>
		</>
	)
}

export default AboutInfo
