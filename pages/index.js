import Head from "next/head";
import styles from "../styles/Home.module.css";
import FrontImg from "./components/frontImg";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>JMM Challenge</title>
        <meta name="description" content="Developed by Shoaib Badshah" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Navbar />
        <FrontImg />
      </main>
    </div>
  );
}
