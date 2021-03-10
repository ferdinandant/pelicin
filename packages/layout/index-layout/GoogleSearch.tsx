import React from 'react';

export default function GoogleSearch() {
  return (
    <>
      <div className="searchContainer">
        {/* The class name must exactly be "gcse-search" */}
        {/* Using styled-jsx may modify children class name, so we must do it like this */}
        <div dangerouslySetInnerHTML={{ __html: '<div class="gcse-search"></div>' }} />
      </div>

      <style jsx>{`
        /* Container */
        .searchContainer {
          max-width: calc(640px + 20px);
          margin: auto;
          border-radius: var(--border-radius-normal);
          border: 1px solid var(--color-gray-1);
          background-color: white;
          box-shadow: 0 var(--spacing-s) var(--spacing-m) var(--color-gray-1);
        }

        /* Search form */
        .searchContainer :global(.gsc-control-cse) {
          padding: 0;
          background: none;
          border: none;
        }
        .searchContainer :global(form),
        .searchContainer :global(table) {
          margin: 0;
        }
        .searchContainer :global(td) {
          border: none;
        }
        /* "x" reset button */
        .searchContainer :global(td > div > a) {
          display: flex;
        }
      `}</style>
    </>
  );
}
