import React, { ReactNode } from 'react';

// ================================================================================
// TYPES/CONST
// ================================================================================

type Header = {
  key: string;
  text: string | ReactNode;
  formatContent?: (content: string | ReactNode) => string | ReactNode;
  width?: number;
};

type Props = {
  headers: Array<Header>;
  contents: Array<Record<string, string | ReactNode>>;
};

// ================================================================================
// MAIN
// ================================================================================

export default function FixedColumnWidthTable(props: Props) {
  const { headers, contents } = props;
  const headerKeys = headers.map((header) => header.key);
  const headerKeyToConfig: Record<string, Omit<Header, 'key'>> = headers.reduce((curr, header) => {
    const { key, ...otherFields } = header;
    return Object.assign(curr, { [key]: otherFields });
  }, {});

  return (
    <table>
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header.key} style={{ width: header.width }}>
              {header.text}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {contents.map((rowData, rowIndex) => (
          <tr key={rowIndex}>
            {headerKeys.map((fieldName) => {
              const content = rowData[fieldName];
              const { width, formatContent } = headerKeyToConfig[fieldName];
              return (
                <td key={fieldName} style={{ width }}>
                  {formatContent ? formatContent(content) : content}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
