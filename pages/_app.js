import "../styles/main.css";
import dynamic from "next/dynamic";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dmsans",
});

const GlobalModals = dynamic(() =>
  import("../components/global-components/global-modal"),
);

function MyApp({ Component, pageProps }) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-dmsans: ${dmSans.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
      <GlobalModals />
    </>
  );
}

export default MyApp;
