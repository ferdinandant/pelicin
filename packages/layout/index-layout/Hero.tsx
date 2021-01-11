import React from 'react';
import { Typist, SMALLER_HERO_TEXT_BREAKPOINT_PX } from '@pelicin/layout';

export default function Hero() {
  return (
    <>
      <div className="hero">
        <div className="heroContent">
          <h1>pelicin!</h1>
          <h2>Ferdinand's study notes for people with</h2>
          <Typist />
          <span className="asterisk">*</span>
          <h3>(*) Only for comedic purpose ;)</h3>
          <div className="ctaContainer">
            <a href="#">Explore</a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero {
          height: 50vh;
          display: flex;
          background-image: linear-gradient(120deg, var(--color-blue-5), var(--color-purple-6));
          background-blend-mode: multiply;
          background-size: cover;
          background-position: center;
          min-height: 400px;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          box-shadow: inset 0 var(--spacing-s) var(--spacing-m) var(--color-blue-8);
        }
        .heroContent {
          flex-basis: 800px;
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
          color: var(--color-gray-0);
        }
        h2 {
          font-size: var(--font-size-title-2);
          text-shadow: 0 0 var(--spacing-s) var(--color-grey-9);
        }
        h3 {
          padding-top: var(--spacing-m);
          font-size: var(--font-size-tiny);
          font-style: italic;
          letter-spacing: 0.5px;
          color: var(--color-teal-2);
        }
        .asterisk {
          color: var(--color-teal-2);
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
        }

        @media (max-width: ${SMALLER_HERO_TEXT_BREAKPOINT_PX}px) {
          h1 {
            font-size: var(--font-size-title-1);
          }
          h2 {
            font-size: var(--font-size-title-3);
          }
          a {
            font-size: var(--font-size-title-3);
          }

          .hero {
            min-height: 300px;
          }
          .ctaContainer {
            margin-top: var(--spacing-xl);
          }
          .heroContent {
            padding: var(--spacing-m) var(--spacing-xl);
          }
        }
      `}</style>
    </>
  );
}
