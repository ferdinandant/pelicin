import React, { ReactNode } from 'react';
import { FixedColumnWidthTable, Badge } from '@pelicin/components';

// ================================================================================
// TYPES/CONST
// ================================================================================

type Tag = {
  tag: string;
  type: 'block' | 'inline' | 'other';
  description: ReactNode;
};

type Props = {
  tags: Array<Tag>;
  specialMapping: Record<string, string>;
};

// ================================================================================
// MAIN
// ================================================================================

export default function HTMLTagsIndexTable(props: Props) {
  const { tags, specialMapping = {} } = props;

  return (
    <FixedColumnWidthTable
      tableStyle={{
        fontSize: '0.9em',
      }}
      headers={[
        {
          text: 'Tag',
          key: 'tag',
          formatContent(tag: string) {
            return (
              <>
                <a href={specialMapping[tag] ? `#${specialMapping[tag]}` : `#<${tag}>`}>
                  <code>&lt;{tag}&gt;</code>
                </a>
              </>
            );
          },
          width: 100,
        },
        {
          text: 'Type',
          key: 'type',
          formatContent(type) {
            return type === 'block' ? (
              <Badge color="red">Block</Badge>
            ) : type === 'inline' ? (
              <Badge color="blue">Inline</Badge>
            ) : (
              <Badge color="gray">Other</Badge>
            );
          },
          width: 80,
        },
        {
          text: 'Description',
          key: 'description',
        },
      ]}
      contents={tags}
    />
  );
}
