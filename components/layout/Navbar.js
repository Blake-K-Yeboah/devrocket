// Import Styles
import styles from '../../styles/Navbar.module.css';

// Import Link From Next
import Link from 'next/link';

const Navbar = ({ page }) => {
    return (
        <nav className={styles.navbar}>

            <Link href="/">

                <a className={styles.brand}>

                    <img src="/Logo.png" alt="Dev Rocket Logo" className={styles.brandImg} />

                    DevRocket <span className={styles.thin}>Blog</span>
                
                </a>
                
            </Link>

            <ul className={styles.navList}>

                <li className={styles.navListItem}>

                    <Link href="/">
                        <a className={page === "home" ? styles.navListLinkActive : styles.navListLink}>
                            Home
                        </a>
                    </Link>

                </li>

                <li className={styles.navListItem}>

                    <Link href="/posts">
                        <a className={page === "posts" ? styles.navListLinkActive : styles.navListLink}>
                            Posts
                        </a>
                    </Link>

                </li>

                <li className={styles.navListItem}>

                    <Link href="/#about">
                        <a className={page === "about" ? styles.navListLinkActive : styles.navListLink}>
                            About
                        </a>
                    </Link>

                </li>

            </ul>

        </nav>
    )
}

export default Navbar;