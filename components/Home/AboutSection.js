import styles from '../../styles/AboutSection.module.css'

const AboutSection = () => {

    return (
        <section className={styles.aboutSection}>

            <h1 className={styles.title}>What is <span className={styles.primary}>Dev</span> Rocket?</h1>

            <div className={styles.grid}>

                <article className={styles.aboutSectionContent}>

                    <p className={styles.aboutSectionParagraph}>DevRocket is a blog run by developer <a href="https://www.blakeyeboah.com/" target="_blank" className={styles.link}>Blake Yeboah</a> that has various posts related to web development. The blog was made to spread web development knowledge and help people learn and improve their skills.</p>

                </article>

                <div className={styles.logoGridContainer}>

                    <div className={styles.logoCircle}>

                        <img className={styles.logo} alt="Dev Rocket Logo" src="/Logo.png" />

                    </div>

                </div>

            </div>

        </section>
    )
    
}

export default AboutSection;