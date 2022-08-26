import type { AppProps } from "next/app";
import { wrapper, store } from "../redux/store";
import { Provider } from "react-redux";

import "../styles/main.scss";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        </>
    );
}

export default wrapper.withRedux(MyApp);
