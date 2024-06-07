// pages/_app.js
import React from 'react';
import App from 'next/app';
import Router from 'next/router';
import NProgress from 'nprogress'; // Import NProgress library for page loading indicator
import 'nprogress/nprogress.css'; // Import NProgress styles

import Layout from './Layout'; // Import your layout component

// Event listener to start NProgress when a route changes
Router.events.on('routeChangeStart', () => {
  NProgress.start();
});

// Event listener to stop NProgress when a route change is complete
Router.events.on('routeChangeComplete', () => {
  NProgress.done();
});

// Event listener to stop NProgress when a route change error occurs
Router.events.on('routeChangeError', () => {
  NProgress.done();
});

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  }
}

export default MyApp;
