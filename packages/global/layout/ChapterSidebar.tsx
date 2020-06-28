export function ChapterSidebar() {
  const sidebarContent = renderSidebarContent();

  return (
    <>
      <aside>
        <div id="chapter-sidebar-container">{sidebarContent}</div>
      </aside>

      <style jsx>{`
        aside {
          flex: 0 0 var(--sidebar-width);
          background-color: #f5f5f5;
        }

        #chapter-sidebar-container {
          position: sticky;
          top: var(--header-height);
        }
      `}</style>
    </>
  );
}

function renderSidebarContent() {
  return 'sdfksdkjfsdfj';
}
