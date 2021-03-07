// Import Head
import Head from 'next/head';

// Import Necessary Modules
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";

// Import Components
import Navbar from '../../components/layout/Navbar';
import PostsContainer from '../../components/Posts/PostsContainer';
import Footer from '../../components/layout/Footer';

export default function Posts({ posts }) {

    return (
        <>
            <Head>
                <title>DevRocket - Posts</title>
            </Head>
            <Navbar page="posts" />
            <PostsContainer posts={posts} />
            <Footer />
        </>
    )

}

export async function getStaticProps() {
    const dir = "posts/";
    const files = fs.readdirSync(dir);

    // Sort Files In Order
    files.sort((a, b) => {
        return fs.statSync(dir + b).mtime.getTime() - fs.statSync(dir + a).mtime.getTime();
    });
  
    const posts = files.map(fileName => {
  
      const markdownWithMetadata = fs.readFileSync(path.join("posts", fileName)).toString();
      
      const parsedMarkdown = matter(markdownWithMetadata);
      const htmlString = marked(parsedMarkdown.content);
  
      return {
        htmlString,
        data: parsedMarkdown.data,
        fileName
      }
  
    });
  
    return {
        props: {
          posts
        }
    };
  
  }