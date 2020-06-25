import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

const Nav = () => (
  <nav id='header' className='fixed w-full z-30 top-0 text-white'>
    <Head>
      <meta charSet='UTF-8' />
      <meta
        name='viewport'
        content='width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0'
      />
      <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
      <title>PWAGram</title>

      <link
        href='https://fonts.googleapis.com/css?family=Roboto:400,700'
        rel='stylesheet'
      />
      <link
        rel='stylesheet'
        href='https://fonts.googleapis.com/icon?family=Material+Icons'
      />
      <link
        rel='stylesheet'
        href='https://cdnjs.cloudflare.com/ajax/libs/material-design-lite/1.3.0/material.indigo-pink.min.css'
      />
      <link rel='manifest' href='/manifest.json' />
      <meta name='apple-mobile-web-app-capable' content='yes' />
      <meta name='apple-mobile-web-app-status-bar-style' content='black' />
      <meta name='apple-mobile-web-app-title' content='PWAGram' />
      <link
        rel='apple-touch-icon'
        href='../public/img/icons/apple-icon-57x57.png'
        sizes='57x57'
      />
      <link
        rel='apple-touch-icon'
        href='../public/img/icons/apple-icon-60x60.png'
        sizes='60x60'
      />
      <link
        rel='apple-touch-icon'
        href='../public/img/icons/apple-icon-72x72.png'
        sizes='72x72'
      />
      <link
        rel='apple-touch-icon'
        href='../public/img/icons/apple-icon-76x76.png'
        sizes='76x76'
      />
      <link
        rel='apple-touch-icon'
        href='../public/img/icons/apple-icon-114x114.png'
        sizes='114x114'
      />
      <link
        rel='apple-touch-icon'
        href='../public/img/icons/apple-icon-120x120.png'
        sizes='120x120'
      />
      <link
        rel='apple-touch-icon'
        href='../public/img/icons/apple-icon-144x144.png'
        sizes='144x144'
      />
      <link
        rel='apple-touch-icon'
        href='../public/img/icons/apple-icon-152x152.png'
        sizes='152x152'
      />
      <link
        rel='apple-touch-icon'
        href='../public/img/icons/apple-icon-180x180.png'
        sizes='180x180'
      />
      <meta
        name='msapplication-TileImage'
        content='../public/img/icons/app-icon-144x144.png'
      />
      <meta name='msapplication-TileColor' content='#fff' />
      <meta name='theme-color' content='#3f51b5' />
      <style jsx>
        {`
          .gradient {
            background: linear-gradient(90deg, #d53369 0%, #daae51 100%);
          }
        `}
      </style>
    </Head>
  </nav>
);

export default Nav;
