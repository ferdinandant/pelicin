export function ChapterSidebar() {
  const sidebarContent = renderSidebarContent();

  return (
    <>
      <aside>{sidebarContent}</aside>

      <style jsx>{`
        aside {
          position: fixed;
          top: var(--header-height);
          height: calc(100vh - var(--header-height));
          width: var(--sidebar-width);
          box-sizing: border-box;
          flex: 0 0 var(--sidebar-width);
          padding: 16px 24px;
          background-color: #f5f5f5;
        }
        a {
          text-decoration: none;
          color: grey;
        }
      `}</style>
    </>
  );
}

function renderSidebarContent() {
  return 'sdfksdkjfsdfj';
}
