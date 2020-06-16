export default function ContentIndex() {
  return (
    <>
      <aside>
        <ul>
          <li>Lorem Ipsum Dolor</li>
          <li>Pikalo pikalo pikalo</li>
          <li>Saya Suka susunya hingga tetes terakhir Saya suka coklatnya</li>
          <li>
            Kenapa suka yang begitu?
            <ul>
              <li>Karena ini?</li>
              <li>Karena itu?</li>
              <li>
                Karena ini dan itu?
                <ul>
                  <li>Waw!!</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>dsfdsfsdfd</li>
        </ul>
      </aside>

      <style jsx>{`
        aside {
          font-size: 14px;
          color: #aaa;
          padding: 24px;
          line-height: 1.5;
        }
        li {
          margin: 8px;
        }
        aside > ul {
          padding: 8px 0;
          padding-left: 16px;
          border-left: 1px solid #ccc;
        }
        ul {
          padding-left: 16px;
        }
      `}</style>
    </>
  );
}
