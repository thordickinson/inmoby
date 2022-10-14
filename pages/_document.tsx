import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="keywords"
          content="advanced custom search, agency, agent, business, clean, 
corporate, directory, google maps, homes, idx agent, listing properties, membership packages, property, real broker, real estate, real estate agent, real estate agency, realtor"
        />
        <meta
          name="description"
          content="FindHouse - Real Estate HTML Template"
        />
        <meta name="CreativeLayers" content="ATFN" />
        <link rel="stylesheet" href="css/bootstrap.min.css" />
        <link rel="stylesheet" href="css/style.css" />
        <link rel="stylesheet" href="css/responsive.css" />

        <link
          href="/images/favicon.ico"
          sizes="128x128"
          rel="shortcut icon"
          type="image/x-icon"
        />
        <link href="/images/favicon.ico" sizes="128x128" rel="shortcut icon" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
