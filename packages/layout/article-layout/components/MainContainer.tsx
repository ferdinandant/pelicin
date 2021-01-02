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

      <style jsx>{style}</style>
    </>
  );
}
