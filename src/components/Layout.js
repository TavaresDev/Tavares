import styles from '../styles/Layout.module.css'
import Nav from '../components/Nav'

import React from 'react'
import Footer from './Footer'

const Layout = ({children}) => {
    return (
        <>
        <Nav/>

        {children}

            
     
        <Footer/>
        </>
    )
}

export default Layout
