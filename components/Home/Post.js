import Link from 'next/link';
import styles from '../../styles/LatestPosts.module.css';

const Post = ({ post }) => {
    return (
        <div className={styles.post}>
            <img src={`/thumbnails/${post.data.image}`} className={styles.postImg} />
            <h2 className={styles.postTitle}>{post.data.title}</h2>
            <p className={styles.postDesc}>{post.data.description}</p>
            <Link href={`posts/${post.fileName.replace(".md", "")}`}>
                <a className={styles.postBtn}>View Post</a>
            </Link>
        </div>
    )
}

export default Post;