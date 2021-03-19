// Import Link From Next
import Link from 'next/link';

// Import Styles
import styles from '../../styles/Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            
            <section className={styles.grid}>

                <div className={styles.levelUpSection}>

                    <h3 className={styles.levelUpHeading}>Level Up Your Skills</h3>

                    <p className={styles.levelUpText}>Get notified on <b>new posts</b> released to level up your web dev skills</p>

                    <div className={styles.inputGroup}>

                        <input type="email" className={styles.input} placeholder="Enter Your Email" />

                        <button className={styles.inputBtn}>Join</button>

                    </div>

                </div>

                <div className={styles.linksSection}>

                    <div className={styles.linkListContainer}>

                        <h4 className={styles.linkListHeading}>Navigation</h4>

                        <ul className={styles.linkList}>

                            <li>
                                <Link href="/">
                                    <a className={styles.linkListLink}>Home</a>
                                </Link>
                            </li>

                            <li>
                                <Link href="/posts">
                                    <a className={styles.linkListLink}>Posts</a>
                                </Link>
                            </li>

                            <li>
                                <Link href="/about">
                                    <a className={styles.linkListLink}>About</a>
                                </Link>
                            </li>

                        </ul>

                    </div>

                </div>

            </section>

            <div className={styles.copyrightSection}>

                <p className={styles.copyright}>&copy; Copyright 2021 DevRocket. All Rights Reserved</p>

                <Link href="/affiliate-disclosure">
                    <a className={styles.darkLink}>Affialiate Disclosure</a>
                </Link>

            </div>

        </footer>
    )
}

export default Footer;