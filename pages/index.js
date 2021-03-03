import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import marked from "marked";
import Header from '../components/Home/Header'
import Posts from "../components/Home/Posts";

export default function Home({ posts }) {
  return (
    <>
      <Head>
          <title>DevRocket - Web Development Blog</title>
      </Head>
      <Header />
      <Posts posts={posts} />
    </>
  )
}

export async function getStaticProps() {
  const files = fs.readdirSync("posts");

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