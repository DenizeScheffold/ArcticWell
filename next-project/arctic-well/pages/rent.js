import Head from "next/head";
import React from "react";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Rent-a-box</title>
      </Head>
      <div>
        <h1>Rent-a-box</h1>
      </div>
    </Layout>
  );
}
