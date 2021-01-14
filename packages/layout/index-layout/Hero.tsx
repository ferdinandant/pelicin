import React from 'react';
import { SMALLER_HERO_TEXT_BREAKPOINT_PX, INDEX_DOM_ID } from '@pelicin/layout';

export default function Hero() {
  return (
    <>
      <div className="hero">
        <div className="heroContent">
          <h1>pelicin!</h1>
          <p className="description">
            Ferdinand's study notes for average people
            <br />
            <em>... like me! :)</em>
          </p>
          <div className="ctaContainer">
            <a href={`#${INDEX_DOM_ID}`}>Explore</a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero {
          height: 60vh;
          display: flex;
          background-image: url('/site/skulls.png'),
            linear-gradient(120deg, var(--color-blue-5), var(--color-purple-6));
          background-blend-mode: multiply;
          background-size: cover;
          background-position: center;
          min-height: 400px;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }
        .heroContent {
          flex-basis: 640px;
          box-sizing: content-box;
          padding: var(--spacing-m) var(--spacing-xxl);
          padding-top: var(--spacing-s);
          color: var(--color-blue-1);
          z-index: 2;
        }

        h1 {
          font-size: var(--font-size-hero);
          font-weight: 600;
          margin-bottom: var(--spacing-m);
          text-shadow: 0 0 var(--spacing-s) var(--color-grey-9);
          border-bottom: none;
          color: var(--color-gray-0);
        }
        .description {
          font-size: var(--font-size-title-2);
          text-shadow: 0 0 var(--spacing-s) var(--color-grey-9);
        }

        .ctaContainer {
          margin-top: var(--spacing-xxl);
        }
        a {
          display: inline-block;
          padding: var(--spacing-s) var(--spacing-xl);
          border-radius: var(--border-radius-rounded);
          background-color: var(--color-gray-0);
          color: var(--color-blue-5);
          text-decoration: none;
          font-size: var(--font-size-title-2);
          font-weight: 600;
          transition: box-shadow 0.2s;
        }
        a:hover {
          box-shadow: 0 0 var(--spacing-m) var(--color-blue-0);
          text-decoration: none;
        }

        @media (max-width: ${SMALLER_HERO_TEXT_BREAKPOINT_PX}px) {
          h1 {
            font-size: var(--font-size-title-1);
          }
          .description {
            font-size: var(--font-size-title-3);
          }
          a {
            font-size: var(--font-size-title-3);
          }

          .hero {
            min-height: 300px;
          }
          .heroContent {
            padding: var(--spacing-m) var(--spacing-xl);
          }
          .ctaContainer {
            margin-top: var(--spacing-xl);
          }
        }
      `}</style>
    </>
  );
}
