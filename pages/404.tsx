import React from 'react';

export default function NotFoundPage() {
  return (
    <>
      <div className="container">
        <div className="item">
          <h1>{`(:3 っ)っ`}</h1>
          <h2>404 | Not Found</h2>
          <hr />
          <p>
            The page you're looking for
            <br /> does not exist, has not been created,
            <br /> or has been moved somewhere.
          </p>
          <p>
            <a href="/">Go back to home?</a>
          </p>
        </div>
      </div>

      <style jsx>{`
        .container {
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .item {
          text-align: center;
        }

        h1,
        h2 {
          border: none;
          margin: 0;
        }
        h1 {
          color: var(--color-gray-2);
          font-size: var(--font-size-hero);
        }
        h2 {
          color: var(--color-gray-8);
          font-size: var(--font-size-title-1);
        }

        hr {
          border-bottom: 1px solid var(--color-gray-2);
          margin: var(--spacing-l) calc(-1 * var(--spacing-l));
        }
      `}</style>
    </>
  );
}
