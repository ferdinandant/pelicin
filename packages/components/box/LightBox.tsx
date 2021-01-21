import React, { ReactNode } from 'react';
import classNames from 'classnames';

type Props = {
  color: 'gray' | 'blue' | 'red';
  label?: ReactNode;
  children: ReactNode;
};

export default function LightBox(props: Props) {
  const { children, color = 'gray', label } = props;
  return (
    <>
      <div className={classNames(['container', color])}>
        {label && <div className="label">{label}</div>}
        <div className="content">{children}</div>
      </div>

      <style jsx>{`
        .container {
          margin-top: var(--spacing-m);
          margin-bottom: var(--spacing-m);
          border-radius: var(--border-radius-normal);
          position: relative;
        }
        .content {
          padding: var(--spacing-s) var(--spacing-m);
        }
        .label {
          font-size: var(--font-size-small);
          border-bottom-right-radius: var(--border-radius-normal);
          padding: var(--spacing-xs) var(--spacing-m);
          display: inline-block;
        }

        .container.gray {
          border: 2px solid var(--color-gray-2);
        }
        .container.gray .label {
          background-color: var(--color-gray-2);
        }
        .container.blue {
          border: 2px solid var(--color-blue-2);
        }
        .container.blue .label {
          background-color: var(--color-blue-2);
        }
        .container.red {
          border: 2px solid var(--color-red-2);
        }
        .container.red .label {
          background-color: var(--color-red-2);
        }s
      `}</style>
    </>
  );
}
