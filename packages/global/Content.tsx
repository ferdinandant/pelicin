import React from 'react';
import IndexSidebar from './IndexSidebar';

type Props = {
  children: React.ReactNode;
};

export default function MainContainer(props: Props) {
  return (
    <>
      <main>
        <div id="content">{props.children}</div>
        {/* <div id="content">ffsdfsdsfsdf</div> */}
        <aside id="sideIndex">
          <IndexSidebar />
        </aside>
      </main>

      <style jsx>{`
        main {
          width: 100%;
          display: flex;
          flex-direction: row;
        }
        #content {
          padding: 24px;
          max-width: 800px;
          margin: 0 auto;
        }
        #sideIndex {
          width: 320px;
        }
      `}</style>
    </>
  );
}
