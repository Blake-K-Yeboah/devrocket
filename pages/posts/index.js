// Import Head
import Head from 'next/head';

// Import Components
import Navbar from '../../components/layout/Navbar';

export default function Posts() {

    return (
        <>
            <Head>
                <title>DevRocket - Posts</title>
            </Head>
            <Navbar page="posts" />
        </>
    )

}