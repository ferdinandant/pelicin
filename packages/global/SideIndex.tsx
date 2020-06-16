export default function ContentIndex() {
  return (
    <>
      <div className="outer">
        <div className="inner">
          <ul>
            <li>Lorem Ipsum Dolor</li>
            <li>Pikalo pikalo pikalo</li>
            <li>dsfdsfsdfd</li>
            <li>dsfdsfsdfd</li>
            <li>dsfdsfsdfd</li>
          </ul>
        </div>
      </div>

      <style jsx>{`
        div.outer {
          font-size: 14px;
          color: #aaa;
          padding: 24px;
        }
        div.inner {
          padding: 8px 0;
          padding-left: 16px;
          border-left: 1px solid #ccc;
        }
      `}</style>
    </>
  );
}
