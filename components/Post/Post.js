import styles from '../../styles/Post.module.css';

const Post = ({ data, htmlString }) => {
    return (
        <div className={styles.post}>
            
            <h1 className={styles.postTitle}>{data.title}</h1>
            
            <ul className={styles.postTags}>

                {data.tags.split(' ').map(tag => <li className={styles.postTag} key={tag}>{tag}</li>)}

            </ul>

            <p className={styles.authorParagraph}>
                Written by <img className={styles.authorImg} src={`/authors/${data.authorImg}`} alt={data.author} /> <span className={styles.bold}>{data.author}</span> on <span className={styles.bold}>{data.writtenDate}</span>
            </p>

            <div className={styles.postContent} dangerouslySetInnerHTML={{ __html: htmlString }} />
            
        </div>
    )
}

export default Post;