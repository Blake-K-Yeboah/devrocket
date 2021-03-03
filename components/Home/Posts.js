import Post from './Post';
import styles from '../../styles/LatestPosts.module.css';
import Link from 'next/link';

const Posts = ({ posts }) => {
    return (
        <section className={styles.latestPosts}>

            <span className={styles.watermark}>Posts</span>

            <h1 className={styles.title}>Latest Posts</h1>

            <div className={styles.divider}>
                <div className={styles.dividerPart}></div>
                <div className={styles.dividerPart}></div>
                <div className={styles.dividerPart}></div>
            </div>

            <div className={styles.latestPostsGrid}>

                {posts.map(post => {
                    return <Post post={post} key={post.fileName} />
                })}

            </div>

            <Link href="/posts">
                <a className={styles.viewAllLink}>View All</a>
            </Link>
            
        </section>
    )
}

export default Posts;