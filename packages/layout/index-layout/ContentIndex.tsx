import React from 'react';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';

import { TopicGroups } from '@pelicin/config';
import { INDEX_DOM_ID, extractHashFromTitle } from '@pelicin/layout';

// ================================================================================
// TYPES/CONST
// ================================================================================

type Props = {
  groups: TopicGroups;
};

// ================================================================================
// MAIN
// ================================================================================

export default function ContentIndex(props: Props) {
  const { groups } = props;
  configureAnchors({ keepLastAnchorHash: true });

  return (
    <>
      <ScrollableAnchor id={INDEX_DOM_ID}>
        <main>
          {groups.map((groupInfo, index) => {
            const { groupTitle, groupDescription, sections } = groupInfo;
            const groupHash = extractHashFromTitle(groupTitle);
            return (
              <section key={`${index}-${groupTitle}`}>
                {/* Render group title */}
                <a className="hash" id={groupHash} />
                <h2>{groupTitle}</h2>
                <div className="description">{groupDescription}</div>
                {sections.map((section, index) => {
                  const { sectionTitle, sectionDescription, topics } = section;
                  return (
                    <React.Fragment key={`${index}-${sectionTitle}`}>
                      {/* Render section title */}
                      {sectionTitle && <h3 className="badge">{sectionTitle}</h3>}
                      {sectionDescription && <div className="description">{groupDescription}</div>}
                      <ul key={`${index}-${sectionTitle}`}>
                        {topics.map((topic, index) => {
                          const {
                            title: topicTitle,
                            path: topicPath,
                            description: topicDescription,
                          } = topic;
                          const topicHash = extractHashFromTitle(topicTitle);
                          const topicDescriptionNode = topicDescription && (
                            <span className="topicDescription"> &mdash; {topicDescription}</span>
                          );
                          return (
                            <li key={index}>
                              <a className="hash" id={topicHash} />
                              <a href={topicPath}>{topicTitle}</a>
                              {topicDescriptionNode}
                            </li>
                          );
                        })}
                      </ul>
                    </React.Fragment>
                  );
                })}
              </section>
            );
          })}
        </main>
      </ScrollableAnchor>

      <style jsx>{`
        main {
          width: 100%;
          padding: var(--spacing-xxl) var(--spacing-xl);
          padding-bottom: var(--spacing-xxl);
        }
        section {
          max-width: 640px;
          margin: auto;
          margin-top: var(--spacing-xl);
        }

        /* Header */
        section h2:first-of-type {
          margin-top: 0;
        }
        section h2 {
          margin-left: -10px;
          padding-left: 10px;
          font-weight: 700;
          font-size: var(--font-size-title-2);
          color: var(--color-blue-6);
          border-bottom: 2px solid var(--color-blue-6);
          padding-bottom: var(--spacing-xs);
          margin-bottom: var(--spacing-ms);
        }
        section h3 {
          display: inline-block;
          font-size: var(--font-size-title-3);
          margin-top: var(--spacing-s);
          margin-left: calc(-1 * var(--spacing-ms));
          margin-bottom: 0;
          background-color: var(--color-gray-1);
          color: var(--color-gray-6);
          padding: var(--spacing-xs) var(--spacing-ms);
          border-radius: var(--border-radius-normal);
        }

        /* Topic item */
        section .description {
          color: var(--color-gray-6);
        }
        section ul {
          margin: var(--spacing-s) 0;
        }
        section :global(p) {
          margin: var(--spacing-s) 0;
        }
        .topicDescription {
          color: var(--color-gray-5);
        }

        /* Hash */
        a.hash {
          position: relative;
          top: -2rem;
        }
      `}</style>
    </>
  );
}
