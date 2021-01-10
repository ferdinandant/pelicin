import React from 'react';
import { Typist } from '@pelicin/layout';

export default function Hero() {
  return (
    <>
      <div className="hero">
        <div className="heroContent">
          <h1>pelicin!</h1>
          <h2>Ferdinand's study notes designed for people with</h2>
          <Typist />.
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
          min-height: 360px;
          align-items: center;
          justify-content: center;
        }
        .heroContent {
          flex-basis: 800px;
          padding: var(--spacing-m) var(--spacing-l);
          padding-top: var(--spacing-s);
          color: var(--color-blue-1);
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

        .ctaContainer {
          margin-top: var(--spacing-xxl);
        }
        a {
          display: inline-block;
          padding: var(--spacing-s) var(--spacing-l);
          border-radius: var(--border-radius-rounded);
          background-color: var(--color-gray-0);
          color: var(--color-blue-5);
          text-decoration: none;
          font-size: var(--font-size-title-3);
          font-weight: 600;
        }
      `}</style>
    </>
  );
}
