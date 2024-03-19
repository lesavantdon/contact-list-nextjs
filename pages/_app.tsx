
import '../styles/globals.css'; // Import global styles
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles
import React from 'react';
import { useRouter } from 'next/router';
import NProgress from 'nprogress'; // Import NProgress library for page loading indicator
import 'nprogress/nprogress.css'; // Import NProgress styles
import Layout from '@/components/Layout'; // Import your layout component

// Event listener to start NProgress when a route changes
Router.events.on('routeChangeStart', () => {
  NProgress.start();
});

// Event listener to end NProgress when a route changes
Router.events.on('routeChangeComplete', () => {
  NProgress.done();
});

// Event listener to handle errors during route changes
Router.events.on('routeChangeError', () => {
  NProgress.done();
});

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <Layout>
      {/* Render the component for each page */}
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;