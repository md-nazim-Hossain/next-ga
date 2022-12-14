import React from "react";
import Head from "next/head";
import Link from "next/link";

type Props = {};

const contact = (props: Props) => {
  return (
    <div>
      <Head>
        <title>contact</title>
      </Head>
      <h1>Contact Pages</h1>
      <Link href={"/about"}>Back About</Link>
      <Link href={"/"}>Back Home</Link>
    </div>
  );
};

export default contact;
