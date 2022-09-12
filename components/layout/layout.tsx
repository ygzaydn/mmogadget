import Head from "next/head";
import { Menu } from "../";

interface ILayout {
    children: JSX.Element;
}

const Layout = ({ children }: ILayout) => {
    return (
        <>
            <Head>
                <title>MMO Gadget</title>
                <meta
                    name="description"
                    content="MMO Gadget helps you to find free MMO games"
                />
            </Head>
            <main>
                <Menu />
                {children}
            </main>
        </>
    );
};

export default Layout;
