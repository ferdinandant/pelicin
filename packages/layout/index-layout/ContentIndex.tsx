import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';

import { INDEX_DOM_ID } from '@pelicin/layout';
import { GroupList, TopicConfigMap } from '@pelicin/config';

export default function ContentIndex() {
  return (
    <>
      <ScrollableAnchor id={INDEX_DOM_ID}>
        <main>
          {GroupList.map((groupInfo, index) => {
            const { groupTitle, groupDescription, topics } = groupInfo;
            return (
              <section key={index}>
                <h2>{groupTitle}</h2>
                <div className="description">{groupDescription}</div>
                <ul>
                  {topics.map((topic, index) => {
                    const topicInfo = TopicConfigMap[topic];
                    const { topicTitle } = topicInfo;
                    return (
                      <li>
                        <a href="#">{topicTitle}</a>
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
        section .description {
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
