import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Bryta</title>
        <meta name="Bryta" content="'필모깨기'를 도와주는 서비스" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <div>Bryta</div>
      </body>
    </div>
  );
};

export default Home;
