import React, { ReactNode } from 'react';
import classNames from 'classnames';

type Props = {
  type: 'default' | 'info' | 'warning' | 'danger' | 'success';
  title?: ReactNode;
  children: ReactNode;
};

export default function NoteBox(props: Props) {
  const { type, children, title } = props;
  return (
    <>
      <div className={classNames(['container', type])}>
        {title && <p className="title">{title}</p>}
        {children}
      </div>

      <style jsx>{`
        .container {
          margin-top: var(--spacing-m);
          margin-bottom: var(--spacing-m);
          padding: var(--spacing-ms) var(--spacing-m);
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
          padding: 0;
        }
        .container :global(code)::before,
        .container :global(code)::after {
          content: '\`';
          opacity: 50%;
        }
        .container :global(p),
        .container :global(ul),
        .container :global(ol) {
          margin-top: var(--spacing-ms);
          margin-bottom: var(--spacing-ms);
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
        .container .title {
          font-weight: 700;
          padding-bottom: var(--spacing-s);
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
        .container.info .title {
          border-bottom: 1px dashed var(--color-blue-2);
        }
        .container.warning .title {
          border-bottom: 1px dashed var(--color-yellow-2);
        }
        .container.danger .title {
          border-bottom: 1px dashed var(--color-red-2);
        }
        .container.success .title {
          border-bottom: 1px dashed var(--color-green-2);
        }
      `}</style>
    </>
  );
}
