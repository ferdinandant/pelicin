import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';

import { INDEX_DOM_ID } from '@pelicin/layout';

export default function ContentIndex() {
  return (
    <>
      <ScrollableAnchor id={INDEX_DOM_ID}>
        <main>
          <section>
            <h2>Web</h2>
            <p>
              dsfhdjs fhjs <a href="#">dsfdsf</a> fdgdfhds kfjhd ksjdhf.
            </p>
            <ul>
              <li>
                <a href="#">CSS</a>
              </li>
              <li>
                <a href="#">CSS</a>
              </li>
              <li>
                <a href="#">CSS</a>
              </li>
            </ul>
          </section>

          <section>
            <h2>Web</h2>
            <ul>
              <li>
                <a href="#">CSS</a>
              </li>
              <li>
                <a href="#">CSS</a>
              </li>
              <li>
                <a href="#">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make a type specimen
                  book. It has survived not only five centuries, but also the leap into electronic
                  typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                  with desktop publishing software like Aldus PageMaker including versions of Lorem
                  Ipsum.
                </a>
              </li>
            </ul>
          </section>
        </main>
      </ScrollableAnchor>

      <style jsx>{`
        main {
          width: 100%;
          padding: var(--spacing-xxl) var(--spacing-xl);
        }
        section {
          max-width: 640px;
          margin: auto;
          margin-top: var(--spacing-xl);
        }
        section:first-child {
          margin-top: 0;
        }

        /* Header */
        section h2 {
          margin-left: -10px;
          padding-left: 10px;
          font-weight: 700;
          font-size: var(--font-size-title-2);
          color: var(--color-yellow-4);
          border-bottom: 2px solid var(--color-yellow-4);
          margin-bottom: var(--spacing-ms);
        }
        section a {
          color: var(--color-blue-5);
          text-decoration: none;
        }
        section a:hover {
          color: var(--color-blue-4);
          text-decoration: none;
        }

        section ul {
          list-style: disc outside;
          margin-top: var(--spacing-s);
        }
        section li {
          margin-top: var(--spacing-xs);
          margin-left: var(--spacing-ml);
          padding-left: var(--spacing-s);
        }
        section p {
          margin-top: var(--spacing-s);
          color: var(--color-gray-6);
        }
        section p:first-child,
        section ul:first-child {
          margin-top: 0;
        }
      `}</style>
    </>
  );
}
