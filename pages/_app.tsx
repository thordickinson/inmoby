import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Amplify, Auth } from "aws-amplify";
import awsconfig from "../src/aws-exports";
import "antd/dist/antd.css";
import { QueryClient, QueryClientProvider } from "react-query";
Amplify.configure(awsconfig);

const queryClient = new QueryClient();

/* https://houzez.co/ */
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}


export default MyApp
