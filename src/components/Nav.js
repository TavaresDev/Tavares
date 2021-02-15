import React from "react"
import { Navbar, Form } from "react-bootstrap"
import Link from "next/link"

const Nav = () => {
	return (
		<Navbar bg='light' expand='lg'>
			<Navbar.Brand href='#home'>React-Bootstrap</Navbar.Brand>
			<Navbar.Toggle aria-controls='basic-navbar-nav' />
			<Navbar.Collapse id='basic-navbar-nav'>

		
				<Link className="nav-item" href='/'>
					<a className="nav-link">Home</a>
				</Link>
				<Link href='/about'>
					<a>About</a>
				</Link>

			</Navbar.Collapse>
		</Navbar>
	)
}

export default Nav
