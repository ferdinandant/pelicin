import React from 'react';
import { TOCSidebar } from '@pelicin/layout';
import style from './MainContainer.css';

type Props = {
  children: React.ReactNode;
};

export default function MainContainer(props: Props) {
  return (
    <>
      <main>
        <article>{props.children}</article>
        <div className="sectionSidebarContainer">
          <TOCSidebar />
        </div>
      </main>

      <style jsx>{`
        main {
          width: 100%;
          display: flex;
          flex-direction: row;
        }
        article {
          padding: 32px 48px;
          max-width: 800px;
          flex: 0 1 800px;
          margin: 0 auto;
        }
        .sectionSidebarContainer {
          flex: 0 1 var(--sidebar-width);
        }
        @media (max-width: 1280px) {
          .sectionSidebarContainer {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
