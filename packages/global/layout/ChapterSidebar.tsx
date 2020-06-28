export function ChapterSidebar() {
  const sidebarContent = renderSidebarContent();

  return (
    <>
      <aside>
        <div>{sidebarContent}</div>
      </aside>

      <style jsx>{`
        aside {
          flex: 0 0 var(--sidebar-width);
          background-color: #f5f5f5;
        }
        aside > div {
          position: sticky;
          top: var(--header-height);
          height: calc(100vh - var(--header-height));
          overflow-y: auto;
        }
      `}</style>
    </>
  );
}

function renderSidebarContent() {
  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eius ipsam, error ipsa
        molestiae unde debitis nesciunt perspiciatis voluptatem dolores assumenda quis, aliquam
        saepe? Eos porro ipsum eum vero quaerat?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eius ipsam, error ipsa
        molestiae unde debitis nesciunt perspiciatis voluptatem dolores assumenda quis, aliquam
        saepe? Eos porro ipsum eum vero quaerat?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eius ipsam, error ipsa
        molestiae unde debitis nesciunt perspiciatis voluptatem dolores assumenda quis, aliquam
        saepe? Eos porro ipsum eum vero quaerat?
      </p>
    </div>
  );
}
