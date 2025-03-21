import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" />
                <link rel="stylesheet" href="./css/globals.css" />
            </Head>
            <body>
                <div className="container">
                    <Main />
                </div>
                <NextScript />
            </body>
        </Html>
    );
}
