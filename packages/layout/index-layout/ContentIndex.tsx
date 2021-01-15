import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';

import { TopicGroups } from '@pelicin/config';
import { INDEX_DOM_ID } from '@pelicin/layout';

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
  return (
    <>
      <ScrollableAnchor id={INDEX_DOM_ID}>
        <main>
          {groups.map((groupInfo, index) => {
            const { groupTitle, groupDescription, topics } = groupInfo;
            return (
              <section key={index}>
                <h2>{groupTitle}</h2>
                <div className="description">{groupDescription}</div>
                <ul>
                  {topics.map((topic, index) => {
                    const {
                      title: topicTitle,
                      path: topicPath,
                      description: topicDescription,
                    } = topic;
                    const topicDescriptionNode = topicDescription && (
                      <span className="topicDescription"> &mdash; {topicDescription}</span>
                    );
                    return (
                      <li key={index}>
                        <a href={topicPath}>{topicTitle}</a>
                        {topicDescriptionNode}
                      </li>
                    );
                  })}
                </ul>
              </section>
            );
          })}
        </main>
      </ScrollableAnchor>

      <style jsx>{`
        main {
          border-top: var(--spacing-s) solid var(--color-gray-2);
          width: 100%;
          padding: var(--spacing-xxl) var(--spacing-xl);
          padding-bottom: var(--spacing-xxl);
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
          color: var(--color-blue-7);
          border-bottom: 2px solid var(--color-blue-7);
          padding-bottom: var(--spacing-xs);
          margin-bottom: var(--spacing-ms);
        }

        /* Topic item */
        section .description {
          margin-top: var(--spacing-s);
          color: var(--color-gray-6);
        }
        section p:first-child,
        section ul:first-child {
          margin-top: 0;
        }
        .topicDescription {
          color: var(--color-gray-5);
        }
      `}</style>
    </>
  );
}
