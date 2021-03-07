import Link from 'next/link';
import styles from '../../styles/LatestPosts.module.css';

export default function Post({ post }) {
    return (
        <div className={styles.post}>
            <img src={`/thumbnails/${post.data.image}`} className={styles.postImg} />
            <h2 className={styles.postTitle}>{post.data.title}</h2>
            <p className={styles.postDesc}>{post.data.description}</p>
            <Link href={`post/${post.fileName.replace(".md", "")}`}>
                <a className={styles.postBtn}>View Post</a>
            </Link>
        </div>
    )
}