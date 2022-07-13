import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    static async getinitialProps(ctx) {
        const initialProps = await Document.getinitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html lang="de" >
                <Head>
                    <meta name="google-site-verification" content="J9EU5D9PauIJxSkLGg4TdE9u38VO_n34-o5cl9CkO74" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }

}

export default MyDocument;
