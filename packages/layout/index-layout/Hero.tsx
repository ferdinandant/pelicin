import React from 'react';
import { SMALLER_HERO_TEXT_BREAKPOINT_PX, INDEX_DOM_ID } from '@pelicin/layout';

export default function Hero() {
  return (
    <>
      <div className="hero">
        <div className="heroContent">
          <h1>
            <span className="logo">_(:3」∠)_</span>
            <br />
            <span className="title">pelicin!</span>
          </h1>
          <p className="description">
            Welcome to Ferdi's study notes and cheat sheets! (Correctness and recency not
            guaranteed) ;)
          </p>
          <div className="linksContainer">
            <a className="cta" href={`#${INDEX_DOM_ID}`}>
              Explore
            </a>{' '}
            <a className="secondary" href={`https://github.com/FerdinandAnt/pelicin`}>
              GitHub
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero {
          height: 75vh;
          min-height: 500px;
          display: flex;
          background-image: linear-gradient(to bottom, #000000cc, #000000bb),
            url('/site/ben-o-bro-wpU4veNGnHg-unsplash.jpg');
          box-shadow: 0 var(--spacing-l) 100px #00000055 inset;
          background-size: cover;
          background-position: center;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }
        .heroContent {
          flex-basis: 640px;
          box-sizing: content-box;
          padding: var(--spacing-l) var(--spacing-xxl);
          z-index: 2;
        }

        h1 {
          font-size: var(--font-size-hero);
          font-weight: 600;
          padding-bottom: 0;
          margin-bottom: var(--spacing-l);
          border-bottom: none;
          color: var(--color-gray-0);
          text-align: center;
          line-height: 1.2;
        }
        .logo {
          color: var(--color-gray-2);
          opacity: 0.6;
        }
        .title {
          font-size: 64pt;
        }
        .description {
          font-size: var(--font-size-title-2);
          color: var(--color-gray-2);
          text-align: center;
        }

        .linksContainer {
          margin-top: var(--spacing-xxl);
          text-align: center;
        }
        .linksContainer a {
          display: inline-block;
          margin-left: var(--spacing-m);
          margin-right: var(--spacing-m);
          font-size: var(--font-size-title-2);
          font-weight: 600;
        }
        a.cta {
          display: inline-block;
          padding: var(--spacing-s) var(--spacing-xxl);
          border-radius: var(--border-radius-rounded);
          background-color: var(--color-blue-5);
          color: var(--color-gray-0);
          text-decoration: none;
          transition: box-shadow 0.2s;
        }
        a.cta:hover {
          box-shadow: 0 2px var(--spacing-l) var(--color-blue-5);
          text-decoration: none;
        }
        a.secondary {
          color: var(--color-blue-0);
          padding: var(--spacing-s);
        }

        @media (max-width: ${SMALLER_HERO_TEXT_BREAKPOINT_PX}px) {
          h1 {
            font-size: var(--font-size-title-1);
          }
          .description {
            font-size: var(--font-size-title-3);
          }
          .linksContainer a {
            font-size: var(--font-size-title-3);
          }
          hr {
            border-bottom: 2px solid var(--color-blue-2);
          }

          .hero {
            min-height: 360px;
          }
          .heroContent {
            padding: var(--spacing-m) var(--spacing-xl);
          }
          .linksContainer {
            margin-top: var(--spacing-xl);
          }
        }
      `}</style>
    </>
  );
}
