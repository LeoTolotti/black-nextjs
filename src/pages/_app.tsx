import "bootstrap/dist/css/bootstrap.min.css";
import type { AppProps } from "next/app";
import { CartContextProvider } from "../hooks/UserCart";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartContextProvider>
      <Component {...pageProps} />
    </CartContextProvider>
  );
}

export default MyApp;
