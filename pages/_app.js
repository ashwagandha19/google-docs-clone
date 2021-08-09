import 'tailwindcss/tailwind.css';
import "@material-tailwind/react/tailwind.css";
import Head from 'next/head';
import { Provider } from "next-auth/client";
import '/styles.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Head>

      {/* Every component that gets rendered in our app gets access to the session */}
      <Provider session={pageProps.session}>
          <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default MyApp
