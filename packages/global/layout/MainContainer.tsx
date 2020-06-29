import React from 'react';
import { SectionSidebar } from './SectionSidebar';

type Props = {
  children: React.ReactNode;
};

export function MainContainer(props: Props) {
  return (
    <>
      <main>
        <article>{props.children}</article>

        <aside>
          <SectionSidebar />
        </aside>
      </main>

      <style jsx>{`
        main {
          width: 100%;
          display: flex;
          flex-direction: row;
        }
        article {
          padding: 24px;
          max-width: 800px;
          flex: 0 1 800px;
          margin: 0 auto;
        }
        aside {
          flex: 0 1 var(--sidebar-width);
        }
      `}</style>
    </>
  );
}
