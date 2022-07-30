import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);

  return (
    <>
      <Head>
        <title>Chat</title>
        <meta name="description" content="Chat with your friends." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
};

export default Home;
