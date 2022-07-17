import React from "react";
import Head from "next/head";

import { globals } from "../components/main";

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <title>My page</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Component className={globals} {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;
