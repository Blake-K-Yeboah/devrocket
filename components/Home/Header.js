import styles from '../../styles/Header.module.css';
import Link from 'next/link';

const Header = () => {

    return (
        <header className={styles.header}>
            
            <div className={styles.contentContainer}>

                <h2 className={styles.brand}>

                    <img src="/Logo.png" alt="Dev Rocket Logo" className={styles.brandImg} />

                    DevRocket <span className={styles.thin}>Blog</span>
                </h2>

                <div className={styles.headerContent}>
                    
                    <h1 className={styles.headerContentTitle}>Transform Your <span className={styles.primary}>Development</span> Skills </h1>
                    
                    <p className={styles.headerContentParagraph}>Browse <span className={styles.bold}>plenty</span> of <span className={styles.bold}>useful articles</span> to transform your <span className={styles.bold}>web development skills</span></p>

                    <Link href="/posts">
                        <a className={styles.primaryBtn}>Browse Posts</a>
                    </Link>

                </div>

            </div>

            <img src="/Boxes.png" alt="Boxes of programming languages" className={styles.headerImg}/>

        </header>
    )
}

export default Header;
