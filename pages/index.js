import Head from "next/head";
import Link from "next/link";

import Box from "../components/box";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home Page</title>
      </Head>
      <Box />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Go to{" "}
          <Link href="/image">
            <a>image</a>
          </Link>
        </h1>
        <h1 className={styles.title}>
          Go to{" "}
          <Link href="/linaria">
            <a>linaria</a>
          </Link>
        </h1>
      </main>
    </div>
  );
}
