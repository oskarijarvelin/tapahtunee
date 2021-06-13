import React from 'react';
import Head from '../components/Head';
import AppBar from '../components/AppBar';
import Footer from '../components/Footer';

export default function Layout({title, desc, url, img, children}) {
    return (
        <>
            <Head title={title} desc={desc} url={url} img={img} />

            {children}

            <AppBar />

            <Footer />
        </>
    );
}