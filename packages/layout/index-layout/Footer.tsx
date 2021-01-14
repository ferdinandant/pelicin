import React from 'react';
import { CenteredContainer } from '@pelicin/layout';

export default function Footer() {
  return (
    <>
      <footer>
        <CenteredContainer>
          <div className="footerContent">
            <div className="author">Ferdinand Antonius (2021)</div>
            <div className="links">
              <span>
                <a href="https://github.com/FerdinandAnt/pelicin">GitHub</a>
              </span>
              <span>
                <a href="#">Attribution</a>
              </span>
            </div>
          </div>
        </CenteredContainer>
      </footer>

      <style jsx>{`
        .footerContent {
          margin-top: var(--spacing-m);
          margin-bottom: var(--spacing-xl);
          font-size: var(--font-size-tiny);
          color: var(--color-gray-2);
          justify-content: center;
          display: flex;
        }
        .footerContent span::before {
          margin-left: var(--spacing-s);
          content: '·';
          margin-right: var(--spacing-s);
        }
        a {
          color: var(--color-blue-2);
        }
      `}</style>
    </>
  );
}
