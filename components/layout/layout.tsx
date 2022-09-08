import Head from "next/head";

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
            <main>{children}</main>
        </>
    );
};

export default Layout;
