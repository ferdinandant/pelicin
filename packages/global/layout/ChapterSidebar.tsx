export function ChapterSidebar() {
  const sidebarContent = renderSidebarContent();

  return (
    <>
      <aside>{sidebarContent}</aside>

      <style jsx>{`
        aside {
          height: calc(100vh - 48px);
          flex: 0 0 300px;
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

type SidebarItem = { title: string; link: string } | { title: string; children: SidebarItem[] };

function renderSidebarItems() {
  return 'a';
}

function renderSidebarContent() {
  const renderResult = [];
  const sections = [
    {
      title: 'Basics',
      children: [
        { title: 'Hahaha1', link: '#' },
        { title: 'Hahaha2', link: '#' },
        { title: 'Hahaha3', link: '#' },
      ],
    },
  ];

  // sections.forEach((section, index) => {
  //   const { title, children } = section;
  //   const childrenNodes = renderSectionChildren();
  //   renderResult.push(
  //     <li key={title + index}>
  //       {title}
  //       {childrenNodes}
  //     </li>
  //   );
  // });

  return (
    <nav>
      <ul>{renderResult}</ul>
      <style jsx>{`
        .section {
          margin-bottom: 24px;
        }
        .sectionTitle {
          display: block;
          padding: 4px 8px;
          background: linear-gradient(45deg, #563d7c22, #9f4a8422);
          border-radius: 4px;
          font-variant-caps: small-caps;
        }
      `}</style>
    </nav>
  );
}
