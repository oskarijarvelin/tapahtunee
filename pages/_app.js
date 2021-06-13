import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';
import '../styles.css';

export default function MyApp(props) {
  const { Component, pageProps } = props;

  let themeColor = '#223388';

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.png" />
        <link rel="shortcut icon" href="/favicon.png" />
        <meta name="theme-color" content={themeColor} />
        <meta name="format-detection" content="telephone=no" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@JarvelinOskari" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Oskari Järvelin" />

        <meta name="application-name" content="Oskari Järvelin" />
        <meta name="apple-mobile-web-app-title" content="Oskari Järvelin" />

        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content={themeColor} />
        <meta name="msapplication-tap-highlight" content="no" />
        
        <link rel="apple-touch-icon" href="/icons/with-bg/favicon_bg_x192.png" />

        <link rel="icon" type="image/png" sizes="32x32" href="/icons/with-bg/favicon_bg_x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/with-bg/favicon_bg_x16.png" />
        <link rel="mask-icon" href="/favicon.svg" color={themeColor} />
        
        <link rel="apple-touch-startup-image" href="/favicon.png" sizes="2048x2732" />
        <link rel="apple-touch-startup-image" href="/favicon.png" sizes="1668x2224" />
        <link rel="apple-touch-startup-image" href="/favicon.png" sizes="1536x2048" />
        <link rel="apple-touch-startup-image" href="/favicon.png" sizes="1125x2436" />
        <link rel="apple-touch-startup-image" href="/favicon.png" sizes="1242x2208" />
        <link rel="apple-touch-startup-image" href="/favicon.png" sizes="750x1334" />
        <link rel="apple-touch-startup-image" href="/favicon.png" sizes="640x1136" />

        <meta name="robots" content="noindex"></meta>

      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};