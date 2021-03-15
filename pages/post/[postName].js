// Import Head
import Head from "next/head";

// Import Necessary Modules
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";
import hljs from 'highlight.js';

// Import Components
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import BackgroundSection from '../../components/Post/BackgroundSection';
import Post from '../../components/Post/Post';
import Author from "../../components/Post/Author";

// Import Styles
import styles from '../../styles/Post.module.css';
import 'highlight.js/styles/night-owl.css';

export default function PostPage({ content, data }) {
  
  const htmlString = marked(content , { langPrefix: "hljs language-", highlight: function(code) { return hljs.highlightAuto(code, ["html", "javascript"]).value; }});

    return (
        <>
            <Head>
                <title>{data.title}</title>
            </Head>
            <Navbar page="nope" />
            <BackgroundSection />
            <div className={styles.postContainer}>
                <Post data={data} htmlString={htmlString} />
                <Author data={data} />
            </div>
            <Footer />
        </>
    )
}

export const getStaticPaths = async () => {
    const files = fs.readdirSync("posts");

    const paths = files.map(filename => ({
      params: {
        postName: filename.replace(".md", "")
      }
    }));
  
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
  
    return {
      props: {
        content: parsedMarkdown.content,
        data: parsedMarkdown.data
      }
    };
};
  