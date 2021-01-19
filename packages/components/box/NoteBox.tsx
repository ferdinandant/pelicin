import React, { ReactNode } from 'react';
import classNames from 'classnames';

type Props = {
  type: 'info';
  children: ReactNode;
};

export default function NoteBox(props: Props) {
  const { type, children } = props;
  return (
    <>
      <div className={classNames(['container', type])}>{children}</div>

      <style jsx>{`
        div {
          margin-top: var(--spacing-m);
          margin-bottom: var(--spacing-m);
          padding: var(--spacing-s) var(--spacing-m);
          border-radius: var(--border-radius-normal);
          background-color: var(--color-gray-1);
          color: var(--color-gray-4);
        }
        .container.info {
          background-color: var(--color-blue-1);
          border-left: var(--spacing-s) solid var(--color-blue-4);
          color: var(--color-blue-4);
        }
        .container.warning {
          background-color: var(--color-yellow-1);
          border-left: var(--spacing-s) solid var(--color-yellow-4);
          color: var(--color-yellow-4);
        }
        .container.danger {
          background-color: var(--color-red-1);
          border-left: var(--spacing-s) solid var(--color-red-4);
          color: var(--color-red-4);
        }
      `}</style>
    </>
  );
}
