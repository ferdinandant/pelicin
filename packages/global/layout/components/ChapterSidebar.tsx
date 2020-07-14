import { useTopicConfig } from 'global/topic';

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
  const { mainColor } = useTopicConfig();

  return (
    <>
      <nav>
        <div className="group">
          <h1>Pesawatku</h1>
          <a href="#" className="active">
            Biar kurakit pesawatku
          </a>
          <a href="#">Rentangkan pelan dua sayapnya</a>
          <a href="#">Nyalakan sumbunya hingga terpercik api menari</a>
          <a href="#">Lepaskan pengaitnya relakan pergi ke arah bulan</a>
        </div>

        <div className="group">
          <h1>Lorem Ipsum Dolor Sit Amet</h1>
          <a href="#">Biar kurakit pesawatku</a>
          <a href="#">Rentangkan pelan dua sayapnya</a>
          <a href="#">Nyalakan sumbunya hingga terpercik api menari</a>
          <a href="#">Lepaskan pengaitnya relakan pergi ke arah bulan</a>
        </div>

        <div className="group">
          <h1>Pesawatku</h1>
          <a href="#">Biar kurakit pesawatku</a>
          <a href="#">Rentangkan pelan dua sayapnya</a>
          <a href="#">Nyalakan sumbunya hingga terpercik api menari</a>
          <a href="#">Lepaskan pengaitnya relakan pergi ke arah bulan</a>
        </div>

        <div className="group">
          <h1>Pesawatku</h1>
          <a href="#">Biar kurakit pesawatku</a>
          <a href="#">Rentangkan pelan dua sayapnya</a>
          <a href="#">Nyalakan sumbunya hingga terpercik api menari</a>
          <a href="#">Lepaskan pengaitnya relakan pergi ke arah bulan</a>
        </div>

        <div className="group">
          <h1>Pesawatku</h1>
          <a href="#">Biar kurakit pesawatku</a>
          <a href="#">Rentangkan pelan dua sayapnya</a>
          <a href="#">Nyalakan sumbunya hingga terpercik api menari</a>
          <a href="#">Lepaskan pengaitnya relakan pergi ke arah bulan</a>
        </div>
      </nav>

      <style jsx>{`
        nav {
          padding: 24px;
          line-height: 1.4;
        }
        .group {
          margin-top: 24px;
        }
        .group:first-child {
          margin-top: 0;
        }

        h1 {
          font-size: 24px;
          line-height: 1.2;
          margin-bottom: 12px;
        }
        a {
          display: block;
          position: relative;
          font-size: 15px;
          text-decoration: none;
          margin: 8px 0;
          margin-left: 18px;
          color: #888;
        }

        a.active {
          font-weight: bold;
        }
        a.active,
        a:hover {
          color: ${mainColor};
        }
        a.active::before,
        a:hover::before {
          content: '';
          position: absolute;
          height: 100%;
          left: -16px;
          border-left: 8px solid ${mainColor};
        }
        a.active::before,
        a.active:hover::before {
          opacity: 0.8;
        }
        a:hover::before {
          opacity: 0.4;
        }
      `}</style>
    </>
  );
}
