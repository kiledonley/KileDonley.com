import "../styles/main.css";
import dynamic from "next/dynamic";

const GlobalModals = dynamic(() =>
  import("../components/global-components/global-modal"),
);

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalModals />
    </>
  );
}

export default MyApp;
