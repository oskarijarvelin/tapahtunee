import Head from 'next/head'

export default function MyHead({title, desc, url, img}) {
    let baseUrl = "https://oskarijarvelin.fi";
    return (
        <Head>
            <title>{title} - Oskari Järvelin</title>
            <meta name="description" content={desc} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={desc} />
            <meta name="twitter:url" content={baseUrl + url} />
            <meta name="twitter:image" content={baseUrl + img} />
            <meta property="og:url" content={baseUrl + url} />
            <meta property="og:image" content={baseUrl + img} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={desc} />
        </Head>
    );
}