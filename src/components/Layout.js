import styles from "../styles/Layout.module.css"
import Nav from "../components/Nav"

import React from "react"
import Footer from "./Footer"
import { Container } from "react-bootstrap"

const Layout = ({ children }) => {
	return (
		<div className=''>
			<Nav />
            <div className='mainBody'>


			{children}
            </div>

			<Footer />
		</div>
	)
}

export default Layout
