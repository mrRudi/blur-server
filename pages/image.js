import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "../components/image";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Image Page</title>
      </Head>
      <Image />
    </div>
  );
}
