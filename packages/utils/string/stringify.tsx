// ================================================================================
// TYPES/CONST
// ================================================================================

type CommonLiteral = undefined | null | number | string | boolean;

const MAX_DEPTH = 5;
const MAX_INLINE_OBJECT_PROP_COUNT = 5;

// ================================================================================
// MAIN
// ================================================================================

export default function stringify(obj: any) {
  try {
    if (checkIsLiteral(obj)) {
      return String(obj);
    }
    if (obj instanceof Error) {
      return stringifyError(obj);
    }
    return stringifyAnything(obj);
  } catch (err) {
    // eslint-disable-next-line
    console.error(err);
    return 'Stringification error: ' + err.message;
  }
}

// ================================================================================
// STRINGIFIERS
// ================================================================================

function stringifyError(obj: Error): string {
  const { message, stack } = obj;
  const stackLines = stack.split('\n');
  // Only consider the top lines that end with 'eval:<number>:<number>'
  // Lines would be like: 'printHello@<file> line 11 > eval line 89 > Function line 3 > eval:4:9'
  const reducedPrettiedLines = [];
  const evalSuffixRegex = /(.*?)@.*(eval:\d+:\d+)$/;
  for (const line of stackLines) {
    const match = line.match(evalSuffixRegex);
    if (match) {
      const [_, functionName, location] = match;
      const prettiedLine = `  at ${functionName || '<anonymous>'} (${location})`;
      reducedPrettiedLines.push(prettiedLine);
    } else {
      break;
    }
  }
  return `Error: ${message}\n${reducedPrettiedLines.join('\n')}`;
}

function stringifyLiteral(obj: CommonLiteral): string {
  if (typeof obj === 'string') {
    const escapedString = obj.replace(/'/g, "'").replace(/\n/, '\\n');
    return `'${escapedString}'`;
  }
  return String(obj);
}

function stringifyAnything(obj: any, depth = 0, references = new Set<any>()): string {
  // `obj` is a literal type
  if (checkIsLiteral(obj)) {
    return stringifyLiteral(obj);
  }
  // Mark circular reference
  if (references.has(obj)) {
    return `<Circular>`;
  }
  // Check for max depth / non-common object
  const type = getTypeOfObj(obj);
  if (depth >= MAX_DEPTH) {
    return `<${type}>`;
  }
  if (type === 'Array') {
    return stringifyArray(obj, depth, references);
  } else if (type === 'Object') {
    return stringifyObject(obj, depth, references);
  }
  return `<${type}: ${stringifyObject(obj, depth, references)}>`;
}

function stringifyArray(arr: any[], depth = 0, references = new Set<any>()) {
  references.add(arr);
  if (arr.length === 0) {
    return '[]';
  }
  if (depth >= MAX_DEPTH) {
    return `<Array>`;
  }
  // Serialize all items
  let lastNonEmptyIdx = -1;
  const resultBlocks = [];
  arr.forEach((item, idx) => {
    // check if there is preceding empty slots
    if (idx !== lastNonEmptyIdx + 1) {
      const numberOfEmptyItems = idx - lastNonEmptyIdx - 1;
      resultBlocks.push(`<${numberOfEmptyItems} empty item(s)>`);
    }
    lastNonEmptyIdx = idx;
    if (checkIsLiteral(item)) {
      const itemStr = stringifyLiteral(item);
      resultBlocks.push(itemStr);
      return;
    }
    const type = getTypeOfObj(item);
    if (type === 'Array') {
      const itemStr = stringifyArray(item, depth + 1, references);
      resultBlocks.push(itemStr);
      return;
    }
    if (type === 'Object') {
      const propertyNames = Object.getOwnPropertyNames(item);
      const shouldDisplayInOneLine = checkShouldStringifyObjectInOneLine(item, propertyNames);
      if (shouldDisplayInOneLine) {
        const propertyValueBlocks = propertyNames.map((key) => {
          const value = item[key];
          return `${escapeKeyName(key)}: ${stringifyAnything(value, depth + 1)}`;
        });
        const itemStr = `{ ${propertyValueBlocks.join(', ')} }`;
        resultBlocks.push(itemStr);
        return;
      }
      resultBlocks.push('<Object>');
      return;
    } else {
      resultBlocks.push(`<${type}>`);
    }
  });
  // Check for leftover empty slots at the end of array
  if (lastNonEmptyIdx !== arr.length - 1) {
    const numberOfEmptyItems = arr.length - lastNonEmptyIdx - 1;
    resultBlocks.push(`<${numberOfEmptyItems} empty item(s)>`);
  }
  // Return stringification result
  return `[ ${resultBlocks.join(', ')} ]`;
}

function stringifyObject(obj: any, depth = 0, references = new Set<any>()) {
  references.add(obj);
  const propertyNames = Object.getOwnPropertyNames(obj);
  if (propertyNames.length === 0) {
    return '{}';
  }
  const shouldDisplayInOneLine = checkShouldStringifyObjectInOneLine(obj, propertyNames);
  const propertyValueBlocks = propertyNames.map((key) => {
    const value = obj[key];
    return `${escapeKeyName(key)}: ${stringifyAnything(value, depth + 1, references)}`;
  });
  // Stringify object in one line
  if (shouldDisplayInOneLine) {
    return `{ ${propertyValueBlocks.join(', ')} }`;
  }
  // Stringify object in multiple line
  return [
    '{',
    propertyValueBlocks.map((line) => '  '.repeat(depth + 1) + line + ',').join('\n'),
    '  '.repeat(depth) + '}',
  ].join('\n');
}

// ================================================================================
// HELPERS
// ================================================================================

function escapeKeyName(keyName: string) {
  if (keyName.match(/^[\w]*$/)) {
    return keyName;
  }
  return `'${keyName}'`;
}

function getTypeOfObj(obj: any) {
  const maybeName = obj.constructor && obj.constructor.name;
  return maybeName || 'Object';
}

function checkIsLiteral(obj: any) {
  return obj === null || (typeof obj !== 'object' && typeof obj !== 'function');
}

function checkShouldStringifyObjectInOneLine(obj: any, propertyNames: string[]) {
  if (propertyNames.length > MAX_INLINE_OBJECT_PROP_COUNT) {
    return false;
  }
  const isAllValueStringifiableInOneLine = propertyNames.reduce((prev, currKey) => {
    if (!prev) {
      return false;
    }
    const currValue = obj[currKey];
    // Test for `isCurrValueStringifiableInOneLine`
    const isCurrValueLiteral = checkIsLiteral(currValue);
    const isCurrValueStringifiableInOneLine = isCurrValueLiteral;
    // Return for next loop
    return prev && isCurrValueStringifiableInOneLine;
  }, true);
  return isAllValueStringifiableInOneLine;
}
