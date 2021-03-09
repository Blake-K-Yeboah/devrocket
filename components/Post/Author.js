import styles from '../../styles/AuthorSection.module.css';

const Author = ({ data }) => {
    return (
        <div className={styles.authorSection}>
            
            <img className={styles.authorHeader} src="/author-header.jpg" alt="Code" />

            <img className={styles.authorImg} src={`/authors/${data.authorImg}`} alt={data.author} />

            <h4 className={styles.authorName}>{data.author}</h4>

            <div className={styles.divider} />

            <p className={styles.authorAbout}>{data.authorBio}</p>

        </div>
    )
}

export default Author;