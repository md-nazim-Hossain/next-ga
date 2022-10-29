import React from "react";
import Head from "next/head";
import * as ga from "../libs/GooglePageViews";

type Props = {};

const about = (props: Props) => {
  const addToCarts = () => {
    ga.event({
      action: "add_carts",
      category: "ecommerce",
      label: "Item Added",
      value: "Playing Card",
    });
  };
  return (
    <div>
      <Head>
        <title>about</title>
      </Head>
      <h1>About Pages</h1>
      <a href="https://www.google.com">Go Google</a>
      <button onClick={addToCarts}>Add price</button>
    </div>
  );
};

export default about;
