// Import Head
import Head from "next/head";

// Import Necessary Modules
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";

// Import Components
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import BackgroundSection from '../../components/Post/BackgroundSection';

// Import Styles
import styles from '../../styles/Post.module.css';

export default function PostPage({ htmlString, data }) {
    return (
        <>
            <Head>
                <title>{data.title}</title>
            </Head>
            <Navbar page="posts" />
            <BackgroundSection />
            <div className={styles.postContainer}>
                <div className={styles.placeholder}></div>
                <div className={styles.placeholder}></div>
            </div>
            <Footer />
        </>
    )
}

export const getStaticPaths = async () => {
    const files = fs.readdirSync("posts");
    console.log("files: ", files);
    const paths = files.map(filename => ({
      params: {
        postName: filename.replace(".md", "")
      }
    }));
    console.log("paths: ", paths);
  
    return {
      paths,
      fallback: false
    };
};
  
export const getStaticProps = async ({ params: { postName } }) => {
    const markdownWithMetadata = fs
      .readFileSync(path.join("posts", postName + ".md"))
      .toString();
  
    const parsedMarkdown = matter(markdownWithMetadata);
  
    const htmlString = marked(parsedMarkdown.content);
  
    return {
      props: {
        htmlString,
        data: parsedMarkdown.data
      }
    };
  };
  