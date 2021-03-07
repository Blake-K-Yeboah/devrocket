// Import Head
import Head from "next/head";

// Import Necessary Modules
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";

// Import Components
import Header from '../components/Home/Header'
import LatestPosts from "../components/Home/Posts";
import AboutSection from "../components/Home/AboutSection";
import Footer from "../components/layout/Footer";

export default function Home({ posts }) {
  return (
    <>
      <Head>
          <title>DevRocket - Web Development Blog</title>
      </Head>
      <Header />
      <LatestPosts posts={posts} />
      <AboutSection />
      <Footer />
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