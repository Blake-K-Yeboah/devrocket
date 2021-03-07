// Import Styles
import styles from '../../styles/Posts.module.css';

// Import Components
import Post from '../Home/Post';

const PostsContainer = ({ posts }) => {
    return (
        <section className={styles.postsSection}>

            <span className={styles.watermark}>Posts</span>

            <h1 className={styles.title}>Browse Posts</h1>

            <div className={styles.divider}>
                <div className={styles.dividerPart}></div>
                <div className={styles.dividerPart}></div>
                <div className={styles.dividerPart}></div>
            </div>

            <div className={styles.postsGrid}>

                {posts.map(post => {
                    return <Post post={post} key={post.fileName} />
                })}

            </div>

        </section>
    )
}

export default PostsContainer;