import Link from 'next/link';
import React from 'react'
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
    return (
        <>
            <div className={styles.navContainer}>
                <ul className={styles.navbar}>
                    <li className={styles.navItem}>
                        <Link href="/">
                            <a >Home</a>
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/about">
                            <a>About</a>
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/blog">
                            <a >Blog</a>
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/contact">
                            <a>Contact</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Navbar