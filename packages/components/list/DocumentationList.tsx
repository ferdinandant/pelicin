import React, { ReactNode } from 'react';
import { Badge, BadgeColor } from '@pelicin/components';

// ================================================================================
// TYPES/CONST
// ================================================================================

type Item =
  | {
      name: string;
      description: ReactNode;
      subitems: Array<Item>;
    }
  | {
      nameSpecial: ReactNode;
      description: ReactNode;
      subitems: Array<Item>;
    };

type Props = {
  label: ReactNode;
  labelColor?: BadgeColor;
  items: Array<Item>;
};

// ================================================================================
// MAIN
// ================================================================================

export default function DocumentationList(props: Props) {
  const { label, labelColor = 'blue', items } = props;

  return (
    <>
      {label && (
        <p>
          <Badge color={labelColor}>{label}</Badge>
        </p>
      )}
      {renderItems(items)}
    </>
  );
}

function renderItems(items: Array<Item>, level = 0) {
  return (
    <ul>
      {items.map((item, index) => {
        const { description, subitems } = item;
        const name = 'name' in item ? item.name : null;
        const nameSpecial = 'nameSpecial' in item ? item.nameSpecial : null;
        const renderedName = nameSpecial || <code>{name}</code>;
        const renderedDescription =
          level === 0 ? (
            description
          ) : (
            <>
              {' '}
              <i>({description})</i>
            </>
          );
        const renderedSubitems = subitems && renderItems(subitems, level + 1);
        const separator = level === 0 ? ' — ' : null;

        return (
          <li key={index}>
            {level === 0 ? <strong>{renderedName}</strong> : renderedName}
            {description && separator}
            {renderedDescription}
            {renderedSubitems}
          </li>
        );
      })}
    </ul>
  );
}
