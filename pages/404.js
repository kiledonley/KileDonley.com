import Head from "next/head";
import styles from "../styles/Home.module.css";

import DuckZone from "../components/page-components/404/duck.zone/index";

export default function ClickForDucks() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kile Donley</title>
        <link rel="icon" />
      </Head>
      <div className="text-white text-center select-none">
        <h1 className="text-3xl">
          Hmm, looks like this page is still under construction
        </h1>
        <h1 className="text-3xl">Please accept these ducks as an apology</h1>
        <br />
        <h2 className="text-xl">(Click for Ducks)</h2>
      </div>
      <DuckZone />
    </div>
  );
}
