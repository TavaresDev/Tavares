import styles from '../styles/Layout.module.css'
import Nav from '../components/Nav'

import React from 'react'

const Layout = ({children}) => {
    return (
        <>
        <Nav/>

        <div className={styles.container} >
            <main className={styles.main}>
                {children}
            </main>
            
        </div>
        </>
    )
}

export default Layout
