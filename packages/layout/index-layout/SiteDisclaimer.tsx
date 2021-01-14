export default function SiteDisclaimer() {
  return (
    <>
      <div className="container">
        <div className="content">
          <p>
            <strong>A kind word of warning</strong> &mdash; I may not recheck my works, and although
            I do my best, my understanding about certain topics may be false.
          </p>
          <p>
            If you want to write feedback or make corrections, you can file a GitHub issue here:{' '}
            <a href={'https://github.com/FerdinandAnt/pelicin/issues'}>
              https://github.com/FerdinandAnt/pelicin/issues
            </a>
          </p>
        </div>
      </div>

      <style jsx>{`
        .container {
          width: 100%;
          padding: var(--spacing-xl) var(--spacing-xl);
          background-color: var(--color-gray-8);
          color: var(--color-gray-1);
          font-style: italic;
          box-shadow: inset 0 0 var(--spacing-xxl) var(--color-gray-9);
        }
        .content {
          max-width: 640px;
          margin: auto;
        }
        p {
          margin-top: var(--spacing-m);
        }
        p:first-child {
          margin-top: 0;
        }
        p:last-child {
          margin-bottom: 0;
        }
        a {
          color: var(--color-blue-3);
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
      `}</style>
    </>
  );
}
