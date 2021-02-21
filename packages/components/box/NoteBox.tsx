import React, { ReactNode } from 'react';
import classNames from 'classnames';

type Props = {
  type: 'default' | 'info' | 'warning' | 'danger' | 'success';
  children: ReactNode;
};

export default function NoteBox(props: Props) {
  const { type, children } = props;
  return (
    <>
      <div className={classNames(['container', type])}>{children}</div>

      <style jsx>{`
        .container {
          margin-top: var(--spacing-m);
          margin-bottom: var(--spacing-m);
          padding: var(--spacing-s) var(--spacing-m);
          border-radius: var(--border-radius-normal);
          background-color: var(--color-gray-1);
          border-left: var(--spacing-s) solid var(--color-gray-2);
          color: var(--color-gray-4);
        }
        .container.info :global(a) {
          color: var(--color-blue-6);
        }

        /* Box content */
        .container :global(code) {
          background-color: transparent;
        }
        .container :global(p),
        .container :global(ul),
        .container :global(ol) {
          margin-top: var(--spacing-s);
          margin-bottom: var(--spacing-s);
        }
        .container :global(p):first-child,
        .container :global(ul):first-child,
        .container :global(ol):first-child {
          margin-top: 0;
        }
        .container :global(p):last-child,
        .container :global(ul):last-child,
        .container :global(ol):last-child {
          margin-bottom: 0;
        }

        /* Box types */
        .container.info {
          background-color: var(--color-blue-1);
          border-left: var(--spacing-s) solid var(--color-blue-2);
          color: var(--color-blue-4);
        }
        .container.warning {
          background-color: var(--color-yellow-1);
          border-left: var(--spacing-s) solid var(--color-yellow-2);
          color: var(--color-yellow-4);
        }
        .container.danger {
          background-color: var(--color-red-1);
          border-left: var(--spacing-s) solid var(--color-red-2);
          color: var(--color-red-4);
        }
        .container.success {
          background-color: var(--color-green-1);
          border-left: var(--spacing-s) solid var(--color-green-2);
          color: var(--color-green-4);
        }
      `}</style>
    </>
  );
}
